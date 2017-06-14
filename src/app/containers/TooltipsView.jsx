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