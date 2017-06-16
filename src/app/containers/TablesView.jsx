
import React, { Component } from 'react';
import AnterosCard, { AnterosCardDeck, HeaderActions } from "../components/AnterosCard";
import AnterosPageControl from "../components/AnterosPageControl";
import AnterosTable, { AnterosTableColumn } from "../components/AnterosTable";
import AnterosButton from "../components/AnterosButton";
import AnterosImage from "../components/AnterosImage";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import AnterosCollapseContent from '../components/AnterosCollapseContent';





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
    "color": "#aeefc8",
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




export default class TablesView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AnterosCardDeck>
                <AnterosCard caption="Basic table">
                    <AnterosTable dataSource={people}>
                        <AnterosTableColumn name="id" title="Id" textAlignRight />
                        <AnterosTableColumn name="first_name" title="First name" />
                        <AnterosTableColumn name="last_name" title="Last name" />
                    </AnterosTable>
                </AnterosCard>
                <AnterosCard caption="Basic table with hover">
                    <AnterosTable dataSource={people} showHover={true}>
                        <AnterosTableColumn name="id" title="Id" textAlignRight/>
                        <AnterosTableColumn name="first_name" title="First name" />
                        <AnterosTableColumn name="last_name" title="Last name" />
                    </AnterosTable>
                </AnterosCard>
            </AnterosCardDeck>
        );
    }
}