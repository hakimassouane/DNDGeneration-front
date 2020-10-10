import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import CharacterService from '../../Services/character'
import './charactersheetComponent.css'


class CharactersheetComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            callback: "",
            strengthModifier: "",
            dexterityModifier: "",
            constitutionModifier: "",
            wisdomModifier: "",
            intelligenceModifier: "",
            charismaModifier: "",
            error: ""
        }
    }

    downloadToPdf() {
        const input = document.getElementById("charactersheet");
        window.scrollTo(0,0);
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF("p", "mm", "a4");
            var width = pdf.internal.pageSize.getWidth();
            var height = pdf.internal.pageSize.getHeight();
            //pdf.addImage(imgData, 'JPEG', -85, 0, width+170, height);
            pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
            pdf.save("download.pdf");
          });
    }

    async getCharacter(){
        try {
            const response = await CharacterService.getCharacter(this.props.location.state.id);
            if (response.data.error) {
                this.setState({error: response.data.error.message});
            } else {
                this.setState({callback: ' Character load'})
                this.setState({data: response.data})
                this.setStrengthModifier();
            }
        } catch (error) {
            this.setState({error: error.message})
        }
    }

    setStrengthModifier(){
        this.setState({strengthModifier: this.getModifier(this.state.data.strengthScore)})
        this.setState({dexterityModifier: this.getModifier(this.state.data.dexterityScore)})
        this.setState({constitutionModifier: this.getModifier(this.state.data.constitutionScore)})
        this.setState({wisdomModifier: this.getModifier(this.state.data.wisdomScore)})
        this.setState({intelligenceModifier: this.getModifier(this.state.data.intelligenceScore)})
        this.setState({charismaModifier: this.getModifier(this.state.data.charismaScore)})
    }

    getModifier(score) {
        switch(score) {
            case 8:
            case 9:
                return -1;
            case 10:
            case 11:
                return 0;
            case 12:
            case 13:
                return 1;
            case 14:
            case 15:
                return 2;
            case 16:
            case 17:
                return 3;
            case 18:
            case 19:
                return 4;
            case 20:
                return 5;
            default:
                return 0
        }
    }

    componentDidMount(){
        this.getCharacter();
    }


  render() {
    return(
        <div>
            <div id='charactersheet'>
                <form class="charsheet">
                    <header>
                        <section class="charname">
                            <label for="charname">Character Name</label><input name="charname" value={this.state.data.characterName} placeholder="Thoradin Fireforge" />
                        </section>
                        <section class="misc">
                            <ul>
                                <li>
                                    <label for="classlevel">Class & Level</label><input name="classlevel" value={this.state.data.classe + " " + this.state.data.level} placeholder="Paladin 2" />
                                </li>
                                <li>
                                    <label for="background">Background</label><input name="background" value={this.state.data.backgroundName} placeholder="Acolyte" />
                                </li>
                                <li>
                                    <label for="playername">Player Name</label><input name="playername" placeholder="Player McPlayerface"/>
                                </li>
                                <li>
                                    <label for="race">Race</label><input name="race" value={this.state.data.race} placeholder="Half-elf" />
                                </li>
                                <li>
                                    <label for="alignment">Alignment</label><input name="alignment" value={this.state.data.alignmentName} placeholder="Lawful Good" />
                                </li>
                                <li>
                                    <label for="experiencepoints">Experience Points</label><input name="experiencepoints" value={this.state.data.xp} placeholder="3240" />
                                </li>
                            </ul>
                        </section>
                    </header>
                    <main>
                        <section>
                            <section class="attributes">
                                <div class="scores">
                                    <ul>
                                        <li>
                                        <div class="score">
                                            <label for="Strengthscore">Strength</label><input name="Strengthscore" value={this.state.data.strengthScore} placeholder="10" />
                                        </div>
                                        <div class="modifier">
                                            <input name="Strengthmod" placeholder="+0" value={this.state.strengthModifier}/>
                                        </div>
                                        </li>
                                        <li>
                                        <div class="score">
                                            <label for="Dexterityscore">Dexterity</label><input name="Dexterityscore" value={this.state.data.dexterityScore} placeholder="10" />
                                        </div>
                                        <div class="modifier">
                                            <input name="Dexteritymod" placeholder="+0" value={this.state.dexterityModifier} />
                                        </div>
                                        </li>
                                        <li>
                                        <div class="score">
                                            <label for="Constitutionscore">Constitution</label><input name="Constitutionscore" value={this.state.data.constitutionScore} placeholder="10" />
                                        </div>
                                        <div class="modifier">
                                            <input name="Constitutionmod" placeholder="+0" value={this.state.constitutionModifier} />
                                        </div>
                                        </li>
                                        <li>
                                        <div class="score">
                                            <label for="Wisdomscore">Wisdom</label><input name="Wisdomscore" value={this.state.data.wisdomScore} placeholder="10" />
                                        </div>
                                        <div class="modifier">
                                            <input name="Wisdommod" placeholder="+0" value={this.state.wisdomModifier} />
                                        </div>
                                        </li>
                                        <li>
                                        <div class="score">
                                            <label for="Intelligencescore">Intelligence</label><input name="Intelligencescore" value={this.state.data.intelligenceScore} placeholder="10" />
                                        </div>
                                        <div class="modifier">
                                            <input name="Intelligencemod" placeholder="+0" value={this.state.itelligenceModifier} />
                                        </div>
                                        </li>
                                        <li>
                                        <div class="score">
                                            <label for="Charismascore">Charisma</label><input name="Charismascore" value={this.state.data.charismaScore} placeholder="10" />
                                        </div>
                                        <div class="modifier">
                                            <input name="Charismamod" placeholder="+0" value={this.state.charismaModifier}/>
                                        </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="attr-applications">
                                    <div class="inspiration box">
                                        <div class="label-container">
                                        <label for="inspiration">Inspiration</label>
                                        </div>
                                        <input name="inspiration" type="checkbox" />
                                    </div>
                                    <div class="proficiencybonus box">
                                        <div class="label-container">
                                        <label for="proficiencybonus">Proficiency Bonus</label>
                                        </div>
                                        <input name="proficiencybonus" placeholder="+2" />
                                    </div>
                                    <div class="saves list-section box">
                                        <ul>
                                        <li>
                                            <label for="Strength-save">Strength</label><input name="Strength-save" placeholder="+0" type="text" value={this.state.strengthModifier} /><input name="Strength-save-prof" type="checkbox" />
                                        </li>
                                        <li>
                                            <label for="Dexterity-save">Dexterity</label><input name="Dexterity-save" placeholder="+0" type="text" value={this.state.dexterityModifier} /><input name="Dexterity-save-prof" type="checkbox" />
                                        </li>
                                        <li>
                                            <label for="Constitution-save">Constitution</label><input name="Constitution-save" placeholder="+0" type="text" value={this.state.constitutionModifier} /><input name="Constitution-save-prof" type="checkbox" />
                                        </li>
                                        <li>
                                            <label for="Wisdom-save">Wisdom</label><input name="Wisdom-save" placeholder="+0" type="text" value={this.state.wisdomModifier} /><input name="Wisdom-save-prof" type="checkbox" />
                                        </li>
                                        <li>
                                            <label for="Intelligence-save">Intelligence</label><input name="Intelligence-save" placeholder="+0" type="text" value={this.state.intelligenceModifier} /><input name="Intelligence-save-prof" type="checkbox" />
                                        </li>
                                        <li>
                                            <label for="Charisma-save">Charisma</label><input name="Charisma-save" placeholder="+0" type="text" value={this.state.charismaModifier} /><input name="Charisma-save-prof" type="checkbox" />
                                        </li>
                                        </ul>
                                        <div class="label">
                                        Saving Throws
                                        </div>
                                    </div>
                                    <div class="skills list-section box">
                                        <ul>
                                        <li>
                                            <label for="Acrobatics">Acrobatics <span class="skill">(Dex)</span></label><input name="Acrobatics" placeholder="+0" type="text" value={this.state.dexterityModifier} /><input name="Acrobatics-prof" type="checkbox" />
                                        </li>
                                        <li>
                                            <label for="Animal Handling">Animal Handling <span class="skill">(Wis)</span></label><input name="Animal Handling" placeholder="+0" type="text" value={this.state.wisdomModifier} /><input name="Animal Handling-prof" type="checkbox" />
                                        </li>
                                        <li>
                                            <label for="Arcana">Arcana <span class="skill">(Int)</span></label><input name="Arcana" placeholder="+0" type="text" value={this.state.intelligenceModifier} /><input name="Arcana-prof" type="checkbox" />
                                        </li>
                                        <li>
                                            <label for="Athletics">Athletics <span class="skill">(Str)</span></label><input name="Athletics" placeholder="+0" type="text" value={this.state.strengthModifier} /><input name="Athletics-prof" type="checkbox" />
                                        </li>
                                        <li>
                                            <label for="Deception">Deception <span class="skill">(Cha)</span></label><input name="Deception" placeholder="+0" type="text" value={this.state.charismaModifier} /><input name="Deception-prof" type="checkbox" />
                                        </li>
                                        <li>
                                            <label for="History">History <span class="skill">(Int)</span></label><input name="History" placeholder="+0" type="text" value={this.state.intelligenceModifier} /><input name="History-prof" type="checkbox" />
                                        </li>
                                        <li>
                                            <label for="Insight">Insight <span class="skill">(Wis)</span></label><input name="Insight" placeholder="+0" type="text" value={this.state.wisdomModifier} /><input name="Insight-prof" type="checkbox" />
                                        </li>
                                        <li>
                                            <label for="Intimidation">Intimidation <span class="skill">(Cha)</span></label><input name="Intimidation" placeholder="+0" type="text" value={this.state.charismaModifier}/><input name="Intimidation-prof" type="checkbox" />
                                        </li>
                                        <li>
                                            <label for="Investigation">Investigation <span class="skill">(Int)</span></label><input name="Investigation" placeholder="+0" type="text" value={this.state.intelligenceModifier}/><input name="Investigation-prof" type="checkbox" />
                                        </li>
                                        <li>
                                            <label for="Medicine">Medicine <span class="skill">(Wis)</span></label><input name="Medicine" placeholder="+0" type="text" value={this.state.wisdomModifier}/><input name="Medicine-prof" type="checkbox" />
                                        </li>
                                        <li>
                                            <label for="Nature">Nature <span class="skill">(Int)</span></label><input name="Nature" placeholder="+0" type="text" value={this.state.intelligenceModifier}/><input name="Nature-prof" type="checkbox" />
                                        </li>
                                        <li>
                                            <label for="Perception">Perception <span class="skill">(Wis)</span></label><input name="Perception" placeholder="+0" type="text" value={this.state.wisdomModifier}/><input name="Perception-prof" type="checkbox" />
                                        </li>
                                        <li>
                                            <label for="Performance">Performance <span class="skill">(Cha)</span></label><input name="Performance" placeholder="+0" type="text" value={this.state.charismaModifier}/><input name="Performance-prof" type="checkbox" />
                                        </li>
                                        <li>
                                            <label for="Persuasion">Persuasion <span class="skill">(Cha)</span></label><input name="Persuasion" placeholder="+0" type="text" value={this.state.charismaModifier}/><input name="Persuasion-prof" type="checkbox" />
                                        </li>
                                        <li>
                                            <label for="Religion">Religion <span class="skill">(Int)</span></label><input name="Religion" placeholder="+0" type="text" value={this.state.intelligenceModifier}/><input name="Religion-prof" type="checkbox" />
                                        </li>
                                        <li>
                                            <label for="Sleight of Hand">Sleight of Hand <span class="skill">(Dex)</span></label><input name="Sleight of Hand" placeholder="+0" type="text" value={this.state.dexterityModifier}/><input name="Sleight of Hand-prof" type="checkbox" />
                                        </li>
                                        <li>
                                            <label for="Stealth">Stealth <span class="skill">(Dex)</span></label><input name="Stealth" placeholder="+0" type="text" value={this.state.dexterityModifier}/><input name="Stealth-prof" type="checkbox" />
                                        </li>
                                        <li>
                                            <label for="Survival">Survival <span class="skill">(Wis)</span></label><input name="Survival" placeholder="+0" type="text" value={this.state.wisdomModifier}/><input name="Survival-prof" type="checkbox" />
                                        </li>
                                        </ul>
                                        <div class="label">
                                        Skills
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div class="passive-perception box">
                                <div class="label-container">
                                <label for="passiveperception">Passive Wisdom (Perception)</label>
                                </div>
                                <input name="passiveperception" placeholder="10" />
                            </div>
                            <div class="otherprofs box textblock">
                                <label for="otherprofs">Other Proficiencies and Languages</label><textarea name="otherprofs"></textarea>
                            </div>
                        </section>
                        <section>
                            <section class="combat">
                                <div class="armorclass">
                                    <div>
                                        <label for="ac">Armor Class</label><input name="ac" placeholder="10" type="text" value={10 + this.state.constitutionModifier} />
                                    </div>
                                </div>
                                <div class="initiative">
                                    <div>
                                        <label for="initiative">Initiative</label><input name="initiative" placeholder="+0" type="text" value={this.state.dexterityModifier} />
                                    </div>
                                </div>
                                <div class="speed">
                                    <div>
                                        <label for="speed">Speed</label><input name="speed" placeholder="30" type="text" value={30} />
                                    </div>
                                </div>
                                <div class="hp">
                                    <div class="regular">
                                        <div class="max">
                                            <label for="maxhp">Hit Point Maximum</label><input name="maxhp" placeholder="10" type="text" value={12} />
                                        </div>
                                        <div class="current">
                                            <label for="currenthp">Current Hit Points</label><input name="currenthp" type="text" value={12}/>
                                        </div>
                                    </div>
                                    <div class="temporary">
                                        <label for="temphp">Temporary Hit Points</label><input name="temphp" type="text" value={0}/>
                                    </div>
                                </div>
                                <div class="hitdice">
                                    <div>
                                        <div class="total">
                                            <label for="totalhd">Total</label><input name="totalhd" placeholder="2d10" type="text" value={"1d"+12} />
                                        </div>
                                        <div class="remaining">
                                            <label for="remaininghd">Hit Dice</label><input name="remaininghd" type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div class="deathsaves">
                                    <div>
                                        <div class="label">
                                            <label>Death Saves</label>
                                        </div>
                                        <div class="marks">
                                            <div class="deathsuccesses">
                                                <label>Successes</label>
                                                <div class="bubbles">
                                                    <input name="deathsuccess1" type="checkbox" />
                                                    <input name="deathsuccess2" type="checkbox" />
                                                    <input name="deathsuccess3" type="checkbox" />
                                                </div>
                                            </div>
                                            <div class="deathfails">
                                                <label>Failures</label>
                                                <div class="bubbles">
                                                    <input name="deathfail1" type="checkbox" />
                                                    <input name="deathfail2" type="checkbox" />
                                                    <input name="deathfail3" type="checkbox" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="attacksandspellcasting">
                                <div>
                                    <label>Attacks & Spellcasting</label>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                Name
                                                </th>
                                                <th>
                                                Atk Bonus
                                                </th>
                                                <th>
                                                Damage/Type
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input name="atkname1" type="text" />
                                                </td>
                                                <td>
                                                    <input name="atkbonus1" type="text" />
                                                </td>
                                                <td>
                                                    <input name="atkdamage1" type="text" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input name="atkname2" type="text" />
                                                </td>
                                                <td>
                                                    <input name="atkbonus2" type="text" />
                                                </td>
                                                <td>
                                                    <input name="atkdamage2" type="text" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input name="atkname3" type="text" />
                                                </td>
                                                <td>
                                                    <input name="atkbonus3" type="text" />
                                                </td>
                                                <td>
                                                    <input name="atkdamage3" type="text" />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <textarea></textarea>
                                </div>
                            </section>
                            <section class="equipment">
                                <div>
                                    <label>Equipment</label>
                                    <div class="money">
                                        <ul>
                                            <li>
                                                <label for="cp">cp</label><input name="cp" />
                                            </li>
                                            <li>
                                                <label for="sp">sp</label><input name="sp" />
                                            </li>
                                            <li>
                                                <label for="ep">ep</label><input name="ep" />
                                            </li>
                                            <li>
                                                <label for="gp">gp</label><input name="gp" />
                                            </li>
                                            <li>
                                                <label for="pp">pp</label><input name="pp" />
                                            </li>
                                        </ul>
                                    </div>
                                    <textarea placeholder="Equipment list here" value={this.state.data.weaponName + " " + this.state.data.shieldName + " " + this.state.data.armorName}>
                                        
                                    </textarea>
                                </div>
                            </section>
                        </section>
                        <section>
                            <section class="flavor">
                                <div class="personality">
                                    <label for="personality">Personality</label><textarea name="personality" value={this.state.data.personality}>
                                    </textarea>
                                </div>
                                <div class="ideals">
                                    <label for="ideals">Ideals</label><textarea name="ideals" value={this.state.data.ideal}>
                                    </textarea>
                                </div>
                                <div class="bonds">
                                    <label for="bonds">Bonds</label><textarea name="bonds" value={this.state.data.bonds}>
                                    </textarea>
                                </div>
                                    <div class="flaws">
                                <label for="flaws">Flaws</label><textarea name="flaws" value={this.state.data.flawn}>
                                </textarea>
                                </div>
                            </section>
                            <section class="features">
                                <div>
                                    <label for="features">Features & Traits</label><textarea name="features" 
                                        value={"age: " + this.state.data.age 
                                        + "\nheight: " + this.state.data.height
                                        + "\nweight: " + this.state.data.weight
                                        + "\nskin color: " + this.state.data.skinColor
                                        + "\nhair color: " + this.state.data.hairColor
                                        + "\nbackstory: " + this.state.data.backStory}>
                                    </textarea>
                                </div>
                            </section>
                        </section>
                    </main>
                </form>
            </div>
            <Button onClick={this.downloadToPdf}>download</Button>
        </div>
    )
  }
}

export default CharactersheetComponent;