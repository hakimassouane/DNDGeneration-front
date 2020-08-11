import React, { Component } from 'react'
import axios from 'axios';
import UserService from '../../Services/user'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

class SignUpFormComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfPassword = this.onChangeConfPassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            password: '',
            confpassword: '',
            successful: false,
            message: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeConfPassword(e) {
        this.setState({
            confpassword: e.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();        
        const response = await UserService.createUser({ 
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        });
        console.log(response);
    }

    render() {

        return(
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col md={{ offset: 5 }}><h3>Inscription</h3></Col>
                    </Row>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Adresse email</Form.Label>
                        <Form.Control 
                        type="email"
                        placeholder="Entrez votre adresse email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPseudo">
                        <Form.Label>Pseudo</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Pseudo"
                        value={this.state.name}
                        onChange={this.onChangeName}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control 
                        type="password"
                        placeholder="Mot de passe"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicConfPassword">
                        <Form.Label>Confirmez votre mot de passe</Form.Label>
                        <Form.Control
                        type="password"
                        placeholder="Mot de passe"
                        value={this.state.confpassword}
                        onChange={this.onChangeConfPassword}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="J'ai lu et j'accepte les Conditions générales d'utilisation" />
                    </Form.Group>
                    <Button type="submit" className="btn btn-block btn-danger">S'inscrire</Button>
                </Form>
            </Container>
        )
    }
}

export default SignUpFormComponent;