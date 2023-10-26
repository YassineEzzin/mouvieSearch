import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Movie({e}) {
  return (
    <div>
      <Card style={{ width: '25rem', height:'30rem' , backgroundColor:"red" }}>
      <Card.Img variant="top" src={e.imgUrl} />
      <Card.Body>
        <Card.Title>  <h3> {e.name} </h3> </Card.Title>
        <Card.Text>
          <h2> date: {e.date} </h2>
          <h2>rating: {e.rate} </h2>
        </Card.Text>
        <Button variant="primary">Click To see more</Button>
      </Card.Body>
    </Card>
  
    </div>
  )
}

export default Movie
