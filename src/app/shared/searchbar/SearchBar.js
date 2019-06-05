import React from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

const SearchBar = ({ handleSearch }) => (
  <Form inline>
    <FormControl name="search" type="text" placeholder="Search Cards by Content" className="mr-sm-2" onChange={handleSearch}/>
  </Form>
)

export default SearchBar
