import React, { Component } from "react";
import BackgroundListComponent from "../../BackgroundComponents/backgroundListComponent";
import ClassListComponent from "../../ClassComponents/classListComponent";
import FeatListComponent from "../../FeatComponents/featListComponent";
import ItemListComponent from "../../ItemComponents/itemListComponent";
import RaceListComponent from "../../RaceComponents/raceListComponent";
import SpellListComponent from "../../SpellComponents/spellListComponent";
import SignInFormComponent from "../../SignInComponents/SignInFormComponent";
import SignUpFormComponent from "../../SignUpComponents/SignUpFormComponent";
import BackgroundFormComponent from "../../BackgroundComponents/backgroundFormComponent";
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
                <Route path="/signup" component={SignUpFormComponent}></Route>
                <Route path="/signin" component={SignInFormComponent}></Route>
                <Route path="/createbackground" component={BackgroundFormComponent}></Route>
            </div>
          )
      }
}

export default MainComponent;