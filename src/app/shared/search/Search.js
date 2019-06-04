import React from 'react'

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

const Search = ({ handleSearch }) => (
  <Form inline>
    <FormControl name="search" type="text" placeholder="Search Cards" className="mr-sm-2" onChange={handleSearch}/>
  </Form>
)

export default Search
