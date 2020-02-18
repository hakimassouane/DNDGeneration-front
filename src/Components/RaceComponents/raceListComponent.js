import React, { Component } from "react";
import ListComponent from '../GeneralComponents/ListComponent/listComponent'

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
            <ListComponent urlToFetch='/races' tableHeadFields={tableHeadFields} renderTableData={this.renderTableData}>
            </ListComponent>
        )
    }
}

export default RaceListComponent