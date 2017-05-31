import React, { Component } from 'react';
import AnterosCard, { FooterActions } from "../components/AnterosCard";
import AnterosImage from "../components/AnterosImage";

export default class CardView extends Component {
    render() {
        return (<AnterosCard title="Cards">


            <AnterosCard title="Simple Cards">

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
            </AnterosCard >

            <AnterosCard title="Cards Outline">

                <div className="row">

                    <div className="col-4">
                        <AnterosCard showHeader={false} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title
                        </AnterosCard>
                    </div>

                    <div className="col-4">
                        <AnterosCard primary showHeader={false} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title
                        </AnterosCard>
                    </div>

                    <div className="col-4">
                        <AnterosCard success showHeader={false} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title
                        </AnterosCard>
                    </div>

                </div>

                <div className="row">

                    <div className="col-4">
                        <AnterosCard info showHeader={false} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title
                        </AnterosCard>
                    </div>

                    <div className="col-4">
                        <AnterosCard warning showHeader={false} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title
                        </AnterosCard>
                    </div>

                    <div className="col-4">
                        <AnterosCard danger showHeader={false} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title
                        </AnterosCard>
                    </div>

                </div>
            </AnterosCard >

        </AnterosCard >);
    }
}



