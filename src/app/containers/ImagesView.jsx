import React, { Component } from 'react';
import AnterosCard from "../components/AnterosCard";
import AnterosImage from "../components/AnterosImage";
import AnterosImageMagnifier from "../components/AnterosImageMagnifier";

export default class ImageView extends Component {
    render() {
        return (<AnterosCard title="Images">
            <div className="row">
                <div className="col-6">
                    <AnterosCard title="Rounded images">
                        <AnterosImage marginRight={20} maxWidth={50} rounded src={require('../assets/img/ti.jpg')} />
                        <AnterosImage marginRight={20} maxWidth={100} rounded src={require('../assets/img/ti.jpg')} />
                        <AnterosImage marginRight={20} maxWidth={150} rounded src={require('../assets/img/ti.jpg')} />
                    </AnterosCard>
                </div>
                <div className="col-6">
                    <AnterosCard title="Thumbnail images">
                        <AnterosImage marginRight={20} maxWidth={50} thumbnail src={require('../assets/img/folha_seca.jpg')} />
                        <AnterosImage marginRight={20} maxWidth={100} thumbnail src={require('../assets/img/folha_seca.jpg')} />
                        <AnterosImage marginRight={20} maxWidth={150} thumbnail src={require('../assets/img/folha_seca.jpg')} />
                    </AnterosCard>
                </div>
            </div>
            <AnterosCard title="Image circular">
                <AnterosImage marginRight={20} maxWidth={50} circle src={require('../assets/img/flower.jpg')} />
                <AnterosImage marginRight={20} maxWidth={100} circle src={require('../assets/img/flower.jpg')} />
                <AnterosImage marginRight={20} maxWidth={150} circle src={require('../assets/img/flower.jpg')} />

                <AnterosCard title="Effect 1" >
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage effect={1} src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>

                        <div className="col-sm-2">
                            <AnterosImage effect={1} colored src={require("../assets/img/5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard title="Effect 2" >
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage effect={2} leftToRight src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={2} leftToRight colored src={require("../assets/img/5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={2} rightToLeft src={require("../assets/img/6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={2} rightToLeft colored src={require("../assets/img/7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage effect={2} topToBottom src={require("../assets/img/1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={2} topToBottom colored src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={2} bottomToTop src={require("../assets/img/3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={2} bottomToTop colored src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard title="Effect 3">
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage effect={3} leftToRight src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={3} leftToRight colored src={require("../assets/img/5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={3} rightToLeft src={require("../assets/img/6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={3} rightToLeft colored src={require("../assets/img/7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage effect={3} bottomToTop src={require("../assets/img/3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={3} bottomToTop colored src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={3} topToBottom src={require("../assets/img/1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={3} topToBottom colored src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>

                <AnterosCard title="Effect 4">
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage effect={4} leftToRight src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={4} leftToRight colored src={require("../assets/img/5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={4} rightToLeft src={require("../assets/img/6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={4} rightToLeft colored src={require("../assets/img/7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage effect={4} topToBottom src={require("../assets/img/1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={4} topToBottom colored src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={4} bottomToTop src={require("../assets/img/3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={4} bottomToTop colored src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard title="Effect 5">
                    <div className="row">
                        <div className="col-sm-6">
                            <AnterosImage effect={5} src={require("../assets/img/1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-6">
                            <AnterosImage effect={5} colored src={require("../assets/img/3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard title="Effect 6">
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage effect={6} scaleUp src={require("../assets/img/6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={6} scaleUp colored src={require("../assets/img/5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={6} scaleDown src={require("../assets/img/6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage effect={6} scaleDown colored src={require("../assets/img/7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={6} scaleDownUp src={require("../assets/img/1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={6} scaleDownUp colored src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>

                <AnterosCard title="Effect 7">
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage effect={7} leftToRight src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={7} leftToRight colored src={require("../assets/img/5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={7} rightToLeft src={require("../assets/img/6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={7} rightToLeft colored src={require("../assets/img/7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage effect={7} topToBottom src={require("../assets/img/1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={7} topToBottom colored src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={7} bottomToTop src={require("../assets/img/3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage effect={7} bottomToTop colored src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
            </AnterosCard>

            <AnterosCard title="Zooming animations">
                <AnterosImage marginRight={20} maxWidth={150} zoomScale={2} src={require('../assets/img/flower.jpg')} />
                <AnterosImageMagnifier
                    image={{
                        src: require('../assets/img/onca-small.jpg'),
                        width: 410,
                        height: 307
                    }}
                    zoomImage={{
                        src: require('../assets/img/onca-large.jpg'),
                        width: 1024,
                        height: 768
                    }}
                    cursorOffset={{ x: 80, y: -80 }} />
            </AnterosCard>
        </AnterosCard >);
    }
}



