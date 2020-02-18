import React, { Component } from "react";
import ListComponent from '../GeneralComponents/ListComponent/listComponent'

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
            <ListComponent urlToFetch='/classes' tableHeadFields={tableHeadFields} renderTableData={this.renderTableData}>
            </ListComponent>
        )
    }
}

export default ClassListComponent