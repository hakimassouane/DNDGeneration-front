import React, { Component } from "react";
import { Table } from 'react-bootstrap';
import BreadcrumbComponent from '../Breadcrumb/BreadcrumbComponent';

class listComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          data: []
        };
    }

    componentDidMount () {
        fetch(this.props.urlToFetch)
          .then(res => res.json())
          .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    data: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
          )
      }

      renderTableHeader() {
        const header = this.props.tableHeadFields
        return header.map((key, index) => {
            return <th key={index}>{key}</th>
        })
      }

    render () {
        return (
            <div>
                <BreadcrumbComponent></BreadcrumbComponent>
                <Table striped bordered hover size="sm">
                    <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.props.renderTableData(this.state.data)}
                    </tbody>
                </Table>
            </div>
         )
    }
}

export default listComponent;