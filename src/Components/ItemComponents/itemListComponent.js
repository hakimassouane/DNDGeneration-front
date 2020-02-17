import React, { Component } from "react";
import ListComponent from '../GeneralComponents/ListComponent/listComponent'

class ItemListComponent extends Component {
    renderTableData(items) {
        return (items || {}).map((item, index) => {
            const { name, type, rarity, description, source } = item
            return (
               <tr key={name}>
                  <td>{name}</td>
                  <td>{type}</td>
                  <td>{rarity}</td>
                  <td>{description}</td>
                  <td>{source}</td>
               </tr>
            )
         })
    }

    render() {
        const tableHeadFields = ['Name', 'Type', 'Rarity', 'Description', 'Source'];

        return (
            <ListComponent urlToFetch='/items' tableHeadFields={tableHeadFields} renderTableData={this.renderTableData}>
            </ListComponent>
        )
    }
}

export default ItemListComponent