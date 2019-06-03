import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CardForm = ({
  card, cancelPath, handleSubmit, handleChange }) => (
  <Form onSubmit={handleSubmit} className="card-form">

    <Form.Group controlId="category">
      <Form.Label>Category</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Category"
        name="category"
        value={card.category}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="front">
      <Form.Label>Front</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Front of card (ex: question or word to define)"
        name="front"
        value={card.front}
        onChange={handleChange}
      />
    </Form.Group>

    <Form.Group controlId="back">
      <Form.Label>Back</Form.Label>
      <Form.Control
        required
        type="text"
        placeholder="Back of card (ex: answer or definition)"
        name="back"
        value={card.back}
        onChange={handleChange}
      />
    </Form.Group>

    <Button type="submit">Create Card</Button>

    <Link to={cancelPath}>
      <Button variant="secondary">Cancel</Button>
    </Link>

  </Form>
)

export default CardForm
