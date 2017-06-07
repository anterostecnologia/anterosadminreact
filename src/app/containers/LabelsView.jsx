import React, { Component } from 'react';
import AnterosCard from "../components/AnterosCard";
import AnterosLabel from "../components/AnterosLabel";

export default class LabelView extends Component {
    render() {
        return (<AnterosCard caption="Labels">

            <div className="row">
                <div className="col-4">
                    <AnterosCard caption="Default">
                        <AnterosLabel caption="Default" />
                        <AnterosLabel primary caption="Primary" />
                        <AnterosLabel success caption="Success" />
                        <AnterosLabel info caption="Info" />
                        <AnterosLabel warning caption="Warning" />
                        <AnterosLabel danger caption="Danger" />
                        <AnterosLabel dark caption="Dark" />
                    </AnterosCard>
                </div>
                <div className="col-4">
                    <AnterosCard caption="Pill">
                        <AnterosLabel pillFormat caption="Default" />
                        <AnterosLabel pillFormat primary caption="Primary" />
                        <AnterosLabel pillFormat success caption="Success" />
                        <AnterosLabel pillFormat info caption="Info" />
                        <AnterosLabel pillFormat warning caption="Warning" />
                        <AnterosLabel pillFormat danger caption="Danger" />
                        <AnterosLabel pillFormat dark caption="Dark" />
                    </AnterosCard>
                </div>
                <div className="col-4">
                    <AnterosCard caption="Outline">
                        <AnterosLabel outline caption="Default" />
                        <AnterosLabel outline primary caption="Primary" />
                        <AnterosLabel outline success caption="Success" />
                        <AnterosLabel outline info caption="Info" />
                        <AnterosLabel outline warning caption="Warning" />
                        <AnterosLabel outline danger caption="Danger" />
                        <AnterosLabel outline dark caption="Dark" />
                    </AnterosCard>
                </div>
                <div className="col-4">
                    <AnterosCard caption="Sizes">

                    </AnterosCard>
                </div>
            </div>

        </AnterosCard >);
    }
}