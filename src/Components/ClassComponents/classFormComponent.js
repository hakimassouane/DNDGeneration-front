import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import ClasseService from '../../Services/classe';
import Select from 'react-select'

class ClasseFormComponent extends Component {
    constructor(props){
        super(props);
        this.onHitDiceChange = this.onHitDiceChange.bind(this);
        this.onSpellCastingAbilityChange = this.onSpellCastingAbilityChange.bind(this);
        this.onCanCastChange = this.onCanCastChange.bind(this);
        this.onSpellPrepareTypeChange = this.onSpellPrepareTypeChange.bind(this);
        this.onKnowsAllSpellChange = this.onKnowsAllSpellChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: "",
            description: "",
            selectHitDice: [{'label': "6", "value": 6}, {'label': "8", "value": 8}, {'label': "10", "value": 10},
            {'label': "12", "value": 12}],
            selectSpellCastingAbility: [{'label': "CHA", "value": "CHA"}, {'label': "CON", "value": "CON"}, {'label': "DEX", "value": "DEX"},
            {'label': "INT", "value": "INT"}, {'label': "STR", "value": "STR"}, {'label': "WIS", "value": "WIS"}],
            selectCanCast: [{'label': "Yes", "value": "Yes"}, {'label': "No", "value": "No"}],
            selectSpellPrepareType: [{'label': "-", "value": "-"}, {'label': "Yes", "value": "Yes"}, {'label': "No", "value": "No"},
            {'label': "12", "value": 12}],
            selectKnowsAllSpell: [{'label': "Yes", "value": "Yes"}, {'label': "No", "value": "No"}],
            faces: "",
            spellCastingAbility: "",
            canCastSpell: "",
            spellPrepareType: "",
            knowsAllSpells: "",
            callback: '',
            error: ''
        }
    }


    onHitDiceChange(e){
        this.setState({faces: e.value})
    }
    onSpellCastingAbilityChange(e){
        this.setState({spellCastingAbility: e.value})
    }
    onCanCastChange(e){
        this.setState({canCastSpell: e.value})
    }
    onSpellPrepareTypeChange(e){
        this.setState({spellPrepareType: e.value})
    }
    onKnowsAllSpellChange(e){
        this.setState({knowsAllSpells: e.value})
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    async handleSubmit(event) {
        event.preventDefault();
        const createClasse = {
            name: this.state.name,
            description: this.state.description,
            faces: this.state.faces,
            spellCastingAbility: this.state.spellCastingAbility,
            canCastSpell: this.state.canCastSpell,
            spellPrepareType: this.state.spellPrepareType,
            knowsAllSpells: this.state.knowsAllSpells,
        }

        try {
            const response = await ClasseService.createClasse(createClasse);
            if (response.data.error) {
                this.setState({error: response.data.error.message});
            } else {
                this.setState({callback: 'The classe has been create with success'})
            }
        } catch (error) {
            this.setState({error: error.message})
        }
    }


    render() {
        return(
            <Container>
                <h1>Create a Classe</h1>
                <hr/>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="formClasseName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Classe name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBackgroundName">
                                <Form.Label>Version</Form.Label>
                                <Form.Control type="text" placeholder="Version" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows="3"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Form.Group controlId="formhdFaces">
                                <Form.Label>Hit Dice: 1d</Form.Label> 
                                <Select options={this.state.selectHitDice} onChange={this.onHitDiceChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formSpellCasting">
                                <Form.Label>Spell casting ability</Form.Label>
                                <Select options={this.state.selectSpellCastingAbility} onChange={this.onSpellCastingAbilityChange}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formCanCast">
                                <Form.Label>Can cast spell</Form.Label>
                                <Select options={this.state.selectCanCast} onChange={this.onCanCastChange}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formSpellPrepare">
                                <Form.Label>Spell prepare type</Form.Label>
                                <Select options={this.state.selectSpellPrepareType} onChange={this.onSpellPrepareTypeChange}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formKnowSpell">
                                <Form.Label>Knows all spells</Form.Label>
                                <Select options={this.state.selectKnowsAllSpell} onChange={this.onKnowsAllSpellChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit"> Create </Button>
                </Form>
            </Container>
        )
    }

}

export default ClasseFormComponent;