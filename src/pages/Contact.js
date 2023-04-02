import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Contact = () => {
  return (
    <Container fluid>
        <Row style={{"marginTop" : "8rem", "marginBottom" : "8rem"}}>
          <Col>
            <h1 className="text-center mt-4 mb-4">Contact us</h1>
          </Col>
        </Row>
      </Container>
  )
}

export default Contact