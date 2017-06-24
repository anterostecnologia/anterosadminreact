import React, { Component } from 'react';
import lodash from 'lodash';

class AnterosCheckbox extends Component {
    constructor(props) {
        super(props);
        this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
        this.idCheckbox = lodash.uniqueId('check');
        this.state = {
            isChecked: this.props.checked
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isChecked: nextProps.checked });
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
        const { name, id, value, disabled, rounded } = this.props;
        const { isChecked } = this.state;
        const className = `checkbox ${(rounded ? " rounded" : "")}`;

        console.log('teste');

        return (
            <label>
                <input className={className} id={id ? id : this.idCheckbox}
                    type="checkbox"
                    value={value}
                    key = {id ? id : this.idCheckbox}
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
