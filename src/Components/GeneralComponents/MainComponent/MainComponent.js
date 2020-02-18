import React, { Component } from "react";
import BackgroundListComponent from "../../BackgroundComponents/backgroundListComponent";
import ClassListComponent from "../../ClassComponents/classListComponent";
import FeatListComponent from "../../FeatComponents/featListComponent";
import ItemListComponent from "../../ItemComponents/itemListComponent";
import RaceListComponent from "../../RaceComponents/raceListComponent";
import SpellListComponent from "../../SpellComponents/spellListComponent";
import { Route} from 'react-router-dom';

class MainComponent extends Component {
    render() {
        return (
            <div>
                <Route path="/backgrounds" component={BackgroundListComponent}></Route>
                <Route path="/classes" component={ClassListComponent}></Route>
                <Route path="/feats" component={FeatListComponent}></Route>
                <Route path="/items" component={ItemListComponent}></Route>
                <Route path="/races" component={RaceListComponent}></Route>
                <Route path="/spells" component={SpellListComponent}></Route>
            </div>
          )
      }
}

export default MainComponent;