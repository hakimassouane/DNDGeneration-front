import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import BackgroundService from '../../Services/background'

class BackgroundFormComponent extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: '',
            introduction: '',
            skillProficiencies: '',
            toolProficiencies: '',
            languages: '',
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
        const createBackground = {
            name: this.state.name,
            introduction: this.state.introduction,
            skillProficiencies: this.state.skillProficiencies,
            languages: this.state.languages,
        }

        try {
            const response = await BackgroundService.createBackground(createBackground);
            if (response.data.error) {
                this.setState({error: response.data.error.message});
            } else {
                this.setState({callback: 'The background has been create with success'})
            }
        } catch (error) {
            this.setState({error: error.message})
        }
    }

    render() {
        return(
            <Container>
                <h1>Create a Background</h1>
                <hr/>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="formBackgroundName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                    type="text"
                                    placeholder="Background name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBackgroundName">
                                <Form.Label>Version</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Version"
                                    name="version"
                                    value={this.state.version}
                                    onChange={this.onChange}
                                />
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
                    <Row>
                        <Col>
                            <Form.Group controlId="formSkillProficiencies">
                                <Form.Label>Skill proficiencies</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows="3"
                                    name="skillProficiencies"
                                    value={this.state.skillProficiencies}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formToolProficiencies">
                                <Form.Label>Tool proficiencies</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows="3"
                                    name="toolProficiencies"
                                    value={this.state.toolProficiencies}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formLanguages">
                                <Form.Label>Languages</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows="3"
                                    name="languages"
                                    value={this.state.languages}
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

export default BackgroundFormComponent;