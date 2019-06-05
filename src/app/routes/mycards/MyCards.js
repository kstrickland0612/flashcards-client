import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './../../../apiConfig'
import messages from '../../messages'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

import './MyCards.scss'

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

  deleteCard = (id) => {
    const { alert } = this.props
    axios({
      method: 'DELETE',
      url: `${apiUrl}/cards/${id}`
    })
      .then(() => alert(messages.cardDeleteSuccess, 'success'))
      .then(() => this.componentDidMount())
      .catch(() => alert(messages.fail, 'danger'))
  }

  render () {
    const { cards } = this.state
    const { user } = this.props

    return (
      <Fragment>
        {cards.filter(card => card.user.id === user.id).map(card => (
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
            <Link to={'/cards/' + card.id + '/edit'}>
              <Button variant="success"> Edit</Button>
            </Link>
            <Button variant="danger" onClick={() => this.deleteCard(card.id)}> Delete</Button>
          </div>))}
      </Fragment>
    )
  }
}

export default MyCards
