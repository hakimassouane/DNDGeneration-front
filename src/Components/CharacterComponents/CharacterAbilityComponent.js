import React, { Component } from 'react'
import './characterComponent.css'
import { Form, Row, Col, Table } from 'react-bootstrap';
import Select from 'react-select'


class CharacterAbilityComponent extends Component {
  constructor(props){
    super(props);
    this.onStrengthChange = this.onStrengthChange.bind(this);
    this.onDexterityChange = this.onDexterityChange.bind(this);
    this.onConstitutionChange = this.onConstitutionChange.bind(this);
    this.onIntelligenceChange = this.onIntelligenceChange.bind(this);
    this.onWisdomChange = this.onWisdomChange.bind(this);
    this.onCharismaChange = this.onCharismaChange.bind(this);

    this.state = {
      selectOptions: [{'label': "8", "value": 8}, {'label': "9", "value": 9}, {'label': "10", "value": 10},
        {'label': "11", "value": 11}, {'label': "12", "value": 12}, {'label': "13", "value": 13},
        {'label': "14", "value": 14}, {'label': "15", "value": 15}],
      strengthScore: '',
      dexterityScore: '',
      constitutionScore: '',
      intelligenceScore: '',
      wisdomScore: '',
      charismaScore: '',
    }
  }

  mainComponentStateUpdate() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 500);
    });
  }

  async onStrengthChange(e){
    this.setState({strengthScore: e.value})

    const result = await this.mainComponentStateUpdate();
    if(result === "resolved") {
      this.props.ability(this.state)
    }
  }

  async onDexterityChange(e){
    this.setState({dexterityScore: e.value})

    const result = await this.mainComponentStateUpdate();
    if(result === "resolved") {
      this.props.ability(this.state)
    }
  }

  async onConstitutionChange(e){
    this.setState({constitutionScore: e.value})

    const result = await this.mainComponentStateUpdate();
    if(result === "resolved") {
      this.props.ability(this.state)
    }
  }

  async onIntelligenceChange(e){
    this.setState({intelligenceScore: e.value})

    const result = await this.mainComponentStateUpdate();
    if(result === "resolved") {
      this.props.ability(this.state)
    }
  }

  async onWisdomChange(e){
    this.setState({wisdomScore: e.value})

    const result = await this.mainComponentStateUpdate();
    if(result === "resolved") {
      this.props.ability(this.state)
    }
  }

  async onCharismaChange(e){
    this.setState({charismaScore: e.value})

    const result = await this.mainComponentStateUpdate();
    if(result === "resolved") {
      this.props.ability(this.state)
    }
  }

  render() {
    if (this.props.currentStep !== 3) { // Prop: The current step
      return null
    }

    return(
      <div className="form-group">
      <p>{this.props.currentStep}.Ability</p>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="formStrengh">
                  <Form.Label>Strength *</Form.Label>
                  <Select
                    value={this.state.selectOptions.find(obj => obj.value === this.state.strengthScore)}
                    options={this.state.selectOptions}
                    onChange={this.onStrengthChange}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formDexterity">
                  <Form.Label>Dexterity *</Form.Label>
                  <Select
                    value={this.state.selectOptions.find(obj => obj.value === this.state.dexterityScore)}
                    options={this.state.selectOptions}
                    onChange={this.onDexterityChange}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formConstitution">
                  <Form.Label>Constitution *</Form.Label>
                  <Select
                    value={this.state.selectOptions.find(obj => obj.value === this.state.constitutionScore)}
                    options={this.state.selectOptions}
                    onChange={this.onConstitutionChange}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formIntelligence">
                  <Form.Label>Intelligence *</Form.Label>
                  <Select
                    value={this.state.selectOptions.find(obj => obj.value === this.state.intelligenceScore)}
                    options={this.state.selectOptions}
                    onChange={this.onIntelligenceChange}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formwisdom">
                  <Form.Label>Wisdom *</Form.Label>
                  <Select
                    value={this.state.selectOptions.find(obj => obj.value === this.state.wisdomScore)}
                    options={this.state.selectOptions}
                    onChange={this.onWisdomChange}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formCharisme">
                  <Form.Label>Charisma *</Form.Label>
                  <Select
                    value={this.state.selectOptions.find(obj => obj.value === this.state.charismaScore)}
                    options={this.state.selectOptions}
                    onChange={this.onCharismaChange}/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
          <Col>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th colSpan="2">Strength</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total score</td>
                  <td>{this.state.strengthScore}</td>
                </tr>
                <tr>
                  <td>Modifier</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Base score</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Racial bonus</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Ability improvement</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Misc bonus</td>
                  <td>+0</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col>
          <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th colSpan="2">Dexterity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total score</td>
                  <td>{this.state.dexterityScore}</td>
                </tr>
                <tr>
                  <td>Modifier</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Base score</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Racial bonus</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Ability improvement</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Misc bonus</td>
                  <td>+0</td>
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
                  <td>Total score</td>
                  <td>{this.state.constitutionScore}</td>
                </tr>
                <tr>
                  <td>Modifier</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Base score</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Racial bonus</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Ability improvement</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Misc bonus</td>
                  <td>+0</td>
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
                  <td>Total score</td>
                  <td>{this.state.intelligenceScore}</td>
                </tr>
                <tr>
                  <td>Modifier</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Base score</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Racial bonus</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Ability improvement</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Misc bonus</td>
                  <td>+0</td>
                </tr>
              </tbody>
            </Table>
            </Col>
            <Col>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th colSpan="2">Wisdom</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total score</td>
                  <td>{this.state.wisdomScore}</td>
                </tr>
                <tr>
                  <td>Modifier</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Base score</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Racial bonus</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Ability improvement</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Misc bonus</td>
                  <td>+0</td>
                </tr>
              </tbody>
            </Table>
            </Col>
            <Col>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th colSpan="2">Charisma</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total score</td>
                  <td>{this.state.charismaScore}</td>
                </tr>
                <tr>
                  <td>Modifier</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Base score</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Racial bonus</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Ability improvement</td>
                  <td>+0</td>
                </tr>
                <tr>
                  <td>Misc bonus</td>
                  <td>+0</td>
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