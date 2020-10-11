import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Select from 'react-select'
import ItemService from '../../Services/item';

class ItemFormComponent extends Component {
    constructor(props){
        super(props);
        this.onRarityChange = this.onRarityChange.bind(this);
        this.onBaseItemTypeChange = this.onBaseItemTypeChange.bind(this);
        this.onMagicItemTypeChange = this.onMagicItemTypeChange.bind(this);
        this.onBaseArmorChange = this.onBaseArmorChange.bind(this);
        this.onDexBonusChange = this.onDexBonusChange.bind(this);
        this.onStealthCheckChange = this.onStealthCheckChange.bind(this);
        this.onBaseWeaponChange = this.onBaseWeaponChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: "",
            selectRarity: [{'label': "Artifact", "value": "Artifact"}, {'label': "Common", "value": "Common"}, {'label': "Legendary", "value": "Legendary"},
            {'label': "Rare", "value": "Rare"}, {'label': "Uncommon", "value": "Uncommon"}, {'label': "Unknown Rarity", "value": "Unknown Rarity"},
            {'label': "Varies", "value": "Varies"}, {'label': "Very Rare", "value": "Very Rare"}],
            selectBaseItemType: [{'label': "Item", "value": "Item"}, {'label': "Armor", "value": "Armor"}, {'label': "Weapon", "value": "Weapon"}],
            selectMagicItemType: [{'label': "-", "value": "-"},{'label': "Rod", "value": "Rod"}, {'label': "Scroll", "value": "Scroll"},
            {'label': "Staff", "value": "Staff"}, {'label': "Wand", "value": "Wand"}, {'label': "Ring", "value": "Ring"}],
            selectBaseArmor: [{'label': "-", "value": "-"},{'label': "Chain Mail", "value": "Chain Mail"}, {'label': "Leather", "value": "Leather"},
            {'label': "Plate", "value": "Plate"}, {'label': "Scale Mail", "value": "Scale Mail"}],
            selectDexBonus: [{'label': "-", "value": "-"},{'label': "Full Modifier", "value": "Full Modifier"}, {'label': "Max 2", "value": "Max 2"},
            {'label': "None", "value": "None"}],
            selectStealthCheck: [{'label': "-", "value": "-"},{'label': "None", "value": "None"}, {'label': "Disadvantage", "value": "Disadvantage"}],
            selectBaseWeapon: [{'label': "Battleaxe", "value": "Battleaxe"},{'label': "Club", "value": "Club"}, {'label': "Dagger", "value": "Dagger"},
            {'label': "Greatsword", "value": "Greatsword"}, {'label': "Halberd", "value": "Halberd"}, {'label': "Rapier", "value": "Rapier"}],
            rarity: "",
            baseItemType: "",
            magicItemType: "",
            baseArmor: "",
            dexBonus: "",
            strRequitement: "",
            stealthCheck: "",
            baseWeapon: "",
            attunementDesc: "",
            description: "",
            callback: '',
            error: ''
        }
    }
    onRarityChange(e){
        this.setState({rarity: e.value})
    }
    onBaseItemTypeChange(e){
        this.setState({baseItemType: e.value})
    }
    onMagicItemTypeChange(e){
        this.setState({magicItemType: e.value})
    }
    onBaseArmorChange(e){
        this.setState({baseArmor: e.value})
    }
    onDexBonusChange(e){
        this.setState({dexBonus: e.value})
    }
    onStealthCheckChange(e){
        this.setState({stealthCheck: e.value})
    }
    onBaseWeaponChange(e){
        this.setState({baseWeapon: e.value})
    }


    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    async handleSubmit(event) {
        event.preventDefault();
        const createItem = {
            name: this.state.name,
            rarity: this.state.rarity,
            baseItemType: this.state.baseItemType,
            magicItemType: this.state.magicItemType,
            baseArmor: this.state.baseArmor,
            dexBonus: this.state.dexBonus,
            strRequirement: this.state.strRequirement,
            stealthCheck: this.state.stealthCheck,
            baseWeapon: this.state.baseWeapon,
            attunementDesc: this.state.attunementDesc,
            description: this.state.description
        }

        try {
            const response = await ItemService.createItem(createItem);
            if (response.data.error) {
                this.setState({error: response.data.error.message});
            } else {
                this.setState({callback: 'The item has been create with success'})
            }
        } catch (error) {
            this.setState({error: error.message})
        }
    }

    render() {
        return(
            <Container>
                <h1>Create an Item</h1>
                <hr/>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="formItemName">
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Item Name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formItemRarety">
                                <Form.Label>Rarety</Form.Label>
                                <Select options={this.state.selectRarity} onChange={this.onRarityChange}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formItemBaseType">
                                <Form.Label>Base Item Type</Form.Label>
                                <Select options={this.state.selectBaseItemType} onChange={this.onBaseItemTypeChange}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formMagicItemType">
                                <Form.Label>Magic Item type</Form.Label>
                                <Select options={this.state.selectMagicItemType} onChange={this.onMagicItemTypeChange}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formItemBaseArmor">
                                <Form.Label>Base Armor</Form.Label>
                                <Select options={this.state.selectBaseArmor} onChange={this.onBaseArmorChange}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formItemDexBonus">
                                <Form.Label>Dex Bonus</Form.Label>
                                <Select options={this.state.selectDexBonus} onChange={this.onDexBonusChange}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formStrRequirement">
                                <Form.Label>STR Requirement</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="STR Requirement"
                                    name="strRequirement"
                                    value={this.state.strRequirement}
                                    onChange={this.onChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formItemStealthCheck">
                                <Form.Label>Stealth Check</Form.Label>
                                <Select options={this.state.selectStealthCheck} onChange={this.onStealthCheckChange}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formItemBaseWeapon">
                                <Form.Label>Base Weapon</Form.Label>
                                <Select options={this.state.selectBaseWeapon} onChange={this.onBaseWeaponChange}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form>
                                {['checkbox'].map(type => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check inline label="Requires Attunement" type={type} id={`inline-${type}-1`} />
                                    </div>
                                ))}
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formAttunementDesc">
                                <Form.Label>Attunement Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Attunement Description"
                                    name="attunementDesc"
                                    value={this.state.attunementDesc}
                                    onChange={this.onChange}
                                />
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
                    <Button type="submit"> Create </Button>
                </Form>
            </Container>
        )
    }

}

export default ItemFormComponent;