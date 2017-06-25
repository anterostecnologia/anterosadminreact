import React, { Component } from 'react';
import {AnterosCard,  HeaderActions } from "anteros-react";
import {AnterosPageControl} from "anteros-react";
import {AnterosButton} from "anteros-react";
import {AnterosImage} from "anteros-react";
import {AnterosAccordion,  AnterosAccordionItem } from "anteros-react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import {AnterosCollapseContent} from 'anteros-react';



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