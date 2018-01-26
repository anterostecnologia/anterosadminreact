import React, {Component} from 'react';
import {AnterosCard, HeaderActions} from "anteros-react-containers";
import AnterosSplitter from "../components/AnterosSplitter";
import {AnterosPanel} from "anteros-react-containers";

import {
    AnterosSparklines,
    AnterosSparklinesLine,
    AnterosSparklinesCurve,
    AnterosSparklinesBars,
    AnterosSparklinesSpots,
    AnterosSparklinesReferenceLine,
    AnterosSparklinesNormalBand,
    AnterosSparklinesText
} from "../components/AnterosSparklines";

function boxMullerRandom() {
    let phase = false,
        x1,
        x2,
        w,
        z;

    return (function () {

        if (phase = !phase) {
            do {
                x1 = 2.0 * Math.random() - 1.0;
                x2 = 2.0 * Math.random() - 1.0;
                w = x1 * x1 + x2 * x2;
            } while (w >= 1.0);

            w = Math.sqrt((-2.0 * Math.log(w)) / w);
            return x1 * w;
        } else {
            return x2 * w;
        }
    })();
}

function randomData(n = 30) {
    return Array
        .apply(0, Array(n))
        .map(boxMullerRandom);
}

const sampleData = randomData(30);
const sampleData100 = randomData(100);

export default class SparpkLinesView extends Component {
    render() {
        return (
            <AnterosCard>
                <AnterosSparklines data={sampleData} width={300} height={50}>
                    <AnterosSparklinesLine
                        style={{
                        stroke: "white",
                        fill: "none"
                    }}/>
                    <AnterosSparklinesReferenceLine
                        style={{
                        stroke: 'white',
                        strokeOpacity: .75,
                        strokeDasharray: '2, 2'
                    }}/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData}>
                    <AnterosSparklinesLine/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData}>
                    <AnterosSparklinesCurve/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData}>
                    <AnterosSparklinesLine color="#1c8cdc"/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData}>
                    <AnterosSparklinesLine color="#fa7e17"/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData}>
                    <AnterosSparklinesLine color="#ea485c"/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData}>
                    <AnterosSparklinesLine color="#56b45d"/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData}>
                    <AnterosSparklinesLine color="#8e44af"/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData}>
                    <AnterosSparklinesLine color="#253e56"/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData} max={0.5}>
                    <AnterosSparklinesLine/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData}>
                    <AnterosSparklinesLine
                        style={{
                        fill: "none"
                    }}/>
                    <AnterosSparklinesSpots/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData}>
                    <AnterosSparklinesLine color="#56b45d"/>
                    <AnterosSparklinesSpots
                        style={{
                        fill: "#56b45d"
                    }}/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData} margin={6}>
                    <AnterosSparklinesLine
                        style={{
                        strokeWidth: 3,
                        stroke: "#336aff",
                        fill: "none"
                    }}/>
                    <AnterosSparklinesSpots
                        size={4}
                        style={{
                        stroke: "#336aff",
                        strokeWidth: 3,
                        fill: "white"
                    }}/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData}>
                    <AnterosSparklinesBars
                        style={{
                        fill: "#41c3f9"
                    }}/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData}>
                    <AnterosSparklinesBars
                        style={{
                        stroke: "white",
                        fill: "#41c3f9",
                        fillOpacity: ".25"
                    }}/>
                    <AnterosSparklinesLine
                        style={{
                        stroke: "#41c3f9",
                        fill: "none"
                    }}/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData}>
                    <AnterosSparklinesLine/>
                    <AnterosSparklinesReferenceLine type="max"/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData}>
                    <AnterosSparklinesLine/>
                    <AnterosSparklinesReferenceLine type="min"/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData}>
                    <AnterosSparklinesLine/>
                    <AnterosSparklinesReferenceLine type="mean"/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData}>
                    <AnterosSparklinesLine/>
                    <AnterosSparklinesReferenceLine type="avg"/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData}>
                    <AnterosSparklinesLine/>
                    <AnterosSparklinesReferenceLine type="median"/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData}>
                    <AnterosSparklinesBars
                        style={{
                        fill: 'slategray',
                        fillOpacity: ".5"
                    }}/>
                    <AnterosSparklinesReferenceLine/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData}>
                    <AnterosSparklinesLine
                        style={{
                        fill: "none"
                    }}/>
                    <AnterosSparklinesNormalBand/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData}>
                    <AnterosSparklinesLine
                        style={{
                        fill: "none"
                    }}/>
                    <AnterosSparklinesNormalBand/>
                    <AnterosSparklinesReferenceLine type="mean"/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData}>
                    <AnterosSparklinesLine
                        style={{
                        strokeWidth: 3,
                        stroke: "#336aff",
                        fill: "none"
                    }}/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData100} svgWidth={200}>
                    <AnterosSparklinesLine
                        style={{
                        stroke: "#2991c8",
                        fill: "none"
                    }}/>
                    <AnterosSparklinesSpots/>
                    <AnterosSparklinesNormalBand
                        style={{
                        fill: "#2991c8",
                        fillOpacity: .1
                    }}/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData100}>
                    <AnterosSparklinesLine
                        style={{
                        stroke: "black",
                        fill: "none"
                    }}/>
                    <AnterosSparklinesSpots
                        style={{
                        fill: "orange"
                    }}/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData}>
                    <AnterosSparklinesBars
                        style={{
                        stroke: "white",
                        strokeWidth: "1",
                        fill: "#40c0f5"
                    }}/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData} height={80}>
                    <AnterosSparklinesLine
                        style={{
                        stroke: "#8ed53f",
                        strokeWidth: "1",
                        fill: "none"
                    }}/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData} height={80}>
                    <AnterosSparklinesLine
                        style={{
                        stroke: "#d1192e",
                        strokeWidth: "1",
                        fill: "none"
                    }}/>
                </AnterosSparklines>

                <AnterosSparklines data={sampleData} height={40}>
                    <AnterosSparklinesLine
                        style={{
                        stroke: "#559500",
                        fill: "#8fc638",
                        fillOpacity: "1"
                    }}/>
                </AnterosSparklines>

                <AnterosSparklines
                    data={sampleData}
                    style={{
                    background: "#272727"
                }}
                    margin={10}
                    height={40}>
                    <AnterosSparklinesLine
                        style={{
                        stroke: "none",
                        fill: "#d2673a",
                        fillOpacity: ".5"
                    }}/>
                </AnterosSparklines>

                <AnterosSparklines
                    data={sampleData}
                    style={{
                    background: "#00bdcc"
                }}
                    margin={10}
                    height={40}>
                    <AnterosSparklinesLine
                        style={{
                        stroke: "white",
                        fill: "none"
                    }}/>
                    <AnterosSparklinesReferenceLine
                        style={{
                        stroke: 'white',
                        strokeOpacity: .75,
                        strokeDasharray: '2, 2'
                    }}/>
                </AnterosSparklines>
                <Dynamic1/>
                <Dynamic2/>
                <Dynamic3/>
                <Dynamic4/>
            </AnterosCard>
        )
    }
}

class Dynamic1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        setInterval(() => this.setState({
            data: this
                .state
                .data
                .concat([boxMullerRandom()])
        }), 100);
    }

    render() {
        return (
            <AnterosSparklines data={this.state.data} limit={20}>
                <AnterosSparklinesLine color="#1c8cdc"/>
                <AnterosSparklinesSpots/>
            </AnterosSparklines>
        );
    }
}

class Dynamic2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        setInterval(() => this.setState({
            data: this
                .state
                .data
                .concat([boxMullerRandom()])
        }), 100);
    }

    render() {
        return (
            <AnterosSparklines data={this.state.data} limit={20}>
                <AnterosSparklinesBars
                    style={{
                    fill: "#41c3f9",
                    fillOpacity: ".25"
                }}/>
                <AnterosSparklinesLine
                    style={{
                    stroke: "#41c3f9",
                    fill: "none"
                }}/>
            </AnterosSparklines>
        );
    }
}

class Dynamic3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        setInterval(() => this.setState({
            data: this
                .state
                .data
                .concat([boxMullerRandom()])
        }), 100);
    }

    render() {
        return (
            <AnterosSparklines data={this.state.data} limit={20}>
                <AnterosSparklinesLine
                    style={{
                    stroke: "none",
                    fill: "#8e44af",
                    fillOpacity: "1"
                }}/>
            </AnterosSparklines>
        );
    }
}

class Dynamic4 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        setInterval(() => this.setState({
            data: this
                .state
                .data
                .concat([boxMullerRandom()])
        }), 100);
    }

    render() {
        return (
            <AnterosSparklines data={this.state.data} limit={10}>
                <AnterosSparklinesBars color="#0a83d8"/>
            </AnterosSparklines>
        );
    }
}