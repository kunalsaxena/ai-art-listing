import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Artwork = (props) => {

  return (
    <Card style={{width: '18rem'}} className='artwork'>
        <Card.Img variant='top' src={props.imgSrc} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.descr}
            </Card.Text>
            <Button variant="primary">View Details</Button>
        </Card.Body>
    </Card>
  )
}

export default Artwork