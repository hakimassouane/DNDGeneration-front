import React, { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import ItemeService from '../../Services/item'
import Select from 'react-select'

class CharacterEquipmentComponent extends Component {

  constructor(props){
    super(props);
    this.onWeaponChange = this.onWeaponChange.bind(this);
    this.onShieldChange = this.onShieldChange.bind(this);
    this.onArmorChange = this.onArmorChange.bind(this);

    this.state = {
      selectWeapon: [],
      selectShield: [],
      selectArmor: [],
      weaponName: '',
      shieldName: '',
      armorName: '',
    }
  }

  async getOptions(){
      
    try {
      const response = await ItemeService.getItem();
      const data = response.data;

      const weapons = data.filter(d => {
        return d.weaponCategory !== undefined}).map(d => ({
        "label": d.name,
        "value": d.name
      }))

      const shields = data.filter(d => {
        return d.ac !== undefined && d.ac < 5}).map(d => ({
        "label": d.name,
        "value": d.name
      }))

      const armors = data.filter(d => {
        return d.armor !== undefined}).map(d => ({
        "label": d.name,
        "value": d.name
      }))

      if (response.data.error) {
          this.setState({error: response.data.error.message});
      } else {
          this.setState({selectWeapon: weapons})
          this.setState({callback: 'weapons load with sucess'})
          this.setState({selectShield: shields})
          this.setState({callback: 'shields load with sucess'})
          this.setState({selectArmor: armors})
          this.setState({callback: 'armors load with sucess'})
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

  async onWeaponChange(e){
    this.setState({weaponName: e.value})

    const result = await this.mainComponentStateUpdate();
    if(result === "resolved") {
      this.props.equipment(this.state)
    }
  }

  async onShieldChange(e){
    this.setState({shieldName: e.value})

    const result = await this.mainComponentStateUpdate();
    if(result === "resolved") {
      this.props.equipment(this.state)
    }
  }

  async onArmorChange(e){
    this.setState({armorName: e.value})

    const result = await this.mainComponentStateUpdate();
    if(result === "resolved") {
      this.props.equipment(this.state)
    }
  }

  componentDidMount(){
    this.getOptions()
  }

  render() {
    if (this.props.currentStep !== 5) { // Prop: The current step
      return null
    }
    return(
      <div className="form-group">
        <p>{this.props.currentStep}.Equipment</p>
        <Row>
          <Col>
              <Form.Group controlId="formweapon">
                  <Form.Label>Select a weapon</Form.Label>
                  <Select options={this.state.selectWeapon} onChange={this.onWeaponChange}/>
              </Form.Group>
          </Col>
          <Col>
              <Form.Group controlId="formshield">
                  <Form.Label>Select a shield</Form.Label>
                  <Select options={this.state.selectShield} onChange={this.onShieldChange}/>
              </Form.Group>
          </Col>
          <Col>
              <Form.Group controlId="formarmor">
                  <Form.Label>Select a armor</Form.Label>
                  <Select options={this.state.selectArmor} onChange={this.onArmorChange}/>
              </Form.Group>
          </Col>
        </Row>
      </div>
    )
  }
}

export default CharacterEquipmentComponent;