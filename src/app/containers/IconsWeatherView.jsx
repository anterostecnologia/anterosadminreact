import React, { Component } from 'react';
import { AnterosCard, HeaderActions, AnterosButton, AnterosRow, AnterosCol, AnterosIcon, AnterosLabel } from "anteros-react";
import "./Icons.css";

export default class IconsWeatherView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <AnterosCard caption="Abstract">
                <div className="icon-list-demo">
                    <AnterosRow>
                    </AnterosRow>
                </div>
            </AnterosCard>
        </div>);
    }
}