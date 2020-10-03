import React, { Component } from 'react'
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';

class CharacterEquipmentComponent extends Component {
    render() {
        if (this.props.currentStep !== 5) { // Prop: The current step
          return null
        }
        return(
          <div className="form-group">
            <p>{this.props.currentStep}.Equipment</p>
            <Row>
              <Col>
                  <Form.Group controlId="formweapon">
                      <Form.Label>Select a weapon</Form.Label>
                      <Form.Control as="select">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                      </Form.Control>
                  </Form.Group>
              </Col>
              <Col>
                  <Form.Group controlId="formshield">
                      <Form.Label>have a shield</Form.Label>
                      <Form.Control as="select">
                          <option>yes</option>
                          <option>no</option>
                      </Form.Control>
                  </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formpo">
                    <Form.Check type="checkbox" label="Begin with 15 gold" />
                </Form.Group>
              </Col>
            </Row>
          </div>
        )
      }
}

export default CharacterEquipmentComponent;