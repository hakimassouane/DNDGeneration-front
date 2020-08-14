import React, { Component } from 'react'
import UserService from '../../Services/user'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link} from 'react-router-dom';

class SignUpFormComponent extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.disabledButton = this.disabledButton.bind(this);

        this.state = {
            name: '',
            email: '',
            password: '',
            confpassword: '',
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
                    <Form.Text muted>
                        <Link to="/signin">Vous avez déjà un compte?</Link>
                    </Form.Text>
                    <Form.Label color='green'>
                        {this.state.callback}
                    </Form.Label>
                    <Form.Label color='red'>
                        {this.state.error}
                    </Form.Label>
                </Form>
            </Container>
        )
    }
}

export default SignUpFormComponent;