import React, { Component } from 'react';
import { render } from 'react-dom';
import AnterosNestable from '../components/AnterosNestable';
import {AnterosCard} from "anteros-react";

const styles = {
    position: "relative",
    padding: "10px 15px",
    fontSize: "20px",
    border: "1px solid #f9fafa",
    background: "#f9fafa",
    cursor: "pointer"
};
const handlerStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "10px",
    height: "100%",
    background: "steelblue",
    cursor: "pointer"
};

export default class NestableView extends Component {
    constructor(props) {
        super(props);
        this.collapse = this.collapse.bind(this);
        this.isCollapsed = this.isCollapsed.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    collapse(collapseCase) {
        if (this.refNestable) {
            switch (collapseCase) {
                case 0:
                    this.refNestable.collapse('NONE');
                    break;
                case 1:
                    this.refNestable.collapse('ALL');
                    break;
                case 2:
                    this.refNestable.collapse([1]);
                    break;
            }
        }
    };

    isCollapsed() {
        const form = document.forms[0] || null;
        return form != undefined && form != null && form.elements["collapsed"].checked;
    };

    renderItem({ item, collapseIcon, handler }) {
        return (
            <div style={styles}>
                {handler}
                {collapseIcon}
                {item.text}
            </div>
        );
    };

    render() {
        const items = [
            {
                id: 0,
                text: 'Martin'
            },
            {
                id: 1,
                text: 'Jackson',
                children: [
                    {
                        id: 2,
                        text: 'David'
                    }
                ]
            },
            {
                id: 3,
                text: 'Robert',
                children: [
                    {
                        id: 4,
                        text: 'Ema'
                    }
                ]
            }
        ];

        const handler = <span style={handlerStyles} />;

        return (
            <div>
                <AnterosCard caption="Nestable without handler">
                    <AnterosNestable
                        group="0"
                        items={items}
                        collapsed={this.isCollapsed()}
                        renderItem={this.renderItem}
                        ref={el => this.refNestable = el}
                    />
                </AnterosCard>
                <AnterosCard caption="Nestable with handler">
                    <AnterosNestable
                        group="1"
                        items={items}
                        renderItem={this.renderItem}
                        handler={handler}
                    />
                </AnterosCard>
            </div>
        );
    }
}
