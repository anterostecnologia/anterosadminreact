import React, { Component } from 'react';
import {AnterosCard,  HeaderActions, AnterosPageControl,AnterosAccordion,  AnterosAccordionItem,
    AnterosCollapseContent } from "anteros-react-containers";
import {AnterosButton} from "anteros-react-buttons";
import {AnterosImage} from "anteros-react-image";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';



export default class TooltipsView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AnterosCard caption="Tooltips">
                </AnterosCard>
            </div>
        );
    }
}