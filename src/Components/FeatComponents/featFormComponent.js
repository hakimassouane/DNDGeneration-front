import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import FeatService from '../../Services/feat'

class FeatFormComponent extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: '',
            introduction: '',
            callback: '',
            error: ''
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    async handleSubmit(event) {
        event.preventDefault();
        const createFeat = {
            name: this.state.name,
            introduction: this.state.introduction,
        }

        try {
            const response = await FeatService.createFeat(createFeat);
            if (response.data.error) {
                this.setState({error: response.data.error.message});
            } else {
                this.setState({callback: 'The feat has been create with success'})
            }
        } catch (error) {
            this.setState({error: error.message})
        }
    }

    render() {
        return(
            <Container>
                <h1>Create a Feat</h1>
                <hr/>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="formFeatName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Feat name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formFeatName">
                                <Form.Label>Version</Form.Label>
                                <Form.Control type="text" placeholder="Version" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formIntroduction">
                                <Form.Label>Introduction</Form.Label>
                                <Form.Control 
                                    as="textarea"
                                    rows="3"
                                    name="introduction"
                                    value={this.state.introduction}
                                    onChange={this.onChange}
                                    />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit"> Create </Button>
                </Form>
            </Container>
        )
    }

}

export default FeatFormComponent;