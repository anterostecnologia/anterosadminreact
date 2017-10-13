
import React, { Component } from 'react';
import { AnterosCard, HeaderActions, AnterosButton } from "anteros-react";
import { AnterosFormSteps, AnterosFormStep } from "../components/AnterosFormSteps";
import "./Wizard.css";

export default class WizardsView extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (<AnterosFormSteps id="wizard" contentHeight="600px" circle>
            <AnterosFormStep caption="Dados iniciais" description="Teste" icon="fa fa-address-book">
                Teste 1
                </AnterosFormStep>
            <AnterosFormStep caption="Dados complementares" description="Teste" icon="fa fa-bath">
                Teste 2
                </AnterosFormStep>
            <AnterosFormStep caption="Dados complementares" description="Teste" icon="fa fa-envelope-open-o">
                Teste 3
                </AnterosFormStep>
        </AnterosFormSteps>);
    }
}

