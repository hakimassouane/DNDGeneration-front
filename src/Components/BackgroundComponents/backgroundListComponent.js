import React, { Component } from "react";
import ListComponent from '../GeneralComponents/ListComponent/listComponent'
import { Button, Row, Col, Container } from 'react-bootstrap';
import { Link} from 'react-router-dom';

class BackgroundListComponent extends Component {
    renderTableData(backgrounds) {
        return (backgrounds || {}).map((background) => {
            const { _id, name, skillProficiencies, source, page } = background
            return (
               <tr key={name}>
                  <td><a href={"/backgrounds/" + _id}>{name}</a></td>
                  <td>{skillProficiencies || "None"}</td>
                  <td>{source}</td>
                  <td>{page}</td>
               </tr>
            )
         })
    }

    render() {
        const tableHeadFields = ['Name', 'Skill proficiencies', 'Source', 'Page number'];

        return (
            <div>
                <ListComponent urlToFetch='/backgrounds' tableHeadFields={tableHeadFields} renderTableData={this.renderTableData}>
                </ListComponent>
                <Container fluid id="buttoncreate">
                    <Row>
                        <Col>
                            <Link to="/createBackground">
                                <Button>Create background</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default BackgroundListComponent