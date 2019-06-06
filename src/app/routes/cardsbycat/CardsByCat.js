import React, { Component, Fragment } from 'react'
import axios from 'axios'
import apiUrl from './../../../apiConfig'
import messages from '../../messages'

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
    const { alert } = this.props
    axios(`${apiUrl}/cards`)
      .then(res => {
        this.setState({ cards: res.data.cards })
      })
      .catch(() => (alert(messages.dbConnectFail, 'danger')))
  }

  render () {
    const { cards } = this.state

    return (
      <Fragment>
        <div className="row d-flex justify-content-center">
          {cards.filter(card => card.category === this.props.match.params.category).map(card => (
            <div key={card.id} className="flip-card col-6 col-md-12 col-sm-12">
              <Card className="flip-card-inner text-center mt-4" bg="light">
                <Card.Header className="hide-text"><FontAwesomeIcon icon={faTag} /> {card.category}</Card.Header>
                <Card.Body >
                  <h2 className="flip-card-front">
                    <Card.Img variant="top" src={card.image} />
                    <Card.Text>
                      {card.front}
                    </Card.Text>
                  </h2>
                </Card.Body>
                <Card.Footer className="hide-text text-muted">Created by: {card.user.email.split('@')[0]}</Card.Footer>
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

export default CardsByCat
