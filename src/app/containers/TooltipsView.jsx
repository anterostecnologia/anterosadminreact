import React, { Component } from 'react';
import AnterosCard, { HeaderActions } from "../components/AnterosCard";
import AnterosPageControl from "../components/AnterosPageControl";
import AnterosTab from "../components/AnterosTab";
import AnterosButton from "../components/AnterosButton";
import AnterosImage from "../components/AnterosImage";
import AnterosAccordion, { AnterosAccordionItem } from "../components/AnterosAccordion";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import AnterosCollapseContent from '../components/AnterosCollapseContent';
import "script-loader!../components/jquery-mdstrap.js";
import "../components/jquery-mdstrap.css";


export default class TooltipsView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AnterosCard caption="Tooltips">
                    <nav className="navbar navbar-toggleable-md navbar-inverse bg-primary">
    <div className="container-fluid">
        <button className="navbar-toggler navbar-toggler-left" type="button">
            <span className="navbar-toggler-icon"></span>
        </button>

        <h1 className="navbar-brand">jQuery mdStrap</h1>

        <ul className="navbar-nav navbar-nav-left">
            <li className="nav-item active"><a className="nav-link" href="#about">Home <span className="sr-only">(current)</span></a></li>
            <li className="nav-item"><a className="nav-link" href="#instalation">Instalation</a></li>
            <li className="nav-item"><a className="nav-link" href="#options">Options</a></li>
            <li className="nav-item"><a className="nav-link" href="#development">Development</a></li>
        </ul>
    </div>
</nav>
                </AnterosCard>
            </div>
        );
    }
}