import React, { Component } from 'react';
import AnterosCard from "../components/AnterosCard";
import AnterosCheckboxSlide from '../components/AnterosCheckboxSlide';
import AnterosCheckboxToggle from '../components/AnterosCheckboxToggle';

export default class ButtonView extends Component {
    render() {
        return (<AnterosCard title="Slide &amp; Toggle">

            <AnterosCard title="Slide">
                <section className="section">
                    <div className="row">
                        <div className="col-6">
                            <AnterosCard title="Slide enabled">
                                <section className="section">
                                    <AnterosCheckboxSlide value="Slide" info onCheckboxChange={(value, checked) => alert(value + " " + checked)} />
                                    <AnterosCheckboxSlide value="Slide checked" warning checked onCheckboxChange={(value, checked) => console.log(value + " " + checked)} />
                                </section>
                            </AnterosCard>
                        </div>

                        <div className="col-6">
                            <AnterosCard title="Slide disabled">
                                <section className="section">
                                    <AnterosCheckboxSlide value="Slide disabled" disabled />
                                    <AnterosCheckboxSlide value="Slide checked disabled" checked disabled />
                                </section>
                            </AnterosCard>
                        </div>
                    </div>
                </section>
            </AnterosCard>

            <AnterosCard title="Toggle">
                <section className="section">
                    <div className="row">
                        <div className="col-6">
                            <AnterosCard title="Toggle colors">
                                <section className="section">
                                    <AnterosCheckboxToggle value="Primary" checked primary />
                                    <AnterosCheckboxToggle value="Success" checked success />
                                    <AnterosCheckboxToggle value="Info" checked info />
                                    <AnterosCheckboxToggle value="Warning" checked warning />
                                    <AnterosCheckboxToggle value="Danger" checked danger />

                                </section>
                            </AnterosCard>
                        </div>

                        <div className="col-6">
                            <AnterosCard title="Toggle size">
                                <section className="section">
                                    <AnterosCheckboxToggle value="Toggle normal" primary checked />
                                    <AnterosCheckboxToggle value="Toggle large" large success />
                                    <AnterosCheckboxToggle value="Toggle extraLarge" extraLarge danger checked />
                                </section>
                            </AnterosCard>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <AnterosCard title="Toggle enabled/disabled">
                                <section className="section">
                                    <AnterosCheckboxToggle value="Toggle" info  />
                                    <AnterosCheckboxToggle value="Toggle checked" warning checked  />
                                    <AnterosCheckboxToggle value="Toggle disabled" disabled />
                                    <AnterosCheckboxToggle value="Toggle checked disabled" disabled checked />
                                </section>
                            </AnterosCard>
                        </div>

                        <div className="col-6">
                            <AnterosCard title="Toggle event">
                                <section className="section">
                                    <AnterosCheckboxToggle value="Toggle" success onCheckboxChange={(value, checked) => alert(value + " " + checked)} />
                                    <AnterosCheckboxToggle value="Toggle checked" extraLarge warning checked onCheckboxChange={(value, checked) => alert(value + " " + checked)} />
                                </section>
                            </AnterosCard>
                        </div>
                    </div>
                </section>
            </AnterosCard>
        </AnterosCard >);
    }
}