import React, { Component } from 'react';
import AnterosCard, { HeaderActions } from "../components/AnterosCard";
import AnterosButton from '../components/AnterosButton';
import AnterosButtonGroup from '../components/AnterosButtonGroup';
import AnterosDropdownButton from '../components/AnterosDropdownButton';
import AnterosDropdownMenu from '../components/AnterosDropdownMenu';
import AnterosDropdownMenuItem from '../components/AnterosDropdownMenuItem';
import AnterosFloatingButton, { AnterosFloatingButtonItem } from "../components/AnterosFloatingButton";
import AnterosRadialButton from "../components/AnterosRadialButton";
import AnterosDropdownDivider from "../components/AnterosDropdownDivider";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import AnterosCollapseContent from '../components/AnterosCollapseContent';

const BUTTONS_COLORS = '<AnterosButton primary caption="Primary" />\n\
<AnterosButton secondary caption="Secondary" />\n\
<AnterosButton success caption="Success" />\n\
<AnterosButton info caption="Info" />\n\
<AnterosButton warning caption="Warning" />\n\
<AnterosButton danger caption="Danger" />\n\
<AnterosButton link caption="Button Link" />';

const BUTTONS_OUTLINE = '<AnterosButton primary outline caption="Primary" />\n\
<AnterosButton secondary outline caption="Secondary" />\n\
<AnterosButton success outline caption="Success" />\n\
<AnterosButton info outline caption="Info" />\n\
<AnterosButton warning outline caption="Warning" />\n\
<AnterosButton danger outline caption="Danger" />'

export default class ButtonView extends Component {
    render() {
        return (<AnterosCard caption="Buttons">

            <div className="row">
                <div className="col-6">
                    <AnterosCard caption="Button colors">
                        <HeaderActions>
                            <AnterosButton circle small link icon="fa fa-code"
                                hint="Show code" hintPosition="left"
                                collapseContent="idShowButtonsColors" />
                        </HeaderActions>
                        <section className="section">
                            <AnterosButton primary caption="Primary" />
                            <AnterosButton secondary caption="Secondary" />
                            <AnterosButton success caption="Success" />
                            <AnterosButton info caption="Info" />
                            <AnterosButton warning caption="Warning" />
                            <AnterosButton danger caption="Danger" />
                            <AnterosButton link caption="Button Link" />
                        </section>
                        <AnterosCollapseContent id="idShowButtonsColors"
                            style={{ border: "1px solid #cfd8dc", backgroundColor: "rgb(248, 248, 255)", marginTop: "10px" }}>
                            <br></br>
                            <SyntaxHighlighter style={docco}>{BUTTONS_COLORS}</SyntaxHighlighter>
                        </AnterosCollapseContent>
                    </AnterosCard>
                </div>

                <div className="col-6">
                    <AnterosCard caption="Outline buttons">
                        <HeaderActions>
                            <AnterosButton circle small link icon="fa fa-code"
                                hint="Show code" hintPosition="left"
                                collapseContent="idShowButtonsOutline" />
                        </HeaderActions>
                        <section className="section">
                            <AnterosButton primary outline caption="Primary" />
                            <AnterosButton secondary outline caption="Secondary" />
                            <AnterosButton success outline caption="Success" />
                            <AnterosButton info outline caption="Info" />
                            <AnterosButton warning outline caption="Warning" />
                            <AnterosButton danger outline caption="Danger" />
                        </section>
                        <AnterosCollapseContent id="idShowButtonsOutline"
                            style={{ border: "1px solid #cfd8dc", backgroundColor: "rgb(248, 248, 255)", marginTop: "10px" }}>
                            <br></br>
                            <SyntaxHighlighter style={docco}>{BUTTONS_OUTLINE}</SyntaxHighlighter>
                        </AnterosCollapseContent>
                    </AnterosCard>
                </div>

            </div>


            <div className="row" height="640px">
                <div className="col-6">
                    <AnterosCard caption="Button sizing" height="524p">
                        <AnterosCard caption="Large buttons" height="100%">
                            <HeaderActions>
                                <AnterosButton circle small link icon="fa fa-code"
                                    hint="Show code" hintPosition="left"
                                    collapseContent="idShowButtonsColors" />
                            </HeaderActions>
                            <section className="section">
                                <AnterosButton large primary caption="Primary" />
                                <AnterosButton large secondary caption="Secondary" />
                                <AnterosButton large success caption="Success" />
                                <AnterosButton large info caption="Info" />
                                <AnterosButton large warning caption="Warning" />
                                <AnterosButton large danger caption="Danger" />
                            </section>
                        </AnterosCard>

                        <AnterosCard caption="Small buttons" >
                            <HeaderActions>
                                <AnterosButton circle small link icon="fa fa-code"
                                    hint="Show code" hintPosition="left"
                                    collapseContent="idShowButtonsColors" />
                            </HeaderActions>
                            <section className="section">
                                <AnterosButton small primary caption="Primary" />
                                <AnterosButton small secondary caption="Secondary" />
                                <AnterosButton small success caption="Success" />
                                <AnterosButton small info caption="Info" />
                                <AnterosButton small warning caption="Warning" />
                                <AnterosButton small danger caption="Danger" />
                            </section>
                        </AnterosCard>

                        <AnterosCard caption="Block buttons" >
                            <HeaderActions>
                                <AnterosButton circle small link icon="fa fa-code"
                                    hint="Show code" hintPosition="left"
                                    collapseContent="idShowButtonsColors" />
                            </HeaderActions>
                            <section className="section">
                                <AnterosButton large primary block caption="Block level button" />
                                <AnterosButton small secondary block caption="Block level button" />
                            </section>
                        </AnterosCard>

                    </AnterosCard>
                </div>

                <div className="col-6">
                    <AnterosCard caption="Button types" height="615px">
                        <AnterosCard caption="Pill left" >
                            <HeaderActions>
                                <AnterosButton circle small link icon="fa fa-code"
                                    hint="Show code" hintPosition="left"
                                    collapseContent="idShowButtonsColors" />
                            </HeaderActions>
                            <section className="section">
                                <AnterosButton primary pillLeft caption="Primary" />
                                <AnterosButton secondary pillLeft caption="Secondary" />
                                <AnterosButton success pillLeft caption="Success" />
                                <AnterosButton info pillLeft caption="Info" />
                                <AnterosButton warning pillLeft caption="Warning" />
                                <AnterosButton danger pillLeft caption="Danger" />
                            </section>
                        </AnterosCard>
                        <AnterosCard caption="Pill right" >
                            <HeaderActions>
                                <AnterosButton circle small link icon="fa fa-code"
                                    hint="Show code" hintPosition="left"
                                    collapseContent="idShowButtonsColors" />
                            </HeaderActions>
                            <section className="section">
                                <AnterosButton primary pillRight caption="Primary" />
                                <AnterosButton secondary pillRight caption="Secondary" />
                                <AnterosButton success pillRight caption="Success" />
                                <AnterosButton info pillRight caption="Info" />
                                <AnterosButton warning pillRight caption="Warning" />
                                <AnterosButton danger pillRight caption="Danger" />
                            </section>
                        </AnterosCard>
                        <AnterosCard caption="Oval" >
                            <HeaderActions>
                                <AnterosButton circle small link icon="fa fa-code"
                                    hint="Show code" hintPosition="left"
                                    collapseContent="idShowButtonsColors" />
                            </HeaderActions>
                            <section className="section">
                                <AnterosButton primary oval caption="Primary" />
                                <AnterosButton secondary oval caption="Secondary" />
                                <AnterosButton success oval caption="Success" />
                                <AnterosButton info oval caption="Info" />
                                <AnterosButton warning oval caption="Warning" />
                                <AnterosButton danger oval caption="Danger" />
                            </section>
                        </AnterosCard>
                    </AnterosCard>
                </div>

            </div>

            <div className="row">
                <div className="col-6">
                    <AnterosCard caption="Circle buttons">
                        <HeaderActions>
                            <AnterosButton circle small link icon="fa fa-code"
                                hint="Show code" hintPosition="left"
                                collapseContent="idShowButtonsColors" />
                        </HeaderActions>
                        <div className="col-lg-6 col-sm-6 col-xs-12">
                            <div className="white-box">
                                <h3 className="box-title">Normal Circle Buttons</h3>
                                <AnterosButton circle small icon="fa fa-check" />
                                <AnterosButton circle primary small icon="fa fa-list" />
                                <AnterosButton circle success small icon="fa fa-link" />
                                <AnterosButton circle info small icon="fa fa-check" />
                                <AnterosButton circle warning small icon="fa fa-times" />
                                <AnterosButton circle danger small icon="fa fa-heart" />
                                <br></br>
                                <br></br>
                                <h3 className="box-title">Large Circle Buttons</h3>
                                <AnterosButton circle icon="fa fa-check" />
                                <AnterosButton circle primary icon="fa fa-list" />
                                <AnterosButton circle success icon="fa fa-link" />
                                <AnterosButton circle info icon="fa fa-check" />
                                <AnterosButton circle warning icon="fa fa-times" />
                                <AnterosButton circle danger icon="fa fa-heart" />
                                <br></br>
                                <br></br>
                                <h3 className="box-title">Extra Large Circle Buttons</h3>
                                <AnterosButton circle large icon="fa fa-check" />
                                <AnterosButton circle primary large icon="fa fa-list" />
                                <AnterosButton circle success large icon="fa fa-link" />
                                <AnterosButton circle info large icon="fa fa-check" />
                                <AnterosButton circle warning large icon="fa fa-times" />
                                <AnterosButton circle danger large icon="fa fa-heart" />
                            </div>
                        </div>
                    </AnterosCard>
                </div>
                <div className="col-6">
                    <AnterosCard caption="Button dropdowns" height="473px">
                        <AnterosCard caption="Dropdowns" height="250px">
                            <HeaderActions>
                                <AnterosButton circle small link icon="fa fa-code"
                                    hint="Show code" hintPosition="left"
                                    collapseContent="idShowButtonsColors" />
                            </HeaderActions>
                            <AnterosDropdownButton primary caption="Primary">
                                <AnterosDropdownMenu>
                                    <AnterosDropdownMenuItem caption="Item 1" />
                                    <AnterosDropdownMenuItem caption="Item 2" />
                                    <AnterosDropdownMenuItem caption="Item 3" />
                                </AnterosDropdownMenu>
                            </AnterosDropdownButton>

                            <AnterosDropdownButton secondary caption="Secondary">
                                <AnterosDropdownMenu>
                                    <AnterosDropdownMenuItem caption="Item 1" />
                                    <AnterosDropdownMenuItem caption="Item 2" />
                                    <AnterosDropdownMenuItem caption="Item 3" />
                                </AnterosDropdownMenu>
                            </AnterosDropdownButton>

                            <AnterosDropdownButton success caption="Success">
                                <AnterosDropdownMenu>
                                    <AnterosDropdownMenuItem caption="Item 1" />
                                    <AnterosDropdownMenuItem caption="Item 2" />
                                    <AnterosDropdownMenuItem caption="Item 3" />
                                </AnterosDropdownMenu>
                            </AnterosDropdownButton>

                            <AnterosDropdownButton info caption="Info">
                                <AnterosDropdownMenu>
                                    <AnterosDropdownMenuItem caption="Item 1" />
                                    <AnterosDropdownMenuItem caption="Item 2" />
                                    <AnterosDropdownMenuItem caption="Item 3" />
                                </AnterosDropdownMenu>
                            </AnterosDropdownButton>

                            <AnterosDropdownButton warning caption="Warning">
                                <AnterosDropdownMenu>
                                    <AnterosDropdownMenuItem caption="Item 1" />
                                    <AnterosDropdownMenuItem caption="Item 2" />
                                    <AnterosDropdownMenuItem caption="Item 3" />
                                </AnterosDropdownMenu>
                            </AnterosDropdownButton>

                            <AnterosDropdownButton danger caption="Danger">
                                <AnterosDropdownMenu>
                                    <AnterosDropdownMenuItem caption="Item 1" />
                                    <AnterosDropdownMenuItem caption="Item 2" />
                                    <AnterosDropdownMenuItem caption="Item 3" />
                                </AnterosDropdownMenu>
                            </AnterosDropdownButton>

                        </AnterosCard>
                    </AnterosCard>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <AnterosCard caption="Buttons group" height="500px">
                        <HeaderActions>
                            <AnterosButton circle small link icon="fa fa-code"
                                hint="Show code" hintPosition="left"
                                collapseContent="idShowButtonsColors" />
                        </HeaderActions>
                        <section className="section">
                            <p>Basic Example</p>
                            <AnterosButtonGroup>
                                <AnterosButton secondary>Left</AnterosButton>
                                <AnterosButton secondary>Middle</AnterosButton>
                                <AnterosButton secondary>Right</AnterosButton>
                            </AnterosButtonGroup>
                            <AnterosButtonGroup>
                                <AnterosButton primary>Left</AnterosButton>
                                <AnterosButton primary>Middle</AnterosButton>
                                <AnterosButton primary>Right</AnterosButton>
                            </AnterosButtonGroup>
                            <p></p>
                            <p>Button Group Sizing</p>
                            <AnterosButtonGroup large>
                                <AnterosButton secondary>1</AnterosButton>
                                <AnterosButton secondary>2</AnterosButton>
                                <AnterosButton secondary>3</AnterosButton>
                                <AnterosButton secondary>4</AnterosButton>
                            </AnterosButtonGroup>
                            <AnterosButtonGroup large>
                                <AnterosButton secondary>5</AnterosButton>
                                <AnterosButton secondary>6</AnterosButton>
                                <AnterosButton secondary>7</AnterosButton>
                            </AnterosButtonGroup>
                            <AnterosButtonGroup large>
                                <AnterosButton secondary large>8</AnterosButton>
                            </AnterosButtonGroup>
                            <p></p>
                            <AnterosButtonGroup small>
                                <AnterosButton primary>1</AnterosButton>
                                <AnterosButton primary>2</AnterosButton>
                                <AnterosButton primary>3</AnterosButton>
                                <AnterosButton primary>4</AnterosButton>
                            </AnterosButtonGroup>
                            <AnterosButtonGroup small>
                                <AnterosButton primary>5</AnterosButton>
                                <AnterosButton primary>6</AnterosButton>
                                <AnterosButton primary>7</AnterosButton>
                            </AnterosButtonGroup>
                            <AnterosButtonGroup small>
                                <AnterosButton primary>8</AnterosButton>
                            </AnterosButtonGroup>
                            <p></p>
                            <p>Nesting</p>
                            <AnterosButtonGroup>
                                <AnterosButton secondary>1</AnterosButton>
                                <AnterosButton secondary>2</AnterosButton>
                                <AnterosDropdownButton secondary caption="Dropdown">
                                    <AnterosDropdownMenu>
                                        <AnterosDropdownMenuItem caption="Action" />
                                        <AnterosDropdownMenuItem caption="Another action" />
                                        <AnterosDropdownMenuItem caption="Something else here" />
                                        <AnterosDropdownDivider />
                                        <AnterosDropdownMenuItem caption="Separated link" />
                                    </AnterosDropdownMenu>
                                </AnterosDropdownButton>
                            </AnterosButtonGroup>
                            <p></p>
                            <AnterosButtonGroup small>
                                <AnterosButton primary small>1</AnterosButton>
                                <AnterosButton primary small>2</AnterosButton>
                                <AnterosDropdownButton primary small caption="Dropdown">
                                    <AnterosDropdownMenu>
                                        <AnterosDropdownMenuItem caption="Action" />
                                        <AnterosDropdownMenuItem caption="Another action" />
                                        <AnterosDropdownMenuItem caption="Something else here" />
                                        <AnterosDropdownDivider />
                                        <AnterosDropdownMenuItem caption="Separated link" />
                                    </AnterosDropdownMenu>
                                </AnterosDropdownButton>
                            </AnterosButtonGroup>
                        </section>

                    </AnterosCard>
                </div>
                <div className="col-6">
                    <AnterosCard caption="Social buttons" height="500px">
                        <HeaderActions>
                            <AnterosButton circle small link icon="fa fa-code"
                                hint="Show code" hintPosition="left"
                                collapseContent="idShowButtonsColors" />
                        </HeaderActions>
                        <div className="col-6">
                            <p>Social buttons</p>
                            <AnterosButton facebook />
                            <AnterosButton twitter />
                            <AnterosButton googlePlus />
                            <AnterosButton linkedin />
                            <AnterosButton instagram />
                            <AnterosButton pinterest />
                            <AnterosButton dribbble />
                            <AnterosButton youtube />
                            <p>Circle</p>
                            <AnterosButton facebook circle />
                            <AnterosButton twitter circle />
                            <AnterosButton googlePlus circle />
                            <AnterosButton linkedin circle />
                            <AnterosButton instagram circle />
                            <AnterosButton pinterest circle />
                            <AnterosButton dribbble circle />
                            <AnterosButton youtube circle />
                            <p>Rounded</p>
                            <AnterosButton facebook oval />
                            <AnterosButton twitter oval />
                            <AnterosButton googlePlus oval />
                            <AnterosButton linkedin oval />
                            <AnterosButton instagram oval />
                            <AnterosButton pinterest oval />
                            <AnterosButton dribbble oval />
                            <AnterosButton youtube oval />
                        </div>
                    </AnterosCard>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <AnterosCard caption="Buttons with icons and images">
                        <HeaderActions>
                            <AnterosButton circle small link icon="fa fa-code"
                                hint="Show code" hintPosition="left"
                                collapseContent="idShowButtonsColors" />
                        </HeaderActions>
                        <AnterosButton outline icon="fa fa-heart m-r-5">Love</AnterosButton>
                        <AnterosButton outline secondary icon="fa fa-heart m-r-5">Love</AnterosButton>
                        <AnterosButton info icon="fa fa-heart m-l-5">Love</AnterosButton>
                        <AnterosButton success icon="fa fa-check">Success</AnterosButton>
                        <AnterosButton primary oval icon="fa fa-envelope-o">Mail</AnterosButton>
                        <br></br>
                        <br></br>
                        <AnterosButton primary image={require('../assets/img/home_1.png')}>Home</AnterosButton>
                        <AnterosButton success oval image={require('../assets/img/user_1.png')}>User</AnterosButton>
                        <AnterosButton secondary pillLeft image={require('../assets/img/mail_1.png')}>E-mail</AnterosButton>
                    </AnterosCard>
                </div>
            </div>



            <div className="row">
                <div className="col-6">
                    <AnterosCard height="250px" caption="Floating button">
                        <HeaderActions>
                            <AnterosButton circle small link icon="fa fa-code"
                                hint="Show code" hintPosition="left"
                                collapseContent="idShowButtonsColors" />
                        </HeaderActions>
                        <AnterosFloatingButton icon="fa fa-plus" hint="Menu" autoClose={true} openMode="click">
                            <AnterosFloatingButtonItem icon="fa fa-pencil" hint="Editar" backgroundColor="#f1c40f" onButtonClick={() => console.log("Clicou no botão editar")} />
                            <AnterosFloatingButtonItem icon="fa fa-eraser" hint="Remover" backgroundColor="#e74c3c" onButtonClick={() => console.log("Clicou no botão remover")} />
                            <AnterosFloatingButtonItem icon="fa fa-search" hint="Localizar" backgroundColor="#7cb342" onButtonClick={() => console.log("Clicou no botão localizar")} />
                            <AnterosFloatingButtonItem icon="fa fa-print" hint="Imprimir" onButtonClick={() => console.log("Clicou no botão imprimir")} />
                        </AnterosFloatingButton>
                    </AnterosCard>
                </div>
                <div className="col-6">
                    <AnterosCard height="250px" caption="Radial button">
                        <HeaderActions>
                            <AnterosButton circle small link icon="fa fa-code"
                                hint="Show code" hintPosition="left"
                                collapseContent="idShowButtonsColors" />
                        </HeaderActions>
                        <AnterosRadialButton />
                    </AnterosCard>
                </div>
            </div>

        </AnterosCard >);
    }
}



