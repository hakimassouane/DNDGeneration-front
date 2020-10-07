import React, { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import Select from 'react-select'
import RaceService from '../../Services/race'

class CharacterRaceComponent extends Component {

  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onRaceChange = this.onRaceChange.bind(this);
    this.state = {
      selectRaces: [],
      characterName: '',
      raceName: '',
      callback: '',
      error: ''
    }
  }

  async getOptions(){
    
    try {
      const response = await RaceService.getRace();
      const data = response.data;

      const options = data.map(d => ({
        "label": d.name,
        "value": d.name
      }))

      if (response.data.error) {
          this.setState({error: response.data.error.message});
      } else {
          this.setState({selectRaces: options})
          this.setState({callback: 'races load with sucess'})
      }
    } catch (error) {
        this.setState({error: error.message})
    }
  }

  mainComponentStateUpdate() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 500);
    });
  }

  async onChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    });

    const result = await this.mainComponentStateUpdate();
    if(result === "resolved") {
      this.props.race(this.state)
    }
  };

  async onRaceChange(e) {
    this.setState({raceName: e.value})
    
    const result = await this.mainComponentStateUpdate();
    if(result === "resolved") {
      this.props.race(this.state)
    }
  }

  componentDidMount(){
    this.getOptions()
  }


  render() {
    if (this.props.currentStep !== 1) { // Prop: The current step
      return null
    }

    return(
      <div className="form-group">
        <p>{this.props.currentStep}.Race</p>
        <Row>
          <Col>
              <Form.Group controlId="formdName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                      type="text"
                      placeholder="Character name"
                      name="characterName"
                      value={this.state.characterName}
                      onChange={this.onChange}
                  />
              </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
              <Form.Group controlId="formRace">
                  <Form.Label>Select a race</Form.Label>
                  <Select options={this.state.selectRaces} onChange={this.onRaceChange}/>
              </Form.Group>
          </Col>
        </Row>
      </div>
    )
  }
}

export default CharacterRaceComponent;