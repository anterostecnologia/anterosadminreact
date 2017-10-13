import React, { Component } from 'react';
import { AnterosCard, HeaderActions, AnterosButton } from "anteros-react";
import "./Misc.css";
import AnterosRecaptcha from "../components/AnterosRecaptcha";

const sitekey = '6LeFMzEUAAAAAPAbmw7B7yyAVYTzlz2FsK-V-c48';

export default class MiscView extends Component {

    constructor(props) {
        super(props);
        this.recaptchaInstance;
        this.resetRecaptcha = this.resetRecaptcha.bind(this);
    }

    callback() {
        console.log('Done!!!!');
    };

    verifyCallback(response) {
        console.log(response);
    };

    expiredCallback() {
        console.log(`Recaptcha expired`);
    };

    resetRecaptcha() {
        this.recaptchaInstance.reset();
    };

    render() {
        return (
            <AnterosCard caption="Miscellaneous">
                <h1>Google Recaptcha</h1>
                <AnterosRecaptcha
                    ref={e => this.recaptchaInstance = e}
                    sitekey={sitekey}
                    size="compact"
                    render="explicit"
                    verifyCallback={this.verifyCallback}
                    onloadCallback={this.callback}
                    expiredCallback={this.expiredCallback} />

                <AnterosButton primary onClick={this.resetRecaptcha}>
                    Reset
                    </AnterosButton>
            </AnterosCard>
        );
    }
}
