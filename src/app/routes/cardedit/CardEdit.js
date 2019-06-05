import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

import axios from 'axios'
import apiUrl from './../../../apiConfig'
import messages from '../../messages'

import CardForm from '../../shared/cardform/CardForm'

class CardEdit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      card: {
        category: '',
        image: '',
        front: '',
        back: ''
        // user_id: this.props.user.id
      },
      updated: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/cards/${this.props.match.params.id}`)
      .then(res => (this.setState({ card: res.data.card })))
  }

  handleSubmit = event => {
    const { alert } = this.props

    event.preventDefault()

    axios({
      method: 'PATCH',
      url: `${apiUrl}/cards/${this.props.match.params.id}`,
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
      .then(res => this.setState({ updated: true }))
      .then(() => alert(messages.cardUpdateSuccess, 'success'))
      .catch(() => alert(messages.fail, 'danger'))
  }

  handleChange = event => {
    const updatedField = {
      [event.target.name]: event.target.value
    }

    const editedCard = Object.assign(this.state.card, updatedField)
    this.setState({ card: editedCard })
    console.log(this.state)
  }

  render () {
    const { card, updated } = this.state

    if (updated) {
      return <Redirect to={'/my-cards'} />
    }

    return (
      <Fragment>
        <h1>Edit your Card</h1>
        <CardForm
          card={card}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          cancelPath='/my-cards'
        />
      </Fragment>
    )
  }
}

export default CardEdit
