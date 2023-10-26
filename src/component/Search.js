import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function Search({setSearch }) {
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Movie name"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e)=> setSearch(e.target.value) }
        />
      </InputGroup>
    </div>
  )
}

export default Search
