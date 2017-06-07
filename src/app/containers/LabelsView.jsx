import React, { Component } from 'react';
import AnterosCard from "../components/AnterosCard";
import AnterosLabel from "../components/AnterosLabel";

export default class LabelView extends Component {
    render() {
        return (<AnterosCard caption="Labels">

            <div className="row">
                <div className="col-6">
                    <AnterosCard caption="Default Labels">
                    </AnterosCard>
                </div>
                <div className="col-6">
                    <AnterosCard caption="Sizing">

                    </AnterosCard>
                </div>

                <div className="col-6">
                    <AnterosCard caption="Pill Labels">

                    </AnterosCard>
                </div>
            </div>

        </AnterosCard >);
    }
}