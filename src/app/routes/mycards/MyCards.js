import React, { Component, Fragment } from 'react'
import axios from 'axios'
import apiUrl from './../../../apiConfig'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class MyCards extends Component {
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
        {cards.filter(card => card.user.id === user.id).map(card => (
          <Card key={card.id} className="text-center mt-4" bg="light">
            <Card.Header>{card.category}</Card.Header>
            <Card.Body>
              <Card.Text>
                <h1>{card.front}</h1>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">Created by: {card.user.email}</Card.Footer>
            <Button variant="success"> Edit</Button>
            <Button variant="danger"> Delete</Button>
            <br />
          </Card>))}
      </Fragment>
    )
  }
}

export default MyCards
