import React, { Component, Fragment } from 'react'
import axios from 'axios'
import apiUrl from './../../../apiConfig'

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
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
        <CardDeck className="col-12">
          {user && cards.map(card => (
            <Card key={card.id} className="col-6" bg="light" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>
                  <h1>{card.category}</h1>
                </Card.Title>
              </Card.Body>
              <Button variant="primary"> Add to Deck</Button>
            </Card>))}
          {!user && cards.map(card => (
            <Card key={card.id} className="col-6" bg="light" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>
                  <h1>{card.category}</h1>
                </Card.Title>
              </Card.Body>
            </Card>))}
        </CardDeck>
      </Fragment>
    )
  }
}

export default Cards
