import React, { Component, Fragment } from 'react'

import axios from 'axios'
import apiUrl from './../../../apiConfig'

import CardForm from '../../shared/cardform/CardForm'

class CardCreate extends Component {
  constructor () {
    super()

    this.state = {
      card: {
        category: '',
        front: '',
        back: ''
        // user_id: this.props.user.id
      },
      createdCardId: null
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    console.log(this.props.user)
    console.log('the state:', this.state)
    const response = await
    axios({
      method: 'POST',
      url: `${apiUrl}/cards`,
      data: {
        'card': {
          'category': this.state.card.category,
          'front': this.state.card.front,
          'back': this.state.card.back,
          'user_id': this.props.user.id
        }
      }
    })
    this.setState({ createdCardId: response.data.card.id })
  }

  handleChange = event => {
    const updatedField = {
      [event.target.name]: event.target.value
    }

    const editedCard = Object.assign(this.state.card, updatedField)
    this.setState({ card: editedCard })
  }

  render () {
    const { card } = this.state

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
