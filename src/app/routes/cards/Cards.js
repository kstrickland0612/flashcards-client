import React, { Component, Fragment } from 'react'
import axios from 'axios'
import apiUrl from './../../../apiConfig'

import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

import './Cards.scss'

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
    const { search } = this.props

    return (
      <Fragment>
        {user && !search && cards.map(card => (
          <div key={card.id} className="flip-card">
            <Card className="flip-card-inner text-center mt-4 " bg="light">
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
        {user && search !== '' && cards.filter(card => card.front.toLowerCase().includes(search.search.toLowerCase())).map(card => (
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
        {!user && !search && cards.map(card => (
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
        {!user && search !== '' && cards.filter(card => card.front.toLowerCase().includes(search.search.toLowerCase())).map(card => (
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

export default Cards
