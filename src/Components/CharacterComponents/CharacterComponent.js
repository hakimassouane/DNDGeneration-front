import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import CharacterRaceComponent from './CharacterRaceComponent'
import CharacterClasseComponent from './CharacterClasseComponent'
import CharacterAbilityComponent from './CharacterAbilityComponent'
import CharacterDescriptionComponent from './CharacterDescriptionComponent'
import CharacterEquipmentComponent from './CharacterEquipmentComponent'

class CharacterFormComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            email: '',
            username: '',
            password: '',
        }
        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    _next() {
        let currentStep = this.state.currentStep
        if(currentStep < 5) {
            currentStep = currentStep + 1
        }
        this.setState({
            currentStep: currentStep,
        });
    }

    _prev() {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1;
        this.setState({
            currentStep: currentStep,
        });
    }

    get previousButton() {
        let currentStep = this.state.currentStep;
        if(currentStep !==1){
            return (
              <button 
                className="btn btn-secondary" 
                type="button" onClick={this._prev}>
                Previous
              </button>
            )
        }
        return null;
    }

    get nextButton() {
        let currentStep = this.state.currentStep;
        if(currentStep < 5){
            return (
              <button 
                className="btn btn-primary float-right" 
                type="button" onClick={this._next}>
              Next
              </button>        
            )
        }
        return null;
    }

    get submitButton() {
        let currentStep = this.state.currentStep;
        if(currentStep === 5){
            return (
              <button 
                className="btn btn-primary float-right" 
                type="button" onClick={this.handleSubmit}>
                    Submit
              </button>        
            )
        }
        return null;
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {email, username, password} = this.state;
        alert(`Your registration detail \n
        Email: ${email} \n
        Username: ${username} \n
        Password: ${password}`)
    }

    render() {
        return(
            <React.Fragment>
                <Container>
                    <CharacterRaceComponent
                    currentStep = {this.state.currentStep}
                    />
                    <CharacterClasseComponent
                    currentStep = {this.state.currentStep}
                    />
                    <CharacterAbilityComponent
                    currentStep = {this.state.currentStep}
                    />
                    <CharacterDescriptionComponent
                    currentStep = {this.state.currentStep}
                    />
                    <CharacterEquipmentComponent
                    currentStep = {this.state.currentStep}
                    />
                    <form onSubmit={this.handleSubmit}>
                    {this.previousButton}
                    {this.nextButton}
                    {this.submitButton}
                    </form>
                </Container>
            </React.Fragment>
        )
    }
}

export default CharacterFormComponent;