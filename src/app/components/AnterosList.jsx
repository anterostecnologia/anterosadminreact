import React, { Component } from 'react';
import lodash from 'lodash';
import { AnterosError } from "./AnterosExceptions";


export default class AnterosList extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: -1 };
        this.handleSelectItem = this.handleSelectItem.bind(this);
        this.numberOfItens = 0;
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.rebuildChildrens = this.rebuildChildrens.bind(this);
        this.buildChildrensFromDataSource = this.buildChildrensFromDataSource.bind(this);
    }

    handleSelectItem(index) {
        this.setState({ activeIndex: index });
    }

    handleKeyDown(event) {
        if (this.state.activeIndex >= 0 && this.numberOfItens > 0) {
            if (event.keyCode == 38) {
                let index = this.state.activeIndex;
                if (index - 1 >= 0) {
                    this.setState({ activeIndex: index - 1 });
                }
            } else if (event.keyCode == 40) {
                let index = this.state.activeIndex;
                if (index + 1 < this.numberOfItens)
                    this.setState({ activeIndex: index + 1 });
            } else if (event.keyCode == 36) {
                this.setState({ activeIndex: 0 });
            } else if (event.keyCode == 35) {
                this.setState({ activeIndex: this.numberOfItens - 1 });
            }
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
                throw new AnterosError("Foi encontrado um registro sem ID no dataSource passado para a Lista.");
            }
            if (!record.hasOwnProperty('text') || (!record.text)) {
                throw new AnterosError("Foi encontrado um registro sem o texto no dataSource passado para a Lista.");
            }
            let active = (record.active==undefined?false:record.active);
            if (_this.state.activeIndex >= 0) {
                active = false;
                if (_this.state.activeIndex == index) {
                    active = true;
                }
            } else if (record.active) {
                _this.state.activeIndex = index;
            }

            var { component, ...rest } = this.props;
            const DynamicComponent = component;
            if (component) {
                children.push(React.createElement(DynamicComponent, { key: record.id, active: active, index: index, handleSelectItem: _this.handleSelectItem, recordData: record }));
            } else {
                children.push(React.createElement(AnterosListItem, {
                    key: lodash.uniqueId(),
                    disabled: record.disabled,
                    id: record.id,
                    index: index,
                    active: active,
                    success: record.success,
                    warning: record.warning,
                    danger: record.danger,
                    info: record.info,
                    alignRight: (record.alignRight == undefined ? _this.props.alignRight : record.alignRight),
                    alignLeft: (record.alignLeft == undefined ? _this.props.alignLeft : record.alignLeft),
                    alignCenter: (record.alignCenter == undefined ? _this.props.alignCenter : record.alignCenter),
                    justify: (record.justify == undefined ? _this.props.justify : record.justify),
                    activeBackColor: (record.activeBackColor == undefined ? _this.props.activeBackColor : record.activeBackColor),
                    activeColor: (record.activeColor == undefined ? _this.props.activeColor : record.activeColor),
                    backgroundColor: (record.backgroundColor == undefined ? _this.props.backgroundColor : record.backgroundColor),
                    color: (record.color == undefined ? _this.props.color : record.color),
                    imageCircle: record.imageCircle,
                    imageHeight: record.imageHeight,
                    imageWidth: record.imageWidth,
                    icon: record.icon,
                    image: record.image,
                    caption: record.text,
                    handleSelectItem: _this.handleSelectItem,
                    onSelectListItem: (record.onSelectListItem == undefined ? _this.props.onSelectListItem : record.onSelectListItem),
                    href: record.href
                }));
            }
            index++;
        });
        this.numberOfItens = index;
        return children;
    }

    rebuildChildrens() {
        let children = [];
        let index = 0;
        let _this = this;
        let arrChildren = React.Children.toArray(this.props.children);
        arrChildren.forEach(function (child) {
            if (child.type && child.type.name != "AnterosListItem") {
                throw new AnterosError("Apenas componentes do tipo AnterosListItem podem ser usados como filhos de AnterosList.");
            }
            if (!child.props.id) {
                throw new AnterosError("Todos os itens da lista devem conter um ID.");
            }
            let active = child.props.active;
            if (_this.state.activeIndex >= 0) {
                active = false;
                if (_this.state.activeIndex == index) {
                    active = true;
                }
            } else if (child.props.active) {
                _this.state.activeIndex = index;
            }
            children.push(React.createElement(AnterosListItem, {
                key: lodash.uniqueId(),
                disabled: child.props.disabled,
                id: child.props.id,
                index: index,
                active: active,
                success: child.props.success,
                warning: child.props.warning,
                danger: child.props.danger,
                info: child.props.info,
                alignRight: (child.props.alignRight == undefined ? _this.props.alignRight : child.props.alignRight),
                alignLeft: (child.props.alignLeft == undefined ? _this.props.alignLeft : child.props.alignLeft),
                alignCenter: (child.props.alignCenter == undefined ? _this.props.alignCenter : child.props.alignCenter),
                justify: (child.props.justify == undefined ? _this.props.justify : child.props.justify),
                activeBackColor: (child.props.activeBackColor == undefined ? _this.props.activeBackColor : child.props.activeBackColor),
                activeColor: (child.props.activeColor == undefined ? _this.props.activeColor : child.props.activeColor),
                backgroundColor: (child.props.backgroundColor == undefined ? _this.props.backgroundColor : child.props.backgroundColor),
                color: (child.props.color == undefined ? _this.props.color : child.props.color),
                imageCircle: child.props.imageCircle,
                imageHeight: child.props.imageHeight,
                imageWidth: child.props.imageWidth,
                icon: child.props.icon,
                image: child.props.image,
                caption: child.props.caption,
                handleSelectItem: _this.handleSelectItem,
                onSelectListItem: (child.props.onSelectListItem == undefined ? _this.props.onSelectListItem : child.props.onSelectListItem),
                href: child.props.href
            },
                (child.props?child.props.children:undefined)
            ));
            index++;
        });
        this.numberOfItens = index;
        return children;
    }

    render() {
        let children = [];

        if (this.props.dataSource) {
            children = this.buildChildrensFromDataSource();
        } else if (this.props.children) {
            children = this.rebuildChildrens();
        }

        return (<div tabIndex={-1} className="list-group-container" onKeyDown={this.handleKeyDown} style={{ maxWidth: this.props.width, maxHeight: this.props.height }}> <ul className="list-group" >
            {children}
        </ul></div>);
    }
}


export class AnterosListItem extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        event.preventDefault();
        if (!this.props.disabled) {
            if (this.props.handleSelectItem) {
                this.props.handleSelectItem(this.props.index);
            }
            if (this.props.onSelectListItem) {
                this.props.onSelectListItem(this);
            }
        }
    }

    render() {
        if (this.props.hide)
            return null;

        let className = "list-group-item list-group-item-action";
        if (this.props.className) {
            className += " " + this.props.className;
        }

        if (this.props.active) {
            className += " active"
        }

        if (this.props.disabled) {
            className += " disabled";
        }

        if (this.props.success) {
            className += " list-group-item-success"
        }

        if (this.props.info) {
            className += " list-group-item-info"
        }

        if (this.props.warning) {
            className += " list-group-item-warning"
        }

        if (this.props.danger) {
            className += " list-group-item-danger"
        }

        if (this.props.alignRight) {
            className += " justify-content-end";
        }

        if (this.props.alignLeft) {
            className += " justify-content-start";
        }
        if (this.props.alignCenter) {
            className += " justify-content-center";
        }

        if (this.props.justify) {
            className += " justify-content-between";
        }

        let icon;
        if (this.props.icon) {
            icon = (<i className={this.props.icon}></i>);
        }

        let style = {};
        if (this.props.activeBackColor && this.props.activeColor && this.props.active) {
            style = { backgroundColor: this.props.activeBackColor, color: this.props.activeColor };
        }

        if (this.props.backgroundColor && this.props.color && !this.props.active) {
            style = { backgroundColor: this.props.backgroundColor, color: this.props.color };
        }

        let classNameImage;
        if (this.props.imageCircle) {
            classNameImage = "img-circle";
        }

        if (this.props.children) {
            return (<li href={this.props.href} className={className} onClick={this.onClick}>
                {this.props.caption}{this.props.children}
            </li>);
        }

        return (<li href={this.props.href} className={className} onClick={this.onClick} id={"lstItem" + this.props.id}>
            {icon} <img style={{ marginLeft: "3px", marginRight: "3px" }} className={classNameImage} src={this.props.image} height={this.props.imageHeight} width={this.props.imageWidth} /> {this.props.caption}
        </li>);
    }
}


AnterosList.propTypes = {
    activeBackColor: React.PropTypes.string,
    activeColor: React.PropTypes.string,
    alignCenter: React.PropTypes.bool,
    alignLeft: React.PropTypes.bool,
    alignRight: React.PropTypes.bool,
    backgroundColor: React.PropTypes.string,
    color: React.PropTypes.string,
    height: React.PropTypes.string,
    justify: React.PropTypes.bool,
    onSelectListItem: React.PropTypes.func,
    width: React.PropTypes.string,
};


AnterosListItem.propTypes = {
    active: React.PropTypes.bool,
    activeBackColor: React.PropTypes.string,
    activeColor: React.PropTypes.string,
    alignCenter: React.PropTypes.bool,
    alignLeft: React.PropTypes.bool,
    alignRight: React.PropTypes.bool,
    backgroundColor: React.PropTypes.string,
    caption: React.PropTypes.string,
    color: React.PropTypes.string,
    danger: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    hide: React.PropTypes.bool,
    href: React.PropTypes.string,
    icon: React.PropTypes.string,
    id: React.PropTypes.number.isRequired,
    image: React.PropTypes.string,
    imageCircle: React.PropTypes.bool,
    imageHeight: React.PropTypes.string,
    imageWidth: React.PropTypes.string,
    info: React.PropTypes.bool,
    justify: React.PropTypes.bool,
    onSelectListItem: React.PropTypes.func,
    success: React.PropTypes.bool,
    warning: React.PropTypes.bool
};

AnterosListItem.defaultProps = {
    active: false,
    caption: undefined,
    disabled: false,
    href: undefined,
    icon: undefined,
    image: undefined
}