import React, { Component } from 'react';
import {AnterosCard, HeaderActions, AnterosCardDeck, AnterosCollapseContent } from "anteros-react-containers";
import {AnterosProgressBar, AnterosKnob} from 'anteros-react-misc';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

export default class ButtonView extends Component {
    render() {
        return (
            <div>
                <AnterosCard caption="Progress Bar">

                    <div className="row">
                        <div className="col-md-4">
                            <AnterosCard caption="Progress Bar colors">
                                <section className="section">
                                    <AnterosProgressBar value={20} max={100} min={0} />
                                    <AnterosProgressBar success value={40} max={100} />
                                    <AnterosProgressBar info value={60} max={100} />
                                    <AnterosProgressBar warning value={80} max={100} />
                                    <AnterosProgressBar danger value={100} max={100} />
                                </section>
                            </AnterosCard>
                        </div>

                        <div className="col-md-4">
                            <AnterosCard caption="Progress Bar values">
                                <section className="section">
                                    <AnterosProgressBar value={20} max={100} min={0} showText={true} />
                                    <AnterosProgressBar success value={40} max={100} showText={true} />
                                    <AnterosProgressBar info value={60} max={100} showText={true} />
                                    <AnterosProgressBar warning value={80} max={100} showText={true} />
                                    <AnterosProgressBar danger value={100} max={100} showText={true} />
                                </section>
                            </AnterosCard>
                        </div>

                        <div className="col-md-4">
                            <AnterosCard caption="Progress Bar sizes">
                                <section className="section">
                                    <AnterosProgressBar height={5} value={20} max={100} min={0} />
                                    <AnterosProgressBar height={10} success value={40} max={100} />
                                    <AnterosProgressBar info value={60} max={100} />
                                    <AnterosProgressBar height={50} warning value={80} max={100} />
                                </section>
                            </AnterosCard>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <AnterosCard caption="Progress Bar striped">
                                <section className="section">
                                    <AnterosProgressBar striped value={20} max={100} min={0} />
                                    <AnterosProgressBar striped success value={40} max={100} />
                                    <AnterosProgressBar striped info value={60} max={100} />
                                    <AnterosProgressBar striped warning value={80} max={100} />
                                    <AnterosProgressBar striped danger value={100} max={100} />
                                </section>
                            </AnterosCard>
                        </div>

                        <div className="col-6">
                            <AnterosCard caption="Progress Bar striped and animated">
                                <section className="section">
                                    <AnterosProgressBar striped animated value={20} max={100} min={0} showText={true} />
                                    <AnterosProgressBar striped animated success value={40} max={100} showText={true} />
                                    <AnterosProgressBar striped animated info value={60} max={100} showText={true} />
                                    <AnterosProgressBar striped animated warning value={80} max={100} showText={true} />
                                    <AnterosProgressBar striped animated danger value={100} max={100} showText={true} />
                                </section>
                            </AnterosCard>
                        </div>

                    </div>
                </AnterosCard>
                <AnterosCard caption="Knob progress">
                    <div className="row">
                        <div className="col-md-12">
                            <AnterosCardDeck>
                                <AnterosCard caption="Disable display input" textCenter>
                                    <AnterosKnob width="150" height="150" backgroundColor="#ebeff2" color="#009efb" showInput={false} value={50} />
                                </AnterosCard>
                                <AnterosCard caption="Cursor mode" textCenter>
                                    <AnterosKnob width="150" height="150" showCursor={true} color="#55ce63" value={75} />
                                </AnterosCard>
                                <AnterosCard caption="Display previous value" textCenter>
                                    <AnterosKnob width="150" height="150" minValue={-100} color="#ffbc34" showPrevious={true} value={89} />
                                </AnterosCard>
                            </AnterosCardDeck>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <AnterosCardDeck>
                                <AnterosCard caption="Angle offset and arc" textCenter>
                                    <AnterosKnob width="250" height="250" minValue={-100} color="#f62d51" showPrevious={true} angleOffset={-125} angleArc={250} value={56} onChangeValue={(value) => console.log("value " + value)} />
                                </AnterosCard>
                                <AnterosCard caption="Angle offset" textCenter>
                                    <AnterosKnob width="250" height="250" angleOffset={90} lineRound={true} color="#7460ee" value={90} onChangeValue={(value) => console.log("value " + value)} />
                                </AnterosCard>
                                <AnterosCard caption="5-digit values, step 1000" textCenter>
                                    <AnterosKnob width="150" height="150" minValue={-15000} showPrevious={true} maxValue={15000} stepValue={1000} value={10000} color="#4c5667" onChangeValue={(value) => console.log("value " + value)} />
                                </AnterosCard>
                            </AnterosCardDeck>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <AnterosCardDeck>
                                <AnterosCard caption="Readonly" textCenter>
                                    <AnterosKnob width="150" height="150" lineRound={true} color="#01c0c8" value={40} angleOffset={180} readOnly={true} thickness={.1} onChangeValue={(value) => console.log("value " + value)} />
                                </AnterosCard>
                                <AnterosCard caption="Angle offset and arc" textCenter>
                                    <AnterosKnob width="150" height="150" showPrevious={true} color="#55ce63" showCursor={true} value={75} thickness={.2} angleOffset={-125} angleArc={250} onChangeValue={(value) => console.log("value " + value)} />
                                </AnterosCard>
                                <AnterosCard caption="Readonly" textCenter>
                                    <AnterosKnob width="220" height="220" lineRound={true} color="#01c0c8" value={90} angleOffset={180} readOnly={true} thickness={.2} onChangeValue={(value) => console.log("value " + value)} />
                                </AnterosCard>
                            </AnterosCardDeck>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <AnterosCardDeck>
                                <AnterosCard caption="Readonly" textCenter>
                                    <AnterosKnob width="180" height="180" lineRound={true} color="#ffbc34" value={67} angleOffset={180} readOnly={true} thickness={.1} onChangeValue={(value) => console.log("value " + value)} />
                                </AnterosCard>
                                <AnterosCard caption="Readonly" textCenter>
                                    <AnterosKnob width="120" height="120" lineRound={true} color="#fb9678" value={70} angleOffset={180} readOnly={true} thickness={.1} onChangeValue={(value) => console.log("value " + value)} />
                                </AnterosCard>
                            </AnterosCardDeck>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <AnterosCardDeck>
                                <AnterosCard caption="Readonly" textCenter>
                                    <AnterosKnob width="150" height="150" inputColor="black" color="#01c0c8" value={40} angleOffset={180} readOnly={true} thickness={1} onChangeValue={(value) => console.log("value " + value)} />
                                </AnterosCard>
                                <AnterosCard caption="Angle offset and arc" textCenter>
                                    <AnterosKnob width="150" height="150" inputColor="black" showPrevious={true} color="#55ce63" showCursor={true} value={75} thickness={2} angleOffset={-125} angleArc={250} onChangeValue={(value) => console.log("value " + value)} />
                                </AnterosCard>
                                <AnterosCard caption="Readonly" textCenter>
                                    <AnterosKnob width="220" height="220" inputColor="black" color="#01c0c8" value={90} angleOffset={180} readOnly={true} thickness={2} onChangeValue={(value) => console.log("value " + value)} />
                                </AnterosCard>
                            </AnterosCardDeck>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <AnterosCardDeck>
                                <AnterosCard caption="Readonly" textCenter>
                                    <AnterosKnob width="180" height="180" inputColor="blue" color="#ffbc34" value={67} angleOffset={180} readOnly={true} thickness={1} onChangeValue={(value) => console.log("value " + value)} />
                                </AnterosCard>
                                <AnterosCard caption="Readonly" textCenter>
                                    <AnterosKnob width="120" height="120" inputColor="blue" color="#fb9678" value={70} angleOffset={180} readOnly={true} thickness={1} onChangeValue={(value) => console.log("value " + value)} />
                                </AnterosCard>
                            </AnterosCardDeck>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <AnterosCardDeck>
                                <AnterosCard caption="Background color" textCenter>
                                    <AnterosKnob width="180" height="180" inputColor="blue" backgroundColor="#34495e" color="#ffbc34" value={67} angleOffset={180} thickness={.2} onChangeValue={(value) => console.log("value " + value)} />
                                </AnterosCard>
                                <AnterosCard caption="Background color" textCenter>
                                    <AnterosKnob width="120" height="120" inputColor="blue" backgroundColor="#34495e" color="#fb9678" value={70} angleOffset={180} thickness={1} onChangeValue={(value) => console.log("value " + value)} />
                                </AnterosCard>
                            </AnterosCardDeck>
                        </div>
                    </div>
                </AnterosCard >
            </div>);
    }
}

