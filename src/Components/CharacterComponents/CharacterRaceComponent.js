import React, { Component } from 'react'
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';

class CharacterRaceComponent extends Component {

    render() {
      if (this.props.currentStep !== 1) { // Prop: The current step
        return null
      }
      
      return(
        <div className="form-group">
          <p>{this.props.currentStep}.Race</p>
          <Row>
            <Col>
                <Form.Group controlId="formdName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Character name"
                    />
                </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
                <Form.Group controlId="formRace">
                    <Form.Label>Select a race</Form.Label>
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
            </Col>
          </Row>
        </div>
      )
    }
}

export default CharacterRaceComponent;