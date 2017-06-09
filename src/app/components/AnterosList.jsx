import React, { Component } from 'react';
import lodash from 'lodash';
import { AnterosError } from "./AnterosExceptions";
import { buildClassNames } from "../utils/AnterosUtils";



export default class AnterosList extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: -1 };
        this.handleSelectItem = this.handleSelectItem.bind(this);
        this.numberOfItens = 0;
        this.idList = lodash.uniqueId('list');
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.rebuildChildrens = this.rebuildChildrens.bind(this);
        this.buildChildrensFromDataSource = this.buildChildrensFromDataSource.bind(this);
    }

    handleSelectItem(index) {
        this.setState({ activeIndex: index });
    }

    handleKeyDown(event) {
        event.preventDefault();
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
            } else if (event.keyCode == 33) {
                this.setState((prevState, props) => {
                    return { activeIndex: (prevState.activeIndex - 5 >= 0 ? prevState.activeIndex - 5 : 0) };
                })
            } else if (event.keyCode == 34) {
                this.setState((prevState, props) => {
                    return { activeIndex: (prevState.activeIndex + 5 < this.numberOfItens ? prevState.activeIndex + 5 : this.numberOfItens - 1) };
                })
            } else if (event.keyCode == 36) {
                this.setState((prevState, props) => {
                    return { activeIndex: 0 };
                })
            } else if (event.keyCode == 35) {
                this.setState((prevState, props) => {
                    return { activeIndex: this.numberOfItens - 1 };
                })
            }
        }


    }

    componentDidUpdate(prevProps, prevState) {
        let target = $(this.list).find('.active')[0];
        if (target) {
            target.focus();
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
            let active = (record.active == undefined ? false : record.active);
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
                    key: child.props.id,
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
                    href: record.href,
                    showBorder: (record.showBorder == undefined ? _this.props.showBorder : record.showBorder),
                    ownerId: (_this.props.id ? _this.props.id : _this.idList)
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
                key: child.props.id,
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
                href: child.props.href,
                showBorder: (child.showBorder == undefined ? _this.props.showBorder : child.showBorder),
                ownerId: (_this.props.id ? _this.props.id : _this.idList)
            },
                (child.props ? child.props.children : undefined)
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

        return (<div id={this.props.id ? this.props.id : this.idList} ref={ref => this.list = ref} tabIndex={-1} className="list-group-container" onKeyDown={this.handleKeyDown} style={{ width: this.props.width, height: this.props.height }}> <ul className="list-group" >
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

        let className = buildClassNames(
            (this.props.showBorder ? "list-group-item-border" : "list-group-item"),
            "list-group-item-action",
            (this.props.className ? this.props.className : ""),
            (this.props.active ? "active" : ""),
            (this.props.disabled ? "disabled" : ""),
            (this.props.success ? "list-group-item-success" : ""),
            (this.props.info ? "list-group-item-info" : ""),
            (this.props.warning ? "list-group-item-warning" : ""),
            (this.props.danger ? "list-group-item-danger" : ""),
            (this.props.alignRight ? "justify-content-end" : ""),
            (this.props.alignLeft ? "justify-content-start" : ""),
            (this.props.alignCenter ? "justify-content-center" : ""),
            (this.props.justify ? "justify-content-between" : ""));

        let icon;
        if (this.props.icon) {
            icon = (<i style={{ marginLeft: "3px", marginRight: "3px" }} className={this.props.icon}></i>);
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
            classNameImage = " img-circle";
        }

        if (this.props.children) {
            return (<li href={this.props.href} className={className} onClick={this.onClick}>
                {this.props.caption}{this.props.children}
            </li>);
        }

        return (<li tabIndex={-1} style={style} href={this.props.href} className={className} onClick={this.onClick} id={"lstItem_" + this.props.ownerId + "_" + this.props.id}>
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
    showBorder: React.PropTypes.bool
};

AnterosList.defaultProps = {
    showBorder: true
}


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
    warning: React.PropTypes.bool,
    showBorder: React.PropTypes.bool
};

AnterosListItem.defaultProps = {
    active: false,
    caption: undefined,
    disabled: false,
    href: undefined,
    icon: undefined,
    image: undefined,
    showBorder: true
}