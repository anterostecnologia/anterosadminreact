import React, { Component } from 'react';
import { AnterosError } from "./AnterosExceptions";


export default class AnterosAccordion extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.id) {
            throw new AnterosError("O accordion deve ter um ID único.");
        }

        let children = [];
        let _this = this;
        let arrChildren = React.Children.toArray(this.props.children);
        arrChildren.forEach(function (child) {
            if (child.type && child.type.name != "AnterosAccordionItem") {
                throw new AnterosError("Apenas componentes do tipo AnterosAccordionItem podem ser usados como filhos de AnterosAccordion.");
            }
            if (!child.props.id) {
                throw new AnterosError("Todos os itens do Accordion devem conter um ID.");
            }
            children.push(React.createElement(AnterosAccordionItem, {
                key: child.props.id,
                disabled: child.props.disabled,
                id: child.props.id,
                success: child.props.success,
                warning: child.props.warning,
                danger: child.props.danger,
                info: child.props.info,
                backgroundColor: (child.props.backgroundColor == undefined ? _this.props.backgroundColor : child.props.backgroundColor),
                color: (child.props.color == undefined ? _this.props.color : child.props.color),
                icon: child.props.icon,
                image: child.props.image,
                caption: child.props.caption,
                ownerId: _this.props.id,
                onSelectAccordionItem: (child.props.onSelectAccordionItem == undefined ? _this.props.onSelectAccordionItem : child.props.onSelectAccordionItem),
            },
                child.props.children
            ));
        });
        return (<div id={this.props.id} className="accordion" role="tablist" aria-multiselectable="true">
            {children}
        </div>);
    }
}


export class AnterosAccordionItem extends Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        event.preventDefault();
        if (this.props.onSelectAccordionItem){
            this.props.onSelectAccordionItem(event, this);
        }
    }

    render() {
        let className = "card card-default";
        if (this.props.success) {
            className = "card card-success";
        }
        if (this.props.info) {
            className = "card card-info";
        }
        if (this.props.warning) {
            className = "card card-warning";
        }
        if (this.props.danger) {
            className = "card card-danger";
        }
        if (this.props.primary) {
            className = "card card-primary";
        }
        let icon;
        if (this.props.icon) {
            icon = (<i className={this.props.icon}></i>);
        }
        let classNameImage;
        if (this.props.imageCircle) {
            classNameImage = "img-circle";
        }

        return (<div className={className} onClick={this.onClick}>
            <div className="card-header justify-content-between" role="tab" id={this.props.ownerId + "_heading" + this.props.id} data-toggle="collapse" data-parent={"#" + this.props.ownerId} href={"#" + this.props.ownerId + "_collapse" + this.props.id} aria-expanded="false" aria-controls={this.props.ownerId + "_collapse" + this.props.id}>
                <a>{icon} <img style={{ marginLeft: "3px", marginRight: "3px" }} className={classNameImage} src={this.props.image} height={this.props.imageHeight} width={this.props.imageWidth} /> {this.props.caption}</a>
                <i className="fa fa-chevron-down" />
            </div>
            <div id={this.props.ownerId + "_collapse" + this.props.id} className="collapse " role="tabpanel" aria-labelledby={this.props.ownerId + "_heading" + this.props.id}>
                <div className="card-block">
                    {this.props.children}
                </div>
            </div>
        </div>);
    }
}