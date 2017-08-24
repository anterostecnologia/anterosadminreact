import React, { Component, PropTypes } from 'react';
import { DragDropContext, DragLayer, DropTarget, DragSource } from 'react-dnd';
import { findDOMNode } from 'react-dom';
import HTML5Backend, { getEmptyImage } from 'react-dnd-html5-backend';
import { AnterosRemoteDatasource, AnterosLocalDatasource } from 'anteros-react';
import './temp.css';

import CardsContainer from './CardsContainer';
import CustomDragLayer from './CustomDragLayer';


class AnterosKanbanBoard extends Component {
    constructor(props) {
        super(props);
        this.moveCard = this.moveCard.bind(this);
        this.scrollRight = this.scrollRight.bind(this);
        this.scrollLeft = this.scrollLeft.bind(this);
        this.stopScrolling = this.stopScrolling.bind(this);
        this.startScrolling = this.startScrolling.bind(this);
        this.state = { isScrolling: false };
        this.lists = [];
        this.getCardsByColumnValue = this.getCardsByColumnValue.bind(this);
    }

    startScrolling(direction) {
        switch (direction) {
            case 'toLeft':
                this.setState({ isScrolling: true }, this.scrollLeft());
                break;
            case 'toRight':
                this.setState({ isScrolling: true }, this.scrollRight());
                break;
            default:
                break;
        }
    }

    scrollRight() {
        function scroll() {
            document.getElementsByTagName('kanban')[0].scrollLeft += 10;
        }
        this.scrollInterval = setInterval(scroll, 10);
    }

    scrollLeft() {
        function scroll() {
            document.getElementsByTagName('kanban')[0].scrollLeft -= 10;
        }
        this.scrollInterval = setInterval(scroll, 10);
    }

    stopScrolling() {
        this.setState({ isScrolling: false }, clearInterval(this.scrollInterval));
    }

    moveObjectAtIndex(array, sourceIndex, destIndex) {
        var placeholder = {};
        var objectToMove = array.splice(sourceIndex, 1, placeholder)[0];
        array.splice(destIndex, 0, objectToMove);
        array.splice(array.indexOf(placeholder), 1);
    }

    moveCard(item, from, to, positionFrom, positionTo) {
        console.log(item);
        console.log(from);
        console.log(to);
        console.log(positionFrom);
        console.log(positionTo);
        if ((this.props.dataSource instanceof AnterosRemoteDatasource) || (this.props.dataSource instanceof AnterosLocalDatasource)) {
            if (positionTo==-1){
                positionTo = this.props.dataSource.getTotalRecords()-1;
            }
            this.moveObjectAtIndex(this.props.dataSource.getData(),positionFrom,positionTo);
            this.props.dataSource.gotoRecordByData(item);
            this.props.dataSource.edit();
            this.props.dataSource.setFieldByName(this.props.dataFieldColumn,to);            
            this.props.dataSource.post();
            
        } else {
            if (positionTo==-1){
                positionTo = this.props.dataSource.length-1;
            }
            this.moveObjectAtIndex(this.props.dataSource,positionFrom,positionTo);
            item[this.props.dataFieldColumn] = to;
        }
       
       this.setState({ isScrolling: false }, clearInterval(this.scrollInterval));
    }

    getCardsByColumnValue(value) {
        let _this = this;
        let data = [];
        if ((this.props.dataSource instanceof AnterosRemoteDatasource) || (this.props.dataSource instanceof AnterosLocalDatasource)) {
            data = this.props.dataSource.getData();
        } else {
            data = this.props.dataSource;
        }
        let cards = [];
        let index = 0;
        data.forEach(function (item) {
            if (value == item[_this.props.dataFieldColumn])
                cards.push({index:index,item:item});
            index++;
        });
        return cards;
    }

    render() {
        let _this = this;
        let i = 0;
        const children = React.Children.map(this.props.children,
            (child, index) => React.cloneElement(child, {
                moveCard: _this.moveCard,
                startScrolling: _this.startScrolling,
                stopScrolling: _this.stopScrolling,
                isScrolling: _this.state.isScrolling,
                index: index,
                cardComponent: _this.props.cardComponent,
                height: _this.props.columnHeight,
                cards: _this.getCardsByColumnValue(child.props.dataFieldValue)
            })
        );
        return (
            <div className="kanban" style={{height:this.props.height}}>
                <CustomDragLayer snapToGrid={false} cardComponent={this.props.cardComponent}/>
                {children}
            </div>
        );
    }
}


AnterosKanbanBoard.propTypes = {
    id: React.PropTypes.string,
    dataSource: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.instanceOf(AnterosLocalDatasource),
        React.PropTypes.instanceOf(AnterosRemoteDatasource)
    ]),
    dataFieldColumn: React.PropTypes.string,
    cardComponent: React.PropTypes.any.isRequired
}


export class AnterosKanbanColumn extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<CardsContainer
            title={this.props.title}
            cards={this.props.cards}
            dataFieldValue={this.props.dataFieldValue}
            moveCard={this.props.moveCard}
            startScrolling={this.props.startScrolling}
            stopScrolling={this.props.stopScrolling}
            isScrolling={this.props.isScrolling}
            height={this.props.height}
            renderTitle={this.props.renderTitle}
            backgroundColorTitle={this.props.backgroundColorTitle}
            fontColorTitle={this.props.fontColorTitle}
            centerTitle={this.props.centerTitle}
            cardComponent={this.props.cardComponent}
            width={this.props.width}
            opacity={this.props.opacity}
            x={this.props.index}
        />);
    }
}

AnterosKanbanColumn.propTypes = {
    dataFieldValue: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    renderTitle: React.PropTypes.func,
    backgroundColorTitle: React.PropTypes.string,
    opacity: React.PropTypes.string,
    fontColorTitle: React.PropTypes.string,
    centerTitle: React.PropTypes.bool,
    width: React.PropTypes.string
}


export default DragDropContext(HTML5Backend)(AnterosKanbanBoard);