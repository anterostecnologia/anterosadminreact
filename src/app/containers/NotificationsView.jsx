import React, { Component } from 'react';
import {AnterosCard,  HeaderActions } from "anteros-react";
import {AnterosAlert} from "anteros-react";


export default class NotificationsView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AnterosCard caption="Alerts">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <AnterosAlert success>
                                NEWS: You have done 5 actions
						</AnterosAlert>
                            <AnterosAlert info>
                                NEWS: You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions
						</AnterosAlert>
                            <AnterosAlert warning>
                                NEWS: You have done 5 actions
						</AnterosAlert>
                            <AnterosAlert danger>
                                NEWS: You have done 5 actions
						</AnterosAlert>
                            <AnterosAlert aquamarine>
                                NEWS: You have done 5 actions
						</AnterosAlert>
                            <AnterosAlert purple>
                                NEWS: You have done 5 actions
						</AnterosAlert>
                            <AnterosAlert greyDarker>
                                NEWS: You have done 5 actions
						</AnterosAlert>
                            <AnterosAlert blueDirty>
                                NEWS: You have done 5 actions
						</AnterosAlert>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <AnterosAlert success fill>
                                NEWS: You have done 5 actions
						</AnterosAlert>
                            <AnterosAlert info fill>
                                NEWS: You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions
						</AnterosAlert>
                            <AnterosAlert warning fill>
                                NEWS: You have done 5 actions
						</AnterosAlert>
                            <AnterosAlert danger fill>
                                NEWS: You have done 5 actions
						</AnterosAlert>
                            <AnterosAlert aquamarine fill>
                                NEWS: You have done 5 actions
						</AnterosAlert>
                            <AnterosAlert purple fill>
                                NEWS: You have done 5 actions
						</AnterosAlert>
                            <AnterosAlert greyDarker fill>
                                NEWS: You have done 5 actions
						</AnterosAlert>
                            <AnterosAlert blueDirty fill>
                                NEWS: You have done 5 actions
						</AnterosAlert>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <AnterosAlert success showBorder icon="fa fa-exclamation-triangle">
                                NEWS: You have done 5 actions
						</AnterosAlert>
                            <AnterosAlert info showBorder icon="fa fa-exclamation-triangle">
                                NEWS: You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions You have done 5 actions
						</AnterosAlert>
                            <AnterosAlert warning showBorder icon="fa fa-exclamation-triangle">
                                NEWS: You have done 5 actions
						</AnterosAlert>
                            <AnterosAlert danger showBorder icon="fa fa-exclamation-triangle">
                                NEWS: You have done 5 actions
						</AnterosAlert>
                            <AnterosAlert aquamarine showBorder icon="fa fa-exclamation-triangle">
                                NEWS: You have done 5 actions
						</AnterosAlert>
                            <AnterosAlert purple showBorder icon="fa fa-exclamation-triangle">
                                NEWS: You have done 5 actions
						</AnterosAlert>
                            <AnterosAlert greyDarker showBorder icon="fa fa-exclamation-triangle">
                                NEWS: You have done 5 actions
						</AnterosAlert>
                            <AnterosAlert blueDirty showBorder icon="fa fa-exclamation-triangle">
                                NEWS: You have done 5 actions
						</AnterosAlert>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <AnterosAlert aquamarine fill>
                                <strong>Some message</strong>
                                Lorem Ipsum is simply dummy text of the printing and typesetting.
						</AnterosAlert>
                            <AnterosAlert purple fill>
                                <strong>Some message</strong>
                                Lorem Ipsum is simply dummy text of the printing and typesetting.
						</AnterosAlert>
                            <AnterosAlert blueDirty fill>
                                <strong>Some message</strong>
                                Lorem Ipsum is simply dummy text of the printing and typesetting.
						</AnterosAlert>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <AnterosAlert danger icon="fa fa-exclamation-triangle">
                                <strong>Some message</strong>
                                Lorem Ipsum is simply dummy text of the printing and typesetting.
							<div className="alert-btns">
                                    <button type="button" className="btn btn-rounded">Do this</button>
                                    <button type="button" className="btn btn-rounded">Or this</button>
                                </div>
                            </AnterosAlert>

                            <AnterosAlert aquamarine fill>
                                <strong>Some message</strong>
                                Lorem Ipsum is simply dummy text of the printing and typesetting.
							<div className="alert-btns">
                                    <button type="button" className="btn btn-rounded">Do this</button>
                                    <button type="button" className="btn btn-rounded">Or this</button>
                                </div>
                            </AnterosAlert>

                            <AnterosAlert info fill>
                                <strong>Some message</strong>
                                Lorem Ipsum is simply dummy text of the printing and typesetting.
							<div className="alert-btns">
                                    <button type="button" className="btn btn-rounded">Do this</button>
                                    <button type="button" className="btn btn-rounded">Or this</button>
                                </div>
                            </AnterosAlert>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <AnterosAlert purple avatar image={require('../assets/img/user.png')}>
                                You have done 5 actions
						</AnterosAlert>

                            <AnterosAlert info avatar image={require('../assets/img/user.png')}>
                                <strong>You have done 5 actions</strong>
                                Lorem Ipsum is simply dummy text of the printing and typesetting.
						</AnterosAlert>

                            <AnterosAlert danger avatar image={require('../assets/img/user.png')}>
                                <strong>You have done 5 actions</strong>
                                Lorem Ipsum is simply dummy text of the printing and typesetting.
							<div className="alert-btns">
                                    <button type="button" className="btn btn-rounded">Do this</button>
                                    <button type="button" className="btn btn-rounded">Or this</button>
                                </div>
                            </AnterosAlert>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <AnterosAlert blueDirty >
                                <strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
						</AnterosAlert>

                            <AnterosAlert purple >
                                <strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
						</AnterosAlert>

                        </div>

                        <div className="col-lg-4 col-md-6">
                            <AnterosAlert warning textColored >
                                <strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>

                            <AnterosAlert warning textColored >
                                <strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>

                            <AnterosAlert danger textColored >
                                <strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <AnterosAlert aquamarine textColored >
                                <strong>Heads Up!</strong>
                                <ul>
                                    <li>1 Lorem Ipsum is simply dummy</li>
                                    <li>Lorem Ipsum is simply dummy text</li>
                                </ul>
                            </AnterosAlert>

                            <AnterosAlert blueDirty textColored fill >
                                <strong>Heads Up!</strong>
                                <ul>
                                    <li>1 Lorem Ipsum is simply dummy</li>
                                    <li>Lorem Ipsum is simply dummy text</li>
                                </ul>
                            </AnterosAlert>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <AnterosAlert purple>
                                    <strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>

                                <AnterosAlert info showBorderLeft>
                                    <strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>

                                <AnterosAlert aquamarine showBorderLeft>
                                    <strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>

                                <AnterosAlert danger showBorderLeft>
                                    <strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>

                                <AnterosAlert warning showBorderLeft>
                                    <strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <AnterosAlert purple showBorderLeft fill>
                                    <strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>

                                <AnterosAlert info showBorderLeft fill>
                                    <strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>

                                <AnterosAlert aquamarine showBorderLeft fill>
                                    <strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>

                                <AnterosAlert danger showBorderLeft fill>
                                    <strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>

                                <AnterosAlert warning showBorderLeft fill>
                                    <strong>Heads Up!</strong> Lorem Ipsum is simply dummy text of the printing and typesetting.
							</AnterosAlert>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <AnterosAlert facebook >
                                    <strong>Some message</strong>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting.
								</AnterosAlert>
                                <AnterosAlert twitter >
                                    <strong>Some message</strong>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting.
								</AnterosAlert>
                                <AnterosAlert googlePlus >
                                    <strong>Some message</strong>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting.
								</AnterosAlert>
                                <AnterosAlert linkedin >
                                    <strong>Some message</strong>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting.
								</AnterosAlert>
                            </div>
                        </div>
                    </div>
                </AnterosCard>
            </div>);
    }
}
