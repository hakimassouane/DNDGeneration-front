import React, { Component } from 'react'
import { Button, Form, Nav, Navbar } from 'react-bootstrap';

class NavbarDND extends Component {
    render() {
        return ( 
            <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand href="/">DND Generation</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href='/backgrounds'>Backgrounds</Nav.Link>
                <Nav.Link href='/classes'>Classes</Nav.Link>
                <Nav.Link href='/feats'>Feats</Nav.Link>
                <Nav.Link href='/items'>Items</Nav.Link>
                <Nav.Link href='/races'>Races</Nav.Link>
                <Nav.Link href='/spells'>Spells</Nav.Link>
              </Nav>
              <Form inline>
                <Button variant="outline-info" className="mr-sm-2" >Sign up</Button>
                <Button variant="info">Sign in</Button>
              </Form>
            </Navbar>
        )
    }
}

export default NavbarDND;