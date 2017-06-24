import React, { Component } from 'react';
import AnterosCard, { AnterosCardDeck } from "../components/AnterosCard";
import AnterosList, { AnterosListItem } from "../components/AnterosList";
import AnterosBadge from "../components/AnterosBadge";
import AnterosLabel from "../components/AnterosLabel";
import AnterosImage from "../components/AnterosImage";
import AnterosButton from "../components/AnterosButton";
import AnterosProgressBar from '../components/AnterosProgressBar';
import AnterosStatusMark from '../components/AnterosStatusMark';
import AnterosCheckbox from '../components/AnterosCheckbox';
import { If, Then, Else } from "../utils/AnterosControlStatements";
import {isArray, isUndefined} from "../utils/AnterosUtils"


var userList = [
    {
        "id": 1,
        "name": "Georgie Garfirth",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis scelerisque laoreet. Fusce et turpis nulla. Duis venenatis aliquet bibendum. Vivamus quis est nisl. Sed id nisl at justo condimentum.",
        "date": "16/01/2017",
        "avatar": "https://randomuser.me/api/portraits/men/85.jpg",
        "status": "pending"
    }, {
        "id": 2,
        "name": "Gisella Tother",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis scelerisque laoreet. Fusce et turpis nulla. Duis venenatis aliquet bibendum. Vivamus quis est nisl. Sed id nisl at justo condimentum.",
        "date": "12/03/2017",
        "avatar": "https://randomuser.me/api/portraits/women/47.jpg",
        "status": "pending"
    }, {
        "id": 3,
        "name": "Sax Maffioletti",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis scelerisque laoreet. Fusce et turpis nulla. Duis venenatis aliquet bibendum. Vivamus quis est nisl. Sed id nisl at justo condimentum.",
        "date": "29/03/2017",
        "avatar": "https://randomuser.me/api/portraits/men/36.jpg",
        "status": "approved"
    }, {
        "id": 4,
        "name": "Madeline Accombe",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis scelerisque laoreet. Fusce et turpis nulla. Duis venenatis aliquet bibendum. Vivamus quis est nisl. Sed id nisl at justo condimentum.",
        "date": "15/04/2017",
        "avatar": "https://randomuser.me/api/portraits/women/63.jpg",
        "status": "approved"
    }, {
        "id": 5,
        "name": "Mellie Macguire",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis scelerisque laoreet. Fusce et turpis nulla. Duis venenatis aliquet bibendum. Vivamus quis est nisl. Sed id nisl at justo condimentum.",
        "date": "15/05/2017",
        "avatar": "https://randomuser.me/api/portraits/women/28.jpg",
        "status": "pending"
    }, {
        "id": 6,
        "name": "Zolly Sandeson",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis scelerisque laoreet. Fusce et turpis nulla. Duis venenatis aliquet bibendum. Vivamus quis est nisl. Sed id nisl at justo condimentum.",
        "date": "21/05/2017",
        "avatar": "https://randomuser.me/api/portraits/men/8.jpg",
        "status": "approved"
    }, {
        "id": 7,
        "name": "Lionello Tumility",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis scelerisque laoreet. Fusce et turpis nulla. Duis venenatis aliquet bibendum. Vivamus quis est nisl. Sed id nisl at justo condimentum.",
        "date": "14/06/2017",
        "avatar": "https://randomuser.me/api/portraits/men/31.jpg",
        "status": "rejected"
    }, {
        "id": 8,
        "name": "Randy Carnaman",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis scelerisque laoreet. Fusce et turpis nulla. Duis venenatis aliquet bibendum. Vivamus quis est nisl. Sed id nisl at justo condimentum.",
        "date": "15/06/2017",
        "avatar": "https://randomuser.me/api/portraits/men/14.jpg",
        "status": "rejected"
    }, {
        "id": 9,
        "name": "Sammie Bridgwater",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis scelerisque laoreet. Fusce et turpis nulla. Duis venenatis aliquet bibendum. Vivamus quis est nisl. Sed id nisl at justo condimentum.",
        "date": "01/07/2017",
        "avatar": "https://randomuser.me/api/portraits/women/66.jpg",
        "status": "rejected"
    }, {
        "id": 10,
        "name": "El Maria",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis scelerisque laoreet. Fusce et turpis nulla. Duis venenatis aliquet bibendum. Vivamus quis est nisl. Sed id nisl at justo condimentum.",
        "date": "09/07/2017",
        "avatar": "https://randomuser.me/api/portraits/women/36.jpg",
        "status": "approved"
    }];

var countryList = [
    {
        "id": 1,
        "text": "Colombia",
        "qtde_visits": 4484,
        "percent": 78,
        "progress_color": "success",
        "position": "up"
    }, {
        "id": 2,
        "text": "Indonesia",
        "qtde_visits": 3050,
        "percent": 3,
        "progress_color": "info",
        "position": "up"
    }, {
        "id": 3,
        "text": "Brazil",
        "qtde_visits": 8319,
        "percent": 71,
        "progress_color": "warning",
        "position": "down"
    }, {
        "id": 4,
        "text": "Russia",
        "qtde_visits": 3690,
        "percent": 96,
        "progress_color": "primary",
        "position": "down"
    }, {
        "id": 5,
        "text": "Canada",
        "qtde_visits": 1972,
        "percent": 1,
        "progress_color": "danger",
        "position": "up"
    }, {
        "id": 6,
        "text": "Japan",
        "qtde_visits": 454,
        "percent": 44,
        "progress_color": "success",
        "position": "down"
    }, {
        "id": 7,
        "text": "Portugal",
        "qtde_visits": 8970,
        "percent": 11,
        "progress_color": "info",
        "position": "up"
    }, {
        "id": 8,
        "text": "Honduras",
        "qtde_visits": 7125,
        "percent": 32,
        "progress_color": "warning",
        "position": "down"
    }, {
        "id": 9,
        "text": "Czech Republic",
        "qtde_visits": 193,
        "percent": 26,
        "progress_color": "primary",
        "position": "up"
    }, {
        "id": 10,
        "text": "Vietnam",
        "qtde_visits": 3798,
        "percent": 41,
        "progress_color": "danger",
        "position": "up"
    }];

var browserList = [
    {
        "id": 1,
        "text": "Google Chrome",
        "percent": 59.36,
        "image": "http://i.imgur.com/VWUj8Wu.png"
    }, {
        "id": 2,
        "text": "Internet Explorer",
        "percent": 17.55,
        "image": "http://i.imgur.com/RmjUABK.png"
    }, {
        "id": 3,
        "text": "Mozilla Firefox",
        "percent": 11.98,
        "image": "http://i.imgur.com/C0NL8lL.png"
    }, {
        "id": 4,
        "text": "Microsoft Edge",
        "percent": 5.63,
        "image": "http://i.imgur.com/RmjUABK.png"
    }, {
        "id": 5,
        "text": "Safari",
        "percent": 3.56,
        "image": "http://i.imgur.com/J6mvTv6.png"
    }, {
        "id": 6,
        "text": "Opera",
        "percent": 1.24,
        "image": "http://i.imgur.com/PKU2y1i.png"
    }];

var recentMessagesList = [
    {
        "id": 1,
        "avatar": "https://randomuser.me/api/portraits/women/63.jpg",
        "text": "Helena Matiewe",
        "message": "Donec pharetra magna vestibulum aliquet",
        "status": "absent",
        "time": "11:45 AM"
    }, {
        "id": 2,
        "avatar": "https://randomuser.me/api/portraits/men/41.jpg",
        "text": "Tuck Greenwood",
        "message": "Eu nibh quisque id justo in hac tristique ornare",
        "status": "busy",
        "time": "12:14 PM"
    }, {
        "id": 3,
        "avatar": "https://randomuser.me/api/portraits/women/45.jpg",
        "text": "Melisandra Trouncer",
        "message": "Ullamcorper augue a suscipit nulla elit",
        "status": "online",
        "time": "2:23 PM"
    }, {
        "id": 4,
        "avatar": "https://randomuser.me/api/portraits/women/54.jpg",
        "text": "Elva Romeo",
        "message": "Ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget",
        "status": "online",
        "time": "1:59 PM"
    }, {
        "id": 5,
        "avatar": "https://randomuser.me/api/portraits/women/28.jpg",
        "text": "Benedicta Wilcock",
        "message": "Vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien",
        "status": "busy",
        "time": "3:43 PM"
    }, {
        "id": 6,
        "avatar": "https://randomuser.me/api/portraits/men/17.jpg",
        "text": "Jeffry Labroue",
        "message": "Amet eros suspendisse accumsan tortor quis turpis",
        "status": "offline",
        "time": "5:00 PM"
    }, {
        "id": 7,
        "avatar": "https://randomuser.me/api/portraits/women/9.jpg",
        "text": "Louisette Kenshole",
        "message": "Bibendum felis sed interdum venenatis turpis enim blandit mi in",
        "status": "offline",
        "time": "5:09 PM"
    }, {
        "id": 8,
        "avatar": "https://randomuser.me/api/portraits/women/76.jpg",
        "text": "Linnet Ancell",
        "message": "Platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi",
        "status": "online",
        "time": "12:45 PM"
    }, {
        "id": 9,
        "avatar": "https://randomuser.me/api/portraits/women/69.jpg",
        "text": "Amalea Cresswell",
        "message": "Quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus",
        "status": "offline",
        "time": "5:08 PM"
    }, {
        "id": 10,
        "avatar": "https://randomuser.me/api/portraits/women/87.jpg",
        "text": "Essa Rraundl",
        "message": "Montes nascetur ridiculus mus etiam vel augue vestibulum rutrum",
        "status": "absent",
        "time": "3:30 PM"
    }];

var todoList = [
    {
        "id": 1,
        "text": "Bibendum felis sed interdum venenatis enim blandit mi in",
        "checked": true,
        "priority": null,
        "date": "06 Feb 2017",
        "person": []
    }, {
        "id": 2,
        "text": "Sit amet sem fusce consequat nulla",
        "checked": false,
        "priority": null,
        "date": "29 Mar 2017",
        "person": []
    }, {
        "id": 3,
        "text": "Dolor sit amet consectetuer adipiscing elit proin interdum mauris",
        "checked": false,
        "priority": 2,
        "date": "15 Oct 2016",
        "person": [
            {
                "id": 1,
                "name": "Joye Kohrs",
                "avatar": "https://randomuser.me/api/portraits/men/8.jpg"
            }
        ]
    }, {
        "id": 4,
        "text": "Neque sapien placerat ante nulla justo aliquam",
        "checked": false,
        "priority": 1,
        "date": "17 Nov 2016",
        "person": [
            {
                "id": 1,
                "name": "Garret Strond",
                "avatar": "https://robohash.org/excepturimodiconsequatur.jpg?size=50x50&set=set1"
            }
        ]
    }, {
        "id": 5,
        "text": "Augue quam sollicitudin vitae consectetuer eget",
        "checked": true,
        "priority": 3,
        "date": "19 Jun 2016",
        "person": [
            {
                "id": 1,
                "name": "Valma Bellchamber",
                "avatar": "https://robohash.org/minusrepellatvoluptatibus.bmp?size=50x50&set=set1"
            }, {
                "id": 2,
                "name": "Dacie Domelaw",
                "avatar": "https://robohash.org/magnametpariatur.png?size=50x50&set=set1"
            }, {
                "id": 3,
                "name": "Hube Chadband",
                "avatar": "https://robohash.org/utquisapiente.jpg?size=50x50&set=set1"
            }, {
                "id": 4,
                "name": "Roi Drinnan",
                "avatar": "https://robohash.org/inomnisarchitecto.png?size=50x50&set=set1"
            }
        ]
    }, {
        "id": 6,
        "text": "Metus aenean fermentum donec ut",
        "checked": false,
        "priority": 2,
        "date": "26 Jun 2016",
        "person": [
            {
                "id": 1,
                "name": "Moshe Merryfield",
                "avatar": "https://robohash.org/quivelconsequatur.png?size=50x50&set=set1"
            }, {
                "id": 2,
                "name": "Barry Murtell",
                "avatar": "https://robohash.org/natussimiliquererum.jpg?size=50x50&set=set1"
            }, {
                "id": 3,
                "name": "Jenda Rennles",
                "avatar": "https://robohash.org/quisdoloremillo.bmp?size=50x50&set=set1"
            }
        ]
    }, {
        "id": 7,
        "text": "Sit amet erat nulla tempus vivamus in felis eu",
        "checked": false,
        "priority": 3,
        "date": "15 Aug 2016",
        "person": [
            {
                "id": 1,
                "name": "Dunn Dibden",
                "avatar": "https://robohash.org/facereinad.jpg?size=50x50&set=set1"
            }, {
                "id": 2,
                "name": "Alma Byneth",
                "avatar": "https://robohash.org/eaquepossimusaut.bmp?size=50x50&set=set1"
            }, {
                "id": 3,
                "name": "Guss Heale",
                "avatar": "https://robohash.org/eumsuntvero.jpg?size=50x50&set=set1"
            }
        ]
    }, {
        "id": 8,
        "text": "Magna at nunc commodo placerat praesent",
        "checked": true,
        "priority": null,
        "date": "10 Mar 2017",
        "person": [
            {
                "id": 1,
                "name": "Carolus Iannini",
                "avatar": "https://robohash.org/dolorumquaevoluptas.png?size=50x50&set=set1"
            }, {
                "id": 2,
                "name": "Joletta Coram",
                "avatar": "https://robohash.org/cumexercitationemquaerat.png?size=50x50&set=set1"
            }, {
                "id": 3,
                "name": "Abeu Neads",
                "avatar": "https://robohash.org/veroquasvoluptatem.png?size=50x50&set=set1"
            }
        ]
    }, {
        "id": 9,
        "text": "Lorem ipsum dolor sit amet consectetuer",
        "checked": true,
        "priority": null,
        "date": "17 Dec 2016",
        "person": [
            {
                "id": 1,
                "name": "Fabian Casterou",
                "avatar": "https://robohash.org/eumevenietporro.bmp?size=50x50&set=set1"
            }
        ]
    }, {
        "id": 10,
        "text": "Tortor sollicitudin mi sit amet lobortis sapien",
        "checked": true,
        "priority": null,
        "date": "09 Jan 2017",
        "person": []
    }];

    function setTodoListChecked(id, checked) {
        todoList.map(record => {
            if (record.id == id) {
                record.checked = checked;
                return;
            }
        });
    }

export default class ListsView extends Component {
    render() {
        return (
            <div>
                <AnterosCard caption="List">

                    <div className="row">
                        <div className="col-md-4">
                            <AnterosCard caption="Basic">
                                <section className="section">
                                    <AnterosList height="470px">
                                        <AnterosListItem id={1} caption="Donec mattis metus vitae vestibulum suscipit." />
                                        <AnterosListItem id={2} caption="Integer vehicula turpis sed risus efficitur, non cursus sapien vestibulum." />
                                        <AnterosListItem id={3} caption="In condimentum nunc sit amet blandit egestas." />
                                        <AnterosListItem id={4} caption="Proin blandit ipsum eu porta tempus." />
                                        <AnterosListItem id={5} caption="Curabitur molestie mauris at nisi hendrerit scelerisque." />
                                        <AnterosListItem id={6} caption="Phasellus sit amet nisi nec sem imperdiet tincidunt." />
                                        <AnterosListItem id={7} caption="Donec sit amet diam at sem tempus pretium vel eu augue." />
                                        <AnterosListItem id={8} caption="Ut cursus ipsum quis lacus ornare ullamcorper." />
                                        <AnterosListItem id={9} caption="Integer blandit sapien vel dapibus interdum." />
                                        <AnterosListItem id={10} caption="Etiam sollicitudin justo vel dui rutrum, et pharetra metus tempor." />
                                    </AnterosList>
                                </section>
                            </AnterosCard>
                        </div>

                        <div className="col-md-4">
                            <AnterosCard caption="With icon &amp; images">
                                <section className="section">

                                    <AnterosList height="470px">
                                        <AnterosListItem id={1} caption="Donec mattis metus vitae vestibulum suscipit."
                                            image="https://s3.amazonaws.com/uifaces/faces/twitter/why_this/128.jpg"
                                            imageCircle imageWidth="48px" imageHeight="48px" />
                                        <AnterosListItem id={2} caption="Integer vehicula turpis sed risus efficitur."
                                            image={require('../assets/img/c1.jpg')}
                                            imageCircle imageWidth="48px" imageHeight="48px" />
                                        <AnterosListItem id={3} caption="In condimentum nunc sit amet blandit egestas."
                                            image={require('../assets/img/2.jpg')}
                                            imageCircle imageWidth="48px" imageHeight="48px" />
                                        <AnterosListItem id={4} caption="Proin blandit ipsum eu porta tempus."
                                            image={require('../assets/img/3.jpg')}
                                            imageCircle imageWidth="48px" imageHeight="48px" />
                                        <AnterosListItem id={5} caption="Curabitur molestie mauris at nisi hendrerit."
                                            image={require('../assets/img/4.jpg')}
                                            imageCircle imageWidth="48px" imageHeight="48px" />
                                        <AnterosListItem id={6} caption="Phasellus sit amet nisi nec sem imperdiet tincidunt."
                                            image={require('../assets/img/5.jpg')}
                                            imageCircle imageWidth="48px" imageHeight="48px" />
                                        <AnterosListItem id={7} caption="Donec sit amet diam at sem tempus pretium."
                                            icon="fa fa-car fa-2x red" />
                                        <AnterosListItem id={8} caption="Ut cursus ipsum quis lacus ornare ullamcorper."
                                            icon="fa fa-spinner fa-pulse fa-fw" />
                                        <AnterosListItem id={9} caption="Integer blandit sapien vel dapibus interdum."
                                            icon="fa fa-fighter-jet" />
                                        <AnterosListItem id={10} caption="Etiam sollicitudin justo vel dui rutrum."
                                            icon="fa fa-check-square" />
                                    </AnterosList>

                                </section>
                            </AnterosCard>
                        </div>

                        <div className="col-md-4">
                            <AnterosCard caption="With badges &amp; labels">
                                <section className="section">

                                    <AnterosList height="470px" showBorder={false} >
                                        <AnterosListItem id={1} justify caption="Donec mattis metus vitae vestibulum suscipit.">
                                            <AnterosBadge caption="default" />
                                        </AnterosListItem>
                                        <AnterosListItem id={2} justify caption="Integer vehicula turpis sed risus efficitur.">
                                            <AnterosBadge pillFormat info caption="multiple" />
                                            <AnterosBadge warning caption="warning" />
                                        </AnterosListItem>
                                        <AnterosListItem id={3} justify caption="In condimentum nunc sit amet blandit egestas.">
                                            <AnterosBadge pillFormat primary caption="primary" />
                                        </AnterosListItem>
                                        <AnterosListItem id={4} justify caption="Proin blandit ipsum eu porta tempus.">
                                            <AnterosBadge pillFormat success caption="success" />
                                        </AnterosListItem>
                                        <AnterosListItem id={5} justify caption="Curabitur molestie mauris at nisi hendrerit.">
                                            <AnterosBadge pillFormat danger caption="danger" />
                                        </AnterosListItem>
                                        <AnterosListItem id={6} justify caption="Phasellus sit amet nisi nec sem.">
                                            <AnterosLabel caption="default" />
                                            <AnterosLabel caption="default" pillFormat />
                                        </AnterosListItem>
                                        <AnterosListItem id={7} justify caption="Donec sit amet diam at sem tempus.">
                                            <AnterosLabel caption="success" success />
                                            <AnterosLabel caption="success" success pillFormat />
                                        </AnterosListItem>
                                        <AnterosListItem id={8} justify caption="Ut cursus ipsum quis lacus ornare.">
                                            <AnterosLabel caption="info" info />
                                            <AnterosLabel caption="info" info pillFormat />
                                        </AnterosListItem>
                                        <AnterosListItem id={9} justify caption="Integer blandit sapien vel dapibus.">
                                            <AnterosLabel caption="warning" warning />
                                            <AnterosLabel caption="warning" warning pillFormat />
                                        </AnterosListItem>
                                        <AnterosListItem id={10} justify caption="Etiam sollicitudin justo vel dui rutrum.">
                                            <AnterosLabel caption="danger" danger />
                                            <AnterosLabel caption="danger" danger pillFormat />
                                        </AnterosListItem>
                                    </AnterosList>

                                </section>
                            </AnterosCard>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <AnterosCard caption="Align">
                                <section className="section">

                                    <AnterosList height="400px">
                                        <AnterosListItem id={1} alignLeft caption="Donec mattis metus vitae vestibulum suscipit." />
                                        <AnterosListItem id={2} justify caption="Integer vehicula turpis sed risus efficitur, non cursus sapien vestibulum. Phasellus at diam non tellus mattis euismod." />
                                        <AnterosListItem id={3} alignCenter caption="In condimentum nunc sit amet blandit egestas." />
                                        <AnterosListItem id={4} alignRight caption="Proin blandit ipsum eu porta tempus." />
                                        <AnterosListItem id={5} alignLeft caption="Curabitur molestie mauris at nisi hendrerit scelerisque." />
                                        <AnterosListItem id={6} justify caption="Phasellus sit amet nisi nec sem imperdiet tincidunt." />
                                        <AnterosListItem id={7} alignCenter caption="Donec sit amet diam at sem tempus pretium vel eu augue." />
                                        <AnterosListItem id={8} alignRight caption="Ut cursus ipsum quis lacus ornare ullamcorper." />
                                        <AnterosListItem id={9} alignLeft caption="Integer blandit sapien vel dapibus interdum." />
                                        <AnterosListItem id={10} justify caption="Etiam sollicitudin justo vel dui rutrum, et pharetra metus tempor." />

                                    </AnterosList>

                                </section>
                            </AnterosCard>
                        </div>

                        <div className="col-md-4">
                            <AnterosCard caption="Colored items">
                                <section className="section">

                                    <AnterosList height="400px">
                                        <AnterosListItem id={1} info caption="Donec mattis metus vitae vestibulum suscipit." />
                                        <AnterosListItem id={2} danger caption="Integer vehicula turpis sed risus efficitur, non cursus sapien vestibulum." />
                                        <AnterosListItem id={3} success caption="In condimentum nunc sit amet blandit egestas." />
                                        <AnterosListItem id={4} warning caption="Proin blandit ipsum eu porta tempus." />
                                        <AnterosListItem id={5} default caption="Curabitur molestie mauris at nisi hendrerit scelerisque." />
                                        <AnterosListItem id={6} backgroundColor="#009efb" color="white" caption="Phasellus sit amet nisi nec sem imperdiet tincidunt." />
                                        <AnterosListItem id={7} backgroundColor="#f62d51" color="white" caption="Donec sit amet diam at sem tempus pretium vel eu augue." />
                                        <AnterosListItem id={8} activeBackColor="#0096c9" activeColor="#f62d51" caption="Ut cursus ipsum quis lacus ornare ullamcorper." />
                                        <AnterosListItem id={9} backgroundColor="#fff8ec" color="gray" caption="Integer blandit sapien vel dapibus interdum." />
                                        <AnterosListItem id={10} activeBackColor="gray" activeColor="white" caption="Etiam sollicitudin justo vel dui rutrum, et pharetra metus tempor." />
                                    </AnterosList>

                                </section>
                            </AnterosCard>
                        </div>

                        <div className="col-md-4">
                            <AnterosCard caption="Disabled items">
                                <section className="section">

                                    <AnterosList height="400px">
                                        <AnterosListItem id={1} caption="Donec mattis metus vitae vestibulum suscipit." />
                                        <AnterosListItem id={2} disabled caption="Integer vehicula turpis sed risus efficitur, non cursus sapien vestibulum." />
                                        <AnterosListItem id={3} active caption="In condimentum nunc sit amet blandit egestas." />
                                        <AnterosListItem id={4} disabled caption="Proin blandit ipsum eu porta tempus." />
                                        <AnterosListItem id={5} caption="Curabitur molestie mauris at nisi hendrerit scelerisque." />
                                        <AnterosListItem id={6} disabled caption="Phasellus sit amet nisi nec sem imperdiet tincidunt." />
                                        <AnterosListItem id={7} caption="Donec sit amet diam at sem tempus pretium vel eu augue." />
                                        <AnterosListItem id={8} disabled caption="Ut cursus ipsum quis lacus ornare ullamcorper." />
                                        <AnterosListItem id={9} caption="Integer blandit sapien vel dapibus interdum." />
                                        <AnterosListItem id={10} disabled caption="Etiam sollicitudin justo vel dui rutrum, et pharetra metus tempor." />
                                    </AnterosList>

                                </section>
                            </AnterosCard>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <AnterosCard caption="Custom">
                                <section className="section">

                                    <div className="row">
                                        <div className="col-md-4">
                                            <AnterosCard caption="Visits around the countries">
                                                <section className="section">
                                                    <AnterosList height="700px" dataSource={countryList} component={CustomComponentCountry} />
                                                </section>
                                            </AnterosCard>
                                        </div>

                                        <div className="col-md-8">
                                            <AnterosCard caption="Recent comments">
                                                <section className="section">
                                                    <AnterosList height="700px" dataSource={userList} component={CustomComponentUsers} />
                                                </section>
                                            </AnterosCard>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <AnterosCard caption="Recent messages">
                                                <section className="section">
                                                    <AnterosList height="400px" dataSource={recentMessagesList} component={CustomComponentMessages} />
                                                </section>
                                            </AnterosCard>
                                        </div>

                                        <div className="col-md-4">
                                            <AnterosCard caption="Browser stats">
                                                <section className="section">
                                                    <AnterosList height="400px" dataSource={browserList} component={CustomComponentBrowser} />
                                                </section>
                                            </AnterosCard>
                                        </div>

                                        <div className="col-md-4">
                                            <AnterosCard caption="To do list">
                                                <section className="section">
                                                    <AnterosList height="400px" dataSource={todoList} component={CustomComponentTodo} />
                                                </section>
                                            </AnterosCard>
                                        </div>
                                    </div>
                                </section>
                            </AnterosCard>
                        </div>
                    </div>
                </AnterosCard >
            </div>);
    }
}

class CustomComponentUsers extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);

    }

    onClick() {
        event.preventDefault();
        if (!this.props.disabled) {
            if (this.props.handleSelectItem) {
                this.props.handleSelectItem(this.props.index);
            }
            if (this.props.onSelectListItem) {
                this.props.onSelectListItem(this);
            }
        }
    }

    render() {
        let className = "list-group-item list-group-item-action";

        if (this.props.active)
            className += " active"

        if (this.props.recordData.disabled)
            className += " disabled";

        let anterosBadge = <AnterosBadge pillFormat
            primary={this.props.recordData.status == "pending"}
            success={this.props.recordData.status == "approved"}
            danger={this.props.recordData.status == "rejected"}
            caption={this.props.recordData.status} />;

        return (
            <div style={{ paddingLeft: "15px", paddingRight: "15px", paddingTop: "15px" }} className={className} onClick={this.onClick}>
                <div className="d-flex align-items-center">
                    <AnterosImage margin={5} width={48} height={48} circle src={this.props.recordData.avatar} />
                    <h5>{this.props.recordData.name}</h5>
                </div>
                <div>
                    <p style={{ marginBottom: "0px" }} className="justify-content-between" >{this.props.recordData.text}</p>
                    <div className="d-flex justify-content-between">
                        <div className="align-self-center">{anterosBadge}</div>
                        <span className="d-flex align-self-start">
                            <AnterosButton circle link icon="fa fa-edit" hint="Edit" />
                            <AnterosButton circle link icon="fa fa-check green" hint="Approve" />
                            <AnterosButton circle link icon="fa fa-heart-o red" hint="Like it" />
                        </span>
                        <small>{this.props.recordData.date}</small>
                    </div>
                </div>
            </div>
        );
    }
}

class CustomComponentCountry extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let className = "d-flex flex-column list-group-item-action";

        let classNameIcon;
        if (this.props.recordData.position == "up")
            classNameIcon = "fa fa-level-up text-success"
        else if (this.props.recordData.position == "down")
            classNameIcon = "fa fa-level-down text-danger";

        let progressBar = <AnterosProgressBar
            success={this.props.recordData.progress_color == "success"}
            info={this.props.recordData.progress_color == "info"}
            warning={this.props.recordData.progress_color == "warning"}
            primary={this.props.recordData.progress_color == "primary"}
            danger={this.props.recordData.progress_color == "danger"}
            height={8} value={this.props.recordData.percent} max={100} min={0} />

        return (
            <div style={{ paddingLeft: "15px", paddingRight: "15px", paddingTop: "15px" }} className={className} onClick={this.onClick}>
                <div style={{ paddingTop: "0.5rem", paddingRight: "0.5rem", paddingLeft: "0.5rem" }} >
                    <h3 style={{ marginBottom: "0px" }} >{this.props.recordData.qtde_visits}</h3>
                </div>
                <div className="p-2">
                    <div className="d-flex flex-row justify-content-between" >
                        <p style={{ marginBottom: "0px", paddingBottom: "0px" }} >From {this.props.recordData.text}</p>
                        <div  >{this.props.recordData.percent}% <i className={classNameIcon}></i></div>
                    </div>
                    <div>
                        {progressBar}
                    </div>
                </div>
            </div>
        );
    }
}

class CustomComponentBrowser extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);

    }

    onClick() {
        event.preventDefault();
        if (!this.props.disabled) {
            if (this.props.handleSelectItem) {
                this.props.handleSelectItem(this.props.index);
            }
            if (this.props.onSelectListItem) {
                this.props.onSelectListItem(this);
            }
        }
    }

    render() {
        let className = "d-flex flex-row list-group-item-action";

        let anterosBadge = <AnterosBadge pillFormat
            success={this.props.recordData.percent >= 50}
            warning={this.props.recordData.percent >= 10 && this.props.recordData.percent < 50}
            danger={this.props.recordData.percent >= 0 && this.props.recordData.percent < 10}
            caption={this.props.recordData.percent + "%"} />;

        return (
            <div style={{ padding: "10px" }} className={className} onClick={this.onClick}>
                <div>
                    <AnterosImage width={40} height={40} circle src={this.props.recordData.image} />
                </div>
                <div className="d-flex align-items-center justify-content-between" style={{ width: "100%", marginLeft: "5px" }}>
                    <h6 style={{ margin: "0" }}>{this.props.recordData.text}</h6>
                    <div>{anterosBadge}</div>
                </div>
            </div>
        );
    }
}

class CustomComponentMessages extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);

    }

    onClick() {
        event.preventDefault();
        if (!this.props.disabled) {
            if (this.props.handleSelectItem) {
                this.props.handleSelectItem(this.props.index);
            }
            if (this.props.onSelectListItem) {
                this.props.onSelectListItem(this);
            }
        }
    }

    render() {
        let className = "list-group-item list-group-item-action";

        if (this.props.active)
            className += " active"

        if (this.props.recordData.disabled)
            className += " disabled";

        let anterosStatus;
        if (this.props.recordData.status == "online"
            || this.props.recordData.status == "busy"
            || this.props.recordData.status == "absent") {
            anterosStatus = <AnterosStatusMark topRight borderColor="white" height="14px" width="14px"
                success={this.props.recordData.status == "online"}
                danger={this.props.recordData.status == "busy"}
                warning={this.props.recordData.status == "absent"}
                caption={this.props.recordData.status} />;
        } else if (this.props.recordData.status == "offline") {
            anterosStatus = <AnterosStatusMark topRight height="14px" width="14px"
                success backgroundColor="white"
                caption={this.props.recordData.status} />;
        }

        return (
            <div style={{ paddingLeft: "15px", paddingRight: "15px", paddingTop: "15px" }} className={className} onClick={this.onClick}>
                <div className="d-flex">
                    <AnterosImage margin={5} width={48} height={48} circle src={this.props.recordData.avatar} >
                        {anterosStatus}
                    </AnterosImage>

                    <div>
                        <h5 style={{ marginBottom: "-5px" }}>{this.props.recordData.text}</h5>
                        <small>{this.props.recordData.time}</small>
                    </div>
                </div>

                <div className="d-flex align-items-center">
                    <p style={{ marginBottom: "0px" }} className="justify-content-between" >{this.props.recordData.message}</p>
                </div>
            </div>
        );
    }
}

class CustomComponentTodo extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);

    }

    onClick() {
        event.preventDefault();
        if (!this.props.disabled) {
            if (this.props.handleSelectItem) {
                this.props.handleSelectItem(this.props.index);
            }
            if (this.props.onSelectListItem) {
                this.props.onSelectListItem(this);
            }
        }
    }

    render() {
        // let className = "list-group-item list-group-item-action";
        let className;

        if (this.props.active)
            className += " active"

        if (this.props.recordData.disabled)
            className += " disabled";

        // let anterosStatus;
        // if (this.props.recordData.status == "online"
        //     || this.props.recordData.status == "busy"
        //     || this.props.recordData.status == "absent") {
        //     anterosStatus = <AnterosStatusMark topRight borderColor="white" height="14px" width="14px"
        //         success={this.props.recordData.status == "online"}
        //         danger={this.props.recordData.status == "busy"}
        //         warning={this.props.recordData.status == "absent"}
        //         caption={this.props.recordData.status} />;
        // } else if (this.props.recordData.status == "offline") {
        //     anterosStatus = <AnterosStatusMark topRight height="14px" width="14px"
        //         success onlyBorder
        //         caption={this.props.recordData.status} />;
        // }

        let anterosBadge;
        if (this.props.recordData.priority == 1) {
            anterosBadge = <AnterosBadge pillFormat danger caption="Today" />
        } else if (this.props.recordData.priority == 2) {
            anterosBadge = <AnterosBadge pillFormat warning caption="1 week" />
        } else if (this.props.recordData.priority == 3) {
            anterosBadge = <AnterosBadge pillFormat success caption="2 weeks" />
        }

        // "person": [
        //     {
        //         "name": "Garret Strond",
        //         "avatar": "https://robohash.org/excepturimodiconsequatur.jpg?size=50x50&set=set1"
        //     }
        // ]

        let hasPerson = (isArray(this.props.recordData.person) && this.props.recordData.person.length > 0);
        return (
            <div style={{ paddingLeft: "15px", paddingRight: "15px", paddingTop: "15px" }} className={className} onClick={this.onClick}>
                <div className="d-flex">
                    <AnterosCheckbox checked={this.props.recordData.checked} rounded value="" 
                    onCheckboxChange={(value, checked) => setTodoListChecked(this.props.recordData.id, checked)} />
                    <div>
                        <div className="d-flex">
                            <h6 style={{ marginBottom: "-5px" }}>{this.props.recordData.text}</h6>
                            {anterosBadge}
                        </div>
                        <small>{this.props.recordData.date}</small>
                    </div>
                </div>

                <If condition={hasPerson}>
                    <Then>
                        <div className="d-flex align-items-center">
                            <AnterosList horizontal showBorder={false} dataSource={this.props.recordData.person} dataFieldText="name" component={CustomComponentTodoImages} />
                        </div>
                    </Then>
                    {/*<Else>
                                <div>
                                    <div className="img"><img ref={ref => this.image = ref} src={this.props.src} alt="img" /></div>
                                    <div className="info">
                                        <div className="info-back">
                                            {this.props.children}
                                        </div>
                                    </div>
                                </div>
                            </Else>*/}
                </If>


            </div>
            // <div className={className}>
            //     <div className="checkbox checkbox-info">
            //         <input type="checkbox" id="inputCall" name="inputCheckboxesCall" />
            //             <label for="inputCall" className=""> <span>Give Purchase report to</span> <span className="label label-light-danger">Today</span> </label>
            //     </div>
            // <div>
            //     <ul className="assignedto">
            //         <li><img src="../assets/images/users/3.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Priyanka" /></li>
            //         <li><img src="../assets/images/users/4.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Selina" /></li>
            //     </ul>
            // </div>
            // </div>
        );
    }
}

class CustomComponentTodoImages extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);

    }

    onClick() {
        event.preventDefault();
        if (!this.props.disabled) {
            if (this.props.handleSelectItem) {
                this.props.handleSelectItem(this.props.index);
            }
            if (this.props.onSelectListItem) {
                this.props.onSelectListItem(this);
            }
        }
    }

    render() {
        // let className = "list-group-item list-group-item-action";
        let className;

        // let anterosStatus;
        // if (this.props.recordData.status == "online"
        //     || this.props.recordData.status == "busy"
        //     || this.props.recordData.status == "absent") {
        //     anterosStatus = <AnterosStatusMark topRight borderColor="white" height="14px" width="14px"
        //         success={this.props.recordData.status == "online"}
        //         danger={this.props.recordData.status == "busy"}
        //         warning={this.props.recordData.status == "absent"}
        //         caption={this.props.recordData.status} />;
        // } else if (this.props.recordData.status == "offline") {
        //     anterosStatus = <AnterosStatusMark topRight height="14px" width="14px"
        //         success onlyBorder
        //         caption={this.props.recordData.status} />;
        // }

        // "person": [
        //     {
        //         "name": "Garret Strond",
        //         "avatar": "https://robohash.org/excepturimodiconsequatur.jpg?size=50x50&set=set1"
        //     }
        // ]

        return (
            <div className={className}>
                <AnterosImage margin={5} width={24} height={24} circle src={this.props.recordData.avatar} />
            </div>
        );
    }
}