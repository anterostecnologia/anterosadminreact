import React, { Component } from 'react';
import AnterosCard, { HeaderActions, FooterActions, AnterosCardGroup, AnterosCardDeck } from "../components/AnterosCard";
import AnterosImage from "../components/AnterosImage";
import AnterosButton from "../components/AnterosButton";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import AnterosCollapseContent from '../components/AnterosCollapseContent';

export default class SweetAlertView extends Component {
    render() {
        return (<AnterosCard caption="Sweet alerts">
            <AnterosCardDeck>
                <AnterosCard caption="Basic message" textCenter>
                    <HeaderActions>
                        <AnterosButton circle small link icon="fa fa-code"
                            hint="Show code" hintPosition="left"
                            collapseContent="idShowButtonsColors" onButtonClick={(event)=>{
                                console.log('teste');
                            }}/>
                    </HeaderActions>
                    <AnterosImage src={require('../assets/img/alert1.png')} />
                </AnterosCard>
                <AnterosCard caption="Title with text under" textCenter>
                    <HeaderActions>
                        <AnterosButton circle small link icon="fa fa-code"
                            hint="Show code" hintPosition="left"
                            collapseContent="idShowButtonsColors" />
                    </HeaderActions>
                    <AnterosImage src={require('../assets/img/alert2.png')} />
                </AnterosCard>
                <AnterosCard caption="Success message" textCenter>
                    <HeaderActions>
                        <AnterosButton circle small link icon="fa fa-code"
                            hint="Show code" hintPosition="left"
                            collapseContent="idShowButtonsColors" />
                    </HeaderActions>
                    <AnterosImage src={require('../assets/img/alert3.png')} />
                </AnterosCard>
            </AnterosCardDeck>
            <AnterosCardDeck>
                <AnterosCard caption="Success message" textCenter>
                    <HeaderActions>
                        <AnterosButton circle small link icon="fa fa-code"
                            hint="Show code" hintPosition="left"
                            collapseContent="idShowButtonsColors" />
                    </HeaderActions>
                    <AnterosImage src={require('../assets/img/alert3.png')} />
                </AnterosCard>
                <AnterosCard caption="Warning message" textCenter>
                    <HeaderActions>
                        <AnterosButton circle small link icon="fa fa-code"
                            hint="Show code" hintPosition="left"
                            collapseContent="idShowButtonsColors" />
                    </HeaderActions>
                    <AnterosImage src={require('../assets/img/alert4.png')} />
                </AnterosCard>
                <AnterosCard caption="Info message" textCenter>
                    <HeaderActions>
                        <AnterosButton circle small link icon="fa fa-code"
                            hint="Show code" hintPosition="left"
                            collapseContent="idShowButtonsColors" />
                    </HeaderActions>
                    <AnterosImage src={require('../assets/img/alert4.png')} />
                </AnterosCard>
            </AnterosCardDeck>

            <AnterosCardDeck>
                <AnterosCard caption="Basic message" textCenter>
                    <HeaderActions>
                        <AnterosButton circle small link icon="fa fa-code"
                            hint="Show code" hintPosition="left"
                            collapseContent="idShowButtonsColors" />
                    </HeaderActions>
                    <AnterosImage src={require('../assets/img/alert5.png')} />
                </AnterosCard>
                <AnterosCard caption="Alert with image" textCenter>
                    <HeaderActions>
                        <AnterosButton circle small link icon="fa fa-code"
                            hint="Show code" hintPosition="left"
                            collapseContent="idShowButtonsColors" />
                    </HeaderActions>
                    <AnterosImage src={require('../assets/img/alert6.png')} />
                </AnterosCard>
                <AnterosCard caption="Alert with time" textCenter>
                    <HeaderActions>
                        <AnterosButton circle small link icon="fa fa-code"
                            hint="Show code" hintPosition="left"
                            collapseContent="idShowButtonsColors" />
                    </HeaderActions>
                    <AnterosImage src={require('../assets/img/alert7.png')} />
                </AnterosCard>
            </AnterosCardDeck>
        </AnterosCard>);
    }
}
