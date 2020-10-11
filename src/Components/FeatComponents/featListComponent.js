import React, { Component } from "react";
import ListComponent from '../GeneralComponents/ListComponent/listComponent'
import { Button, Row, Col, Container } from 'react-bootstrap';
import { Link} from 'react-router-dom';

class FeatListComponent extends Component {
    renderTableData(feats) {
        return (feats || {}).map((feat) => {
            const { _id, name, entries, source, page } = feat
            return (
               <tr key={name}>
                    <td><a href={"/feats/" + _id}>{name}</a></td>
                    <td>{entries[0]}</td>
                    <td>{source}</td>
                    <td>{page}</td>
               </tr>
            )
         })
    }

    render() {
        const tableHeadFields = ['Name', 'Description', 'Source', 'Page number'];

        return (
            <div>
                <ListComponent urlToFetch='/feats' tableHeadFields={tableHeadFields} renderTableData={this.renderTableData}>
                </ListComponent>
                <Container fluid id="buttoncreate">
                    <Row>
                        <Col>
                            <Link to="/createFeat">
                                <Button>Create feat</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        )
    }
}

export default FeatListComponent