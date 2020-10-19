import React, { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import Select from 'react-select'
import BackgroundService from '../../Services/background'

class CharacterDescriptionComponent extends Component {

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onBackgroundChange = this.onBackgroundChange.bind(this);
        this.onAlignmentChange = this.onAlignmentChange.bind(this);

        this.state = {
            selectBackgrounds: [],
            selectAlignments: [{'label': "Lawful Good", "value": "Lawful Good"}, {'label': "Neutral Good", "value": "Neutral Good"},
            {'label': "Chaotic Good", "value": "Chaotic Good"},{'label': "Lawful Neutral", "value": "Lawful Neutral"},
            {'label': "True Neutral", "value": "True Neutral"}, {'label': "Chaotic Neutral", "value": "Chaotic Neutral"},
            {'label': "Lawful Evil", "value": "Lawful Evil"}, {'label': "Neutral Evil", "value": "Neutral Evil"},
            {'label': "Chaotic Evil", "value": "Chaotic Evil"}],
            backgroundName: '',
            alignmentName: '',
            age: '',
            height: '',
            weight: '',
            skinColor: '',
            hairColor: '',
            backStory: '',
            personality: '',
            bonds: '',
            ideal: '',
            flawn: ''
        }
    }

    async getOptions(){
        try {
            const response = await BackgroundService.getBackground();
            const data = response.data;

            const backgrounds = data.map(d => ({
            "label": d.name,
            "value": d.name
            }))

            if (response.data.error) {
                this.setState({error: response.data.error.message});
            } else {
                this.setState({selectBackgrounds: backgrounds})
                this.setState({callback: 'backgrounds load with sucess'})
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
            this.props.description(this.state)
        }
    };

    async onBackgroundChange(e) {
        this.setState({backgroundName: e.value})

        const result = await this.mainComponentStateUpdate();
        if(result === "resolved") {
            this.props.description(this.state)
        }
    }

    async onAlignmentChange(e) {
        this.setState({alignmentName: e.value})

        const result = await this.mainComponentStateUpdate();
        if(result === "resolved") {
            this.props.description(this.state)
        }
    }

    componentDidMount(){
        this.getOptions()
    }

    render() {
        if (this.props.currentStep !== 4) { // Prop: The current step
        return null
        }

        return(
        <div className="form-group">
            <p>{this.props.currentStep}.Description</p>
            <Row>
            <Col>
                <Form.Group controlId="formBackground">
                    <Form.Label>Select a background *</Form.Label>
                    <Select
                        value={this.state.selectBackgrounds.find(obj => obj.value === this.state.backgroundName)}
                        options={this.state.selectBackgrounds}
                        onChange={this.onBackgroundChange}/>
                </Form.Group>
            </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formAlignment">
                        <Form.Label>Select a alignment *</Form.Label>
                        <Select
                            value={this.state.selectAlignments.find(obj => obj.value === this.state.alignmentName)}
                            options={this.state.selectAlignments}
                            onChange={this.onAlignmentChange}/>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Age"
                            name="age"
                            value={this.state.age}
                            onChange={this.onChange}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formHeight">
                        <Form.Label>Height</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Height"
                            name="height"
                            value={this.state.height}
                            onChange={this.onChange}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formWeight">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Weight"
                            name="weight"
                            value={this.state.weight}
                             onChange={this.onChange}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formSkincolor">
                        <Form.Label>Skin color</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Skin color"
                            name="skinColor"
                            value={this.state.skinColor}
                            onChange={this.onChange}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formHaircolor">
                        <Form.Label>Hair color</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Hair color"
                            name="hairColor"
                            value={this.state.hairColor}
                            onChange={this.onChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formBackstory">
                        <Form.Label>Backstory</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="3"
                            name="backStory"
                            value={this.state.backStory}
                            onChange={this.onChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group controlId="formPersonality">
                    <Form.Label>Personality</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Personality"
                        name="personality"
                        value={this.state.personality}
                        onChange={this.onChange}
                    />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formBonds">
                    <Form.Label>Bonds</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Bonds"
                        name="bonds"
                        value={this.state.bonds}
                        onChange={this.onChange}
                    />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formIdeal">
                    <Form.Label>Ideal</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ideal"
                        name="ideal"
                        value={this.state.ideal}
                        onChange={this.onChange}
                    />
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formFlawn">
                    <Form.Label>Flawn</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Flawn"
                        name="flawn"
                        value={this.state.flawn}
                        onChange={this.onChange}
                    />
                </Form.Group>
                </Col>
            </Row>
        </div>
        )
    }
}

export default CharacterDescriptionComponent;