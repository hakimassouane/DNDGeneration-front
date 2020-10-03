import React, { Component } from 'react'
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';

class CharacterAbilityComponent extends Component {
    render() {
        if (this.props.currentStep !== 3) { // Prop: The current step
          return null
        }

        return(
          <div className="form-group">
          <p>{this.props.currentStep}.Ability</p>
          <Row>
            <Col>
            <h3>Points restant</h3>
            <h5>na/27</h5>
            </Col>
          </Row>
            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="formStrengh">
                      <Form.Label>Force</Form.Label>
                      <Form.Control as="select">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                      </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formDexterity">
                      <Form.Label>Dexterité</Form.Label>
                      <Form.Control as="select">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                      </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formConstitution">
                      <Form.Label>Constitution</Form.Label>
                      <Form.Control as="select">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                      </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formIntelligence">
                      <Form.Label>Intelligence</Form.Label>
                      <Form.Control as="select">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                      </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formwisdom">
                      <Form.Label>Sagesse</Form.Label>
                      <Form.Control as="select">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                      </Form.Control>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formCharisme">
                      <Form.Label>Charisme</Form.Label>
                      <Form.Control as="select">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                      </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
              <Col>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th colSpan="2">Force</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Score total</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Modificateur</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Score de base</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bonus racial</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Amélioration d'abilité</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bonus</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col>
              <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th colSpan="2">Dexterité</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Score total</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Modificateur</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Score de base</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bonus racial</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Amélioration d'abilité</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bonus</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <Col>
              <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th colSpan="2">Constitution</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Score total</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Modificateur</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Score de base</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bonus racial</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Amélioration d'abilité</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bonus</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              </Row>
              <Row>
                <Col>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th colSpan="2">Intelligence</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Score total</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Modificateur</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Score de base</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bonus racial</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Amélioration d'abilité</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bonus</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
                </Col>
                <Col>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th colSpan="2">Sagesse</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Score total</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Modificateur</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Score de base</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bonus racial</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Amélioration d'abilité</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bonus</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
                </Col>
                <Col>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th colSpan="2">Charisme</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Score total</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Modificateur</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Score de base</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bonus racial</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Amélioration d'abilité</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Bonus</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
                </Col>
              </Row>
          </Form>

          </div>
        )
      }
}

export default CharacterAbilityComponent;