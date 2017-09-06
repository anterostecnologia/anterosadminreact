import React, { Component } from 'react';
import { AnterosCard, HeaderActions, FooterActions, AnterosCardGroup, AnterosCardDeck } from "anteros-react";
import { AnterosImage } from "anteros-react";
import { AnterosButton } from "anteros-react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import { AnterosCollapseContent } from 'anteros-react';
import { AnterosEChart } from "../components/AnterosEChart";
import { AnterosChart, Bar } from "../components/AnterosChart";

import { bubleData, bubleOptions } from "./chartData/buble";


const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

export default class ChartsView extends Component {
    render() {
        return (
            <AnterosCard caption="Gráficos">
                <AnterosEChart options={bubleOptions} />

                <div>
                    <h2>Bar Example (custom size)</h2>
                    <Bar
                        data={data}
                        width="400px"
                        height="400px"
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
                </div>
            </AnterosCard>);
    }
}

