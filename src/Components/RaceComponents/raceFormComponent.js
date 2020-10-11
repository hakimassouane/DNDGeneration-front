import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { createPortal } from 'react-dom';
import Select from 'react-select'
import RaceService from '../../Services/race';

class RaceFormComponent extends Component {
    constructor(props){
        super(props);
        this.onSizeChange = this.onSizeChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: "",
            selectSize: [{'label': "Guargantuan", "value": "Guargantuan"}, {'label': "Huge", "value": "Huge"}, {'label': "Large", "value": "Large"},
            {'label': "Medium", "value": "Medium"}, {'label': "Small", "value": "Small"}, {'label': "Tiny", "value": "Tiny"}],
            size: "",
            speedWalking: "",
            speedBurrowing: "",
            speedClimbing: "",
            speedFlying: "",
            speedSwimming: "",
            description: "",
            callback: '',
            error: ''
        }
    }

    onSizeChange(e){
        this.setState({size: e.value})
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    async handleSubmit(event) {
        event.preventDefault();
        const createRace = {
            name: this.state.name,
            size: this.state.size,
            speedWalking: this.state.speedWalking,
            speedBurrowing: this.state.speedBurrowing,
            speedClimbing: this.state.speedClimbing,
            speedFlying: this.state.speedFlying,
            speedSwimming: this.state.speedSwimming,
            description: this.state.description
        }

        try {
            const response = await RaceService.createRace(createRace);
            if (response.data.error) {
                this.setState({error: response.data.error.message});
            } else {
                this.setState({callback: 'The race has been create with success'})
            }
        } catch (error) {
            this.setState({error: error.message})
        }
    }


    render() {
        return(
            <Container>
                <h1>Create a Race</h1>
                <hr/>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="formRaceName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Race name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
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
                                <Select options={this.state.selectSize} onChange={this.onSizeChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formWalking">
                                <Form.Label>Speed walking</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="10, 20, 30, etc"
                                    name="speedWalking"
                                    value={this.state.speedWalking}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBurrowing">
                                <Form.Label>Speed burrowing</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="10, 20, 30, etc"
                                    name="speedBurrowing"
                                    value={this.state.speedBurrowing}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formClimbing">
                                <Form.Label>Speed climbing</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="10, 20, 30, etc"
                                    name="speedClimbing"
                                    value={this.state.speedClimbing}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formFlying">
                                <Form.Label>Speed flying</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="10, 20, 30, etc"
                                    name="speedFlying"
                                    value={this.state.speedFlying}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formSwimming">
                                <Form.Label>Speed swimming</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="10, 20, 30, etc"
                                    name="speedSwimming"
                                    value={this.state.speedSwimming}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows="3"
                                    name="description"
                                    value={this.state.description}
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

export default RaceFormComponent;