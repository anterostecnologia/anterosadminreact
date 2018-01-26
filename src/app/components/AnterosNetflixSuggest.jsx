'use strict';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import React from 'react'
import lodash from 'lodash'
import { AnterosTypeahead, OptionTemplate } from './AnterosTypeahead';
var Rx = require('rx');

var JSONP = require('jsonp');
var NETFLIX_API_ENDPOINT = "http://dvd.netflix.com/JSON/AutoCompleteSearch?type=grouped";

var cache = {
    '': []
};

let fetchOptions = function(query) {
    return Rx.Observable.fromPromise(new Promise(function(resolve, reject) {
        var result = cache[query], url;

        if (result !== undefined) {
            resolve(result);
        } else {
            url = NETFLIX_API_ENDPOINT + '&prefix=' + query;

            JSONP(url, function(error, data) {
                if (error) {
                    reject(error);
                } else {
                    result =
                        Object
                          .keys(data)
                          .filter(function(key) {
                              return key !== "totalResults";
                          })
                          .reduce(function(result, key) {
                              var values = data[key].values;

                              return result.concat(values.map(function(value, index) {
                                  return {
                                      type: key,
                                      index: index,
                                      value: value.pName,
                                  };
                              }));
                          }, [])
                          .map(function(option) {
                              var value =
                                    option.value.replace(/<\/?[^>]+(>|$)/g, "")
                                                .replace('&nbsp;', ' '),
                                  type = option.type;
                              return {
                                  type: type.charAt(0).toUpperCase() + type.slice(1),
                                  index: option.index,
                                  value: value
                              };
                          });
                    cache[query] = result;
                    resolve(result);
                }
            });
        }
    }));
}


export class AnterosNetflixSuggest extends React.Component {
    constructor(props){
        super(props);
        this.setInputValue = this.setInputValue.bind(this);
        this.setOptions = this.setOptions.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleOptionClick = this.handleOptionClick.bind(this);
 
        this.state = {
            inputValue: '',
            options: []
        };
    }

    componentWillMount() {
        var inputChanges = new Rx.Subject();

        this.inputChanges = inputChanges;
        this.handleChange = inputChanges.onNext.bind(inputChanges);

        var inputValues = inputChanges.map(function(value) {
            return value;
        });

        inputValues
            .subscribe(this.setInputValue);

        inputValues
            .debounce(250)
            .flatMapLatest(function(inputValue) {
                return (fetchOptions(inputValue)
                        .retry(2)
                        .takeUntil(inputChanges)
                );
            })
            .subscribe(this.setOptions);
    }

    componentWillUnmount() {
        this.inputChanges.dispose();
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

    
    setInputValue(value) {
        this.setState({
            inputValue: value
        });
    }

    setOptions(options) {
        this.setState({
            options: options
        });
    }

    handleOptionChange(event, option) {
        this.setInputValue(option.value || option);
    }

    handleOptionClick(event, option) {
        this.setInputValue(option.value);
    }
}