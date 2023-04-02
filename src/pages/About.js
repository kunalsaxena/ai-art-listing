import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <Container fluid>
        <Row style={{"marginTop" : "8rem", "marginBottom" : "8rem"}}>
          <Col>
            <h1 className="text-center mt-4 mb-4">About Us</h1>
          </Col>
        </Row>
      </Container>
  )
}

export default About