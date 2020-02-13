import React, { Component } from "react";
import BackgroundListComponent from "../../BackgroundComponents/backgroundListComponent";
import { Route} from 'react-router-dom';

class MainComponent extends Component {
    render() {
        return (
            <Route path="/backgrounds" component={BackgroundListComponent}/>
          )
      }
}

export default MainComponent;