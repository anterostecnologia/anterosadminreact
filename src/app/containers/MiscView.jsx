import React, { Component } from 'react';
import { AnterosCard, HeaderActions } from "anteros-react";
import "./Misc.css";
import AnterosReorderable from "../components/AnterosReorderable";

export default class MiscView extends Component {
    render() {
        return (
            <div>
                <AnterosCard caption="Miscellaneous">
                    <AnterosReorderable mode="grid">
                        <div className="draggable-element">
                            1
                        </div>
                        <div className="draggable-element">
                            2
                        </div>
                        <div className="draggable-element">
                            3
                        </div>
                        <div className="draggable-element">
                            4
                        </div>
                        <div className="draggable-element">
                            5
                        </div>
                        <div className="draggable-element">
                            6
                        </div>
                        <div className="draggable-element">
                            7
                        </div>
                        <div className="draggable-element">
                            8
                        </div>
                        <div className="draggable-element">
                            9
                        </div>
                    </AnterosReorderable>
                </AnterosCard>
            </div>);
    }
}
