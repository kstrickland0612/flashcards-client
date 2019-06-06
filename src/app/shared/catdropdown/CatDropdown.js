import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from './../../../apiConfig'
import { withRouter } from 'react-router-dom'
import messages from '../../messages'

import NavDropdown from 'react-bootstrap/NavDropdown'

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
      <NavDropdown alignRight title="Filter by Tag" id="basic-nav-dropdown">
        <NavDropdown.Item href="#/">All Cards</NavDropdown.Item>
        {uniqueCats.map((category, i) => (
          <NavDropdown.Item key={i} href={'#/cards/' + category}>
            {category}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    )
  }
}

export default withRouter(CatDropdown)
