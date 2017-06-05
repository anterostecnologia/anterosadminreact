import React, { Component } from 'react';
import AnterosCard from "../components/AnterosCard";
import AnterosImage from "../components/AnterosImage";
import AnterosImageMagnifier from "../components/AnterosImageMagnifier";
import AnterosImageCropper from "../components/AnterosImageCropper";
import AnterosButton from "../components/AnterosButton";

const src = 'http://i.imgur.com/Baf0DlW.png';


export default class ImageView extends Component {
    constructor(props) {
        super(props);
        this.cropImage = this.cropImage.bind(this);
        this.state = {
            src: src,
            cropResult: null
        }
    }

    cropImage() {
        if (typeof this.cropper.getCroppedCanvas() === 'undefined') {
            return;
        }
        this.setState({
            ...this.state,
            cropResult: this.cropper.getCroppedCanvas().toDataURL(),
        });
    }

    render() {
        return (<AnterosCard caption="Images">
            <div className="row">
                <div className="col-6">
                    <AnterosCard caption="Rounded images">
                        <AnterosImage marginRight={20} maxWidth={50} rounded src={require('../assets/img/ti.jpg')} />
                        <AnterosImage marginRight={20} maxWidth={100} rounded src={require('../assets/img/ti.jpg')} />
                        <AnterosImage marginRight={20} maxWidth={150} rounded src={require('../assets/img/ti.jpg')} />
                    </AnterosCard>
                </div>
                <div className="col-6">
                    <AnterosCard caption="Thumbnail images">
                        <AnterosImage marginRight={20} maxWidth={50} thumbnail src={require('../assets/img/folha_seca.jpg')} />
                        <AnterosImage marginRight={20} maxWidth={100} thumbnail src={require('../assets/img/folha_seca.jpg')} />
                        <AnterosImage marginRight={20} maxWidth={150} thumbnail src={require('../assets/img/folha_seca.jpg')} />
                    </AnterosCard>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <AnterosCard caption="Bordered images">
                        <AnterosImage marginRight={20} maxWidth={50} circle bordered red src={require('../assets/img/folha_seca.jpg')} />
                        <AnterosImage marginRight={20} maxWidth={100} bordered purple src={require('../assets/img/folha_seca.jpg')} />
                        <AnterosImage marginRight={20} maxWidth={150} bordered success src={require('../assets/img/folha_seca.jpg')} />
                    </AnterosCard>
                </div>
            </div>
            <AnterosCard caption="Zooming animations">
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
            <AnterosCard caption="Crop Image">
                <div className="row">
                    <div className="col-md-9">
                        <div className="img-container">
                            <AnterosImageCropper
                                style={{ height: 400, width: '100%' }}

                                preview=".img-preview"
                                guides={false}
                                src={this.state.src}
                                ref={cropper => { this.cropper = cropper; }}
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="docs-preview clearfix">
                            <div className="img-preview preview-lg" style={{ width: "256px", height: "144px" }}></div>
                            <div className="img-preview preview-md" style={{ width: "128px", height: "72px" }}></div>
                            <div className="img-preview preview-sm" style={{ width: "64px", height: "36px" }}></div>
                            <div className="img-preview preview-xs" style={{ width: "32px", height: "18px" }}></div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ margin: "20px" }}>
                    <div className="col-md-3">
                        <AnterosButton success onClick={this.cropImage} caption="Crop image" />
                    </div>
                    <div className="col-md-9">
                        <img style={{ width: '30%' }} src={this.state.cropResult} />
                    </div>
                </div>
            </AnterosCard>
            <AnterosCard caption="Image circle and effects">
                <AnterosImage marginRight={20} maxWidth={50} circle src={require('../assets/img/flower.jpg')} />
                <AnterosImage marginRight={20} maxWidth={100} circle src={require('../assets/img/flower.jpg')} />
                <AnterosImage marginRight={20} maxWidth={150} circle src={require('../assets/img/flower.jpg')} />

                <AnterosCard caption="Effect 1" >
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={1} src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>

                        <div className="col-sm-2">
                            <AnterosImage circle effect={1} colored src={require("../assets/img/5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 2" >
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={2} leftToRight src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={2} leftToRight colored src={require("../assets/img/5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={2} rightToLeft src={require("../assets/img/6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={2} rightToLeft colored src={require("../assets/img/7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={2} topToBottom src={require("../assets/img/1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={2} topToBottom colored src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={2} bottomToTop src={require("../assets/img/3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={2} bottomToTop colored src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 3">
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={3} leftToRight src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={3} leftToRight colored src={require("../assets/img/5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={3} rightToLeft src={require("../assets/img/6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={3} rightToLeft colored src={require("../assets/img/7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={3} bottomToTop src={require("../assets/img/3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={3} bottomToTop colored src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={3} topToBottom src={require("../assets/img/1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={3} topToBottom colored src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>

                <AnterosCard caption="Effect 4">
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={4} leftToRight src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={4} leftToRight colored src={require("../assets/img/5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={4} rightToLeft src={require("../assets/img/6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={4} rightToLeft colored src={require("../assets/img/7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={4} topToBottom src={require("../assets/img/1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={4} topToBottom colored src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={4} bottomToTop src={require("../assets/img/3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={4} bottomToTop colored src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 5">
                    <div className="row">
                        <div className="col-sm-6">
                            <AnterosImage circle effect={5} src={require("../assets/img/1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-6">
                            <AnterosImage circle effect={5} colored src={require("../assets/img/3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 6">
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={6} scaleUp src={require("../assets/img/6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={6} scaleUp colored src={require("../assets/img/5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={6} scaleDown src={require("../assets/img/6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={6} scaleDown colored src={require("../assets/img/7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={6} scaleDownUp src={require("../assets/img/1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={6} scaleDownUp colored src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>

                <AnterosCard caption="Effect 7">
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={7} leftToRight src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={7} leftToRight colored src={require("../assets/img/5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={7} rightToLeft src={require("../assets/img/6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={7} rightToLeft colored src={require("../assets/img/7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={7} topToBottom src={require("../assets/img/1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={7} topToBottom colored src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={7} bottomToTop src={require("../assets/img/3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={7} bottomToTop colored src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 8">
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={8} leftToRight src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={8} leftToRight colored src={require("../assets/img/5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={8} rightToLeft src={require("../assets/img/6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={8} rightToLeft colored src={require("../assets/img/7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={8} topToBottom src={require("../assets/img/1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={8} topToBottom colored src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={8} bottomToTop src={require("../assets/img/3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={8} bottomToTop colored src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 9">
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={9} leftToRight src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={9} leftToRight colored src={require("../assets/img/5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={9} rightToLeft src={require("../assets/img/6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={9} rightToLeft colored src={require("../assets/img/7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={9} topToBottom src={require("../assets/img/1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={9} topToBottom colored src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={9} bottomToTop src={require("../assets/img/3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={9} bottomToTop colored src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 10">
                    <div className="row">
                        <div className="col-sm-3">
                            <AnterosImage circle effect={10} topToBottom src={require("../assets/img/1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage circle effect={10} topToBottom colored src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage circle effect={10} bottomToTop src={require("../assets/img/3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage circle effect={10} bottomToTop colored src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 11">
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={11} leftToRight src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={11} leftToRight colored src={require("../assets/img/5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={11} rightToLeft src={require("../assets/img/6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={11} rightToLeft colored src={require("../assets/img/7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={11} topToBottom src={require("../assets/img/1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={11} topToBottom colored src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={11} bottomToTop src={require("../assets/img/3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={11} bottomToTop colored src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 12">
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={12} leftToRight src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={12} leftToRight colored src={require("../assets/img/5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={12} rightToLeft src={require("../assets/img/6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={12} rightToLeft colored src={require("../assets/img/7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={12} topToBottom src={require("../assets/img/1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={12} topToBottom colored src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={12} bottomToTop src={require("../assets/img/3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={12} bottomToTop colored src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 13">
                    <div className="row">
                        <div className="col-sm-6">
                            <AnterosImage circle effect={13} fromLeftAndRight src={require("../assets/img/7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-6">
                            <AnterosImage circle effect={13} fromLeftAndRight colored src={require("../assets/img/1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <AnterosImage circle effect={13} topToBottom src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-6">
                            <AnterosImage circle effect={13} topToBottom colored src={require("../assets/img/3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <AnterosImage circle effect={13} bottomToTop src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-6">
                            <AnterosImage circle effect={13} bottomToTop colored src={require("../assets/img/5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 14">
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={14} leftToRight src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={14} leftToRight colored src={require("../assets/img/5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={14} rightToLeft src={require("../assets/img/6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={14} rightToLeft colored src={require("../assets/img/7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={14} topToBottom src={require("../assets/img/1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={14} topToBottom colored src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={14} bottomToTop src={require("../assets/img/3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={14} bottomToTop colored src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 15">
                    <div className="row">
                        <div className="col-sm-6">
                            <AnterosImage circle effect={15} leftToRight src={require("../assets/img/1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-6">
                            <AnterosImage circle effect={15} leftToRight colored src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 16">
                    <div className="row">
                        <div className="col-sm-3">
                            <AnterosImage circle effect={16} leftToRight src={require("../assets/img/7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage circle effect={16} leftToRight colored src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage circle effect={16} rightToLeft src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage circle effect={16} rightToLeft colored src={require("../assets/img/5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 17">
                    <div className="row">
                        <div className="col-sm-6">
                            <AnterosImage circle effect={17} marginBottom="4px" src={require("../assets/img/6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-6">
                            <AnterosImage circle effect={17} marginBottom="4px" colored src={require("../assets/img/5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 18">
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={18} leftToRight src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={18} leftToRight colored src={require("../assets/img/5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={18} rightToLeft src={require("../assets/img/6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={18} rightToLeft colored src={require("../assets/img/7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <AnterosImage circle effect={18} topToBottom src={require("../assets/img/1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={18} topToBottom colored src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={18} bottomToTop src={require("../assets/img/3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-2">
                            <AnterosImage circle effect={18} bottomToTop colored src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 19">
                    <div className="row">
                        <div className="col-sm-6">
                            <AnterosImage circle effect={19} src={require("../assets/img/1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-6">
                            <AnterosImage circle effect={19} colored src={require("../assets/img/3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 20">
                    <div className="row">
                        <div className="col-sm-3">
                            <AnterosImage circle effect={20} topToBottom src={require("../assets/img/2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage circle effect={20} topToBottom colored src={require("../assets/img/4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage circle effect={20} bottomToTop src={require("../assets/img/3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage circle effect={20} bottomToTop colored src={require("../assets/img/5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
            </AnterosCard>

            <AnterosCard caption="Square effects" success>
                <AnterosCard caption="Effect 1">
                    <div className="row">
                        <div className="col-sm-6">
                            <AnterosImage square effect={1} margin="8px" leftAndRight src={require("../assets/img/c2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-6">
                            <AnterosImage square effect={1} margin="8px" leftAndRight colored src={require("../assets/img/c5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <AnterosImage square effect={1} margin="8px" topToBottom src={require("../assets/img/c3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-6">
                            <AnterosImage square effect={1} margin="8px" topToBottom colored src={require("../assets/img/c4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <AnterosImage square effect={1} margin="8px" bottomToTop src={require("../assets/img/c6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-6">
                            <AnterosImage square effect={1} margin="8px" bottomToTop colored src={require("../assets/img/c7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 2">
                    <div className="row">
                        <div className="col-sm-6">
                            <AnterosImage square effect={2} margin="8px" src={require("../assets/img/c3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-6">
                            <AnterosImage square effect={2} margin="8px" colored src={require("../assets/img/c1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 3">
                    <div className="row">
                        <div className="col-sm-3">
                            <AnterosImage square effect={3} margin="8px" bottomToTop src={require("../assets/img/c1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={3} margin="8px" bottomToTop colored src={require("../assets/img/c4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={3} margin="8px" topToBottom src={require("../assets/img/c2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={3} margin="8px" topToBottom colored src={require("../assets/img/c3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 4">
                    <div className="row">
                        <div className="col-sm-6">
                            <AnterosImage square effect={4} margin="8px" src={require("../assets/img/c7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-6">
                            <AnterosImage square effect={4} margin="8px" colored src={require("../assets/img/c2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>

                <AnterosCard caption="Effect 5">
                    <div className="row">
                        <div className="col-sm-3">
                            <AnterosImage square effect={5} leftToRight margin="8px" src={require("../assets/img/c2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={5} leftToRight margin="8px" colored src={require("../assets/img/c3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={5} rightToLeft margin="8px" src={require("../assets/img/c6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={5} rightToLeft margin="8px" colored src={require("../assets/img/c7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 6">
                    <div className="row">
                        <div className="col-sm-3">
                            <AnterosImage square effect={6} fromTopAndBottom margin="8px" src={require("../assets/img/c1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={6} fromTopAndBottom margin="8px" colored src={require("../assets/img/c3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={6} fromLeftAndRight margin="8px" src={require("../assets/img/c2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={6} fromLeftAndRight margin="8px" colored src={require("../assets/img/c4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <AnterosImage square effect={6} topToBottom margin="8px" src={require("../assets/img/c5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={6} topToBottom margin="8px" colored src={require("../assets/img/c7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={6} bottomToTop margin="8px" src={require("../assets/img/c6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={6} bottomToTop margin="8px" colored src={require("../assets/img/c4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 7">
                    <div className="row">
                        <div className="col-sm-6">
                            <AnterosImage square effect={7} margin="8px" src={require("../assets/img/c2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-6">
                            <AnterosImage square effect={7} margin="8px" colored src={require("../assets/img/c4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 8">
                    <div className="row">
                        <div className="col-sm-3">
                            <AnterosImage square effect={8} scaleUp margin="8px" src={require("../assets/img/c5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={8} scaleUp margin="8px" colored src={require("../assets/img/c6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={8} scaleDown margin="8px" src={require("../assets/img/c7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={8} scaleDown margin="8px" colored src={require("../assets/img/c2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 9">
                    <div className="row">
                        <div className="col-sm-3">
                            <AnterosImage square effect={9} bottomToTop margin="8px" src={require("../assets/img/c1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={9} bottomToTop margin="8px" colored src={require("../assets/img/c3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={9} leftToRight margin="8px" src={require("../assets/img/c2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={9} leftToRight margin="8px" colored src={require("../assets/img/c4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <AnterosImage square effect={9} rightToLeft margin="8px" src={require("../assets/img/c5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={9} rightToLeft margin="8px" colored src={require("../assets/img/c7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={9} topToBottom margin="8px" src={require("../assets/img/c6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={9} topToBottom margin="8px" colored src={require("../assets/img/c4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 10">
                    <div className="row">
                        <div className="col-sm-3">
                            <AnterosImage square effect={10} leftToRight margin="8px" src={require("../assets/img/c1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={10} leftToRight margin="8px" colored src={require("../assets/img/c3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={10} rightToLeft margin="8px" src={require("../assets/img/c2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={10} rightToLeft margin="8px" colored src={require("../assets/img/c4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <AnterosImage square effect={10} rightToLeft margin="8px" src={require("../assets/img/c5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={10} rightToLeft margin="8px" colored src={require("../assets/img/c7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={10} topToBottom margin="8px" src={require("../assets/img/c6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={10} topToBottom margin="8px" colored src={require("../assets/img/c4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 11">
                    <div className="row">
                        <div className="col-sm-3">
                            <AnterosImage square effect={11} leftToRight margin="8px" src={require("../assets/img/c1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={11} leftToRight margin="8px" colored src={require("../assets/img/c3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={11} rightToLeft margin="8px" src={require("../assets/img/c2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={11} rightToLeft margin="8px" colored src={require("../assets/img/c4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <AnterosImage square effect={11} rightToLeft margin="8px" src={require("../assets/img/c5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={11} rightToLeft margin="8px" colored src={require("../assets/img/c7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={11} topToBottom margin="8px" src={require("../assets/img/c6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={11} topToBottom margin="8px" colored src={require("../assets/img/c4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 12">
                    <div className="row">
                        <div className="col-sm-3">
                            <AnterosImage square effect={12} leftToRight margin="8px" src={require("../assets/img/c1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={12} leftToRight margin="8px" colored src={require("../assets/img/c3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={12} rightToLeft margin="8px" src={require("../assets/img/c2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={12} rightToLeft margin="8px" colored src={require("../assets/img/c4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <AnterosImage square effect={12} rightToLeft margin="8px" src={require("../assets/img/c5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={12} rightToLeft margin="8px" colored src={require("../assets/img/c7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={12} topToBottom margin="8px" src={require("../assets/img/c6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={12} topToBottom margin="8px" colored src={require("../assets/img/c4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 13">
                    <div className="row">
                        <div className="col-sm-3">
                            <AnterosImage square effect={13} leftToRight margin="8px" src={require("../assets/img/c1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={13} leftToRight margin="8px" colored src={require("../assets/img/c3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={13} rightToLeft margin="8px" src={require("../assets/img/c2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={13} rightToLeft margin="8px" colored src={require("../assets/img/c4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <AnterosImage square effect={13} rightToLeft margin="8px" src={require("../assets/img/c5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={13} rightToLeft margin="8px" colored src={require("../assets/img/c7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={13} topToBottom margin="8px" src={require("../assets/img/c6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={13} topToBottom margin="8px" colored src={require("../assets/img/c4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 14">
                    <div className="row">
                        <div className="col-sm-3">
                            <AnterosImage square effect={14} leftToRight margin="8px" src={require("../assets/img/c1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={14} leftToRight margin="8px" colored src={require("../assets/img/c3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={14} rightToLeft margin="8px" src={require("../assets/img/c2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={14} rightToLeft margin="8px" colored src={require("../assets/img/c4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <AnterosImage square effect={14} rightToLeft margin="8px" src={require("../assets/img/c5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={14} rightToLeft margin="8px" colored src={require("../assets/img/c7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={14} topToBottom margin="8px" src={require("../assets/img/c6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={14} topToBottom margin="8px" colored src={require("../assets/img/c4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
                <AnterosCard caption="Effect 15">
                    <div className="row">
                        <div className="col-sm-3">
                            <AnterosImage square effect={15} leftToRight margin="8px" src={require("../assets/img/c1.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={15} leftToRight margin="8px" colored src={require("../assets/img/c3.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={15} rightToLeft margin="8px" src={require("../assets/img/c2.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={15} rightToLeft margin="8px" colored src={require("../assets/img/c4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <AnterosImage square effect={15} rightToLeft margin="8px" src={require("../assets/img/c5.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={15} rightToLeft margin="8px" colored src={require("../assets/img/c7.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={15} topToBottom margin="8px" src={require("../assets/img/c6.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                        <div className="col-sm-3">
                            <AnterosImage square effect={15} topToBottom margin="8px" colored src={require("../assets/img/c4.jpg")}>
                                <h3>Heading here</h3>
                                <p>Description goes here</p>
                            </AnterosImage>
                        </div>
                    </div>
                </AnterosCard>
            </AnterosCard>
        </AnterosCard >);
    }
}



