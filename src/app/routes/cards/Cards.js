import React, { Component, Fragment } from 'react'
import axios from 'axios'
import apiUrl from './../../../apiConfig'

import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
// import { faLaughBeam, faSadCry } from '@fortawesome/free-regular-svg-icons'

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

  nailedIt = () => {
    this.setState({ color: 'green' })
  }

  render () {
    const { cards } = this.state
    const { user } = this.props
    const { search } = this.props

    return (
      <Fragment>
        <div className="row d-flex justify-content-center">
          {user && !search && cards.map(card => (
            <div key={card.id} className="flip-card col-6 col-md-12 col-sm-12">
              <Card className="flip-card-inner text-center mt-4 " bg="light">
                <Card.Header className="hide-text"><FontAwesomeIcon icon={faTag} /> {card.category}</Card.Header>
                <Card.Body >
                  <h1 className="flip-card-front"><Card.Text>
                    {card.front}</Card.Text></h1>
                </Card.Body>
                <Card.Footer className="hide-text text-muted">Created by: {card.user.email}</Card.Footer>
                <div className="flip-card-back">
                  <h3><Card.Text>
                    {card.back}
                  </Card.Text></h3>
                </div>
              </Card>
            </div>))}
          {user && search !== '' && cards.filter(card => card.front.toLowerCase().includes(search.search.toLowerCase())).map(card => (
            <div key={card.id} className="flip-card col-6 col-md-12 col-sm-12">
              <Card className="flip-card-inner text-center mt-4" bg="light">
                <Card.Header className="hide-text"><FontAwesomeIcon icon={faTag} /> {card.category}</Card.Header>
                <Card.Body >
                  <h1 className="flip-card-front"><Card.Text>
                    {card.front}</Card.Text></h1>
                </Card.Body>
                <Card.Footer className="hide-text text-muted">Created by: {card.user.email}</Card.Footer>
                <div className="flip-card-back">
                  <h3><Card.Text>
                    {card.back}
                  </Card.Text></h3>
                </div>
              </Card>
            </div>))}
          {!user && !search && cards.map(card => (
            <div key={card.id} className="flip-card col-6 col-md-12 col-sm-12">
              <Card className="flip-card-inner text-center mt-4" bg="light">
                <Card.Header className="hide-text"><FontAwesomeIcon icon={faTag} /> {card.category}</Card.Header>
                <Card.Body >
                  <h1 className="flip-card-front"><Card.Text>
                    {card.front}</Card.Text></h1>
                </Card.Body>
                <Card.Footer className="hide-text text-muted">Created by: {card.user.email}</Card.Footer>
                <div className="flip-card-back">
                  <h3><Card.Text>
                    {card.back}
                  </Card.Text></h3>
                </div>
              </Card>
            </div>))}
          {!user && search !== '' && cards.filter(card => card.front.toLowerCase().includes(search.search.toLowerCase())).map(card => (
            <div key={card.id} className="flip-card col-6 col-md-12 col-sm-12">
              <Card className="flip-card-inner text-center mt-4" bg="light">
                <Card.Header className="hide-text"><FontAwesomeIcon icon={faTag} /> {card.category}</Card.Header>
                <Card.Body >
                  <h1 className="flip-card-front"><Card.Text>
                    {card.front}</Card.Text></h1>
                </Card.Body>
                <Card.Footer className="hide-text text-muted">Created by: {card.user.email}</Card.Footer>
                <div className="flip-card-back">
                  <h3><Card.Text>
                    {card.back}
                  </Card.Text></h3>
                </div>
              </Card>
            </div>))}
        </div>
      </Fragment>
    )
  }
}

export default Cards
