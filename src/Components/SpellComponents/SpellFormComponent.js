import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

class SpellFormComponent extends Component {
    render() {
        return(
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="formSpellName">
                                <Form.Label>Spell Name</Form.Label>
                                <Form.Control type="text" placeholder="Spell Name" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formSpellLevel">
                                <Form.Label>Spell Level</Form.Label>
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
                            <Form.Group controlId="formSpellSchool">
                                <Form.Label>Spell School</Form.Label>
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
                            <Form.Group controlId="formCastingTime">
                                <Form.Label>Casting Time</Form.Label>   
                                <Form.Control type="text" placeholder="Casting Time" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formReaction">
                                <Form.Label>Reaction</Form.Label>
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
                            <Form.Group controlId="formCastingTimeDesc">
                                <Form.Label>Casting Time Description</Form.Label>
                                <Form.Control type="text" placeholder="Casting Time Description"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form>
                                {['checkbox'].map(type => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="V" type={type} id={`inline-${type}-1`} />
                                        <Form.Check inline label="S" type={type} id={`inline-${type}-2`} />
                                        <Form.Check inline label="M" type={type} id={`inline-${type}-3`} />
                                    </div>
                                ))}
                            </Form>
                        </Col>
                        <Col>
                            <Form.Group controlId="formMaterialComponentsDesc">
                                <Form.Label>Material Components Description</Form.Label>
                                <Form.Control type="text" placeholder="Material Components Description"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formSpellRange">
                                <Form.Label>Spell Range</Form.Label>
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
                            <Form.Group controlId="formRangeDistance">
                                <Form.Label>Range Distance</Form.Label>
                                <Form.Control type="text" placeholder="Range Distance"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formDurationType">
                                <Form.Label>Duration Type</Form.Label>
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
                            <Form.Group controlId="formDurationText">
                                <Form.Label>Duration</Form.Label>
                                <Form.Control type="text" placeholder="Duration"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formDurationSelect">
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
                            <Form.Group controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form>
                                {['checkbox'].map(type => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="RITUAL SPELL?" type={type} id={`inline-${type}-1`} />
                                    </div>
                                ))}
                            </Form>
                        </Col>
                        <Col>
                            <Form>
                                {['checkbox'].map(type => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="AT HIGHER LEVELS SCALING?" type={type} id={`inline-${type}-1`} />
                                    </div>
                                ))}
                            </Form>
                        </Col>
                        <Col>
                            <Form.Group controlId="formHigherLvlScalingType ">
                                <Form.Label>HIGHER LEVEL SCALING TYPE</Form.Label>
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
                            <Form.Group controlId="formHigherLvlScalingType ">
                                <Form.Label>AVAILABLE FOR CLASS(ES)</Form.Label>
                                <Form.Control as="select" multiple>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
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

export default SpellFormComponent;