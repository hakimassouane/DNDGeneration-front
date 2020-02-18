import React, { Component } from "react";
import ListComponent from '../GeneralComponents/ListComponent/listComponent'

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
            <ListComponent urlToFetch='/backgrounds' tableHeadFields={tableHeadFields} renderTableData={this.renderTableData}>
            </ListComponent>
        )
    }
}

export default BackgroundListComponent