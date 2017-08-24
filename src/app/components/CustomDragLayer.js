import React, { Component, PropTypes } from 'react';
import { DragLayer } from 'react-dnd';
import CardDragPreview from './CardDragPreview';
import snapToGrid from './snapToGrid';


const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100000
};

function getItemStyles(props) {
  const { initialOffset, currentOffset } = props;
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none'
    };
  }

  let { x, y } = currentOffset;

  if (props.snapToGrid) {
    x -= initialOffset.x;
    y -= initialOffset.y;
    [x, y] = snapToGrid(x, y);
    x += initialOffset.x;
    y += initialOffset.y;
  }

  const transform = `translate(${x}px, ${y}px)`;
  return {
    left: x + 'px',
    top: y + 'px'
  };
}

const collect = function (monitor) {  
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  }
};

class CustomDragLayer extends Component {
  constructor(props) {
    super(props);
  }

  renderItem(type, item) {
    switch (type) {
      case 'card':
        return (
          <CardDragPreview card={item} cardComponent={this.props.cardComponent}/>
        );
      default:
        return null;
    }
  }

  render() {
    const { item, itemType, isDragging } = this.props;

    if (!isDragging) {
      return null;
    }

    let style = getItemStyles(this.props, this.layer);
    style = { ...layerStyles, ...style };

    return (
      <div style={style}>
        {this.renderItem(itemType, item)}
      </div>
    );
  }
}


CustomDragLayer.propTypes = {
  item: PropTypes.object,
  itemType: PropTypes.string,
  initialOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }),
  currentOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }),
  isDragging: PropTypes.bool.isRequired,
  snapToGrid: PropTypes.bool.isRequired,
  cardComponent: PropTypes.any.isRequired
};



export default DragLayer(collect)(CustomDragLayer);