import React, { Component } from 'react'
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';

class CharacterDescriptionComponent extends Component {

    onClickHandler = (e) => {
      const hiddenElement = e.currentTarget.nextSibling;
      hiddenElement.className.indexOf("collapse show") > -1 ? hiddenElement.classList.remove("show") : hiddenElement.classList.add("show");
    };

    render() {
        if (this.props.currentStep !== 4) { // Prop: The current step
          return null
        }

        return(
          <div className="form-group">
            <p>{this.props.currentStep}.Background</p>
            <Row>
              <Col>
                  <Form.Group controlId="formBackground">
                      <Form.Label>Select a background</Form.Label>
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
          <Row>
              <Col>
                  <Form.Group controlId="formAlignement">
                      <Form.Label>Select a alignement</Form.Label>
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

export default CharacterDescriptionComponent;