import React, { Component } from 'react';
import { AnterosCard, HeaderActions } from "anteros-react-containers";
import AnterosSplitter from "../components/AnterosSplitter";
import {AnterosPanel} from "anteros-react-containers";

export default class SplittersView extends Component {
    render() {
        return (
            <div>
                <AnterosCard height="400px">
                    <AnterosSplitter direction="vertical" sizes={[50, 50]} splitterElements={['#sp1', '#sp2']} height="300px">
                        <AnterosPanel id="sp1" style={{ marginBottom: "0px" }}>
                            1
                        </AnterosPanel>
                        <AnterosPanel id="sp2" style={{ marginBottom: "0px" }}>
                            2
                        </AnterosPanel>
                    </AnterosSplitter>
                </AnterosCard>


                <AnterosCard height="400px" style={{ padding: "0px" }}>
                    <AnterosSplitter direction="horizontal" sizes={[50, 50]} splitterElements={['#sp3', '#sp4']} height="300px">
                        <AnterosPanel id="sp3" style={{ marginBottom: "0px" }}>
                            <AnterosSplitter direction="vertical" sizes={[50, 50]} splitterElements={['#sp5', '#sp6']} height="300px">
                                <AnterosPanel id="sp5" style={{ marginBottom: "0px" }} warning>
                                    1
                            </AnterosPanel>
                                <AnterosPanel id="sp6" style={{ marginBottom: "0px" }} danger>
                                    2
                            </AnterosPanel>
                            </AnterosSplitter>
                        </AnterosPanel>
                        <AnterosPanel id="sp4" style={{ marginBottom: "0px" }} info>
                            3
                        </AnterosPanel>
                    </AnterosSplitter>
                </AnterosCard>
            </div>
        );
    }
}