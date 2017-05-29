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

                <div className="row">
                    <div className="col-sm-6">
                        <div style={{ height: "300px", width: "300px" }}>
                            <div className="anterosimg-circle effect1"><a href="#">
                                <div className="spinner"></div>
                                <div className="img"><img src={require("../assets/img/2.jpg")} alt="img" /></div>
                                <div className="info">
                                    <div className="info-back">
                                        <h3>Heading here</h3>
                                        <p>Description goes here</p>
                                    </div>
                                </div></a></div>
                        </div>

                    </div>

                    <div className="col-sm-6">
                        <div style={{ height: "200px", width: "200px" }}>
                            <div className="ih-item anterosimg-circle colored effect1"><a href="#">
                                <div className="spinner"></div>
                                <div className="img"><img src={require("../assets/img/5.jpg")} alt="img" /></div>
                                <div className="info">
                                    <div className="info-back">
                                        <h3>Heading here</h3>
                                        <p>Description goes here</p>
                                    </div>
                                </div></a></div>
                        </div>
                    </div>
                </div>
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
        </AnterosCard>);
    }
}



