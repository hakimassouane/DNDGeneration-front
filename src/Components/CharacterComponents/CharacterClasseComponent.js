import React, { Component } from 'react'
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';


class CharacterClasseComponent extends Component {

    onClickHandler = (e) => {
      const hiddenElement = e.currentTarget.nextSibling;
      hiddenElement.className.indexOf("collapse show") > -1 ? hiddenElement.classList.remove("show") : hiddenElement.classList.add("show");
    };

    render() {
        if (this.props.currentStep !== 2) { // Prop: The current step
          return null
        }

        return(
          <div className="form-group">
          <p>{this.props.currentStep}.Classe</p>
          <Row>
            <Col>
                <Form.Group controlId="formClasse">
                    <Form.Label>Select a classe</Form.Label>
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

export default CharacterClasseComponent;