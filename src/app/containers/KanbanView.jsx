
import React, { Component, PropTypes } from 'react';
import { AnterosCard, AnterosBadge, AnterosImage } from "anteros-react";
import { AnterosButton, AnterosLocalDatasource } from "anteros-react";
import AnterosKanbanBoard, { AnterosKanbanColumn } from "../components/AnterosKanbanBoard";
import AnterosFlexBox from "../components/AnterosFlexBox";
import AnterosIcon from "../components/AnterosIcon";

const tasks = [{ "id": 1, "first_name": "Birdie", "last_name": "Yewdale", "email": "byewdale0@meetup.com", "task": "Fixflex", "status": "TESTING", "tag1": "Desktop", "tag2": "Normal" },
{ "id": 2, "first_name": "Herve", "last_name": "Cowing", "email": "hcowing1@harvard.edu", "task": "Fixflex", "status": "TESTING", "tag1": "Partners", "tag2": "Normal" },
{ "id": 3, "first_name": "Margeaux", "last_name": "Lyste", "email": "mlyste2@over-blog.com", "task": "Bitchip", "status": "TO_DO", "tag1": "Social Media", "tag2": "Low" },
{ "id": 4, "first_name": "Romain", "last_name": "Hambrook", "email": "rhambrook3@friendfeed.com", "task": "Hatity", "status": "DONE", "tag1": "Desktop", "tag2": "Urgent" },
{ "id": 5, "first_name": "Amalita", "last_name": "Hearnaman", "email": "ahearnaman4@freewebs.com", "task": "Domainer", "status": "WILL_NOT_IMPLEMENTED", "tag1": "Languages", "tag2": "Normal" },
{ "id": 6, "first_name": "Leonanie", "last_name": "Rouch", "email": "lrouch5@springer.com", "task": "Redhold", "status": "WILL_NOT_IMPLEMENTED", "tag1": "Performance", "tag2": "Normal" },
{ "id": 7, "first_name": "Marshal", "last_name": "O'Scully", "email": "moscully6@goo.ne.jp", "task": "Duobam", "status": "DONE", "tag1": "Social Media", "tag2": "Urgent" },
{ "id": 8, "first_name": "Joanne", "last_name": "Dossett", "email": "jdossett7@scientificamerican.com", "task": "Tempsoft", "status": "DONE", "tag1": "Performance", "tag2": "Low" },
{ "id": 9, "first_name": "Perla", "last_name": "McCormack", "email": "pmccormack8@craigslist.org", "task": "Home Ing", "status": "WILL_NOT_IMPLEMENTED", "tag1": "Social Media", "tag2": "Low" },
{ "id": 10, "first_name": "Tanner", "last_name": "Dennitts", "email": "tdennitts9@icq.com", "task": "Daltfresh", "status": "DOING", "tag1": "Desktop", "tag2": "Normal" },
{ "id": 11, "first_name": "Tabby", "last_name": "Petrov", "email": "tpetrova@live.com", "task": "Vagram", "status": "TO_DO", "tag1": "Languages", "tag2": "Normal" },
{ "id": 12, "first_name": "Mahmud", "last_name": "Punyer", "email": "mpunyerb@mac.com", "task": "Bamity", "status": "DONE", "tag1": "Performance", "tag2": "Normal" },
{ "id": 13, "first_name": "Reba", "last_name": "Peyzer", "email": "rpeyzerc@fema.gov", "task": "Sonsing", "status": "WILL_NOT_IMPLEMENTED", "tag1": "Timeline", "tag2": "Normal" },
{ "id": 14, "first_name": "Isidoro", "last_name": "Decaze", "email": "idecazed@addthis.com", "task": "Viva", "status": "WILL_NOT_IMPLEMENTED", "tag1": "Timeline", "tag2": "Low" },
{ "id": 15, "first_name": "Myra", "last_name": "Vignaux", "email": "mvignauxe@multiply.com", "task": "Fix San", "status": "TESTING", "tag1": "Social Media", "tag2": "Normal" },
{ "id": 16, "first_name": "Desiri", "last_name": "Avrahamov", "email": "davrahamovf@usatoday.com", "task": "Voyatouch", "status": "TESTING", "tag1": "Performance", "tag2": "Normal" },
{ "id": 17, "first_name": "Christen", "last_name": "Jelphs", "email": "cjelphsg@samsung.com", "task": "Tres-Zap", "status": "DOING", "tag1": "Languages", "tag2": "Low" },
{ "id": 18, "first_name": "Bennie", "last_name": "Sugden", "email": "bsugdenh@bizjournals.com", "task": "Flexidy", "status": "WILL_NOT_IMPLEMENTED", "tag1": "Desktop", "tag2": "Normal" },
{ "id": 19, "first_name": "Rena", "last_name": "Gilchrist", "email": "rgilchristi@cmu.edu", "task": "Quo Lux", "status": "TESTING", "tag1": "Languages", "tag2": "Urgent" },
{ "id": 20, "first_name": "Iago", "last_name": "Whitwell", "email": "iwhitwellj@craigslist.org", "task": "Sub-Ex", "status": "DONE", "tag1": "Partners", "tag2": "Normal" },
{ "id": 21, "first_name": "Cazzie", "last_name": "Sutworth", "email": "csutworthk@pagesperso-orange.fr", "task": "Keylex", "status": "DOING", "tag1": "Partners", "tag2": "Normal" },
{ "id": 22, "first_name": "Archer", "last_name": "Ginnane", "email": "aginnanel@slideshare.net", "task": "Treeflex", "status": "DONE", "tag1": "Partners", "tag2": "Urgent" },
{ "id": 23, "first_name": "Pacorro", "last_name": "Mohring", "email": "pmohringm@skyrock.com", "task": "Vagram", "status": "WILL_NOT_IMPLEMENTED", "tag1": "Partners", "tag2": "Urgent" },
{ "id": 24, "first_name": "Xever", "last_name": "Rorke", "email": "xrorken@quantcast.com", "task": "Domainer", "status": "TESTING", "tag1": "Partners", "tag2": "Low" },
{ "id": 25, "first_name": "Mirna", "last_name": "Leathlay", "email": "mleathlayo@google.com.au", "task": "Asoka", "status": "DOING", "tag1": "Social Media", "tag2": "Normal" },
{ "id": 26, "first_name": "Fabiano", "last_name": "Eadie", "email": "feadiep@histats.com", "task": "Matsoft", "status": "DOING", "tag1": "Desktop", "tag2": "Normal" },
{ "id": 27, "first_name": "Bessy", "last_name": "Lemmon", "email": "blemmonq@storify.com", "task": "Zaam-Dox", "status": "DONE", "tag1": "Mobile", "tag2": "Low" },
{ "id": 28, "first_name": "Elyn", "last_name": "Slott", "email": "eslottr@sbwire.com", "task": "Span", "status": "TESTING", "tag1": "Timeline", "tag2": "Urgent" },
{ "id": 29, "first_name": "Aundrea", "last_name": "Clarae", "email": "aclaraes@godaddy.com", "task": "Namfix", "status": "DOING", "tag1": "Mobile", "tag2": "Normal" },
{ "id": 30, "first_name": "Manuel", "last_name": "Waud", "email": "mwaudt@dion.ne.jp", "task": "Opela", "status": "TO_DO", "tag1": "Languages", "tag2": "Urgent" },
{ "id": 31, "first_name": "Ephrem", "last_name": "Firebrace", "email": "efirebraceu@odnoklassniki.ru", "task": "Pannier", "status": "DONE", "tag1": "Languages", "tag2": "Low" },
{ "id": 32, "first_name": "Shaun", "last_name": "Reide", "email": "sreidev@baidu.com", "task": "Home Ing", "status": "TO_DO", "tag1": "Desktop", "tag2": "Urgent" },
{ "id": 33, "first_name": "Nelli", "last_name": "Daniel", "email": "ndanielw@webeden.co.uk", "task": "Cookley", "status": "TO_DO", "tag1": "Languages", "tag2": "Low" },
{ "id": 34, "first_name": "Lazarus", "last_name": "Lavens", "email": "llavensx@nbcnews.com", "task": "Bitchip", "status": "DOING", "tag1": "Timeline", "tag2": "Low" },
{ "id": 35, "first_name": "Amby", "last_name": "Bassett", "email": "abassetty@si.edu", "task": "Flowdesk", "status": "TO_DO", "tag1": "Social Media", "tag2": "Low" },
{ "id": 36, "first_name": "Archer", "last_name": "Tomenson", "email": "atomensonz@delicious.com", "task": "Trippledex", "status": "DONE", "tag1": "Performance", "tag2": "Normal" },
{ "id": 37, "first_name": "Araldo", "last_name": "Hicken", "email": "ahicken10@kickstarter.com", "task": "Zaam-Dox", "status": "TESTING", "tag1": "Performance", "tag2": "Normal" },
{ "id": 38, "first_name": "Berkie", "last_name": "O'Scanlan", "email": "boscanlan11@shinystat.com", "task": "Zontrax", "status": "TO_DO", "tag1": "Desktop", "tag2": "Low" },
{ "id": 39, "first_name": "Stacey", "last_name": "Harrow", "email": "sharrow12@deviantart.com", "task": "Wrapsafe", "status": "DOING", "tag1": "Partners", "tag2": "Urgent" },
{ "id": 40, "first_name": "Julianna", "last_name": "Perigo", "email": "jperigo13@usatoday.com", "task": "Lotstring", "status": "TO_DO", "tag1": "Partners", "tag2": "Low" },
{ "id": 41, "first_name": "Jessie", "last_name": "Mc Andrew", "email": "jmcandrew14@webmd.com", "task": "Cardify", "status": "DONE", "tag1": "Languages", "tag2": "Low" },
{ "id": 42, "first_name": "Evangelia", "last_name": "Hickeringill", "email": "ehickeringill15@sbwire.com", "task": "Bigtax", "status": "DOING", "tag1": "Partners", "tag2": "Urgent" },
{ "id": 43, "first_name": "Jewel", "last_name": "Josephy", "email": "jjosephy16@house.gov", "task": "Zathin", "status": "WILL_NOT_IMPLEMENTED", "tag1": "Partners", "tag2": "Urgent" },
{ "id": 44, "first_name": "Nola", "last_name": "Kayes", "email": "nkayes17@squarespace.com", "task": "Cardguard", "status": "DONE", "tag1": "Desktop", "tag2": "Urgent" },
{ "id": 45, "first_name": "Iorgos", "last_name": "Lumsden", "email": "ilumsden18@google.ru", "task": "Quo Lux", "status": "DONE", "tag1": "Performance", "tag2": "Low" },
{ "id": 46, "first_name": "Felicity", "last_name": "Daysh", "email": "fdaysh19@alexa.com", "task": "It", "status": "DONE", "tag1": "Mobile", "tag2": "Low" },
{ "id": 47, "first_name": "Matthias", "last_name": "Kelmere", "email": "mkelmere1a@ebay.com", "task": "Tres-Zap", "status": "TO_DO", "tag1": "Partners", "tag2": "Low" },
{ "id": 48, "first_name": "Emelyne", "last_name": "Bantham", "email": "ebantham1b@flavors.me", "task": "Ventosanzap", "status": "TESTING", "tag1": "Social Media", "tag2": "Normal" },
{ "id": 49, "first_name": "Randa", "last_name": "Hebard", "email": "rhebard1c@technorati.com", "task": "Andalax", "status": "TESTING", "tag1": "Desktop", "tag2": "Urgent" },
{ "id": 50, "first_name": "Consalve", "last_name": "Chessman", "email": "cchessman1d@e-recht24.de", "task": "Span", "status": "TESTING", "tag1": "Social Media", "tag2": "Normal" },
{ "id": 51, "first_name": "Bridie", "last_name": "Slowan", "email": "bslowan1e@zimbio.com", "task": "Bitchip", "status": "TESTING", "tag1": "Partners", "tag2": "Urgent" },
{ "id": 52, "first_name": "Kelley", "last_name": "Lorimer", "email": "klorimer1f@fc2.com", "task": "Overhold", "status": "TESTING", "tag1": "Partners", "tag2": "Normal" },
{ "id": 53, "first_name": "Haydon", "last_name": "Werny", "email": "hwerny1g@newsvine.com", "task": "Sonair", "status": "TESTING", "tag1": "Partners", "tag2": "Low" },
{ "id": 54, "first_name": "Torr", "last_name": "Linfoot", "email": "tlinfoot1h@ihg.com", "task": "Gembucket", "status": "TESTING", "tag1": "Social Media", "tag2": "Normal" },
{ "id": 55, "first_name": "Karyl", "last_name": "Bullick", "email": "kbullick1i@technorati.com", "task": "Holdlamis", "status": "DONE", "tag1": "Performance", "tag2": "Urgent" },
{ "id": 56, "first_name": "Jourdain", "last_name": "Mannakee", "email": "jmannakee1j@tinyurl.com", "task": "Greenlam", "status": "TO_DO", "tag1": "Timeline", "tag2": "Low" },
{ "id": 57, "first_name": "Darin", "last_name": "Borge", "email": "dborge1k@google.de", "task": "Tin", "status": "DOING", "tag1": "Mobile", "tag2": "Urgent" },
{ "id": 58, "first_name": "Angeline", "last_name": "Hudd", "email": "ahudd1l@e-recht24.de", "task": "Bitchip", "status": "DOING", "tag1": "Performance", "tag2": "Low" },
{ "id": 59, "first_name": "Corney", "last_name": "Tyson", "email": "ctyson1m@pbs.org", "task": "Alphazap", "status": "DOING", "tag1": "Performance", "tag2": "Urgent" },
{ "id": 60, "first_name": "Joline", "last_name": "Bozworth", "email": "jbozworth1n@arizona.edu", "task": "Cardguard", "status": "DOING", "tag1": "Social Media", "tag2": "Low" }];



export default class KanbanView extends Component {
    constructor(props) {
        super(props);
        this.dataSource = new AnterosLocalDatasource();
        this.dataSource.open(tasks);
    }

    render() {
        return (<AnterosCard caption="Kanban board" height="850px">
            <AnterosKanbanBoard dataSource={this.dataSource} dataFieldColumn="status" height="750px" cardComponent={Card}>
                <AnterosKanbanColumn dataFieldValue="TO_DO" title="TO DO" backgroundColorTitle="#81D4FA" fontColorTitle="black" centerTitle />
                <AnterosKanbanColumn dataFieldValue="DOING" title="DOING" backgroundColorTitle="#FEE0BD" fontColorTitle="black" centerTitle />
                <AnterosKanbanColumn dataFieldValue="TESTING" title="TESTING" backgroundColorTitle="#FF8A65" fontColorTitle="black" centerTitle />
                <AnterosKanbanColumn dataFieldValue="DONE" title="DONE" backgroundColorTitle="#C0E39A" fontColorTitle="black" centerTitle />
                <AnterosKanbanColumn dataFieldValue="WILL_NOT_IMPLEMENTED" title="WILL NOT IMPLEMENTED" backgroundColorTitle="#C6C6C6" fontColorTitle="black" centerTitle />
            </AnterosKanbanBoard>
        </AnterosCard>);
    }

}





class Card extends Component {
    constructor(props) {
        super(props);
        this.getBackgroundColor = this.getBackgroundColor.bind(this);
    }

    getBackgroundColor(value) {
        if (value == "Mobile") {
            return "#CDE245";
        } else if (value == "Desktop") {
            return "#E2507B";
        } else if (value == "Partners") {
            return "#A44BE3";
        } else if (value == "Timeline") {
            return "#515CE3";
        } else if (value == "Performance") {
            return "#4AE1A5";
        } else if (value == "Social Media") {
            return "#5078E3";
        } else if (value == "Languages") {
            return "#515FE3";
        } else if (value == "Urgent") {
            return "#FF1744";
        } else if (value == "Normal") {
            return "#43A047";
        } else if (value == "Low") {
            return "#0288D1";
        }    
    }

    render() {
        const { style, item, id } = this.props;

        return (
            <AnterosFlexBox flexDirection="column" style={style} className="kanban-card-item" id={id} >
                <AnterosFlexBox flexDirection="row" width="100%" justifyContent="space-between">
                    Task# {item.id}
                    <AnterosFlexBox>
                        <AnterosIcon icon="fa fa-pencil" />
                        <AnterosIcon icon="fa fa-trash" />
                    </AnterosFlexBox>
                </AnterosFlexBox>
                <br></br>
                <AnterosFlexBox flexDirection="row" width="100%" justifyContent="space-between">
                    <AnterosFlexBox>
                        Lorem ipsum dolor sit amet.
                        <br></br>
                        Lorem ipsum dolor sit amet.
                    </AnterosFlexBox>
                    <AnterosImage src={`https://randomuser.me/api/portraits/med/men/${item.id}.jpg`} width="48px" height="48px" circle />
                </AnterosFlexBox>
                <br></br>
                <AnterosFlexBox flexDirection="row" width="100%" justifyContent="space-between">
                    <AnterosFlexBox>
                        <AnterosBadge backgroundColor={this.getBackgroundColor(item.tag1)} color="white" radiusFormat caption={item.tag1} />
                        <AnterosBadge backgroundColor={this.getBackgroundColor(item.tag2)} color="white" radiusFormat caption={item.tag2} />
                    </AnterosFlexBox>
                    <AnterosIcon icon="fa fa-comment" color="orange" />
                </AnterosFlexBox>
            </AnterosFlexBox>
        );
    }

};

Card.propTypes = {
    item: PropTypes.object.isRequired,
    style: PropTypes.object
};


