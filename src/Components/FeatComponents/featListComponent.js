import React, { Component } from "react";
import ListComponent from '../GeneralComponents/ListComponent/listComponent'

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
            <ListComponent urlToFetch='/feats' tableHeadFields={tableHeadFields} renderTableData={this.renderTableData}>
            </ListComponent>
        )
    }
}

export default FeatListComponent