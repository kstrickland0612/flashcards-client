import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from './../../../apiConfig'
import messages from '../../messages'

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
    const { alert } = this.props
    axios(`${apiUrl}/cards`)
      .then(res => {
        this.setState({ cards: res.data.cards })
      })
      .catch(() => (alert(messages.dbConnectFail, 'danger')))
  }

  handleInput = () => {
    if (this.state.inputSelected === 'other') {
      return this.setState({ inputHidden: false })
    } else {
      return this.setState({ inputHidden: true })
    }
  }

  handleSelectChange = event => {
    return this.setState({ inputSelected: event.target.value }, this.handleInput)
  }

  handleAllTheChanges = event => {
    this.props.handleChange(event)
    this.handleSelectChange(event)
  }

  render () {
    const { cards, inputHidden } = this.state

    const cardCats = cards.map(card => (card.category))
    const uniqueCats = Array.from(new Set(cardCats))

    return (
      <Form.Group controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control as="select" onChange={this.handleAllTheChanges}
          required
          type="text"
          placeholder="Category"
          name="category">
          <option className="select-option" value=''>Select a Category...</option>
          {uniqueCats.map((category, i) => (
            <option key={i} value={category}>{category}</option>
          ))}
          <option value="other">Other</option>
        </Form.Control>
        <Form.Control className={inputHidden ? 'hidden' : 'shown'} onChange={this.props.handleChange}type="text" name="category" placeholder="Enter Category Here" />
      </Form.Group>
    )
  }
}

export default CardFormOptions
