import React, { Component } from "react";
import ListComponent from '../GeneralComponents/ListComponent/listComponent'

class ItemListComponent extends Component {
    renderTableData(backgrounds) {
        return (backgrounds || {}).map((background, index) => {
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

    render() {
        const tableHeadFields = ['Name', 'Source', 'Page number'];

        return (
            <ListComponent urlToFetch='/backgrounds' tableHeadFields={tableHeadFields} renderTableData={this.renderTableData}>
            </ListComponent>
        )
    }
}

export default ItemListComponent