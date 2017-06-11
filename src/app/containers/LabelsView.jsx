import React, { Component } from 'react';
import AnterosCard, { HeaderActions } from "../components/AnterosCard";
import AnterosLabel from "../components/AnterosLabel";
import AnterosBadge from "../components/AnterosBadge";
import AnterosButton from '../components/AnterosButton';
import AnterosPageControl from "../components/AnterosPageControl";
import AnterosTab from "../components/AnterosTab";

export default class LabelsView extends Component {
    render() {
        return (<AnterosCard caption="Labels & Badges">

            <AnterosCard caption="Labels">
                <div className="row">
                    <div className="col-4">
                        <AnterosCard caption="Labels default">
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
                        <AnterosCard caption="Labels pill">
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
                        <AnterosCard caption="Labels outline">
                            <AnterosLabel outline caption="Default" />
                            <AnterosLabel outline primary caption="Primary" />
                            <AnterosLabel outline success caption="Success" />
                            <AnterosLabel outline info caption="Info" />
                            <AnterosLabel outline warning caption="Warning" />
                            <AnterosLabel outline danger caption="Danger" />
                            <AnterosLabel outline dark caption="Dark" />
                        </AnterosCard>
                    </div>
                    <div className="col-12">
                        <AnterosCard caption="Labels sizes">
                            <p>
                                <AnterosLabel large caption="Large" />
                                <AnterosLabel caption="Default" />
                                <AnterosLabel small caption="Small" />
                            </p>
                            <p>
                                <AnterosLabel large primary caption="Large" />
                                <AnterosLabel primary caption="Default" />
                                <AnterosLabel small primary caption="Small" />
                            </p>
                            <p>
                                <AnterosLabel large success caption="Large" />
                                <AnterosLabel success caption="Default" />
                                <AnterosLabel small success caption="Small" />
                            </p>
                            <p>
                                <AnterosLabel large info caption="Large" />
                                <AnterosLabel info caption="Default" />
                                <AnterosLabel small info caption="Small" />
                            </p>
                            <p>
                                <AnterosLabel large warning caption="Large" />
                                <AnterosLabel warning caption="Default" />
                                <AnterosLabel small warning caption="Small" />
                            </p>
                            <p>
                                <AnterosLabel large danger caption="Large" />
                                <AnterosLabel danger caption="Default" />
                                <AnterosLabel small danger caption="Small" />
                            </p>
                            <p>
                                <AnterosLabel large dark caption="Large" />
                                <AnterosLabel dark caption="Default" />
                                <AnterosLabel small dark caption="Small" />
                            </p>
                        </AnterosCard>
                    </div>
                </div>
            </AnterosCard >

            <AnterosCard caption="Badges">
                <div className="row">
                    <div className="col-4">
                        <AnterosCard caption="Badges default">
                            <p>
                                <AnterosBadge caption="1" />
                                <AnterosBadge primary caption="2" />
                                <AnterosBadge success caption="3" />
                                <AnterosBadge info caption="4" />
                                <AnterosBadge warning caption="5" />
                                <AnterosBadge danger caption="6" />
                                <AnterosBadge dark caption="7" />
                            </p>
                            <p>
                                <AnterosBadge caption="11" />
                                <AnterosBadge primary caption="12" />
                                <AnterosBadge success caption="13" />
                                <AnterosBadge info caption="14" />
                                <AnterosBadge warning caption="15" />
                                <AnterosBadge danger caption="16" />
                                <AnterosBadge dark caption="17" />
                            </p>
                        </AnterosCard>
                    </div>
                    <div className="col-4">
                        <AnterosCard caption="Badges radius">
                            <AnterosBadge radiusFormat caption="1" />
                            <AnterosBadge radiusFormat primary caption="2" />
                            <AnterosBadge radiusFormat success caption="3" />
                            <AnterosBadge radiusFormat info caption="4" />
                            <AnterosBadge radiusFormat warning caption="5" />
                            <AnterosBadge radiusFormat danger caption="6" />
                            <AnterosBadge radiusFormat dark caption="6" />
                        </AnterosCard>
                    </div>
                    <div className="col-4">
                        <AnterosCard caption="Badges size">
                            <AnterosBadge large primary caption="Large" />
                            <AnterosBadge primary caption="Default" />
                            <AnterosBadge small primary caption="Small" />
                        </AnterosCard>
                    </div>
                    <div className="col-4">
                        <AnterosCard caption="Badges in button">
                            <AnterosButton primary caption="Primary">
                                <span className="badge">5</span>
                            </AnterosButton>
                            <AnterosButton primary outline caption="Primary">
                                <span className="badge">5</span>
                            </AnterosButton>
                        </AnterosCard>
                    </div>
                    <div className="col-4">
                        <AnterosCard caption="Absolute positioning">
                        </AnterosCard>
                    </div>
                    <div className="col-4">
                        <AnterosCard caption="Status badges">
                        </AnterosCard>
                    </div>
                    <div className="col-12">
                        <AnterosCard caption="Badges in nav">

                            <AnterosPageControl height="200px">
                                <AnterosTab id="tab1" caption="Home" active>
                                </AnterosTab>
                                <AnterosTab id="tab2" caption="Blog">
                                </AnterosTab>
                                <AnterosTab id="tab3" caption="Profile">
                                </AnterosTab>
                            </AnterosPageControl>

                        </AnterosCard>
                    </div>
                </div>
            </AnterosCard >
        </AnterosCard >);
    }
}