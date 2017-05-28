import React, { Component } from 'react';


class AnterosCheckbox extends Component {
    constructor(props) {
        super(props);
        this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
        this.state = {
            isChecked: false,
        }
    }

    toggleCheckboxChange() {
        const { handleCheckboxChange, label } = this.props;
        let checked = !this.state.isChecked;

        this.setState(({ isChecked }) => (
            {
                isChecked: checked,
            }
        ));
        if (this.props.onCheckboxChange)
            this.props.onCheckboxChange(this.props.value, checked);
    }

    render() {
        const { name, id, value, disabled,rounded } = this.props;
        const { isChecked } = this.state;        
        const className = `checkbox ${(rounded?" rounded":"")}`;

        return (
            <label>
                <input className={className} id={id}
                    type="checkbox"
                    value={value}
                    name={name}
                    checked={isChecked}
                    disabled={disabled}
                    onChange={this.toggleCheckboxChange}
                />
                <span>{value}</span>
            </label>

        );
    }
}

AnterosCheckbox.propTypes = {
    value: React.PropTypes.string.isRequired,
    onCheckboxChange: React.PropTypes.func,
    id: React.PropTypes.string
};

export default AnterosCheckbox;
