

import React, { Component } from 'react';
import AnterosCard, { AnterosCardDeck, HeaderActions } from "../components/AnterosCard";
import AnterosPageControl from "../components/AnterosPageControl";
import AnterosTable, { AnterosTableColumn } from "../components/AnterosTable";
import AnterosButton from "../components/AnterosButton";
import AnterosImage from "../components/AnterosImage";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import AnterosCollapseContent from '../components/AnterosCollapseContent';
import AnterosBadge from "../components/AnterosBadge";
import AnterosProgressBar from "../components/AnterosProgressBar";

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

export default class ModalsView extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event){
        $('#exampleModalLive').modal({backdrop: 'static'})  
        
    }


    render() {
        return (
             <div>
                 <AnterosButton caption="modal" onClick={this.onClick}/>
        <div id="exampleModalLive" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLiveLabel" style={{display: "none"}} aria-hidden="true">
            <div className="modal-dialog" role="document" style={{maxWidth:"800px"}}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLiveLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <AnterosCard caption="Primary table">
                        <AnterosTable dataSource={data} primary>
                            <AnterosTableColumn dataField="id" title="Id" textAlignRight />
                            <AnterosTableColumn dataField="first_name" title="First name" />
                            <AnterosTableColumn dataField="last_name" title="Last name" />
                            <AnterosTableColumn dataField="email" title="E-mail" />
                        </AnterosTable>
                    </AnterosCard>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        </div>);
    }
}