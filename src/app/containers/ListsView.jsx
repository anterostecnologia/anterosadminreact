import React, { Component } from 'react';
import AnterosCard, { AnterosCardDeck } from "../components/AnterosCard";

export default class ListsView extends Component {
    render() {
        return (
            <div>
                <AnterosCard caption="List">

                    <div className="row">
                        <div className="col-md-4">
                            <AnterosCard caption="Basic">
                                <section className="section">

                                </section>
                            </AnterosCard>
                        </div>

                        <div className="col-md-4">
                            <AnterosCard caption="With icon">
                                <section className="section">

                                </section>
                            </AnterosCard>
                        </div>

                        <div className="col-md-4">
                            <AnterosCard caption="With badges">
                                <section className="section">

                                </section>
                            </AnterosCard>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <AnterosCard caption="Button items">
                                <section className="section">

                                </section>
                            </AnterosCard>
                        </div>

                        <div className="col-md-4">
                            <AnterosCard caption="Disabled items">
                                <section className="section">

                                </section>
                            </AnterosCard>
                        </div>

                        <div className="col-md-4">
                            <AnterosCard caption="Disabled items 2">
                                <section className="section">

                                </section>
                            </AnterosCard>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <AnterosCard caption="Custom">
                                <section className="section">

                                    <div className="row">
                                        <div className="col-md-6">
                                            <AnterosCard caption="Custom 1">
                                                <section className="section">

                                                </section>
                                            </AnterosCard>
                                        </div>

                                        <div className="col-md-6">
                                            <AnterosCard caption="Custom 2">
                                                <section className="section">

                                                </section>
                                            </AnterosCard>
                                        </div>
                                    </div>

                                </section>
                            </AnterosCard>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <AnterosCard caption="Custom">
                                <section className="section">

                                    <div className="row">
                                        <div className="col-md-6">
                                            <AnterosCard caption="With dataset">
                                                <section className="section">

                                                </section>
                                            </AnterosCard>
                                        </div>

                                        <div className="col-md-6">
                                            <AnterosCard caption="With dataset 2">
                                                <section className="section">

                                                </section>
                                            </AnterosCard>
                                        </div>
                                    </div>

                                </section>
                            </AnterosCard>
                        </div>
                    </div>


                </AnterosCard >
            </div>);
    }
}