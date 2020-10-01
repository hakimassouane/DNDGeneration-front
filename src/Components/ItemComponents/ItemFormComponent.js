import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

class ItemFormComponent extends Component {
    render() {
        return(
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="formItemName">
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control type="text" placeholder="Item Name" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formItemRarety">
                                <Form.Label>Item Rarety</Form.Label>
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
                            <Form.Group controlId="formItemBaseType">
                                <Form.Label>Item Base Type</Form.Label>
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
                            <Form.Group controlId="formMagicItemType">
                                <Form.Label>Magic Item type</Form.Label>
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
                            <Form.Group controlId="formItemBaseArmor">
                                <Form.Label>Item Base Armor</Form.Label>
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
                            <Form.Group controlId="formItemDexBonus">
                                <Form.Label>Item Base Bonus</Form.Label>
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
                            <Form.Group controlId="formItemStrenghtRequirement">
                                <Form.Label>Item Strenght Requirement</Form.Label>
                                <Form.Control type="text" placeholder="Item Strenght Requirement"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formItemStealthCheck">
                                <Form.Label>Item Stealth Check</Form.Label>
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
                            <Form.Group controlId="formItemBaseWeapon">
                                <Form.Label>Item Base Weapon</Form.Label>
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
                            <Form>
                                {['checkbox'].map(type => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="Requires Attunement" type={type} id={`inline-${type}-1`} />
                                    </div>
                                ))}
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formItemAttunementDesc">
                                <Form.Label>Item Attunement Description</Form.Label>
                                <Form.Control type="text" placeholder="Item Attunement Description"/>
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

export default ItemFormComponent;