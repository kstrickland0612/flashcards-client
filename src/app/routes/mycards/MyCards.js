import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './../../../apiConfig'
import messages from '../../messages'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faBolt } from '@fortawesome/free-solid-svg-icons'

import './MyCards.scss'

class MyCards extends Component {
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

  deleteCard = (id) => {
    const { alert, user } = this.props
    axios({
      method: 'DELETE',
      url: `${apiUrl}/cards/${id}`,
      headers: {
        Authorization: `Token token=${user.token}`
      }
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
        <div className="row d-flex justify-content-center">
          {cards.filter(card => card.user.id === user.id).map(card => (
            <div key={card.id} className="flip-card col-6 col-md-12 col-sm-12">
              <Card className="flip-card-inner text-center mt-4" bg="light">
                <Card.Header className="hide-text"><FontAwesomeIcon icon={faTag} /> {card.category}</Card.Header>
                <Card.Body >
                  <h2 className="flip-card-front">
                    <Card.Img className="photo" variant="top" src={card.image} />
                    <Card.Text className="front-text">
                      {card.front}
                    </Card.Text>
                  </h2>
                </Card.Body>
                <Card.Footer className="hide-text text-muted">
                  <p><FontAwesomeIcon icon={faBolt} /> Created by: {card.user.email.split('@')[0]}</p>
                </Card.Footer>
                <div className="flip-card-back">
                  <h3><Card.Text>
                    {card.back}
                  </Card.Text></h3>
                </div>
              </Card>
              <div className="row d-flex buttons">
                <Link to={'/cards/' + card.id + '/edit'}>
                  <Button className="edit" variant="success"> Edit</Button>
                </Link>
                <Button variant="secondary" onClick={() => this.deleteCard(card.id)}> Delete</Button>
              </div>
            </div>))}
        </div>
      </Fragment>
    )
  }
}

export default MyCards
