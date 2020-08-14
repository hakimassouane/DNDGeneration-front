import React, { Component } from 'react'
import UserService from '../../Services/user'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link} from 'react-router-dom';

class SignInFormComponent extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.disabledButton = this.disabledButton.bind(this);

        this.state = {
            email: '',
            password: '',
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    async handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await UserService.logUser(this.state.email,this.state.password);
            if (response.data.error) {
                this.setState({error: response.data.error.message});
            } else {
                this.setState({callback: ' You have successfully logged on'})
                console.log(response);
            }
        } catch (error) {
            this.setState({error: error.message})
        }
    }

    disabledButton(e) {
        const _this = this.state;
        if (_this.email.length > 0 && _this.password.length > 0 && _this.email.match(new RegExp('\\@gmail.com|\\@yahoo.com|\\@hotmail.com|\\@hotmail.fr', 'g'))) {
            return false;
        }
        return true;
    }

    render() {

        return(
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col md={{ offset: 5 }}><h3>Connexion</h3></Col>
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
                    <Button type="submit" className="btn btn-block btn-danger" disabled={this.disabledButton()}>Se connecter</Button>
                    <Form.Text muted>
                        <Link to="/signup">Vous avez n'avez pas de compte?</Link>
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

export default SignInFormComponent;