import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from './../../../apiConfig'
import { Link, withRouter } from 'react-router-dom'

import NavDropdown from 'react-bootstrap/NavDropdown'

class CatDropdown extends Component {
  constructor () {
    super()

    this.state = {
      cards: []
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/cards`)
      .then(res => {
        this.setState({ cards: res.data.cards })
      })
      .catch(console.error)
  }

  render () {
    const { cards } = this.state

    const cardCats = cards.map(card => (card.category))
    const uniqueCats = Array.from(new Set(cardCats))

    return (
      <NavDropdown alignRight title="Filter by Tag" id="basic-nav-dropdown">
        {uniqueCats.map(category => (
          <NavDropdown.Item key={category}>
            <Link to={'/cards/' + category} >{category}</Link>
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    )
  }
}

export default withRouter(CatDropdown)
