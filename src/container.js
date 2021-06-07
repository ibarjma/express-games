import React, { Component } from 'react'
import { Container, Row, Col } from 'react-grid-system'

export default class Grid extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={4}>One of three columns</Col>
          <Col sm={4}>One of three columns</Col>
          <Col sm={4}>One of three columns</Col>
        </Row>
      </Container>
    )
  }
}
