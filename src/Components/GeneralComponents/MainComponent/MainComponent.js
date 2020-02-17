import React, { Component } from "react";
import BackgroundListComponent from "../../BackgroundComponents/backgroundListComponent";
import ItemListComponent from "../../ItemComponents/itemListComponent";
import { Route} from 'react-router-dom';

class MainComponent extends Component {
    render() {
        return (
            <div>
                <Route path="/backgrounds" component={BackgroundListComponent}></Route>
                <Route path="/items" component={ItemListComponent}></Route>
            </div>
          )
      }
}

export default MainComponent;