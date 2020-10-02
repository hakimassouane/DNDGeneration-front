import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

class RaceFormComponent extends Component {
    render() {
        return(
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="formBackgroundName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Background name" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBackgroundName">
                                <Form.Label>Version</Form.Label>
                                <Form.Control type="text" placeholder="Version" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formSize">
                                <Form.Label>Size</Form.Label>
                                <Form.Control as="select">
                                    <option>Guargantuan</option>
                                    <option>Huge</option>
                                    <option>Large</option>
                                    <option>Medium</option>
                                    <option>Small</option>
                                    <option>Tiny</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formWalking">
                                <Form.Label>Speed walking</Form.Label>
                                <Form.Control type="text" placeholder="10, 20, 30, etc" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBurrowing">
                                <Form.Label>Speed burrowing</Form.Label>
                                <Form.Control type="text" placeholder="10, 20, 30, etc" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formClimbing">
                                <Form.Label>Speed climbing</Form.Label>
                                <Form.Control type="text" placeholder="10, 20, 30, etc" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formFlying">
                                <Form.Label>Speed flying</Form.Label>
                                <Form.Control type="text" placeholder="10, 20, 30, etc" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formSwimming">
                                <Form.Label>Speed swimming</Form.Label>
                                <Form.Control type="text" placeholder="10, 20, 30, etc" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }

}

export default RaceFormComponent;