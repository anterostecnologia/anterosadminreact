import React, { Component } from 'react';
import AnterosCard, { FooterActions } from "../components/AnterosCard";

export default class CardView extends Component {
    render() {
        return (<AnterosCard title="Cards">

            <div className="row">

                <div className="col-4">
                    <AnterosCard showFooter={true} title="Default card">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
                        <FooterActions>
                            Card Footer
                        </FooterActions>
                    </AnterosCard>
                </div>

                <div className="col-4">
                    <AnterosCard primary showFooter={true} title="Primary card">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
                        <FooterActions>
                            Card Footer
                        </FooterActions>
                    </AnterosCard>
                </div>

                <div className="col-4">
                    <AnterosCard success showFooter={true} title="Success card">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
                        <FooterActions>
                            Card Footer
                        </FooterActions>
                    </AnterosCard>
                </div>

            </div>

            <div className="row">

                <div className="col-4">
                    <AnterosCard info showFooter={true} title="Info card">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
                        <FooterActions>
                            Card Footer
                        </FooterActions>
                    </AnterosCard>
                </div>

                <div className="col-4">
                    <AnterosCard warning showFooter={true} primary title="Warning card">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
                        <FooterActions>
                            Card Footer
                        </FooterActions>
                    </AnterosCard>
                </div>

                <div className="col-4">
                    <AnterosCard danger showFooter={true} success title="Danger card">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
                        <FooterActions>
                            Card Footer
                        </FooterActions>
                    </AnterosCard>
                </div>

            </div>

        </AnterosCard >);
    }
}



