import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from './../../../apiConfig'
import { withRouter } from 'react-router-dom'
import messages from '../../messages'

import NavDropdown from 'react-bootstrap/NavDropdown'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faBolt } from '@fortawesome/free-solid-svg-icons'

class CatDropdown extends Component {
  constructor () {
    super()

    this.state = {
      cards: []
    }
  }

  componentDidMount () {
    const { alert } = this.props
    axios(`${apiUrl}/cards`)
      .then(res => {
        this.setState({ cards: res.data.cards })
      })
      .catch(() => (alert(messages.dbConnectFail, 'danger')))
  }

  render () {
    const { cards } = this.state

    const cardCats = cards.map(card => (card.category))
    const uniqueCats = Array.from(new Set(cardCats))

    return (
      <NavDropdown title="Filter by Tag" id="basic-nav-dropdown">
        <NavDropdown.Item href="#/"><FontAwesomeIcon icon={faBolt} /> All Cards</NavDropdown.Item>
        {uniqueCats.map((category, i) => (
          <NavDropdown.Item key={i} href={'#/cards/' + category}>
            <FontAwesomeIcon icon={faTag} /> {category}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    )
  }
}

export default withRouter(CatDropdown)
