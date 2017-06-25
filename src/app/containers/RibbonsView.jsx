import React, { Component } from 'react';
import {AnterosCard,HeaderActions} from "anteros-react";
import {AnterosRibbon} from "anteros-react";
import {AnterosImage} from "anteros-react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import {AnterosCollapseContent} from 'anteros-react';

export default class RibbonView extends Component {
    render() {
        return (<AnterosCard caption="Ribbons">

            <AnterosCard caption="Ribbons default">
                <div className="row">
                    <div className="col-sm-2">
                        <AnterosRibbon caption="Ribbon">
                            <AnterosImage src="http://lorempixel.com/130/130/sports/" />
                        </AnterosRibbon>
                    </div>

                    <div className="col-sm-2">
                        <AnterosRibbon danger caption="Ribbon">
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula</p>
                            <AnterosImage src="http://lorempixel.com/130/130/sports/" />
                        </AnterosRibbon>
                    </div>

                    <div className="col-sm-2">
                        <AnterosRibbon success caption="Ribbon">
                            <AnterosImage src="http://lorempixel.com/130/130/sports/" />
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula</p>
                        </AnterosRibbon>
                    </div>

                    <div className="col-sm-2">
                        <AnterosRibbon primary caption="Ribbon">
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula</p>
                        </AnterosRibbon>
                    </div>

                    <div className="col-sm-2">
                        <AnterosRibbon info caption="Ribbon">
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula</p>
                        </AnterosRibbon>
                    </div>

                    <div className="col-sm-2">
                        <AnterosRibbon warning caption="Ribbon">
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula</p>
                        </AnterosRibbon>
                    </div>
                </div>
            </AnterosCard >

            <AnterosCard caption="Ribbons right align">
                <div className="row">
                    <div className="col-sm-2">
                        <AnterosRibbon reverse caption="Ribbon">
                            <AnterosImage src="http://lorempixel.com/130/130/sports/" />
                        </AnterosRibbon>
                    </div>

                    <div className="col-sm-2">
                        <AnterosRibbon reverse danger caption="Ribbon">
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula</p>
                            <AnterosImage src="http://lorempixel.com/130/130/sports/" />
                        </AnterosRibbon>
                    </div>

                    <div className="col-sm-2">
                        <AnterosRibbon reverse success caption="Ribbon">
                            <AnterosImage src="http://lorempixel.com/130/130/sports/" />
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula</p>
                        </AnterosRibbon>
                    </div>

                    <div className="col-sm-2">
                        <AnterosRibbon reverse primary caption="Ribbon">
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula</p>
                        </AnterosRibbon>
                    </div>

                    <div className="col-sm-2">
                        <AnterosRibbon reverse info caption="Ribbon">
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula</p>
                        </AnterosRibbon>
                    </div>

                    <div className="col-sm-2">
                        <AnterosRibbon reverse warning caption="Ribbon">
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula</p>
                        </AnterosRibbon>
                    </div>
                </div>
            </AnterosCard >

            <AnterosCard caption="Vertical ribbons">
                <div className="row">
                    <div className="col-sm-2">
                        <AnterosRibbon vertical icon="fa fa-check-circle" caption="Ribbon">
                            <AnterosImage src="http://lorempixel.com/130/130/sports/" />
                        </AnterosRibbon>
                    </div>

                    <div className="col-sm-2">
                        <AnterosRibbon vertical icon="fa fa-check-circle" danger caption="Ribbon">
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula</p>
                            <AnterosImage src="http://lorempixel.com/130/130/sports/" />
                        </AnterosRibbon>
                    </div>

                    <div className="col-sm-2">
                        <AnterosRibbon vertical icon="fa fa-check-circle" success caption="Ribbon">
                            <AnterosImage src="http://lorempixel.com/130/130/sports/" />
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula</p>
                        </AnterosRibbon>
                    </div>

                    <div className="col-sm-2">
                        <AnterosRibbon vertical icon="fa fa-heart" primary caption="Ribbon">
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula</p>
                        </AnterosRibbon>
                    </div>

                    <div className="col-sm-2">
                        <AnterosRibbon vertical icon="fa fa-heart" info caption="Ribbon">
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula</p>
                        </AnterosRibbon>
                    </div>

                    <div className="col-sm-2">
                        <AnterosRibbon vertical icon="fa fa-heart" warning caption="Ribbon">
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula</p>
                        </AnterosRibbon>
                    </div>
                </div>
            </AnterosCard >

        </AnterosCard >);
    }
}



