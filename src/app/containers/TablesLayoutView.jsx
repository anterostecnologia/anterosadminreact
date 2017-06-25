
import React, { Component } from 'react';
import {AnterosCard, AnterosCardDeck, HeaderActions } from "anteros-react";
import {AnterosPageControl} from "anteros-react";
import {AnterosTable, AnterosTableColumn } from "anteros-react";
import {AnterosButton} from "anteros-react";
import {AnterosImage} from "anteros-react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import {AnterosCollapseContent} from 'anteros-react';


const data = [{
    "id": 1,
    "first_name": "Justine",
    "last_name": "Pineaux",
    "email": "jpineaux0@indiatimes.com"
}, {
    "id": 2,
    "first_name": "Stacy",
    "last_name": "Whistance",
    "email": "swhistance1@eventbrite.com"
}, {
    "id": 3,
    "first_name": "Aldin",
    "last_name": "Huller",
    "email": "ahuller2@si.edu",
}];


export default class TablesLayoutView extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <AnterosCardDeck>
                    <AnterosCard caption="Primary table">
                        <AnterosTable dataSource={data} primary>
                            <AnterosTableColumn dataField="id" title="Id" textAlignRight />
                            <AnterosTableColumn dataField="first_name" title="First name" />
                            <AnterosTableColumn dataField="last_name" title="Last name" />
                            <AnterosTableColumn dataField="email" title="E-mail" />
                        </AnterosTable>
                    </AnterosCard>
                    <AnterosCard caption="Success table">
                        <AnterosTable dataSource={data} success>
                            <AnterosTableColumn dataField="id" title="Id" textAlignRight />
                            <AnterosTableColumn dataField="first_name" title="First name" />
                            <AnterosTableColumn dataField="last_name" title="Last name" />
                            <AnterosTableColumn dataField="email" title="Photo" />
                        </AnterosTable>
                    </AnterosCard>
                 </AnterosCardDeck>   
                 <AnterosCardDeck>
                    <AnterosCard caption="Info table">
                        <AnterosTable dataSource={data} info>
                            <AnterosTableColumn dataField="id" title="Id" textAlignRight />
                            <AnterosTableColumn dataField="first_name" title="First name" />
                            <AnterosTableColumn dataField="last_name" title="Last name" />
                            <AnterosTableColumn dataField="email" title="E-mail" />
                        </AnterosTable>
                    </AnterosCard>
                    <AnterosCard caption="Danger table">
                        <AnterosTable dataSource={data} danger>
                            <AnterosTableColumn dataField="id" title="Id" textAlignRight />
                            <AnterosTableColumn dataField="first_name" title="First name" />
                            <AnterosTableColumn dataField="last_name" title="Last name" />
                            <AnterosTableColumn dataField="email" title="Photo" />
                        </AnterosTable>
                    </AnterosCard>
                 </AnterosCardDeck> 
                 <AnterosCardDeck>
                    <AnterosCard caption="Warning table">
                        <AnterosTable dataSource={data} warning>
                            <AnterosTableColumn dataField="id" title="Id" textAlignRight />
                            <AnterosTableColumn dataField="first_name" title="First name" />
                            <AnterosTableColumn dataField="last_name" title="Last name" />
                            <AnterosTableColumn dataField="email" title="E-mail" />
                        </AnterosTable>
                    </AnterosCard>                    
                    <AnterosCard caption="Inverse table">
                        <AnterosTable dataSource={data} inverse>
                            <AnterosTableColumn dataField="id" title="Id" textAlignRight />
                            <AnterosTableColumn dataField="first_name" title="First name" />
                            <AnterosTableColumn dataField="last_name" title="Last name" />
                            <AnterosTableColumn dataField="email" title="E-mail" />
                        </AnterosTable>
                    </AnterosCard>   
                 </AnterosCardDeck> 

                 <AnterosCardDeck>
                    <AnterosCard caption="Primary bordered table">
                        <AnterosTable dataSource={data} primary showBorder={true}>
                            <AnterosTableColumn dataField="id" title="Id" textAlignRight />
                            <AnterosTableColumn dataField="first_name" title="First name" />
                            <AnterosTableColumn dataField="last_name" title="Last name" />
                            <AnterosTableColumn dataField="email" title="E-mail" />
                        </AnterosTable>
                    </AnterosCard>
                    <AnterosCard caption="Success bordered table">
                        <AnterosTable dataSource={data} success showBorder={true}>
                            <AnterosTableColumn dataField="id" title="Id" textAlignRight />
                            <AnterosTableColumn dataField="first_name" title="First name" />
                            <AnterosTableColumn dataField="last_name" title="Last name" />
                            <AnterosTableColumn dataField="email" title="Photo" />
                        </AnterosTable>
                    </AnterosCard>
                 </AnterosCardDeck>   
                 <AnterosCardDeck>
                    <AnterosCard caption="Info bordered table">
                        <AnterosTable dataSource={data} info showBorder={true}>
                            <AnterosTableColumn dataField="id" title="Id" textAlignRight />
                            <AnterosTableColumn dataField="first_name" title="First name" />
                            <AnterosTableColumn dataField="last_name" title="Last name" />
                            <AnterosTableColumn dataField="email" title="E-mail" />
                        </AnterosTable>
                    </AnterosCard>
                    <AnterosCard caption="Danger bordered table">
                        <AnterosTable dataSource={data} danger showBorder={true}>
                            <AnterosTableColumn dataField="id" title="Id" textAlignRight />
                            <AnterosTableColumn dataField="first_name" title="First name" />
                            <AnterosTableColumn dataField="last_name" title="Last name" />
                            <AnterosTableColumn dataField="email" title="Photo" />
                        </AnterosTable>
                    </AnterosCard>
                 </AnterosCardDeck> 
                 <AnterosCardDeck>
                    <AnterosCard caption="Warning bordered table">
                        <AnterosTable dataSource={data} warning showBorder={true}>
                            <AnterosTableColumn dataField="id" title="Id" textAlignRight />
                            <AnterosTableColumn dataField="first_name" title="First name" />
                            <AnterosTableColumn dataField="last_name" title="Last name" />
                            <AnterosTableColumn dataField="email" title="E-mail" />
                        </AnterosTable>
                    </AnterosCard>                    
                    <AnterosCard caption="Inverse bordered table">
                        <AnterosTable dataSource={data} inverse showBorder={true}>
                            <AnterosTableColumn dataField="id" title="Id" textAlignRight />
                            <AnterosTableColumn dataField="first_name" title="First name" />
                            <AnterosTableColumn dataField="last_name" title="Last name" />
                            <AnterosTableColumn dataField="email" title="E-mail" />
                        </AnterosTable>
                    </AnterosCard> 
                 </AnterosCardDeck> 
            </div>
        );
    }
}