import React, { Component } from "react";
import ListComponent from '../GeneralComponents/ListComponent/listComponent'
import { Button, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CharacterListComponent extends Component {
    renderTableData(characters) {
        return (characters || {}).map((character) => {
            const { _id, characterName, level, race, classe } = character
            /*<td><a href={"/characters/" + _id}>{characterName}</a></td> mettre un link to vers la page fiche personnage et envoyer _id en argument*/
            return (
               <tr key={characterName}>
                  <td><Link to={{pathname: "/character", state: {id: _id} }}><a href={"/characters/" + _id}>{characterName}</a></Link></td>
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