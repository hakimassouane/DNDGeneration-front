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
import CharactersheetComponent from "../../CharacterComponents/CharactersheetComponent";
import FeatFormComponent from "../../FeatComponents/featFormComponent"
import RaceFormComponent from "../../RaceComponents/raceFormComponent"
import ClasseFormComponenet from "../../ClassComponents/classFormComponent"
import ItemFormComponent from "../../ItemComponents/ItemFormComponent"
import SpellFormComponent from "../../SpellComponents/SpellFormComponent"
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
                <Route path="/character" component={CharactersheetComponent}></Route>
                <Route path="/signup" component={SignUpFormComponent}></Route>
                <Route path="/signin" component={SignInFormComponent}></Route>
                <Route path="/createBackground" component={BackgroundFormComponent}></Route>
                <Route path="/createCharacter" component={CharacterFormComponent}></Route>
                <Route path="/createFeat" component={FeatFormComponent}></Route>
                <Route path="/createRace" component={RaceFormComponent}></Route>
                <Route path="/createClasse" component={ClasseFormComponenet}></Route>
                <Route path="/createItem" component={ItemFormComponent}></Route>
                <Route path="/createSpell" component={SpellFormComponent}></Route>
            </div>
          )
      }
}

export default MainComponent;