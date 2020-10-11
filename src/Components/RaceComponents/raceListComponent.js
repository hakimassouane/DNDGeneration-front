import React, { Component } from "react";
import ListComponent from '../GeneralComponents/ListComponent/listComponent'
import { Button, Row, Col, Container } from 'react-bootstrap';
import { Link} from 'react-router-dom';

class RaceListComponent extends Component {
    renderTableData(races) {
        return (races || {}).map((race) => {
            const { _id, name, source, page } = race
            return (
               <tr key={name}>
                  <td><a href={"/races/" + _id}>{name}</a></td>
                  <td>{source}</td>
                  <td>{page}</td>
               </tr>
            )
         })
    }

    render() {
        const tableHeadFields = ['Name', 'Source', 'Page number'];

        return (
            <div>
                <ListComponent urlToFetch='/races' tableHeadFields={tableHeadFields} renderTableData={this.renderTableData}>
                </ListComponent>
                <Container fluid id="buttoncreate">
                    <Row>
                        <Col>
                            <Link to="/createRace">
                                <Button>Create race</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        )
    }
}

export default RaceListComponent