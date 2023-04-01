import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Artwork = (props) => {

  const handleOnClick = (e) => {
    console.log('handle from button'+ e.target);
    console.log(descr);
  } 

  const {imgSrc, descr, getArtwork, id, number} = props;

  const getSingleArtwork = () => {
    getArtwork(id);
  }

  return (
    
    <Card style={{width: '18rem'}} className='artwork'>
        <Card.Img variant='top' src={imgSrc} />
        <Card.Body>
            <Card.Title>AI ArtWork</Card.Title>
            <Card.Text>
                {descr}
            </Card.Text>
            <Button onClick={handleOnClick} variant="primary" style={{"marginRight": "2rem"}} >Enlarge</Button>
            <Button onClick={getSingleArtwork} variant="primary">Like</Button>
            <span className='number'>{number + 1}</span>
        </Card.Body>
    </Card>
  )
}

export default Artwork