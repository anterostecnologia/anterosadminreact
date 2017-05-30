import React, { Component } from 'react';
import './AnterosImage.css';


export default class AnterosImage extends Component {
    constructor(props) {
        super(props);

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.state = { hover: false };
    }

    componentDidMount() {
    }

    onMouseOver(event) {
        this.setState({ hover: true });
    }

    onMouseOut(event) {
        this.setState({ hover: false });
    }

    render() {
        let scale = 1;
        if (this.state.hover) {
            scale = (this.props.zoomScale ? this.props.zoomScale : 1);
        }

        let customStyle = {
            maxWidth: this.props.maxWidth,
            marginRight: this.props.marginRight,
            marginLeft: this.props.marginLeft,
            marginTop: this.props.marginTop,
            marginBottom: this.props.marginBottom,
            WebkitTransition: "0.4s ease",
            transition: "0.4s ease",
            transform: "scale(" + scale + ")",
            WebkitTransform: "scale(" + scale + ")"
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

        if (this.props.effect) {
            let width = (this.props.width ? this.props.width : "200px");
            let height = (this.props.height ? this.props.height : "200px");
            let className = "ih-item anterosimg-circle effect"+this.props.effect;
            if (this.props.colored) {
                className += " colored";
            }
            if (this.props.leftToRight){
                className += " left_to_right";
            }
            if (this.props.rightToLeft){
                className += " right_to_left";
            }
            if (this.props.topToBottom){
                className += " top_to_bottom";
            }
            if (this.props.bottomToTop){
                className += " bottom_to_top";
            }
            if (this.props.scaleUp){
                className += " scale_up";
            }
            if (this.props.scaleDown){
                className += " scale_down";
            }
            if (this.props.scaleDownUp){
                className += " scale_down_up";
            }
            return (<div style={{ height: height, width: width }}>
                <div className={className}>
                    <a href="#">
                        {this.props.effect==1?<div className="spinner"></div>:null}
                        <div className="img"><img ref={ref => this.image = ref} src={this.props.src} alt="img" /></div>
                        <div className="info">
                            <div className="info-back">
                                {this.props.children}
                            </div>
                        </div>
                    </a>
                </div>
            </div>);
        } else {
            return (<img ref={ref => this.image = ref}
                className={className}
                src={this.props.src}
                style={customStyle}
                onMouseOut={this.onMouseOut}
                onMouseOver={this.onMouseOver}>
                {this.props.children}
            </img>);
        }
    }
}





