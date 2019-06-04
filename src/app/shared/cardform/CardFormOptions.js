import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from './../../../apiConfig'

import Form from 'react-bootstrap/Form'

import './CardFormOptions.scss'

class CardFormOptions extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cards: [],
      inputHidden: true,
      inputSelected: ''
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/cards`)
      .then(res => {
        this.setState({ cards: res.data.cards })
      })
      .catch(console.error)
  }

  handleInput = () => {
    console.log('here is the state:', this.state)
    if (this.state.inputSelected === 'other') {
      return this.setState({ inputHidden: false })
    } else {
      return this.setState({ inputHidden: true })
    }
  }

  handleSelectChange = event => {
    console.log('this is the event:', event.target.value)
    this.setState({ inputSelected: event.target.value }, this.handleInput)
  }

  render () {
    const { cards, inputHidden } = this.state

    return (
      <Form.Group controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control as="select" onChange={this.handleSelectChange}
          required
          type="text"
          placeholder="Category"
          name="category">
          <option value={null}>Select a Category...</option>
          {cards.map(card => (
            <option key={card.id} value={card.category}>{card.category}</option>
          ))}
          <option value="other">Other</option>
        </Form.Control>
        <Form.Control className={inputHidden ? 'hidden' : 'shown'} onChange={this.props.handleChange}type="text" name="category" placeholder="Enter Category Here" />
      </Form.Group>
    )
  }
}

export default CardFormOptions
