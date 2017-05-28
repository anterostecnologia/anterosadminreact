import React from 'react'
import 'script-loader!bootstrap-select/dist/js/bootstrap-select.min.js'
import 'bootstrap-select/dist/css/bootstrap-select.css';
import lodash from 'lodash';

export default class AnterosSelect extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeSelect = this.onChangeSelect.bind(this);
        this.onDroppedDown = this.onDroppedDown.bind(this);
        this.onCloseUp = this.onCloseUp.bind(this);
        this.buildChildrensFromDataSource = this.buildChildrensFromDataSource.bind(this);
        this.rebuildChildrens = this.rebuildChildrens.bind(this);
    }

    componentDidMount() {
        $(this.refs.select).selectpicker({
            selectAllText: 'Todos',
            deselectAllText: 'Nenhum',
            multipleSeparator: this.props.multipleSeparator
        });
        $(this.refs.select).on('changed.bs.select', this.onChangeSelect);
        $(this.refs.select).on('show.bs.select', this.onDroppedDown)
        $(this.refs.select).on('hide.bs.select', this.onCloseUp);
    }

    componentWillUnmount() {
        $(this.refs.select).selectpicker('destroy');
    }

    onChangeSelect(event, clickedIndex, newValue, oldValue) {
        if (this.props.onChangeSelect) {
            this.props.onChangeSelect(clickedIndex, newValue, oldValue);
        }
    }

    onDroppedDown() {
        if (this.props.onDroppedDown) {
            this.props.onDroppedDown();
        }
    }

    onCloseUp() {
        if (this.props.onCloseUp) {
            this.props.onCloseUp();
        }
    }

    buildChildrensFromDataSource() {
        if (!(this.props.dataSource.constructor === Array)) {
            throw new AnterosError("O dataSource deve ser obrigatoriamente um array de dados.");
        }
        let children = [];
        let index = 0;
        let _this = this;
        this.props.dataSource.map(record => {
            if (!record.hasOwnProperty('id') || (!record.id)) {
                throw new AnterosError("Foi encontrado um registro sem ID no dataSource passado para o Select.");
            }
            if (!record.hasOwnProperty('text') || (!record.text)) {
                throw new AnterosError("Foi encontrado um registro sem o texto no dataSource passado para a Select.");
            }

            children.push(React.createElement(AnterosSelectOption, {
                key: lodash.uniqueId(),
                label: record.label,
                subText: record.subText,
                group: record.group,
                divider: record.divider,
                disabled: record.disabled,
                keyWordsToSearch: record.keyWordsToSearch,
                title: record.title,
                style: record.style,
                className: record.className,
                icon: record.icon,
                content: record.content,
                index: index
            }, record.text));
            index++;
        });
        return children;
    }

    rebuildChildrens() {
        let children = [];
        let index = 0;
        let _this = this;
        let arrChildren = React.Children.toArray(this.props.children);
        arrChildren.forEach(function (child) {
            children.push(React.createElement(AnterosSelectOption, {
                key: lodash.uniqueId(),
                label: child.props.label,
                subText: child.props.subText,
                group: child.props.group,
                divider: child.props.divider,
                disabled: child.props.disabled,
                keyWordsToSearch: child.props.keyWordsToSearch,
                title: child.props.title,
                style: child.props.style,
                className: child.props.className,
                icon: child.props.icon,
                content: child.props.content,
                index: index
            }, child.props.children));
            index++;
        });
        return children;
    }

    render() {
        let { onChangeSelect, onDroppedDown, onCloseUp, multiple, searchEnabled, maxSelectedOptions,
            maxShowOptions, placeHolder, captionHeader, selectedTextFormat, showActionsBox, showTick, dataSource,
            showMenuArrow, disabled, width, primary, secondary, info, danger, success, warning, container, dropup } = this.props;

        let dataStyle;
        if (primary) {
            dataStyle = "btn-primary";
        } else if (info) {
            dataStyle = "btn-info";
        } else if (danger) {
            dataStyle = "btn-danger";
        } else if (success) {
            dataStyle = "btn-success";
        } else if (warning) {
            dataStyle = "btn-warning";
        }

        let options = {
            "multiple": multiple,
            "data-live-search": searchEnabled,
            "data-max-options": maxSelectedOptions,
            "data-actions-box": showActionsBox,
            "title": placeHolder,
            "data-selected-text-format": selectedTextFormat,
            "data-width": width,
            "data-size": maxShowOptions,
            "data-actions-box": showActionsBox,
            "data-header": captionHeader,
            "disabled": disabled,
            "data-container": container,
            "data-style": dataStyle
        };

        let className = "selectpicker";
        if (showTick) {
            className += " show-tick";
        }
        if (showMenuArrow) {
            className += " show-menu-arrow";
        }
        if (dropup) {
            className += " dropup";
        }

        let newChildren;
        if (this.props.dataSource) {
            newChildren = this.buildChildrensFromDataSource();
        } else if (this.props.children) {
            newChildren = this.rebuildChildrens();
        }

        return (
            <select className={className} ref="select" {...options}>
                {newChildren}
            </select>
        )
    }

}

AnterosSelect.propTypes = {
    onChangeSelect: React.PropTypes.func,
    onDroppedDown: React.PropTypes.func,
    onCloseUp: React.PropTypes.func,
    multiple: React.PropTypes.bool.isRequired,
    multipleSeparator: React.PropTypes.string.isRequired,
    searchEnabled: React.PropTypes.bool.isRequired,
    maxSelectedOptions: React.PropTypes.number.isRequired,
    maxShowOptions: React.PropTypes.number.isRequired,
    placeHolder: React.PropTypes.string.isRequired,
    captionHeader: React.PropTypes.string,
    selectedTextFormat: React.PropTypes.string.isRequired,
    showActionsBox: React.PropTypes.bool.isRequired,
    showTick: React.PropTypes.bool.isRequired,
    showMenuArrow: React.PropTypes.bool.isRequired,
    disabled: React.PropTypes.bool.isRequired,
    width: React.PropTypes.string,
    primary: React.PropTypes.bool,
    secondary: React.PropTypes.bool,
    info: React.PropTypes.bool,
    danger: React.PropTypes.bool,
    success: React.PropTypes.bool,
    warning: React.PropTypes.bool,
    container: React.PropTypes.string,
    dropup: React.PropTypes.bool
    
};

AnterosSelect.defaultProps = {
    multiple: false,
    multipleSeparator: ', ',
    searchEnabled: false,
    maxSelectedOptions: 0,
    maxShowOptions: 0,
    placeHolder: 'Selectione uma opção',
    selectedTextFormat: 'values',
    showTick: true,
    showMenuArrow: false,
    showActionsBox: false,
    disabled: false,
    primary: false,
    secondary: false,
    info: false,
    danger: false,
    success: false,
    warning: false
};




export class AnterosSelectOption extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { divider, group, name, children, disabled, keyWordsToSearch, title, style,
            icon, content, subText, className, label } = this.props;


        if (group) {
            return (
                <optgroup label={label}>
                    {children}
                </optgroup>
            );
        } else if (divider) {
            return (<option data-divider={true} />);
        } else {
            return (
                <option data-tokens={keyWordsToSearch} title={title} data-subtext={subText}
                    disabled={disabled} data-content={content}
                    data-icon={icon} style={style} className={className}>
                    {children}
                </option>
            );
        }
    }
}

AnterosSelectOption.propTypes = {
    label: React.PropTypes.string,
    subText: React.PropTypes.string,
    group: React.PropTypes.bool,
    divider: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    keyWordsToSearch: React.PropTypes.string,
    title: React.PropTypes.string,
    style: React.PropTypes.string,
    className: React.PropTypes.string,
    icon: React.PropTypes.string,
    content: React.PropTypes.element
};

AnterosSelectOption.defaultProps = {
    primary: false,
    secondary: false,
    info: false,
    danger: false,
    success: false,
    warning: false
};


