import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import CharacterService from '../../Services/character'
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
            raceData: [],
            classeData: [],
            abilityData: [],
            descriptionData: [],
            equipmentData: [],
        }
        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
    }

    raceData(data) {
        console.log("raceData", data)
        this.setState({raceData: data})
    }

    classeData(data) {
        console.log("classeData", data)
        this.setState({classeData: data})
    }

    abilityData(data) {
        this.setState({abilityData: data})
    }

    descriptionData(data) {
        this.setState({descriptionData: data})
    }

    equipmentData(data) {
        this.setState({equipmentData: data})
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

    handleSubmit = async event => {
        event.preventDefault();
        const createCharacter = {
            characterName: this.state.raceData.characterName,
            raceName: this.state.raceData.raceName,
            classeName: this.state.classeData.classeName,
            strengthScore: this.state.abilityData.strengthScore,
            dexterityScore: this.state.abilityData.dexterityScore,
            constitutionScore: this.state.abilityData.constitutionScore,
            intelligenceScore: this.state.abilityData.intelligenceScore,
            wisdomScore: this.state.abilityData.wisdomScore,
            charismaScore: this.state.abilityData.charismaScore,
            backgroundName: this.state.descriptionData.backgroundName,
            alignmentName: this.state.descriptionData.alignmentName,
            age: this.state.descriptionData.age,
            height: this.state.descriptionData.height,
            weight: this.state.descriptionData.weight,
            skinColor: this.state.descriptionData.skinColor,
            hairColor: this.state.descriptionData.hairColor,
            backStory: this.state.descriptionData.backStory,
            personality: this.state.descriptionData.personality,
            bonds: this.state.descriptionData.bonds,
            ideal: this.state.descriptionData.ideal,
            flawn: this.state.descriptionData.flawn,
            weaponName: this.state.equipmentData.weaponName,
            shieldName: this.state.equipmentData.shieldName,
            armorName: this.state.equipmentData.armorName
        }

        try {
            const response = await CharacterService.createCharacter(createCharacter);
            if (response.data.error) {
                this.setState({error: response.data.error.message});
            } else {
                this.setState({callback: 'Your character has been create with success'})
            }
        } catch (error) {
            this.setState({error: error.message})
        }
    }

    render() {
        return(
            <React.Fragment>
                <Container>
                    <CharacterRaceComponent
                    currentStep = {this.state.currentStep}
                    race={this.raceData.bind(this)}
                    />
                    <CharacterClasseComponent
                    currentStep = {this.state.currentStep}
                    classe={this.classeData.bind(this)}
                    />
                    <CharacterAbilityComponent
                    currentStep = {this.state.currentStep}
                    ability={this.abilityData.bind(this)}
                    />
                    <CharacterDescriptionComponent
                    currentStep = {this.state.currentStep}
                    description={this.descriptionData.bind(this)}
                    />
                    <CharacterEquipmentComponent
                    currentStep = {this.state.currentStep}
                    equipment={this.equipmentData.bind(this)}
                    />
                    <form onSubmit={this.handleSubmit.bind(this)}>
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