import React, { Component } from 'react';



var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];


const FLAVOURS = [
	{ label: 'Chocolate', value: 'chocolate' },
	{ label: 'Vanilla', value: 'vanilla' },
	{ label: 'Strawberry', value: 'strawberry' },
	{ label: 'Caramel', value: 'caramel' },
	{ label: 'Cookies and Cream', value: 'cookiescream' },
	{ label: 'Peppermint', value: 'peppermint' },
];

export default class Exemplo extends Component {
    constructor(props) {
        super(props);
        this.logChange = this.logChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.state = {value: undefined};
    }
    logChange(value) {
        console.log("Selected: " + value);
        this.setState({value});
    }
    handleSelectChange (value) {
		console.log('You\'ve selected:', value);
		this.setState({ value });
	}
    render() {
        return (<div>
 
        </div>)
    }
}