'use strict';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import React from 'react'
import lodash from 'lodash'
import { AnterosTypeahead, OptionTemplate } from './AnterosTypeahead';

var JSONP = require('jsonp');
var YOUTUBE_API_ENDPOINT = "https://clients1.google.com/complete/search?client=youtube&ds=yt";

var cache = {
    '': []
};

let fetchOptions = function(query) {
    return new Promise(function(resolve, reject) {
        var result = cache[query], url;

        if (result !== undefined) {
            resolve(result);
        } else {
            url = YOUTUBE_API_ENDPOINT + '&q=' + query;

            JSONP(url, function(error, data) {
                if (error) {
                    reject(error);
                } else {
                    result = data[1].map(function(datum) {
                        return datum[0];
                    });

                    cache[query] = result;

                    resolve(result);
                }
            });
        }
    });
}


export class AnterosYoutubeSuggest extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.getOptions = this.getOptions.bind(this);
        this.handleOptionClick = this.handleOptionClick.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.setInputValue = this.setInputValue.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);

        this.state = {
            inputValue: '',
            options: []
        };
    }

    componentWillMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <AnterosTypeahead
                inputValue={this.state.inputValue}
                options={this.state.options}
                onChange={this.handleChange}
                optionTemplate={OptionTemplate}
                onOptionChange={this.handleOptionChange}
                onOptionClick={this.handleOptionClick}
            />
        );
    }

    handleChange(value) {
        this.setInputValue(value);
        this.getOptions(value);
    }

    getOptions(inputValue){
        let _this = this;
        fetchOptions(inputValue).then(function(data) {
            _this.handleStoreChange(data);
        });
    } 

    handleOptionChange(event, option) {
        this.setInputValue(option);
    }

    handleOptionClick(event, option) {
        this.setInputValue(option);
    }

    setInputValue(value) {
        this.setState({
            inputValue: value
        });
    }

    handleStoreChange(newOptions) {
        this.setState({
            options: newOptions
        });
    }
}