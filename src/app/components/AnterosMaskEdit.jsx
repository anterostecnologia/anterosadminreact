import React, { Component } from 'react';
// import 'script-loader!jquery-mask-plugin/dist/jquery.mask.js'



export default class AnterosMaskEdit extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // $(this.input).mask('00/00/0000');
    }


    render() {
        return <input ref={ref => this.input = ref} {...this.props} />;
    }
}

