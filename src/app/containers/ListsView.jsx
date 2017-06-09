import React, { Component } from 'react';
import AnterosCard, { AnterosCardDeck } from "../components/AnterosCard";
import AnterosList, { AnterosListItem } from "../components/AnterosList";
import AnterosBadge from "../components/AnterosBadge";
import AnterosLabel from "../components/AnterosLabel";
import AnterosImage from "../components/AnterosImage";
import AnterosButton from "../components/AnterosButton";
import AnterosProgressBar from '../components/AnterosProgressBar';


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
        "image": "https://robohash.org/namdelenitiunde.png?size=50x50&set=set1"
    }, {
        "id": 2,
        "text": "Internet Explorer",
        "percent": 17.55,
        "image": "https://robohash.org/maioresperferendiscorrupti.jpg?size=50x50&set=set1"
    }, {
        "id": 3,
        "text": "Mozilla Firefox",
        "percent": 11.98,
        "image": "https://robohash.org/ducimuseiusid.png?size=50x50&set=set1"
    }, {
        "id": 4,
        "text": "Microsoft Edge",
        "percent": 5.63,
        "image": "https://robohash.org/sitsimiliqueenim.png?size=50x50&set=set1"
    }, {
        "id": 5,
        "text": "Safari",
        "percent": 3.56,
        "image": "https://robohash.org/pariaturtemporeest.png?size=50x50&set=set1"
    }, {
        "id": 6,
        "text": "Opera",
        "percent": 1.24,
        "image": "https://robohash.org/quialiquidsimilique.png?size=50x50&set=set1"
    }];

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
                                                </section>
                                            </AnterosCard>
                                        </div>

                                        <div className="col-md-4">
                                            <AnterosCard caption="Browser stats">
                                                <section className="section">
                                                    <AnterosList height="700px" dataSource={browserList} component={CustomComponentBrowser}/>
                                                </section>
                                            </AnterosCard>
                                        </div>

                                        <div className="col-md-4">
                                            <AnterosCard caption="Custom 3">
                                                <section className="section">
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

        if (this.props.active) {
            className += " active"
        }

        if (this.props.recordData.disabled) {
            className += " disabled";
        }

        let anterosLabel
        if (this.props.recordData.status == "pending")
            anterosLabel = <AnterosBadge pillFormat primary caption={this.props.recordData.status} />;
        else if (this.props.recordData.status == "approved")
            anterosLabel = <AnterosBadge pillFormat success caption={this.props.recordData.status} />;
        else if (this.props.recordData.status == "rejected")
            anterosLabel = <AnterosBadge pillFormat danger caption={this.props.recordData.status} />;

        return (
            <div style={{ paddingLeft: "15px", paddingRight: "15px", paddingTop: "15px" }} className={className} onClick={this.onClick}>
                <div className="d-flex align-items-center">
                    <AnterosImage margin={5} width={48} height={48} circle src={this.props.recordData.avatar} />
                    <h5>{this.props.recordData.name}</h5>
                </div>
                <div>
                    <p style={{ marginBottom: "0px" }} className="justify-content-between" >{this.props.recordData.text}</p>
                    <div className="d-flex justify-content-between">
                        <div className="align-self-center">{anterosLabel}</div>
                        <span className="d-flex align-self-start">
                            <AnterosButton circle link icon="fa fa-edit" hint="Edit" />
                            <AnterosButton circle link icon="fa fa-check green" hint="Approve" />
                            <AnterosButton circle link icon="fa fa-heart-o red" hint="Like it" />
                        </span>
                        <span className="align-self-center" style={{ fontSize: "13px", color: "#90a4ae" }} >{this.props.recordData.date}</span>
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

        // let classNameIcon;
        // if (this.props.recordData.position == "up")
        //     classNameIcon = "fa fa-level-up text-success"
        // else if (this.props.recordData.position == "down")
        //     classNameIcon = "fa fa-level-down text-danger";

        // let progressBar = <AnterosProgressBar
        //     success={this.props.recordData.progress_color == "success"}
        //     info={this.props.recordData.progress_color == "info"}
        //     warning={this.props.recordData.progress_color == "warning"}
        //     primary={this.props.recordData.progress_color == "primary"}
        //     danger={this.props.recordData.progress_color == "danger"}
        //     height={8} value={this.props.recordData.percent} max={100} min={0} />

        return (
            <div style={{ paddingLeft: "15px", paddingRight: "15px", paddingTop: "15px" }} className={className} onClick={this.onClick}>
                <div>
                    <AnterosImage margin={5} width={48} height={48} circle src={this.props.recordData.image} />
                </div>
                <div className="d-flex align-items-center p-2">
                    <h6 style={{margin: "0"}}>{this.props.recordData.text}</h6>
                    <AnterosBadge pillFormat primary caption={this.props.recordData.percent + "%"}  />
                </div>
                {/*style={{ marginBottom: "0px" }}*/}
            </div>
        );
    }
}