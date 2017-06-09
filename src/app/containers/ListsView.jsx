import React, { Component } from 'react';
import AnterosCard, { AnterosCardDeck } from "../components/AnterosCard";
import AnterosList, { AnterosListItem } from "../components/AnterosList";
import AnterosBadge from "../components/AnterosBadge";
import AnterosLabel from "../components/AnterosLabel";
import AnterosImage from "../components/AnterosImage";


var userList = [
    {
        "id": 1,
        "name": "Georgie Garfirth",
        "text": "Fusce consequat. Nulla nisl. Nunc nisl.",
        "date": "31/12/2017",
        "avatar": "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
        "id": 2,
        "name": "Gisella Tother",
        "text": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "date": "31/12/2017",
        "avatar": "https://robohash.org/estutsunt.jpg?size=50x50&set=set1"
    },
    {
        "id": 3,
        "name": "Sax Maffioletti",
        "text": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
        "date": "31/12/2017",
        "avatar": "https://robohash.org/dolortotamearum.bmp?size=50x50&set=set1"
    },
    {
        "id": 4,
        "_name": "Madeline Accombe",
        "text": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
        "date": "31/12/2017",
        "avatar": "https://robohash.org/dolorespossimusqui.png?size=50x50&set=set1"
    },
    {
        "id": 5,
        "name": "Mellie Macguire",
        "text": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        "date": "31/12/2017",
        "avatar": "https://robohash.org/teneturquiaut.jpg?size=50x50&set=set1"
    },
    {
        "id": 6,
        "name": "Zolly Sandeson",
        "text": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        "date": "31/12/2017",
        "avatar": "https://robohash.org/esteiusut.png?size=50x50&set=set1"
    },
    {
        "id": 7,
        "name": "Lionello Tumility",
        "text": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        "date": "31/12/2017",
        "avatar": "https://robohash.org/dolorvoluptateenim.png?size=50x50&set=set1"
    },
    {
        "id": 8,
        "name": "Randy Carnaman",
        "text": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        "date": "31/12/2017",
        "avatar": "https://robohash.org/voluptatemrecusandaeconsequatur.png?size=50x50&set=set1"
    },
    {
        "id": 9,
        "name": "Sammie Bridgwater",
        "text": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
        "date": "31/12/2017",
        "avatar": "https://robohash.org/quaeratnisisit.bmp?size=50x50&set=set1"
    },
    {
        "id": 10,
        "name": "El Maria",
        "text": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
        "date": "31/12/2017",
        "avatar": "https://robohash.org/omnispraesentiumsit.png?size=50x50&set=set1"
    }]

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
                                        <div className="col-md-6">
                                            <AnterosCard caption="Custom 1">
                                                <section className="section">
                                                    <AnterosList height="700px" dataSource={userList} component={CustomComponentUsers} />
                                                </section>
                                            </AnterosCard>
                                        </div>

                                        <div className="col-md-6">
                                            <AnterosCard caption="Custom 2">
                                                <section className="section">

                                                </section>
                                            </AnterosCard>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <AnterosCard caption="With dataset">
                                                <section className="section">

                                                </section>
                                            </AnterosCard>
                                        </div>

                                        <div className="col-md-6">
                                            <AnterosCard caption="With dataset 2">
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

        return (
            <div className="d-flex flex-row comment-row" style={{height: "15px"}}>
                <div>
                    <AnterosImage margin={5} maxWidth={48} circle src={this.props.recordData.avatar} />
                </div>
                    <div>
                        <h5>{this.props.recordData.name}</h5>
                        <p className="m-b-5">{this.props.recordData.text}</p>
                        <div className="comment-footer">
                            <span className="text-muted pull-right">{this.props.recordData.date}</span>
                            <span className="label label-light-info">Pending</span>
                            <span className="action-icons">
                                <a href="javascript:void(0)"><i className="ti-pencil-alt"></i></a>
                                <a href="javascript:void(0)"><i className="ti-check"></i></a>
                                <a href="javascript:void(0)"><i className="ti-heart"></i></a>
                            </span>
                        </div>
                    </div>
                </div>
                );
	}
}

                /*<div style={{ color: "blue" }} className={className} onClick={this.onClick}>
                    <img src={this.props.recordData.foto} />
                    {this.props.recordData.id + " " + this.props.recordData.text}
                </div>*/