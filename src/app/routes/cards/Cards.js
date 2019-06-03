import React, { Component, Fragment } from 'react'
import axios from 'axios'
import apiUrl from './../../../apiConfig'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Cards extends Component {
  constructor (props) {
    super(props)

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
    const { user } = this.props

    return (
      <Fragment>
        {user && cards.map(card => (
          <Card key={card.id} className="text-center" bg="light">
            <Card.Header>{card.category}</Card.Header>
            <Card.Body>
              <Card.Text>
                <h1>{card.front}</h1>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">Created by: {card.user.email}</Card.Footer>
            <Button variant="primary"> Add to Deck</Button>
            <br />
          </Card>))}
        {!user && cards.map(card => (
          <Card key={card.id} className="text-center" bg="light">
            <Card.Header>{card.category}</Card.Header>
            <Card.Body>
              <Card.Text>
                <h1>{card.front}</h1>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">Created by: {card.user.email}</Card.Footer>
            <Button variant="secondary" disabled> Sign in to Add to Deck</Button>
            <br />
          </Card>))}
      </Fragment>
    )
  }
}

export default Cards
