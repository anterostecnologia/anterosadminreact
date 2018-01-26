
import React, { Component } from 'react';
import {AnterosCard, AnterosCardDeck, HeaderActions, AnterosPageControl, AnterosCollapseContent } from "anteros-react-containers";
import {AnterosTable,  AnterosTableColumn } from "anteros-react-table";
import {AnterosButton} from "anteros-react-buttons";
import {AnterosImage} from "anteros-react-image";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import {AnterosBadge} from "anteros-react-label";
import {AnterosProgressBar} from "anteros-react-misc";





const people = [{
    "id": 1,
    "first_name": "Justine",
    "last_name": "Pineaux",
    "email": "jpineaux0@indiatimes.com",
    "title": "Honorable",
    "color": "#36c405",
    "avatar": "https://randomuser.me/api/portraits/men/85.jpg"

}, {
    "id": 2,
    "first_name": "Stacy",
    "last_name": "Whistance",
    "email": "swhistance1@eventbrite.com",
    "title": "Honorable",
    "color": "#be72e3",
    "avatar": "https://randomuser.me/api/portraits/men/95.jpg"
}, {
    "id": 3,
    "first_name": "Aldin",
    "last_name": "Huller",
    "email": "ahuller2@si.edu",
    "title": "Mrs",
    "color": "red",
    "avatar": "https://randomuser.me/api/portraits/men/73.jpg"
}, {
    "id": 4,
    "first_name": "Marne",
    "last_name": "Wilkennson",
    "email": "mwilkennson3@dailymotion.com",
    "title": "Honorable",
    "color": "#d09368",
    "avatar": "https://randomuser.me/api/portraits/men/25.jpg"
}, {
    "id": 5,
    "first_name": "Pierette",
    "last_name": "Maytom",
    "email": "pmaytom4@berkeley.edu",
    "title": "Ms",
    "color": "#6b3168",
    "avatar": "https://randomuser.me/api/portraits/men/65.jpg"
}, {
    "id": 6,
    "first_name": "Augusto",
    "last_name": "O'Farris",
    "email": "aofarris5@nytimes.com",
    "title": "Dr",
    "color": "#c77861",
    "avatar": "https://randomuser.me/api/portraits/men/45.jpg"
}];

const people1 = [{
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

const sales = [{
    "id": 1,
    "product": "Lettuce - Romaine, Heart",
    "departament": "Home",
    "sales": "$1443.89",
    "photo": "http://lorempixel.com/64/64/food/2/"
}, {
    "id": 2,
    "product": "Beans - Kidney, Red Dry",
    "departament": "Beauty",
    "sales": "$1043.29",
    "photo": "http://lorempixel.com/64/64/food/3/"
}, {
    "id": 3,
    "product": "Cookie Dough - Double",
    "departament": "Computers",
    "sales": "$1709.12",
    "photo": "http://lorempixel.com/64/64/food/4/"
}, {
    "id": 4,
    "product": "Turnip - Wax",
    "departament": "Tools",
    "sales": "$1349.95",
    "photo": "http://lorempixel.com/64/64/food/5/"
}, {
    "id": 5,
    "product": "Chinese Foods - Thick Noodles",
    "departament": "Computers",
    "sales": "$1375.23",
    "photo": "http://lorempixel.com/64/64/food/6/"
}, {
    "id": 6,
    "product": "Jam - Apricot",
    "departament": "Kids",
    "sales": "$1215.43",
    "photo": "http://lorempixel.com/64/64/food/7/"
}];

const tasks = [{
    "id": 1,
    "task": "Pellentesque ultrices mattis odio. Donec vitae nisi. ",
    "progress": 57,
    "deadline": "11/02/2017"
}, {
    "id": 2,
    "task": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. ",
    "progress": 75,
    "deadline": "06/03/2017"
}, {
    "id": 3,
    "task": "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. ",
    "progress": 80,
    "deadline": "22/01/2017"
}, {
    "id": 4,
    "task": "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    "progress": 83,
    "deadline": "27/05/2017"
}, {
    "id": 5,
    "task": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. ",
    "progress": 45,
    "deadline": "16/02/2017"
}, {
    "id": 6,
    "task": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
    "progress": 79,
    "deadline": "24/09/2016"
}];




export default class TablesView extends Component {
    constructor(props) {
        super(props);
        this.renderTitle = this.renderTitle.bind(this);
        this.renderProgress = this.renderProgress.bind(this);
        this.renderActions = this.renderActions.bind(this);
    }

    renderTitle(column, value, record) {
        return <AnterosBadge backgroundColor={record.color} color="white" caption={value} />;
    }

    renderProgress(column, value, record) {
        if (value < 50) {
            return <AnterosProgressBar danger value={value} max={100} showText={true} />;
        } else if (value > 50 && value < 70) {
            return <AnterosProgressBar backgroundColor="yellow" color="blue" value={value} max={100} showText={true} />;
        } else if (value > 70 && value < 80) {
            return <AnterosProgressBar success value={value} max={100} showText={true} />;
        } else if (value >= 80) {
            return <AnterosProgressBar info value={value} max={100} showText={true} />;
        }
    }

    renderActions(column, value, record) {
        return (<div display="inline">
            <AnterosButton circle small link icon="fa fa-pencil" iconColor="green"
                hint="Edit" hintPosition="top" />
            <AnterosButton circle small link icon="fa fa-trash" iconColor="red"
                hint="Remove" hintPosition="top" />
        </div>);
    }

    render() {
        return (
            <div>
                <AnterosCardDeck>
                    <AnterosCard caption="Basic table">
                        <AnterosTable dataSource={people}>
                            <AnterosTableColumn dataField="id" title="Id" textAlignRight />
                            <AnterosTableColumn dataField="first_name" title="First name" />
                            <AnterosTableColumn dataField="last_name" title="Last name" />
                            <AnterosTableColumn dataField="avatar" title="Photo" dataType="image" imageCircle imageWidth="32px" imageHeight="32px" />
                        </AnterosTable>
                    </AnterosCard>
                    <AnterosCard caption="Basic table with hover">
                        <AnterosTable dataSource={people} showHover={true}>
                            <AnterosTableColumn dataField="id" title="Id" textAlignRight />
                            <AnterosTableColumn dataField="first_name" title="First name" />
                            <AnterosTableColumn dataField="last_name" title="Last name" />
                            <AnterosTableColumn dataField="title" title="Title" render={this.renderTitle} textAlignCenter />
                        </AnterosTable>
                    </AnterosCard>
                </AnterosCardDeck>

                <AnterosCard caption="Bordered table">
                    <AnterosTable dataSource={tasks} showHover={true} showBorder={true}>
                        <AnterosTableColumn dataField="id" title="Id" textAlignRight />
                        <AnterosTableColumn dataField="task" title="Task" />
                        <AnterosTableColumn dataField="progress" title="Progress" render={this.renderProgress} headerAlignCenter textAlignCenter />
                        <AnterosTableColumn dataField="deadline" title="Deadline" dataType="date" headerAlignCenter textAlignCenter />
                        <AnterosTableColumn dataField="" title="Actions" render={this.renderActions} headerAlignCenter textAlignCenter />
                    </AnterosTable>
                </AnterosCard>

                <AnterosCard caption="Striped table">
                    <AnterosTable dataSource={tasks} showHover={true} showBorder={true} showStripedRows={true} >
                        <AnterosTableColumn dataField="id" title="Id" textAlignRight />
                        <AnterosTableColumn dataField="task" title="Task" />
                        <AnterosTableColumn dataField="progress" title="Progress" render={this.renderProgress} headerAlignCenter textAlignCenter />
                        <AnterosTableColumn dataField="deadline" title="Deadline" dataType="date" headerAlignCenter textAlignCenter />
                        <AnterosTableColumn dataField="" title="Actions" render={this.renderActions} headerAlignCenter textAlignCenter />
                    </AnterosTable>
                </AnterosCard>
            </div>
        );
    }
}