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
                            <AnterosProgressBar value="20" max={100} min={0} />
                            <AnterosProgressBar success value="40" max="100" />
                            <AnterosProgressBar info value="60" max="100" />
                            <AnterosProgressBar warning value="80" max="100" />
                            <AnterosProgressBar danger value="100" max="100" />
                        </section>
                    </AnterosCard>
                </div>

                <div className="col-md-6">
                    <AnterosCard caption="Progress Bar values">
                        <section className="section">
                            <AnterosProgressBar value="20" max={100} min={0} showText={true} />
                            <AnterosProgressBar success value="40" max="100" showText={true} />
                            <AnterosProgressBar info value="60" max="100" showText={true} />
                            <AnterosProgressBar warning value="80" max="100" showText={true} />
                            <AnterosProgressBar danger value="100" max="100" showText={true} />
                        </section>
                    </AnterosCard>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <AnterosCard caption="Progress Bar striped">
                        <section className="section">
                            <AnterosProgressBar striped value="20" max={100} min={0} />
                            <AnterosProgressBar striped success value="40" max="100" />
                            <AnterosProgressBar striped info value="60" max="100" />
                            <AnterosProgressBar striped warning value="80" max="100" />
                            <AnterosProgressBar striped danger value="100" max="100" />
                        </section>
                    </AnterosCard>
                </div>

                <div className="col-6">
                    <AnterosCard caption="Progress Bar striped and animated">
                        <section className="section">
                            <AnterosProgressBar striped animated value="20" max={100} min={0} showText={true} />
                            <AnterosProgressBar striped animated success value="40" max="100" showText={true} />
                            <AnterosProgressBar striped animated info value="60" max="100" showText={true} />
                            <AnterosProgressBar striped animated warning value="80" max="100" showText={true} />
                            <AnterosProgressBar striped animated danger value="100" max="100" showText={true} />
                        </section>
                    </AnterosCard>
                </div>
            </div>

        </AnterosCard >);
    }
}