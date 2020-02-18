import React, { Component } from "react";
import ListComponent from '../GeneralComponents/ListComponent/listComponent'

class ItemListComponent extends Component {
    renderTableData(items) {
        return (items || {}).map((item) => {
            const { _id, name, type, rarity, entries, source } = item
            const description = (entries == null || entries == undefined) ? "None" : entries[0].toString();
            return (
               <tr key={name}>
                  <td><a href={"/items/" + _id}>{name}</a></td>
                  <td>{description}</td>
                  <td>{rarity}</td>
                  <td>{type}</td>
                  <td>{source}</td>
               </tr>
            )
         })
    }

    render() {
        const tableHeadFields = ['Name', 'Description', 'Rarity', 'Type', 'Source'];

        return (
            <ListComponent urlToFetch='/items' tableHeadFields={tableHeadFields} renderTableData={this.renderTableData}>
            </ListComponent>
        )
    }
}

export default ItemListComponent