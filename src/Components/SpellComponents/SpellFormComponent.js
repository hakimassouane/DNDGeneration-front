import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Select from 'react-select'
import SpellService from '../../Services/spell';

class SpellFormComponent extends Component {
    constructor(props){
        super(props);
        this.onSpellLevelChange = this.onSpellLevelChange.bind(this);
        this.onSpellSchoolChange = this.onSpellSchoolChange.bind(this);
        this.onCastingTimeTypeChange = this.onCastingTimeTypeChange.bind(this);
        this.onSpellRangeTypeChange = this.onSpellRangeTypeChange.bind(this);
        this.onDurationTypeChange = this.onDurationTypeChange.bind(this);
        this.onDurationTimeChange = this.onDurationTimeChange.bind(this);
        this.onLevelScalingTypeChange = this.onLevelScalingTypeChange.bind(this);
        this.onAvailableForClasseChange = this.onAvailableForClasseChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: "",
            selectSpellLevel: [{'label': "0", "value": 0}, {'label': "1", "value": 1}, {'label': "2", "value": 2},
            {'label': "3", "value": 3}, {'label': "4", "value": 5}, {'label': "6", "value": 6},
            {'label': "7", "value": 7}, {'label': "8", "value": 8}, {'label': "9", "value": 9}],
            selectSpellSchool: [{'label': "Adjuration", "value": "Adjuration"}, {'label': "Conjuration", "value": "Conjuration"}, {'label': "Divination", "value": "Divination"},
            {'label': "Enchantment", "value": "Enchantment"}, {'label': "Evocation", "value": "Evocation"}, {'label': "Illusion", "value": "Illusion"},
            {'label': "Necromancy", "value": "Necromancy"}, {'label': "Transmutation", "value": "Transmutation"}],
            selectCastingTimeType: [{'label': "-", "value": "-"},{'label': "Action", "value": "Action"}, {'label': "Bonus Action", "value": "Bonus Action"},
            {'label': "Hour", "value": "Hour"}, {'label': "Minute", "value": "Minute"}, {'label': "No Action", "value": "No Action"},
            {'label': "Reaction", "value": "Reaction"}, {'label': "Special", "value": "Special"}],
            selectSpellRangeType: [{'label': "-", "value": "-"},{'label': "Self", "value": "Self"}, {'label': "Touch", "value": "Touch"},
            {'label': "Ranged", "value": "Ranged"}, {'label': "Sight", "value": "Sight"}, {'label': "Unlimited", "value": "Unlimited"}],
            selectDurationType: [{'label': "-", "value": "-"},{'label': "Concentration", "value": "Concentration"}, {'label': "instantaneous", "value": "instantaneous"},
            {'label': "Special", "value": "Special"}, {'label': "Time", "value": "Time"}, {'label': "Until Dispelled", "value": "Until Dispelled"},
            {'label': "Until Dispelled or Triggered", "value": "Until Dispelled or Triggered"}],
            selectDurationTime: [{'label': "-", "value": "-"},{'label': "Round", "value": "Round"}, {'label': "Minute", "value": "Minute"},
            {'label': "Hour", "value": "Hour"}, {'label': "Day", "value": "Day"}],
            selecLevelScalingType: [{'label': "Character Level", "value": "Character Level"},{'label': "Spell Scale", "value": "Spell Scale"}, {'label': "Spell Level", "value": "Spell Level"}],
            selectAvailableForClasse: [{'label': "Artificier", "value": "Artificier"},{'label': "Bard", "value": "Bard"}, {'label': "Cleric", "value": "Cleric"},
            {'label': "Druid", "value": "Druid"}, {'label': "Fighter", "value": "Fighter"}, {'label': "Paladin", "value": "Paladin"},
            {'label': "Ranger", "value": "Ranger"}, {'label': "Rogue", "value": "Rogue"}, {'label': "Sorcerer", "value": "Sorcerer"},
            {'label': "Warlorck", "value": "Warlorck"}, {'label': "Wizard", "value": "Wizard"}],
            level: "",
            school: "",
            castingTime: "",
            castingTimeType: "",
            reactionCastingTimeDesc: "",
            materialComponentsDesc: "",
            spellRangeType: "",
            rangeDistance: "",
            durationType: "",
            duration: "",
            durationTime: "",
            levelScalingType: "",
            availbleForClasse: "",
            description: "",
            callback: '',
            error: ''
        }
    }

    onSpellLevelChange(e){
        this.setState({level: e.value})
    }
    onSpellSchoolChange(e){
        this.setState({school: e.value})
    }
    onCastingTimeTypeChange(e){
        this.setState({castingTimeType: e.value})
    }
    onSpellRangeTypeChange(e){
        this.setState({spellRangeType: e.value})
    }
    onDurationTypeChange(e){
        this.setState({durationType: e.value})
    }
    onDurationTimeChange(e){
        this.setState({durationTime: e.value})
    }
    onLevelScalingTypeChange(e){
        this.setState({levelScalingType: e.value})
    }
    onAvailableForClasseChange(e){
        this.setState({availbleForClasse: e.value})
    }


    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    async handleSubmit(event) {
        event.preventDefault();
        const createSpell = {
            name: this.state.name,
            level: this.state.level,
            school: this.state.school,
            castingTime: this.state.castingTime,
            castingTimeType: this.state.castingTimeType,
            reactionCastingTimeDesc: this.state.reactionCastingTimeDesc,
            materialComponentsDesc: this.state.materialComponentsDesc,
            spellRangeType: this.state.spellRangeType,
            rangeDistance: this.state.rangeDistance,
            durationType: this.state.durationType,
            duration: this.state.duration,
            durationTime: this.state.durationTime,
            levelScalingType: this.state.levelScalingType,
            availbleForClasse: this.state.availbleForClasse,
            description: this.state.description
        }

        try {
            const response = await SpellService.createSpell(createSpell);
            if (response.data.error) {
                this.setState({error: response.data.error.message});
            } else {
                this.setState({callback: 'The spell has been create with success'})
            }
        } catch (error) {
            this.setState({error: error.message})
        }
    }


    render() {
        return(
            <Container>
                <h1>Create a Spell</h1>
                <hr/>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="formSpellName">
                                <Form.Label>Spell Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Spell Name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}    
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formSpellLevel">
                                <Form.Label>Spell Level</Form.Label>
                                <Select options={this.state.selectSpellLevel} onChange={this.onSpellLevelChange}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formSpellSchool">
                                <Form.Label>Spell School</Form.Label>
                                <Select options={this.state.selectSpellSchool} onChange={this.onSpellSchoolChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formCastingTime">
                                <Form.Label>Casting Time</Form.Label>   
                                <Form.Control
                                    type="text"
                                    placeholder="Casting Time"
                                    name="castingTime"
                                    value={this.state.castingTime}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formReaction">
                                <Form.Label>Casting Time Type</Form.Label>
                                <Select options={this.state.selectCastingTimeType} onChange={this.onCastingTimeTypeChange}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formCastingTimeDesc">
                                <Form.Label>Casting Time Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Casting Time Description"
                                    name="reactionCastingTimeDesc"
                                    value={this.state.reactionCastingTimeDesc}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Label>Components</Form.Label>
                                {['checkbox'].map(type => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="V" type={type} id={`inline-${type}-1`} />
                                        <Form.Check inline label="S" type={type} id={`inline-${type}-2`} />
                                        <Form.Check inline label="M" type={type} id={`inline-${type}-3`} />
                                    </div>
                                ))}
                            </Form>
                        </Col>
                        <Col>
                            <Form.Group controlId="formMaterialComponentsDesc">
                                <Form.Label>Material Components Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Material Components Description"
                                    name="materialComponentsDesc"
                                    value={this.state.materialComponentsDesc}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formSpellRange">
                                <Form.Label>Spell Range</Form.Label>
                                <Select options={this.state.selectSpellRangeType} onChange={this.onSpellRangeTypeChange}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formRangeDistance">
                                <Form.Label>Range Distance</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Range Distance"
                                    name="rangeDistance"
                                    value={this.state.rangeDistance}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formDurationType">
                                <Form.Label>Duration Type</Form.Label>
                                <Select options={this.state.selectDurationType} onChange={this.onDurationTypeChange}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formDurationText">
                                <Form.Label>Duration</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Duration"
                                    name="duration"
                                    value={this.state.duration}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formDurationSelect">
                                <Form.Label>Duration Time</Form.Label>
                                <Select options={this.state.selectDurationTime} onChange={this.onDurationTimeChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form>
                                {['checkbox'].map(type => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="RITUAL SPELL?" type={type} id={`inline-${type}-1`} />
                                    </div>
                                ))}
                            </Form>
                        </Col>
                        <Col>
                            <Form>
                                {['checkbox'].map(type => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="AT HIGHER LEVELS SCALING?" type={type} id={`inline-${type}-1`} />
                                    </div>
                                ))}
                            </Form>
                        </Col>
                        <Col>
                            <Form.Group controlId="formHigherLvlScalingType ">
                                <Form.Label>HIGHER LEVEL SCALING TYPE</Form.Label>
                                <Select options={this.state.selecLevelScalingType} onChange={this.onLevelScalingTypeChange}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formHigherLvlScalingType ">
                                <Form.Label>AVAILABLE FOR CLASS(ES)</Form.Label>
                                <Select options={this.state.selectAvailableForClasse} onChange={this.onAvailableForClasseChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit"> Create </Button>
                </Form>
            </Container>
        )
    }

}

export default SpellFormComponent;