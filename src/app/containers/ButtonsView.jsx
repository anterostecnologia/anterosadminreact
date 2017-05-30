import React, { Component } from 'react';
import AnterosCard from "../components/AnterosCard";
import AnterosButton from '../components/AnterosButton';
import AnterosDropdownButton from '../components/AnterosDropdownButton';
import AnterosDropdownMenu from '../components/AnterosDropdownMenu';
import AnterosDropdownMenuItem from '../components/AnterosDropdownMenuItem';

export default class ButtonView extends Component {
    render() {
        return (<AnterosCard title="Buttons">

            <div className="row">

                <div className="col-6">
                    <AnterosCard title="Button colors">
                        <section class="section">
                            <AnterosButton primary caption="Primary" />
                            <AnterosButton secondary caption="Secondary" />
                            <AnterosButton success caption="Success" />
                            <AnterosButton info caption="Info" />
                            <AnterosButton warning caption="Warning" />
                            <AnterosButton danger caption="Danger" />
                            <AnterosButton link caption="Button Link" />
                        </section>
                    </AnterosCard>
                </div>

                <div className="col-6">
                    <AnterosCard title="Outline buttons">
                        <section class="section">
                            <AnterosButton primary outline caption="Primary" />
                            <AnterosButton secondary outline caption="Secondary" />
                            <AnterosButton success outline caption="Success" />
                            <AnterosButton info outline caption="Info" />
                            <AnterosButton warning outline caption="Warning" />
                            <AnterosButton danger outline caption="Danger" />
                        </section>
                    </AnterosCard>
                </div>

            </div>


            <div className="row">

                <div className="col-6">
                    <AnterosCard title="Button sizing">
                        <AnterosCard title="Large buttons" >
                            <section class="section">
                                <AnterosButton large primary caption="Primary" />
                                <AnterosButton large secondary caption="Secondary" />
                                <AnterosButton large success caption="Success" />
                                <AnterosButton large info caption="Info" />
                                <AnterosButton large warning caption="Warning" />
                                <AnterosButton large danger caption="Danger" />
                            </section>
                        </AnterosCard>

                        <AnterosCard title="Small buttons" >
                            <section class="section">
                                <AnterosButton small primary caption="Primary" />
                                <AnterosButton small secondary caption="Secondary" />
                                <AnterosButton small success caption="Success" />
                                <AnterosButton small info caption="Info" />
                                <AnterosButton small warning caption="Warning" />
                                <AnterosButton small danger caption="Danger" />
                            </section>
                        </AnterosCard>

                        <AnterosCard title="Block buttons" >
                            <section class="section">
                                <AnterosButton large primary block caption="Block level button" />
                                <AnterosButton small secondary block caption="Block level button" />
                            </section>
                        </AnterosCard>

                    </AnterosCard>
                </div>

                <div className="col-6">
                    <AnterosCard title="Button types">
                        <AnterosCard title="Pill left" >
                            <section class="section">
                                <AnterosButton primary pillLeft caption="Primary" />
                                <AnterosButton secondary pillLeft caption="Secondary" />
                                <AnterosButton success pillLeft caption="Success" />
                                <AnterosButton info pillLeft caption="Info" />
                                <AnterosButton warning pillLeft caption="Warning" />
                                <AnterosButton danger pillLeft caption="Danger" />
                            </section>
                        </AnterosCard>
                        <AnterosCard title="Pill right" >
                            <section class="section">
                                <AnterosButton primary pillRight caption="Primary" />
                                <AnterosButton secondary pillRight caption="Secondary" />
                                <AnterosButton success pillRight caption="Success" />
                                <AnterosButton info pillRight caption="Info" />
                                <AnterosButton warning pillRight caption="Warning" />
                                <AnterosButton danger pillRight caption="Danger" />
                            </section>
                        </AnterosCard>
                        <AnterosCard title="Oval" >
                            <section class="section">
                                <AnterosButton primary oval caption="Primary" />
                                <AnterosButton secondary oval caption="Secondary" />
                                <AnterosButton success oval caption="Success" />
                                <AnterosButton info oval caption="Info" />
                                <AnterosButton warning oval caption="Warning" />
                                <AnterosButton danger oval caption="Danger" />
                            </section>
                        </AnterosCard>
                    </AnterosCard>
                </div>

            </div>

            <div className="row">
                <div className="col-6">
                    <AnterosCard title="Circle buttons">
                        <div class="col-lg-6 col-sm-6 col-xs-12">
                            <div class="white-box">
                                <h3 className="box-title">Normal Circle Buttons</h3>
                                <AnterosButton circle small icon="fa fa-check" />
                                <AnterosButton circle primary small icon="fa fa-list" />
                                <AnterosButton circle success small icon="fa fa-link" />
                                <AnterosButton circle info small icon="fa fa-check" />
                                <AnterosButton circle warning small icon="fa fa-times" />
                                <AnterosButton circle danger small icon="fa fa-heart" />
                                <br></br>
                                <br></br>
                                <h3 className="box-title">Large Circle Buttons</h3>
                                <AnterosButton circle icon="fa fa-check" />
                                <AnterosButton circle primary icon="fa fa-list" />
                                <AnterosButton circle success icon="fa fa-link" />
                                <AnterosButton circle info icon="fa fa-check" />
                                <AnterosButton circle warning icon="fa fa-times" />
                                <AnterosButton circle danger icon="fa fa-heart" />
                                <br></br>
                                <br></br>
                                <h3 className="box-title">Extra Large Circle Buttons</h3>
                                <AnterosButton circle large icon="fa fa-check" />
                                <AnterosButton circle primary large icon="fa fa-list" />
                                <AnterosButton circle success large icon="fa fa-link" />
                                <AnterosButton circle info large icon="fa fa-check" />
                                <AnterosButton circle warning large icon="fa fa-times" />
                                <AnterosButton circle danger large icon="fa fa-heart" />
                            </div>
                        </div>
                    </AnterosCard>
                </div>
                <div className="col-6">
                    <AnterosCard title="Button dropdowns">
                        <AnterosCard height="250px" title="Dropdowns" >

                            <AnterosDropdownButton primary caption="Primary">
                                <AnterosDropdownMenu>
                                    <AnterosDropdownMenuItem caption="Item 1" />
                                    <AnterosDropdownMenuItem caption="Item 2" />
                                    <AnterosDropdownMenuItem caption="Item 3" />
                                </AnterosDropdownMenu>
                            </AnterosDropdownButton>

                            <AnterosDropdownButton secondary caption="Secondary">
                                <AnterosDropdownMenu>
                                    <AnterosDropdownMenuItem caption="Item 1" />
                                    <AnterosDropdownMenuItem caption="Item 2" />
                                    <AnterosDropdownMenuItem caption="Item 3" />
                                </AnterosDropdownMenu>
                            </AnterosDropdownButton>

                            <AnterosDropdownButton success caption="Success">
                                <AnterosDropdownMenu>
                                    <AnterosDropdownMenuItem caption="Item 1" />
                                    <AnterosDropdownMenuItem caption="Item 2" />
                                    <AnterosDropdownMenuItem caption="Item 3" />
                                </AnterosDropdownMenu>
                            </AnterosDropdownButton>

                            <AnterosDropdownButton info caption="Info">
                                <AnterosDropdownMenu>
                                    <AnterosDropdownMenuItem caption="Item 1" />
                                    <AnterosDropdownMenuItem caption="Item 2" />
                                    <AnterosDropdownMenuItem caption="Item 3" />
                                </AnterosDropdownMenu>
                            </AnterosDropdownButton>

                            <AnterosDropdownButton warning caption="Warning">
                                <AnterosDropdownMenu>
                                    <AnterosDropdownMenuItem caption="Item 1" />
                                    <AnterosDropdownMenuItem caption="Item 2" />
                                    <AnterosDropdownMenuItem caption="Item 3" />
                                </AnterosDropdownMenu>
                            </AnterosDropdownButton>

                            <AnterosDropdownButton danger caption="Danger">
                                <AnterosDropdownMenu>
                                    <AnterosDropdownMenuItem caption="Item 1" />
                                    <AnterosDropdownMenuItem caption="Item 2" />
                                    <AnterosDropdownMenuItem caption="Item 3" />
                                </AnterosDropdownMenu>
                            </AnterosDropdownButton>

                        </AnterosCard>
                    </AnterosCard>
                </div>
            </div>

        </AnterosCard >);
    }
}



