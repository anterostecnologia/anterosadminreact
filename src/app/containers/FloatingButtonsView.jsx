import React, { Component } from 'react';
import AnterosCard, { HeaderActions } from "../components/AnterosCard";
import AnterosFloatingButton, { AnterosFloatingButtonItem } from "../components/AnterosFloatingButton";
import AnterosDropdownMenu from "../components/AnterosDropdownMenu";
import AnterosDropdownMenuItem from "../components/AnterosDropdownMenuItem";
import AnterosBadge from "../components/AnterosBadge";
import AnterosStatusMark from "../components/AnterosStatusMark";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import AnterosCollapseContent from '../components/AnterosCollapseContent';
import AnterosButton from "../components/AnterosButton";


export default class FloatingButtonsView extends Component {
    render() {
        return (<div className="content">
            <AnterosFloatingButton hint="Menu" autoClose={true} openMode="hover" bottomRight fixed backgroundColor="yellow" color="black" iconOpen="icon-paragraph-justify3">
                <AnterosFloatingButtonItem color="white" icon="fa fa-pencil" hint="Edit" backgroundColor="#f1c40f" onButtonClick={() => console.log("Clicou no botão editar")} />
                <AnterosFloatingButtonItem color="white" icon="fa fa-eraser" hint="Remove" backgroundColor="#e74c3c" onButtonClick={() => console.log("Clicou no botão remover")} />
                <AnterosFloatingButtonItem color="white" icon="fa fa-search" hint="Search" backgroundColor="#7cb342" onButtonClick={() => console.log("Clicou no botão localizar")} />
                <AnterosFloatingButtonItem color="white" icon="fa fa-print" hint="Print" onButtonClick={() => console.log("Clicou no botão imprimir")} />
            </AnterosFloatingButton>

            <AnterosCard caption="Basic examples" withScroll={false}>
                <HeaderActions>
                    <AnterosButton circle small link icon="fa fa-code"
                        hint="Show code" hintPosition="left"
                        collapseContent="idShowButtonsColors" />
                </HeaderActions>
                <div className="row">
                    <div className="col-md-4">
                        <h5> Single floating button</h5>
                        <p className="text-muted">Single clickable button without menu</p>
                        <AnterosFloatingButton hint="Menu" />
                    </div>

                    <div className="col-md-4">
                        <h5>Open menu on hover</h5>
                        <p className="text-muted">Example of hoverable menu</p>
                        <AnterosFloatingButton hint="Menu" autoClose={true} openMode="hover" primary>
                            <AnterosFloatingButtonItem color="white" icon="fa fa-pencil" hint="Edit" backgroundColor="#f1c40f" onButtonClick={() => console.log("Clicou no botão editar")} />
                            <AnterosFloatingButtonItem color="white" icon="fa fa-eraser" hint="Remove" backgroundColor="#e74c3c" onButtonClick={() => console.log("Clicou no botão remover")} />
                            <AnterosFloatingButtonItem color="white" icon="fa fa-search" hint="Search" backgroundColor="#7cb342" onButtonClick={() => console.log("Clicou no botão localizar")} />
                            <AnterosFloatingButtonItem color="white" icon="fa fa-print" hint="Print" onButtonClick={() => console.log("Clicou no botão imprimir")} />
                        </AnterosFloatingButton>
                    </div>

                    <div className="col-md-4">
                        <h5>Open menu on click</h5>
                        <p className="text-muted">Example of clickable menu</p>
                        <AnterosFloatingButton hint="Menu" autoClose={true} openMode="click" primary>
                            <AnterosFloatingButtonItem color="white" icon="icon-pencil" hint="Edit" backgroundColor="#f1c40f" onButtonClick={() => console.log("Clicou no botão editar")} />
                            <AnterosFloatingButtonItem color="white" icon="icon-bubbles7" hint="Remove" backgroundColor="#e74c3c" onButtonClick={() => console.log("Clicou no botão remover")} />
                        </AnterosFloatingButton>
                    </div>
                </div>
            </AnterosCard>

            <AnterosCard caption="Menu elements" withScroll={false}>
                <HeaderActions>
                    <AnterosButton circle small link icon="fa fa-code"
                        hint="Show code" hintPosition="left"
                        collapseContent="idShowButtonsColors" />
                </HeaderActions>
                <div className="row">
                    <div className="col-md-4">
                        <h5>Button with dropdowns</h5>
                        <p className="text-muted">Buttons with left/right dropdowns</p>

                        <AnterosFloatingButton hint="Menu" autoClose={false} openMode="click" primary>
                            <AnterosFloatingButtonItem color="white" icon="fa fa-pencil" hint="Edit" backgroundColor="#f1c40f" onButtonClick={() => console.log("Clicou no botão editar")}>
                                <AnterosDropdownMenu>
                                    <AnterosDropdownMenuItem caption="Item 1" icon="icon-user-lock" />
                                    <AnterosDropdownMenuItem caption="Item 2" icon="icon-statistics" />
                                    <AnterosDropdownMenuItem caption="Item 3" icon="icon-accessibility" />
                                </AnterosDropdownMenu>
                            </AnterosFloatingButtonItem>
                            <AnterosFloatingButtonItem color="white" icon="fa fa-eraser" hint="Remove" backgroundColor="#e74c3c" onButtonClick={() => console.log("Clicou no botão remover")} />
                            <AnterosFloatingButtonItem color="white" icon="fa fa-search" hint="Search" backgroundColor="#7cb342" onButtonClick={() => console.log("Clicou no botão localizar")} />
                            <AnterosFloatingButtonItem color="white" icon="fa fa-print" hint="Print" onButtonClick={() => console.log("Clicou no botão imprimir")} />
                        </AnterosFloatingButton>
                    </div>
                    <div className="col-md-4">
                        <h5>Button with images</h5>
                        <p className="text-muted">Display thumbs instead of buttons</p>

                        <AnterosFloatingButton hint="Menu" autoClose={true} openMode="click" bottom primary>
                            <AnterosFloatingButtonItem color="white" image={require('../assets/img/user_1.png')} hint="Remove" backgroundColor="#e74c3c" onButtonClick={() => console.log("Clicou no botão remover")} />
                            <AnterosFloatingButtonItem color="white" image={require('../assets/img/user_2.jpg')} hint="Search" backgroundColor="#7cb342" onButtonClick={() => console.log("Clicou no botão localizar")} />
                            <AnterosFloatingButtonItem color="white" image={require('../assets/img/user_3.jpg')} hint="Print" onButtonClick={() => console.log("Clicou no botão imprimir")} />
                        </AnterosFloatingButton>
                    </div>
                </div>
            </AnterosCard>

            <AnterosCard caption="Inner button elements" withScroll={false}>
                <HeaderActions>
                    <AnterosButton circle small link icon="fa fa-code"
                        hint="Show code" hintPosition="left"
                        collapseContent="idShowButtonsColors" />
                </HeaderActions>
                <div className="row">
                    <div className="col-md-4">
                        <h5>Badges with number</h5>
                        <p className="text-muted">Rounded badges on top right corner</p>

                        <AnterosFloatingButton hint="Menu" autoClose={true} openMode="click" primary>
                            <AnterosFloatingButtonItem color="white" icon="fa fa-pencil" hint="Edit" backgroundColor="#f1c40f" onButtonClick={() => console.log("Clicou no botão editar")}>
                                <AnterosBadge caption="1" />
                            </AnterosFloatingButtonItem>
                            <AnterosFloatingButtonItem color="white" icon="fa fa-eraser" hint="Remove" backgroundColor="#e74c3c" onButtonClick={() => console.log("Clicou no botão remover")} >
                                <AnterosBadge success caption="2" />
                            </AnterosFloatingButtonItem>
                            <AnterosFloatingButtonItem color="white" icon="fa fa-search" hint="Search" backgroundColor="#7cb342" onButtonClick={() => console.log("Clicou no botão localizar")} >
                                <AnterosBadge warning caption="8" />
                            </AnterosFloatingButtonItem>
                        </AnterosFloatingButton>
                    </div>

                    <div className="col-md-4">
                        <h5>Status mark</h5>
                        <p className="text-muted">Rounded status mark sign</p>

                        <AnterosFloatingButton hint="Menu" autoClose={true} openMode="click" primary>
                            <AnterosFloatingButtonItem color="black" icon="fa fa-pencil" hint="Edit" backgroundColor="white" onButtonClick={() => console.log("Clicou no botão editar")}>
                                <AnterosStatusMark success />
                            </AnterosFloatingButtonItem>
                            <AnterosFloatingButtonItem color="black" icon="fa fa-eraser" hint="Remove" backgroundColor="white" onButtonClick={() => console.log("Clicou no botão remover")} >
                                <AnterosStatusMark danger />
                            </AnterosFloatingButtonItem>
                            <AnterosFloatingButtonItem color="black" icon="fa fa-search" hint="Search" backgroundColor="white" onButtonClick={() => console.log("Clicou no botão localizar")} >
                                <AnterosStatusMark warning />
                            </AnterosFloatingButtonItem>
                        </AnterosFloatingButton>
                    </div>

                    <div className="col-md-4">
                        <h5>Circle status mark</h5>
                        <p className="text-muted">Circle mark on top right corner</p>

                        <AnterosFloatingButton hint="Menu" autoClose={true} openMode="click" primary>
                            <AnterosFloatingButtonItem color="black" icon="fa fa-pencil" hint="Edit" backgroundColor="white" onButtonClick={() => console.log("Clicou no botão editar")}>
                                <AnterosStatusMark success onlyBorder />
                            </AnterosFloatingButtonItem>
                            <AnterosFloatingButtonItem color="black" icon="fa fa-eraser" hint="Remove" backgroundColor="white" onButtonClick={() => console.log("Clicou no botão remover")} >
                                <AnterosStatusMark danger onlyBorder />
                            </AnterosFloatingButtonItem>
                            <AnterosFloatingButtonItem color="black" icon="fa fa-search" hint="Search" backgroundColor="white" onButtonClick={() => console.log("Clicou no botão localizar")} >
                                <AnterosStatusMark warning onlyBorder />
                            </AnterosFloatingButtonItem>
                        </AnterosFloatingButton>
                    </div>
                </div>
            </AnterosCard>

            <AnterosCard caption="Default button colors" withScroll={false}>
                <HeaderActions>
                    <AnterosButton circle small link icon="fa fa-code"
                        hint="Show code" hintPosition="left"
                        collapseContent="idShowButtonsColors" />
                </HeaderActions>
                <div className="row">
                    <div className="col-md-4">
                        <h5>Default button color</h5>
                        <AnterosFloatingButton hint="Menu" autoClose={true} openMode="click">
                            <AnterosFloatingButtonItem color="white" icon="fa fa-pencil" hint="Edit" backgroundColor="#f1c40f" onButtonClick={() => console.log("Clicou no botão editar")} />
                            <AnterosFloatingButtonItem color="white" icon="fa fa-eraser" hint="Remove" backgroundColor="#e74c3c" onButtonClick={() => console.log("Clicou no botão remover")} />
                            <AnterosFloatingButtonItem color="white" icon="fa fa-search" hint="Search" backgroundColor="#7cb342" onButtonClick={() => console.log("Clicou no botão localizar")} />
                        </AnterosFloatingButton>
                    </div>
                    <div className="col-md-4">
                        <h5>Primary button color</h5>
                        <AnterosFloatingButton hint="Menu" autoClose={true} openMode="click" primary>
                            <AnterosFloatingButtonItem color="white" icon="fa fa-pencil" hint="Edit" backgroundColor="#f1c40f" onButtonClick={() => console.log("Clicou no botão editar")} />
                            <AnterosFloatingButtonItem color="white" icon="fa fa-eraser" hint="Remove" backgroundColor="#e74c3c" onButtonClick={() => console.log("Clicou no botão remover")} />
                            <AnterosFloatingButtonItem color="white" icon="fa fa-search" hint="Search" backgroundColor="#7cb342" onButtonClick={() => console.log("Clicou no botão localizar")} />
                        </AnterosFloatingButton>
                    </div>
                    <div className="col-md-4">
                        <h5>Danger button color</h5>
                        <AnterosFloatingButton hint="Menu" autoClose={true} openMode="click" danger>
                            <AnterosFloatingButtonItem color="white" icon="fa fa-pencil" hint="Edit" backgroundColor="#f1c40f" onButtonClick={() => console.log("Clicou no botão editar")} />
                            <AnterosFloatingButtonItem color="white" icon="fa fa-eraser" hint="Remove" backgroundColor="#e74c3c" onButtonClick={() => console.log("Clicou no botão remover")} />
                            <AnterosFloatingButtonItem color="white" icon="fa fa-search" hint="Search" backgroundColor="#7cb342" onButtonClick={() => console.log("Clicou no botão localizar")} />
                        </AnterosFloatingButton>
                    </div>
                    <div className="col-md-4">
                        <h5>Success button color</h5>
                        <AnterosFloatingButton hint="Menu" autoClose={true} openMode="click" success>
                            <AnterosFloatingButtonItem color="white" icon="fa fa-pencil" hint="Edit" backgroundColor="#f1c40f" onButtonClick={() => console.log("Clicou no botão editar")} />
                            <AnterosFloatingButtonItem color="white" icon="fa fa-eraser" hint="Remove" backgroundColor="#e74c3c" onButtonClick={() => console.log("Clicou no botão remover")} />
                            <AnterosFloatingButtonItem color="white" icon="fa fa-search" hint="Search" backgroundColor="#7cb342" onButtonClick={() => console.log("Clicou no botão localizar")} />
                        </AnterosFloatingButton>
                    </div>
                    <div className="col-md-4">
                        <h5>Warning button color</h5>
                        <AnterosFloatingButton hint="Menu" autoClose={true} openMode="click" warning>
                            <AnterosFloatingButtonItem color="white" icon="fa fa-pencil" hint="Edit" backgroundColor="#f1c40f" onButtonClick={() => console.log("Clicou no botão editar")} />
                            <AnterosFloatingButtonItem color="white" icon="fa fa-eraser" hint="Remove" backgroundColor="#e74c3c" onButtonClick={() => console.log("Clicou no botão remover")} />
                            <AnterosFloatingButtonItem color="white" icon="fa fa-search" hint="Search" backgroundColor="#7cb342" onButtonClick={() => console.log("Clicou no botão localizar")} />
                        </AnterosFloatingButton>
                    </div>
                    <div className="col-md-4">
                        <h5>Info button color</h5>
                        <AnterosFloatingButton hint="Menu" autoClose={true} openMode="click" info>
                            <AnterosFloatingButtonItem color="white" icon="fa fa-pencil" hint="Edit" backgroundColor="#f1c40f" onButtonClick={() => console.log("Clicou no botão editar")} />
                            <AnterosFloatingButtonItem color="white" icon="fa fa-eraser" hint="Remove" backgroundColor="#e74c3c" onButtonClick={() => console.log("Clicou no botão remover")} />
                            <AnterosFloatingButtonItem color="white" icon="fa fa-search" hint="Search" backgroundColor="#7cb342" onButtonClick={() => console.log("Clicou no botão localizar")} />
                        </AnterosFloatingButton>
                    </div>
                </div>
            </AnterosCard>

            <AnterosCard caption="Custom colors" withScroll={false}>
                <HeaderActions>
                    <AnterosButton circle small link icon="fa fa-code"
                        hint="Show code" hintPosition="left"
                        collapseContent="idShowButtonsColors" />
                </HeaderActions>
                <div className="row">
                    <div className="col-md-4">
                        <h5>Custom main button color</h5>
                        <p className="text-muted">Use color helper classes for custom colors</p>
                        <AnterosFloatingButton hint="Menu" autoClose={true} openMode="click" backgroundColor="#5c6bc0" color="#fff">
                            <AnterosFloatingButtonItem color="white" icon="fa fa-pencil" hint="Edit" onButtonClick={() => console.log("Clicou no botão editar")} />
                            <AnterosFloatingButtonItem color="white" icon="fa fa-eraser" hint="Remove" onButtonClick={() => console.log("Clicou no botão remover")} />
                            <AnterosFloatingButtonItem color="white" icon="fa fa-search" hint="Search" onButtonClick={() => console.log("Clicou no botão localizar")} />
                        </AnterosFloatingButton>
                    </div>
                    <div className="col-md-4">
                        <h5>Custom inner button color</h5>
                        <p className="text-muted">Use color helper classes for custom colors</p>
                        <AnterosFloatingButton hint="Menu" autoClose={true} openMode="click" primary>
                            <AnterosFloatingButtonItem color="white" icon="fa fa-pencil" hint="Edit" backgroundColor="#f1c40f" onButtonClick={() => console.log("Clicou no botão editar")} />
                            <AnterosFloatingButtonItem color="white" icon="fa fa-eraser" hint="Remove" backgroundColor="#e74c3c" onButtonClick={() => console.log("Clicou no botão remover")} />
                            <AnterosFloatingButtonItem color="white" icon="fa fa-search" hint="Search" backgroundColor="#7cb342" onButtonClick={() => console.log("Clicou no botão localizar")} />
                        </AnterosFloatingButton>
                    </div>
                    <div className="col-md-4">
                        <h5>Mixing button colors</h5>
                        <p className="text-muted">Mixing all button colors</p>
                        <AnterosFloatingButton hint="Menu" autoClose={true} openMode="click" danger backgroundColor="#f06292" color="#fff">
                            <AnterosFloatingButtonItem icon="fa fa-pencil" hint="Edit" primary onButtonClick={() => console.log("Clicou no botão editar")} />
                            <AnterosFloatingButtonItem icon="fa fa-eraser" hint="Remove" success onButtonClick={() => console.log("Clicou no botão remover")} />
                            <AnterosFloatingButtonItem icon="fa fa-search" hint="Search" info onButtonClick={() => console.log("Clicou no botão localizar")} />
                        </AnterosFloatingButton>
                    </div>
                </div>
            </AnterosCard>


        </div >);
    }
}



