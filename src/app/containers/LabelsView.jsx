import React, { Component } from 'react';
import AnterosCard, { HeaderActions } from "../components/AnterosCard";
import AnterosLabel from "../components/AnterosLabel";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import AnterosCollapseContent from '../components/AnterosCollapseContent';

export default class LabelsView extends Component {
    render() {
        return (<AnterosCard caption="Labels & Badges">

            <AnterosCard caption="Labels">
                <div className="row">
                    <div className="col-4">
                        <AnterosCard caption="Default">
                            <AnterosLabel caption="Default" />
                            <AnterosLabel primary caption="Primary" />
                            <AnterosLabel success caption="Success" />
                            <AnterosLabel info caption="Info" />
                            <AnterosLabel warning caption="Warning" />
                            <AnterosLabel danger caption="Danger" />
                            <AnterosLabel dark caption="Dark" />
                        </AnterosCard>
                    </div>
                    <div className="col-4">
                        <AnterosCard caption="Pill">
                            <AnterosLabel pillFormat caption="Default" />
                            <AnterosLabel pillFormat primary caption="Primary" />
                            <AnterosLabel pillFormat success caption="Success" />
                            <AnterosLabel pillFormat info caption="Info" />
                            <AnterosLabel pillFormat warning caption="Warning" />
                            <AnterosLabel pillFormat danger caption="Danger" />
                            <AnterosLabel pillFormat dark caption="Dark" />
                        </AnterosCard>
                    </div>
                    <div className="col-4">
                        <AnterosCard caption="Outline">
                            <AnterosLabel outline caption="Default" />
                            <AnterosLabel outline primary caption="Primary" />
                            <AnterosLabel outline success caption="Success" />
                            <AnterosLabel outline info caption="Info" />
                            <AnterosLabel outline warning caption="Warning" />
                            <AnterosLabel outline danger caption="Danger" />
                            <AnterosLabel outline dark caption="Dark" />
                        </AnterosCard>
                    </div>
                    <div className="col-4">
                        <AnterosCard caption="Sizes">
                            <AnterosLabel large primary caption="Large" />
                            <AnterosLabel primary caption="Default" />
                            <AnterosLabel small primary caption="Small" />
                        </AnterosCard>
                    </div>
                </div>
            </AnterosCard >

            <AnterosCard caption="Badges">
                <div className="row">
                    <div className="col-4">
                        <AnterosCard caption="Default">
                            <AnterosLabel caption="Default" />
                            <AnterosLabel primary caption="Primary" />
                            <AnterosLabel success caption="Success" />
                            <AnterosLabel info caption="Info" />
                            <AnterosLabel warning caption="Warning" />
                            <AnterosLabel danger caption="Danger" />
                            <AnterosLabel dark caption="Dark" />
                        </AnterosCard>
                    </div>
                </div>
            </AnterosCard >
        </AnterosCard >);
    }
}