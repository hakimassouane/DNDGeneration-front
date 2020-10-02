import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

class ClasseFormComponent extends Component {
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
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Form.Group controlId="formhdFaces">
                            <Form.Label>Hit Dice: 1d</Form.Label> 
                                <Form.Control as="select">
                                    <option>6</option>
                                    <option>8</option>
                                    <option>10</option>
                                    <option>12</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formSpellCasting">
                                <Form.Label>Spell casting ability</Form.Label>
                                <Form.Control as="select">
                                    <option>CHA</option>
                                    <option>CON</option>
                                    <option>DEX</option>
                                    <option>INT</option>
                                    <option>STR</option>
                                    <option>WIS</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formCanCast">
                                <Form.Label>Can cast spell</Form.Label>
                                <Form.Control as="select">
                                    <option>yes</option>
                                    <option>No</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formSpellPrepare">
                                <Form.Label>Spell prepare type</Form.Label>
                                <Form.Control as="select">
                                    <option>-</option>
                                    <option>Half level</option>
                                    <option>Level</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formKnowSpell">
                                <Form.Label>Knows all spells</Form.Label>
                                <Form.Control as="select">
                                    <option>Yes</option>
                                    <option>No</option>
                                </Form.Control>
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

export default ClasseFormComponent;