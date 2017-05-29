import React, { Component } from 'react';
import './AnterosImage.css';


export default class AnterosImage extends Component {
    constructor(props) {
        super(props);

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.state = {hover: false};
    }

    componentDidMount() {
    }

    onMouseOver(event) {
        this.setState({hover: true});
    }

    onMouseOut(event) {
        this.setState({hover: false});
    }

    render() {
         let scale = 1;
         if (this.state.hover){
             scale = (this.props.zoomScale?this.props.zoomScale:1); 
         }

        let customStyle = {
            maxWidth: this.props.maxWidth,
            marginRight: this.props.marginRight,
            marginLeft: this.props.marginLeft,
            marginTop: this.props.marginTop,
            marginBottom: this.props.marginBottom,
            WebkitTransition: "0.4s ease",
            transition: "0.4s ease",
            transform: "scale("+scale+")",
            WebkitTransform: "scale("+scale+")"
        };

        let className = (this.props.className ? this.props.className : "");
        if (this.props.rounded) {
            className += " anterosimg-rounded";
        }
        if (this.props.thumbnail) {
            className += " anterosimg-thumbnail";
        }
        if (this.props.circle) {
            className += " anterosimg-circle";
        }

        return (<img ref={ref => this.image = ref}
            className={className}
            src={this.props.src}
            style={customStyle}
            onMouseOut={this.onMouseOut}
            onMouseOver={this.onMouseOver}>
        </img>);
    }
}





