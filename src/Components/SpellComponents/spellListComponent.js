import React, { Component } from "react";
import ListComponent from '../GeneralComponents/ListComponent/listComponent'
import { Button, Row, Col, Container } from 'react-bootstrap';
import { Link} from 'react-router-dom';

class SpellListComponent extends Component {
    renderTableData(spells) {
        return (spells || {}).map((spell) => {
            const { _id, name, level, school, source, page } = spell
            return (
               <tr key={name}>
                  <td><a href={"/spells/" + _id}>{name}</a></td>
                  <td>{level}</td>
                  <td>{school}</td>
                  <td>{source}</td>
                  <td>{page}</td>
               </tr>
            )
         })
    }

    render() {
        const tableHeadFields = ['Name', 'Level', 'School', 'Source', 'Page'];

        return (
            <div>
                <ListComponent urlToFetch='/spells' tableHeadFields={tableHeadFields} renderTableData={this.renderTableData}>
                </ListComponent>
                <Container fluid id="buttoncreate">
                    <Row>
                        <Col>
                            <Link to="/createSpell">
                                <Button>Create spell</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default SpellListComponent