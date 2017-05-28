import React, { Component } from 'react';
import { AnterosError } from "./AnterosExceptions";

export default class AnterosRadioGroup extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        var index = 0;
        if (!this.props.name) {
            throw new AnterosError("Informe um nome para o RadioGroup.");
        }
        if (this.props.children)
            index = this.props.children.findIndex(c => c.props.checked);
         this.state = { checkedIndex: index > -1 ? index : 0 };
    }

    componentWillReceiveProps(nextProps) {
       if (nextProps.children)
            this.index = nextProps.children.findIndex(c => c.props.checked);
        this.state = { checkedIndex: this.index > -1 ? this.index : 0 }; 
    }

    get value() {
        const { checkedIndex } = this.state;
        const { children } = this.props;

        const child = children.find(c => c.props.index === checkedIndex);
        return child && child.props.value || '';
    }

    onChange(index) {
        const { onRadioChange, children } = this.props;
        const child = children[index];
        if (!child) return;

        this.setState({ checkedIndex: index });
        onRadioChange && onRadioChange(child.props.value || '',index);
    }

    renderChild(child, index, checked) {
        const { children, horizontal, onRadioChange, ...rest } = this.props;
        return React.cloneElement(child, {
            horizontal, index, checked,
            key: index,
            last: index === children.length - 1,
            onChange: this.onChange, ...rest
        });
    }

    render() {
        const { checkedIndex } = this.state;
        const { horizontal, children, onRadioChange, ...props } = this.props;
        const style = horizontal ? { display: 'inline-flex', width: '100%' } : {};
        return (
            <div className="d-flex flex-column" {...props}>
                {
                  children.map((c, i) => (this.renderChild(c, i, i === checkedIndex)))
                }
            </div>
        );
    }
}

AnterosRadioGroup.propTypes = {
    horizontal: React.PropTypes.bool,
    children: React.PropTypes.node,
    value: React.PropTypes.string,
    onRadioChange: React.PropTypes.func,
};

export class AnterosRadio extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { onChange, checked, index } = this.props;
        onChange && onChange(index);
    }

    render() {
        const { value, checked, disabled } = this.props;
        return (<label onClick={this.onClick}>
            <input className="radio" name="radios" type="radio" defaultChecked={checked} disabled={disabled}  />
            <span>{this.props.value}</span>
        </label>);
    }
}




