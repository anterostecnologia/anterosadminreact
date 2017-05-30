import React, { Component } from 'react';
import AnterosCard from "../components/AnterosCard";
import AnterosButton from '../components/AnterosButton';

export default class ImageView extends Component {
    render() {
        return (<AnterosCard title="Buttons">
            <div className="row">
                <div className="col-6">
                    <AnterosCard title="Button colors">

                    </AnterosCard>
                </div>
                <div className="col-6">
                    <AnterosCard title="Button types">

                    </AnterosCard>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <AnterosCard title="Button dropdowns">
                    
                    </AnterosCard>
                </div>
                <div className="col-6">
                    <AnterosCard title="Button sizing">

                    </AnterosCard>
                </div>
            </div>

        </AnterosCard >);
    }
}



