import React, { Component } from 'react';
// import AnterosFloatingButtonCore from "./AnterosFloatingButtonCore";

export default class AnterosFloatingButton extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = { open: false };
    }

    onClick(event) {
        event.preventDefault();
        let isOpen = !this.state.open;
        this.setState(() => ({ open: isOpen }));
    }

    renderChild(child, index) {
        return React.cloneElement(child, {handleClick: (this.props.autoClose?this.onClick:undefined), index: index, key: index });
    }

    render() {
        return (<div id="vertical-fab" className="fab_wrapper">
            <div className="fab_btns_wrapper" style={{ display: (this.state.open ? "block" : "none") }}>
                {this.props.children.map((c, i) => (this.renderChild(c, i)))}
            </div>
            <button onClick={this.onClick} data-link-href="" className="fab_main_btn"
                style={{ backgroundColor: this.props.backgroundColor }}
                data-balloon-length={this.props.hintSize} data-balloon={this.props.hint} data-balloon-pos={this.props.hintPosition}>
                <span style={{ color: this.props.color }}><i className={this.props.icon}><img src={this.props.image} /></i></span>
            </button>
        </div>);
    }
}


AnterosFloatingButton.propTypes = {
    icon: React.PropTypes.string,
    image: React.PropTypes.string,
    hint: React.PropTypes.string.isRequired,
    hintPosition: React.PropTypes.string.isRequired,
    hintSize: React.PropTypes.string.isRequired,
    backgroundColor: React.PropTypes.string.isRequired,
    color: React.PropTypes.string.isRequired,
    success: React.PropTypes.bool,
    primary: React.PropTypes.bool,
    danger: React.PropTypes.bool,
    secondary: React.PropTypes.bool,
    onButtonClick: React.PropTypes.func,
    autoClose: React.PropTypes.bool.isRequired
};

AnterosFloatingButton.defaultProps = {
    hintPosition: "left",
    hintSize: "small",
    backgroundColor: "#3FA9F4",
    color: "#fffff",
    autoClose : true
};




export class AnterosFloatingButtonItem extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event){
        event.preventDefault();
        if (this.props.handleClick){
            this.props.handleClick(event);
        }
        if (this.props.onButtonClick){
            this.props.onButtonClick(this.props.index);
        }
    }

    render() {
        return (<div className="horizontal-fab">
            <button onClick={this.onClick} data-link-target="" className="sub_fab_btn"
                style={{ backgroundColor: this.props.backgroundColor }}
                data-balloon-length={this.props.hintSize} data-balloon={this.props.hint} data-balloon-pos={this.props.hintPosition}>
                <span style={{ color: this.props.color }}><i className={this.props.icon} /><img src={this.props.image} /></span>
            </button>
        </div>);
    }
}

AnterosFloatingButtonItem.propTypes = {
    icon: React.PropTypes.string,
    image: React.PropTypes.string,
    hint: React.PropTypes.string.isRequired,
    hintPosition: React.PropTypes.string.isRequired,
    hintSize: React.PropTypes.string.isRequired,
    backgroundColor: React.PropTypes.string.isRequired,
    color: React.PropTypes.string.isRequired,
    success: React.PropTypes.bool,
    primary: React.PropTypes.bool,
    danger: React.PropTypes.bool,
    secondary: React.PropTypes.bool,
    onButtonClick: React.PropTypes.func
};

AnterosFloatingButtonItem.defaultProps = {
    hintPosition: "left",
    hintSize: "small",
    backgroundColor: "#2ecc71",
    color: "#fffff"
};
