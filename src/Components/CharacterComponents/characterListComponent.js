import React, { Component } from "react";
import ListComponent from '../GeneralComponents/ListComponent/listComponent'
import { Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CharacterListComponent extends Component {
    renderTableData(characters) {
        return (characters || {}).map((character) => {
            const { _id, characterName, level, race, classe } = character
            return (
               <tr key={characterName}>
                  <td><a href={"/characters/" + _id}>{characterName}</a></td>
                  <td>{level}</td>
                  <td>{race}</td>
                  <td>{classe}</td>
               </tr>
            )
         })
    }

    render() {
        const tableHeadFields = ['Name', 'Level', 'Race', 'Classe'];

        return (
            <div>
                <ListComponent urlToFetch='/characters' tableHeadFields={tableHeadFields} renderTableData={this.renderTableData}>
                </ListComponent>
                <Container fluid id="buttoncreate">
                    <Row>
                        <Col>
                            <Link to="/createCharacter">
                                <Button>Create a character</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CharacterListComponent