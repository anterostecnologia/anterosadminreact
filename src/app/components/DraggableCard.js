import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';



function getStyles(isDragging) {
  return {
    display: isDragging ? 0.5 : 1
  };
}

const cardSource = {
  beginDrag(props, monitor, component) {
    const { item, x, y, dataFieldValue, index } = props;
    const { id, title } = item;
    const { clientWidth, clientHeight } = findDOMNode(component);

    return { id, title, item, x, y, index, clientWidth, clientHeight, dataFieldValue };
  },
  endDrag(props, monitor) {
    document.getElementById(monitor.getItem().id).style.display = 'block';
    props.stopScrolling();
  },
  isDragging(props, monitor) {
    const isDragging = props.item && props.item.id === monitor.getItem().id;
    return isDragging;
  }
};

const OPTIONS = {
  arePropsEqual: function arePropsEqual(props, otherProps) {
    let isEqual = true;
    if (props.item.id === otherProps.item.id &&
        props.x === otherProps.x &&
        props.y === otherProps.y
       ) {
      isEqual = true;
    } else {
      isEqual = false;
    }
    return isEqual;
  }
};

function collectDragSource(connectDragSource, monitor) {
  return {
    connectDragSource: connectDragSource.dragSource(),
    connectDragPreview: connectDragSource.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

class CardComponent extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.connectDragPreview(getEmptyImage(), {
      captureDraggingState: true
    });
  }

  render() {
    const { isDragging, connectDragSource, item, cardComponent } = this.props;
    const DynamicComponent = cardComponent;

    return connectDragSource(
      <div>
        <DynamicComponent style={getStyles(isDragging)} item={item} />
      </div>
    );
  }
}


CardComponent.propTypes = {
    item: PropTypes.object,
    connectDragSource: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number,
    stopScrolling: PropTypes.func,
    cardComponent: PropTypes.any.isRequired
  }


  export default DragSource('card', cardSource, collectDragSource, OPTIONS)(CardComponent);