import React, { Component } from "react";
import { Table } from 'react-bootstrap';
import BreadcrumbComponent from '../GeneralComponents/Breadcrumb/BreadcrumbComponent'

const urlLocal = '/backgrounds';

class BackgroundListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          backgrounds: []
        };
    }

    componentDidMount () {
        fetch(urlLocal)
          .then(res => res.json())
          .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    backgrounds: result
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

    renderTableData() {
        return this.state.backgrounds.map((background, index) => {
           const { name, source, page } = background
           return (
              <tr key={name}>
                 <td>{name}</td>
                 <td>{source}</td>
                 <td>{page}</td>
              </tr>
           )
        })
     }

    render () {
        return (
            <div>
                <BreadcrumbComponent></BreadcrumbComponent>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Source</th>
                        <th>Page n°</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </Table>
            </div>
         )
    }
}

export default BackgroundListComponent