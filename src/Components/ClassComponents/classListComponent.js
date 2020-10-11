import React, { Component } from "react";
import ListComponent from '../GeneralComponents/ListComponent/listComponent'
import { Button, Row, Col, Container } from 'react-bootstrap';
import { Link} from 'react-router-dom';

class ClassListComponent extends Component {
    renderTableData(classes) {
        return (classes || {}).map((classItem) => {
            const { _id, name, hd, source } = classItem
            return (
               <tr key={name}>
                    <td><a href={"/classes/" + _id}>{name}</a></td>
                    <td>{hd.number + "d" + hd.faces}</td>
                    <td>{source}</td>
               </tr>
            )
         })
    }

    render() {
        const tableHeadFields = ['Name', 'Hit dice', 'Source'];

        return (
            <div>
                <ListComponent urlToFetch='/classes' tableHeadFields={tableHeadFields} renderTableData={this.renderTableData}>
                </ListComponent>
                <Container fluid id="buttoncreate">
                    <Row>
                        <Col>
                            <Link to="/createClasse">
                                <Button>Create classe</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ClassListComponent