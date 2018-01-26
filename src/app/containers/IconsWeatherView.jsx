import React, { Component } from 'react';
import { AnterosCard, HeaderActions } from "anteros-react-containers";
import { AnterosIcon } from "anteros-react-image";
import { AnterosLabel } from "anteros-react-label";
import { AnterosRow, AnterosCol } from "anteros-react-layout";
import { AnterosButton } from "anteros-react-buttons";

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