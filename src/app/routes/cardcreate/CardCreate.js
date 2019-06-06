import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

import axios from 'axios'
import apiUrl from './../../../apiConfig'
import messages from '../../messages'

import CardForm from '../../shared/cardform/CardForm'

class CardCreate extends Component {
  constructor () {
    super()

    this.state = {
      card: {
        category: '',
        image: '',
        front: '',
        back: ''
        // user_id: this.props.user.id
      },
      createdCardId: null
    }
  }

  handleSubmit = event => {
    const { alert, user } = this.props

    event.preventDefault()

    axios({
      method: 'POST',
      url: `${apiUrl}/cards`,
      headers: {
        Authorization: `Token token=${user.token}`
      },
      data: {
        'card': {
          'category': this.state.card.category,
          'image': this.state.card.image,
          'front': this.state.card.front,
          'back': this.state.card.back,
          'user_id': this.props.user.id
        }
      }
    })
      .then(res => this.setState({ createdCardId: res.data.card.id }))
      .then(() => alert(messages.cardCreateSuccess, 'success'))
      .catch(() => alert(messages.fail, 'danger'))
  }

  handleChange = event => {
    const updatedField = {
      [event.target.name]: event.target.value
    }

    const editedCard = Object.assign(this.state.card, updatedField)
    this.setState({ card: editedCard })
  }

  render () {
    const { card, createdCardId } = this.state

    if (createdCardId) {
      return <Redirect to={'/'} />
    }

    return (
      <Fragment>
        <h1>Build a Card</h1>
        <CardForm
          card={card}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          cancelPath=''
        />
      </Fragment>
    )
  }
}

export default CardCreate
