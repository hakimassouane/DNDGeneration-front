import React, { Component } from "react";
import BackgroundListComponent from "../../BackgroundComponents/backgroundListComponent";
import ClassListComponent from "../../ClassComponents/classListComponent";
import FeatListComponent from "../../FeatComponents/featListComponent";
import ItemListComponent from "../../ItemComponents/itemListComponent";
import RaceListComponent from "../../RaceComponents/raceListComponent";
import SpellListComponent from "../../SpellComponents/spellListComponent";
import CharacterListComponent from "../../CharacterComponents/characterListComponent";
import SignInFormComponent from "../../SignInComponents/SignInFormComponent";
import SignUpFormComponent from "../../SignUpComponents/SignUpFormComponent";
import BackgroundFormComponent from "../../BackgroundComponents/backgroundFormComponent";
import CharacterFormComponent from "../../CharacterComponents/CharacterComponent"
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
                <Route path="/characters" component={CharacterListComponent}></Route>
                <Route path="/signup" component={SignUpFormComponent}></Route>
                <Route path="/signin" component={SignInFormComponent}></Route>
                <Route path="/createBackground" component={BackgroundFormComponent}></Route>
                <Route path="/createCharacter" component={CharacterFormComponent}></Route>
            </div>
          )
      }
}

export default MainComponent;