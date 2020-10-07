import React, { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import ClasseService from '../../Services/classe'
import Select from 'react-select'


class CharacterClasseComponent extends Component {

  constructor(props){
    super(props);
    this.onClasseChange = this.onClasseChange.bind(this);
    this.state = {
      selectClasses: [],
      classeName: '',
    }
  }

  async getOptions(){
    try {
      const response = await ClasseService.getClasse();
      const data = response.data;

      const classes = data.map(d => ({
        "label": d.name,
        "value": d.name
      }))

      if (response.data.error) {
          this.setState({error: response.data.error.message});
      } else {
          this.setState({selectClasses: classes})
          this.setState({callback: 'classe load with sucess'})
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

  async onClasseChange(e){
    this.setState({classeName: e.value})

    const result = await this.mainComponentStateUpdate();
    if(result === "resolved") {
      this.props.classe(this.state)
    }
  }

  componentDidMount(){
    this.getOptions()
  }

  render() {
    if (this.props.currentStep !== 2) { // Prop: The current step
      return null
    }

    return(
      <div className="form-group">
      <p>{this.props.currentStep}.Classe</p>
      <Row>
        <Col>
            <Form.Group controlId="formClasse">
                <Form.Label>Select a classe</Form.Label>
                <Select options={this.state.selectClasses} onChange={this.onClasseChange}/>
            </Form.Group>
        </Col>
      </Row>
    </div>
    )
  }
}

export default CharacterClasseComponent;