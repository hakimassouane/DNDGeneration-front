import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';



class SignInFormComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }

    render() {

        return(
            <Container>
                <Form>
                    <Row>
                        <Col md={{ offset: 5 }}><h3>Connexion</h3></Col>
                    </Row>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Adresse email</Form.Label>
                        <Form.Control type="email" placeholder="Entrez votre adresse email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control type="password" placeholder="Mot de passe" />
                    </Form.Group>
                    <Button type="submit" className="btn btn-block btn-danger" disabled>Se connecter</Button>
                </Form>
            </Container>
        )
    }

}

export default SignInFormComponent;