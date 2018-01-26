import React, { Component } from 'react';
import {AnterosCard,HeaderActions,AnterosCollapseContent} from "anteros-react-containers";
import {AnterosCheckboxSlide, AnterosCheckboxToggle} from 'anteros-react-editors';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import {AnterosButton} from 'anteros-react-buttons';

export default class SwitchesView extends Component {
    render() {
        return (<AnterosCard caption="Slide &amp; Toggle">

            <AnterosCard caption="Slide">
                <section className="section">
                    <div className="row">
                        <div className="col-6">
                            <AnterosCard caption="Slide enabled">
                                <HeaderActions>
                                    <AnterosButton circle small link icon="fa fa-code"
                                        hint="Show code" hintPosition="left"
                                        collapseContent="idShowButtonsColors" />
                                </HeaderActions>
                                <section className="section">
                                    <AnterosCheckboxSlide value="Slide" info onCheckboxChange={(value, checked) => alert(value + " " + checked)} />
                                    <AnterosCheckboxSlide value="Slide checked" warning checked onCheckboxChange={(value, checked) => console.log(value + " " + checked)} />
                                </section>
                            </AnterosCard>
                        </div>

                        <div className="col-6">
                            <AnterosCard caption="Slide disabled">
                                <HeaderActions>
                                    <AnterosButton circle small link icon="fa fa-code"
                                        hint="Show code" hintPosition="left"
                                        collapseContent="idShowButtonsColors" />
                                </HeaderActions>
                                <section className="section">
                                    <AnterosCheckboxSlide value="Slide disabled" disabled />
                                    <AnterosCheckboxSlide value="Slide checked disabled" checked disabled />
                                </section>
                            </AnterosCard>
                        </div>
                    </div>
                </section>
            </AnterosCard>

            <AnterosCard caption="Toggle round">
                <section className="section">
                    <div className="row">
                        <div className="col-6">
                            <AnterosCard caption="Toggle colors">
                                <HeaderActions>
                                    <AnterosButton circle small link icon="fa fa-code"
                                        hint="Show code" hintPosition="left"
                                        collapseContent="idShowButtonsColors" />
                                </HeaderActions>
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
                            <AnterosCard caption="Toggle size">
                                <HeaderActions>
                                    <AnterosButton circle small link icon="fa fa-code"
                                        hint="Show code" hintPosition="left"
                                        collapseContent="idShowButtonsColors" />
                                </HeaderActions>
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
                            <AnterosCard caption="Toggle enabled/disabled">
                                <HeaderActions>
                                    <AnterosButton circle small link icon="fa fa-code"
                                        hint="Show code" hintPosition="left"
                                        collapseContent="idShowButtonsColors" />
                                </HeaderActions>
                                <section className="section">
                                    <AnterosCheckboxToggle value="Toggle" info />
                                    <AnterosCheckboxToggle value="Toggle checked" warning checked />
                                    <AnterosCheckboxToggle value="Toggle disabled" disabled />
                                    <AnterosCheckboxToggle value="Toggle checked disabled" disabled checked />
                                </section>
                            </AnterosCard>
                        </div>

                        <div className="col-6">
                            <AnterosCard caption="Toggle event">
                                <HeaderActions>
                                    <AnterosButton circle small link icon="fa fa-code"
                                        hint="Show code" hintPosition="left"
                                        collapseContent="idShowButtonsColors" />
                                </HeaderActions>
                                <section className="section">
                                    <AnterosCheckboxToggle value="Toggle" success onCheckboxChange={(value, checked) => alert(value + " " + checked)} />
                                    <AnterosCheckboxToggle value="Toggle checked" extraLarge warning checked onCheckboxChange={(value, checked) => alert(value + " " + checked)} />
                                </section>
                            </AnterosCard>
                        </div>
                    </div>
                </section>
            </AnterosCard>
            <AnterosCard caption="Toggle square">
                <section className="section">
                    <div className="row">
                        <div className="col-6">
                            <AnterosCard caption="Toggle colors" height="315px">
                                <HeaderActions>
                                    <AnterosButton circle small link icon="fa fa-code"
                                        hint="Show code" hintPosition="left"
                                        collapseContent="idShowButtonsColors" />
                                </HeaderActions>
                                <section className="section">
                                    <AnterosCheckboxToggle square value="Primary" checked primary />
                                    <AnterosCheckboxToggle square value="Success" checked success />
                                    <AnterosCheckboxToggle square value="Info" checked info />
                                    <AnterosCheckboxToggle square value="Warning" checked warning />
                                    <AnterosCheckboxToggle square value="Danger" checked danger />

                                </section>
                            </AnterosCard>
                        </div>

                        <div className="col-6">
                            <AnterosCard caption="Toggle size" height="315px">
                                <HeaderActions>
                                    <AnterosButton circle small link icon="fa fa-code"
                                        hint="Show code" hintPosition="left"
                                        collapseContent="idShowButtonsColors" />
                                </HeaderActions>
                                <section className="section">
                                    <AnterosCheckboxToggle square value="Toggle small" small primary checked labelWidth="100px" />
                                    <AnterosCheckboxToggle square value="Toggle normal" primary checked labelWidth="100px" />
                                    <AnterosCheckboxToggle square value="Toggle large" large success labelWidth="100px" />
                                    <AnterosCheckboxToggle square value="Toggle extraLarge" extraLarge danger checked labelWidth="100px" />
                                </section>
                            </AnterosCard>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <AnterosCard caption="Toggle enabled/disabled" height="305px">
                                <HeaderActions>
                                    <AnterosButton circle small link icon="fa fa-code"
                                        hint="Show code" hintPosition="left"
                                        collapseContent="idShowButtonsColors" />
                                </HeaderActions>
                                <section className="section">
                                    <AnterosCheckboxToggle square value="Toggle" info labelWidth="100px" />
                                    <AnterosCheckboxToggle square value="Toggle checked" warning checked labelWidth="100px" />
                                    <AnterosCheckboxToggle square value="Toggle disabled" disabled labelWidth="100px" />
                                    <AnterosCheckboxToggle square value="Toggle checked disabled" disabled checked labelWidth="100px" />
                                </section>
                            </AnterosCard>
                        </div>

                        <div className="col-6">
                            <AnterosCard caption="Toggle event" height="305px">
                                <HeaderActions>
                                    <AnterosButton circle small link icon="fa fa-code"
                                        hint="Show code" hintPosition="left"
                                        collapseContent="idShowButtonsColors" />
                                </HeaderActions>
                                <section className="section">
                                    <AnterosCheckboxToggle square value="Toggle" labelWidth="100px" success onCheckboxChange={(value, checked) => alert(value + " " + checked)} />
                                    <AnterosCheckboxToggle square value="Toggle checked" labelWidth="100px" extraLarge warning checked onCheckboxChange={(value, checked) => alert(value + " " + checked)} />
                                </section>
                            </AnterosCard>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <AnterosCard caption="Toggle with text">
                                <HeaderActions>
                                    <AnterosButton circle small link icon="fa fa-code"
                                        hint="Show code" hintPosition="left"
                                        collapseContent="idShowButtonsColors" />
                                </HeaderActions>
                                <section className="section">
                                    <AnterosCheckboxToggle square checkedValue="Yes" uncheckedValue="No" labelWidth="100px" info dangerOff />
                                    <AnterosCheckboxToggle square checkedValue="Explicit" uncheckedValue="Implicit" labelWidth="100px" warning dangerOff checked />
                                    <AnterosCheckboxToggle square labelWidth="100px" checkedValue="Enabled" uncheckedValue="Disabled" primary infoOff disabled />
                                    <AnterosCheckboxToggle square labelWidth="100px" disabled checked />
                                </section>
                            </AnterosCard>
                        </div>
                    </div>
                </section>
            </AnterosCard>
        </AnterosCard >);
    }
}