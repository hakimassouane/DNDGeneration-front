import React, { Component } from 'react'
import { Button, Form, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { Link} from 'react-router-dom';

class NavbarDND extends Component {
    render() {
      const islogged = false;
        return (
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">DND Generation</Navbar.Brand>
            <Nav className="mr-auto">
            <Row>
              <Col><Nav.Link href='/backgrounds'>Backgrounds</Nav.Link></Col>
              <Col><Nav.Link href='/classes'>Classes</Nav.Link></Col>
              <Col><Nav.Link href='/feats'>Feats</Nav.Link></Col>
              <Col><Nav.Link href='/items'>Items</Nav.Link></Col>
              <Col><Nav.Link href='/races'>Races</Nav.Link></Col>
              <Col><Nav.Link href='/spells'>Spells</Nav.Link></Col>
              <Col><Nav.Link href='/characters'>Characters</Nav.Link></Col>
            </Row>
            </Nav>
            { islogged ? 
              <Form inline>
                <Button variant="info">déconnexion</Button>
              </Form>
            : 
            <Form inline>
              <Link to="/signup">
                <Button variant="outline-info" className="mr-sm-2" >Sign up</Button>
              </Link>
              <Link to="/signin">
                <Button variant="info">Sign in</Button>
              </Link>
            </Form> 
            }
          </Navbar>
        )
    }
}

export default NavbarDND;