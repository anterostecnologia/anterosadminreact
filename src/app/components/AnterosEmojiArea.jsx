import React, { Component } from 'react';
import 'script-loader!emojionearea/dist/emojionearea.js'
import 'emojionearea/dist/emojionearea.css';
import lodash from "lodash";

export default class AnterosEmojiArea extends React.Component {
    constructor(props) {
        super(props);
        this.idEmoji = lodash.uniqueId("emoji");
        this.state = { value: this.props.value };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        let _this = this;
        $(this.input).emojioneArea({
            events: {
                keyup: function (editor, event) {
                    if (_this.state.value != this.getText()) {
                        _this.setState({ value: this.getText() });
                        if (this_.props.onChange) {
                            this_.props.onChange(event);
                        }
                    }
                },
                keydown: function (editor, event) {
                    if (_this.state.value != this.getText()) {
                        _this.setState({ value: this.getText() });
                        if (this_.props.onChange) {
                            this_.props.onChange(event);
                        }
                    }
                },
                keypress: function (editor, event) {
                    if (_this.state.value != this.getText()) {
                        _this.setState({ value: this.getText() });
                        if (this_.props.onChange) {
                            this_.props.onChange(event);
                        }
                    }
                },
                paste: function (editor, event) {
                    if (_this.state.value != this.getText()) {
                        _this.setState({ value: this.getText() });
                        if (this_.props.onChange) {
                            this_.props.onChange(event);
                        }
                    }
                },
                emojibtn_click: function (button, event) {
                    if (_this.state.value != this.getText()) {
                        _this.setState({ value: this.getText() });
                        if (this_.props.onChange) {
                            this_.props.onChange(event);
                        }
                    }
                }

            }
        });

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        if (this.props.onChange) {
            this.props.onChange(event);
        }
    }

    render() {
        let className = "";
        if (this.props.className) {
            className += " " + this.props.className;
        }
        if (this.props.id) {
            this.idEmoji = this.props.id;
        }
        return (
            <div style={{ width: this.props.width }}>
                <textarea maxLength={this.props.maxLenght}
                    id={this.idEmoji}
                    disabled={(this.props.disabled ? true : false)}
                    style={{ ...this.props.style }}
                    ref={ref => this.input = ref}
                    value={this.state.value}
                    className="form-control"
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}


AnterosEmojiArea.propTypes = {
    value: React.PropTypes.string.isRequired,
    placeHolder: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    maxLenght: React.PropTypes.number.isRequired
};

AnterosEmojiArea.defaultProps = {
    value: '',
    maxLenght: 0
}