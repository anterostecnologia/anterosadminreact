import React, { Component } from 'react';
import AnterosCard from "../components/AnterosCard";
import AnterosButton from '../components/AnterosButton';
import AnterosButtonGroup from '../components/AnterosButtonGroup';
import AnterosDropdownButton from '../components/AnterosDropdownButton';
import AnterosDropdownMenu from '../components/AnterosDropdownMenu';
import AnterosDropdownMenuItem from '../components/AnterosDropdownMenuItem';
import AnterosFloatingButton, { AnterosFloatingButtonItem } from "../components/AnterosFloatingButton";
import AnterosRadialButton from "../components/AnterosRadialButton";
import AnterosDropdownDivider from "../components/AnterosDropdownDivider";


export default class ButtonView extends Component {
    render() {
        return (<AnterosCard title="Buttons">

            <div className="row">

                <div className="col-6">
                    <AnterosCard title="Button colors">
                        <section className="section">
                            <AnterosButton primary caption="Primary" />
                            <AnterosButton secondary caption="Secondary" />
                            <AnterosButton success caption="Success" />
                            <AnterosButton info caption="Info" />
                            <AnterosButton warning caption="Warning" />
                            <AnterosButton danger caption="Danger" />
                            <AnterosButton link caption="Button Link" />
                        </section>
                    </AnterosCard>
                </div>

                <div className="col-6">
                    <AnterosCard title="Outline buttons">
                        <section className="section">
                            <AnterosButton primary outline caption="Primary" />
                            <AnterosButton secondary outline caption="Secondary" />
                            <AnterosButton success outline caption="Success" />
                            <AnterosButton info outline caption="Info" />
                            <AnterosButton warning outline caption="Warning" />
                            <AnterosButton danger outline caption="Danger" />
                        </section>
                    </AnterosCard>
                </div>

            </div>


            <div className="row" height="640px">
                <div className="col-6">
                    <AnterosCard title="Button sizing" height="524p">
                        <AnterosCard title="Large buttons" height="100%">
                            <section className="section">
                                <AnterosButton large primary caption="Primary" />
                                <AnterosButton large secondary caption="Secondary" />
                                <AnterosButton large success caption="Success" />
                                <AnterosButton large info caption="Info" />
                                <AnterosButton large warning caption="Warning" />
                                <AnterosButton large danger caption="Danger" />
                            </section>
                        </AnterosCard>

                        <AnterosCard title="Small buttons" >
                            <section className="section">
                                <AnterosButton small primary caption="Primary" />
                                <AnterosButton small secondary caption="Secondary" />
                                <AnterosButton small success caption="Success" />
                                <AnterosButton small info caption="Info" />
                                <AnterosButton small warning caption="Warning" />
                                <AnterosButton small danger caption="Danger" />
                            </section>
                        </AnterosCard>

                        <AnterosCard title="Block buttons" >
                            <section className="section">
                                <AnterosButton large primary block caption="Block level button" />
                                <AnterosButton small secondary block caption="Block level button" />
                            </section>
                        </AnterosCard>

                    </AnterosCard>
                </div>

                <div className="col-6">
                    <AnterosCard title="Button types" height="615px">
                        <AnterosCard title="Pill left" >
                            <section className="section">
                                <AnterosButton primary pillLeft caption="Primary" />
                                <AnterosButton secondary pillLeft caption="Secondary" />
                                <AnterosButton success pillLeft caption="Success" />
                                <AnterosButton info pillLeft caption="Info" />
                                <AnterosButton warning pillLeft caption="Warning" />
                                <AnterosButton danger pillLeft caption="Danger" />
                            </section>
                        </AnterosCard>
                        <AnterosCard title="Pill right" >
                            <section className="section">
                                <AnterosButton primary pillRight caption="Primary" />
                                <AnterosButton secondary pillRight caption="Secondary" />
                                <AnterosButton success pillRight caption="Success" />
                                <AnterosButton info pillRight caption="Info" />
                                <AnterosButton warning pillRight caption="Warning" />
                                <AnterosButton danger pillRight caption="Danger" />
                            </section>
                        </AnterosCard>
                        <AnterosCard title="Oval" >
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
                    <AnterosCard title="Circle buttons">
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
                    <AnterosCard title="Button dropdowns" height="473px">
                        <AnterosCard title="Dropdowns" height="250px">
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
                    <AnterosCard title="Buttons group" height="500px">
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
                    <AnterosCard title="Social buttons" height="500px">
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
                    <AnterosCard height="250px" title="Floating button">
                        <AnterosFloatingButton icon="fa fa-plus" hint="Menu" autoClose={true}>
                            <AnterosFloatingButtonItem icon="fa fa-pencil" hint="Editar" backgroundColor="#f1c40f" onButtonClick={() => console.log("Clicou no botão editar")} />
                            <AnterosFloatingButtonItem icon="fa fa-eraser" hint="Remover" backgroundColor="#e74c3c" onButtonClick={() => console.log("Clicou no botão remover")} />
                            <AnterosFloatingButtonItem icon="fa fa-search" hint="Localizar" backgroundColor="#7cb342" onButtonClick={() => console.log("Clicou no botão localizar")} />
                            <AnterosFloatingButtonItem icon="fa fa-print" hint="Imprimir" onButtonClick={() => console.log("Clicou no botão imprimir")} />
                        </AnterosFloatingButton>
                    </AnterosCard>
                </div>
                <div className="col-6">
                    <AnterosCard height="250px" title="Radial button">
                        <AnterosRadialButton />
                    </AnterosCard>
                </div>
            </div>

        </AnterosCard >);
    }
}



