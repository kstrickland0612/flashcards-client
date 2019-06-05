import React, { Component, Fragment } from 'react'
import axios from 'axios'
import apiUrl from './../../../apiConfig'

import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

import '../cards/Cards.scss'

class CardsByCat extends Component {
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

    return (
      <Fragment>
        {cards.filter(card => card.category === this.props.match.params.category).map(card => (
          <div key={card.id} className="flip-card">
            <Card className="flip-card-inner text-center mt-4" bg="light">
              <Card.Header className="hide-text"><FontAwesomeIcon icon={faTag} /> {card.category}</Card.Header>
              <Card.Body >
                <Card.Text>
                  <h1 className="flip-card-front">{card.front}</h1>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="hide-text text-muted">Created by: {card.user.email}</Card.Footer>
              <p className="flip-card-back">{card.back}</p>
            </Card>
          </div>))}
      </Fragment>
    )
  }
}

export default CardsByCat
