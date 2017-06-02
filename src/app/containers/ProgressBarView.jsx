import React, { Component } from 'react';
import AnterosCard from "../components/AnterosCard";
import AnterosProgressBar from '../components/AnterosProgressBar';

export default class ButtonView extends Component {
    render() {
        return (<AnterosCard caption="Progress Bar">

            <div className="row">
                <div className="col-md-6">
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

                <div className="col-md-6">
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

            <div className="row">

                <div className="clearfix">

                    <div className="c100 p98 big">
                        <span>98%</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>

                    <div className="c100 p4">
                        <span>4%</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>

                    <div className="c100 p0 small">
                        <span>0%</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>

                </div>

                <div className="clearfix">

                    <div className="c100 p50 big green">
                        <span>50%</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>

                    <div className="c100 p25 green">
                        <span>25%</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>

                    <div className="c100 p12 small green">
                        <span>12%</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>

                </div>

                <div className="clearfix">

                    <div className="c100 p50 big orange">
                        <span>50%</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>

                    <div className="c100 p25 orange">
                        <span>25%</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>

                    <div className="c100 p12 small orange">
                        <span>12%</span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>
                        </div>
                    </div>

                </div>

                <div className="dark-area clearfix">

                    <div className="clearfix">

                        <div className="c100 p50 big dark">
                            <span>50%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>

                        <div className="c100 p25 dark">
                            <span>25%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>

                        <div className="c100 p12 small dark">
                            <span>12%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>

                    </div>

                    <div className="clearfix">

                        <div className="c100 p50 big dark green">
                            <span>50%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>

                        <div className="c100 p25 dark green">
                            <span>25%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>

                        <div className="c100 p12 dark small green">
                            <span>12%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>

                    </div>

                    <div className="clearfix">

                        <div className="c100 p50 dark big orange">
                            <span>50%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>

                        <div className="c100 p25 dark orange">
                            <span>25%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>

                        <div className="c100 p12 dark small orange">
                            <span>12%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </AnterosCard >);
    }
}