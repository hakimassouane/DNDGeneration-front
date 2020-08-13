import React, { Component } from 'react'
import axios from 'axios';
import UserService from '../../Services/user'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

class SignUpFormComponent extends Component {
    constructor(props) {
        super(props);
        /*this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfPassword = this.onChangeConfPassword.bind(this);*/
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.disabledButton = this.disabledButton.bind(this);

        this.state = {
            name: '',
            email: '',
            password: '',
            confpassword: '',
            /*successful: false,
            message: ''*/
            callback: '',
            error: ''
        }
       
    }

    /*onChangeName(e) {
        this.setState({
            name: e.target.value
        });
        console.log(e.target.name)
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
    };*/
    
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    async handleSubmit(event) {
        event.preventDefault();
        const createUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        try {
            const response = await UserService.createUser(createUser);
            if (response.data.error) {
                this.setState({error: response.data.error.message});
            } else {
                this.setState({callback: 'Your account has been create with success'})
                console.log(response);
            }
        } catch (error) {
            this.setState({error: error.message})
        }
    }

    disabledButton(e) {
        const _this = this.state;
        if (_this.email.length > 0 && _this.password.length > 0 && _this.name.length > 0 && _this.password === _this.confpassword && _this.email.match(new RegExp('\\@gmail.com|\\@yahoo.com|\\@hotmail.com|\\@hotmail.fr', 'g'))) {
            return false;
        }
        return true;
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
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPseudo">
                        <Form.Label>Pseudo</Form.Label>
                        <Form.Control 
                        type="text" 
                        placeholder="Pseudo"
                        name= "name"
                        value={this.state.name}
                        onChange={this.onChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control 
                        type="password"
                        placeholder="Mot de passe"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicConfPassword">
                        <Form.Label>Confirmez votre mot de passe</Form.Label>
                        <Form.Control
                        type="password"
                        placeholder="Mot de passe"
                        name="confpassword"
                        value={this.state.confpassword}
                        onChange={this.onChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="J'ai lu et j'accepte les Conditions générales d'utilisation" />
                    </Form.Group>
                    <Button type="submit" className="btn btn-block btn-danger" disabled={this.disabledButton()}>S'inscrire</Button>
                </Form>
            </Container>
        )
    }
}

export default SignUpFormComponent;