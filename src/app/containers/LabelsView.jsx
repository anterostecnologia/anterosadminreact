import React, { Component } from 'react';
import AnterosCard, { HeaderActions } from "../components/AnterosCard";
import AnterosLabel from "../components/AnterosLabel";
import AnterosBadge from "../components/AnterosBadge";

export default class LabelsView extends Component {
    render() {
        return (<AnterosCard caption="Labels & Badges">

            <AnterosCard caption="Labels">
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
                            <AnterosLabel large primary caption="Large" />
                            <AnterosLabel primary caption="Default" />
                            <AnterosLabel small primary caption="Small" />
                        </AnterosCard>
                    </div>
                </div>
            </AnterosCard >

            <AnterosCard caption="Badges">
                <div className="row">
                    <div className="col-4">
                        <AnterosCard caption="Default">
                            <p>
                                <AnterosBadge caption="1" />
                                <AnterosBadge primary caption="2" />
                                <AnterosBadge success caption="3" />
                                <AnterosBadge info caption="4" />
                                <AnterosBadge warning caption="5" />
                                <AnterosBadge danger caption="6" />
                            </p>
                            <p>
                                <AnterosBadge caption="10" />
                                <AnterosBadge primary caption="11" />
                                <AnterosBadge success caption="12" />
                                <AnterosBadge info caption="13" />
                                <AnterosBadge warning caption="14" />
                                <AnterosBadge danger caption="15" />
                            </p>
                        </AnterosCard>
                    </div>
                    <div className="col-4">
                        <AnterosCard caption="Radius">
                                <AnterosBadge radiusFormat caption="1" />
                                <AnterosBadge radiusFormat primary caption="2" />
                                <AnterosBadge radiusFormat success caption="3" />
                                <AnterosBadge radiusFormat info caption="4" />
                                <AnterosBadge radiusFormat warning caption="5" />
                                <AnterosBadge radiusFormat danger caption="6" />
                        </AnterosCard>
                    </div>
                    <div className="col-4">
                        <AnterosCard caption="Pill">
                                <AnterosBadge pillFormat caption="1" />
                                <AnterosBadge pillFormat primary caption="2" />
                                <AnterosBadge pillFormat success caption="3" />
                                <AnterosBadge pillFormat info caption="4" />
                                <AnterosBadge pillFormat warning caption="5" />
                                <AnterosBadge pillFormat danger caption="6" />
                        </AnterosCard>
                    </div>
                    <div className="col-4">
                        <AnterosCard caption="Size">
                            <AnterosBadge large primary caption="Large" />
                            <AnterosBadge primary caption="Default" />
                            <AnterosBadge small primary caption="Small" />
                        </AnterosCard>
                    </div>
                </div>
            </AnterosCard >
        </AnterosCard >);
    }
}