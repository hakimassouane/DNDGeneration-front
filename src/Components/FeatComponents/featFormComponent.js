import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

class FeatFormComponent extends Component {
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
                            <Form.Group controlId="formIntroduction">
                                <Form.Label>Introduction</Form.Label>
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

export default FeatFormComponent;