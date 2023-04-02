import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

const Artwork = (props) => {

  const {imgSrc, descr, number} = props;

  const [likes, setlikes] = useState(10);
  const [isclicked, setisclicked] = useState(false);
  const likescounter = () => {
      if(isclicked) {
        setlikes(likes - 1);
      } else {
        setlikes(likes + 1);
      }
      setisclicked(!isclicked);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    <Card style={{width: '18rem'}} className='artwork'>
        <Card.Img variant='top' src={imgSrc} />
        <Card.Body>
            <Card.Title>AI ArtWork</Card.Title>
            <Card.Text>
                {descr}
            </Card.Text>
            <Button onClick={handleShow} variant="outline-primary" style={{"marginRight": "1rem"}} >Enlarge</Button>
            <Button onClick={likescounter} variant="outline-danger">
              <span className='likesCounter'>Like - {likes}</span>
            </Button>
            <span className='number'>{number + 1}</span>
        </Card.Body>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img fluid className="model-photo" src={imgSrc}  alt="artwork" />
        </Modal.Body>
        <Modal.Footer>
          <p>{descr}</p>  
        </Modal.Footer>
      </Modal>
    </Card>
  )
}

export default Artwork