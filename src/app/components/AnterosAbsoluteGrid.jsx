'use strict';

import React, {PropTypes, Component} from 'react';
import lodash from 'lodash';

export class AnterosAbsoluteGrid extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onResize = lodash.debounce(this.onResize, 150);
    this.getDOMWidth = this
      .getDOMWidth
      .bind(this);
    this.onResize = this
      .onResize
      .bind(this);
    this.dragManager = new DragManager(this.props.onMove, this.props.onDragStart, this.props.onDragEnd, this.props.onDragMove, this.props.keyProp);
    this.state = {
      layoutWidth: 0
    };
  }

  render() {
    if (!this.state.layoutWidth || !this.props.items.length) {
      return <div ref={node => this.container = node}></div>;
    }

    let filteredIndex = 0;
    let sortedIndex = {};

    lodash
      .sortBy(this.props.items, this.props.sortProp)
      .forEach(item => {
        if (!item[this.props.filterProp]) {
          const key = item[this.props.keyProp];
          sortedIndex[key] = filteredIndex;
          filteredIndex++;
        }
      });

    const itemsLength = this.props.items.length;
    const gridItems = this
      .props
      .items
      .map(item => {
        const key = item[this.props.keyProp];
        const index = sortedIndex[key];
        return (<AnterosAbsoluteItem
          item={item}
          index={index}
          key={key}
          itemRenderer={this.props.itemRenderer}
          itemsLength={itemsLength}
          animation={this.props.animation}
          itemWidth={this.props.itemWidth}
          itemHeight={this.props.itemHeight}
          layoutWidth={this.state.layoutWidth}
          verticalMargin={this.props.verticalMargin}
          zoom={this.props.zoom}
          keyProp={this.props.keyProp}
          filterProp={this.props.filterProp}
          dragEnabled={this.props.dragEnabled}
          dragManager={this.dragManager}/>);
      });

    const options = {
      itemWidth: this.props.itemWidth,
      itemHeight: this.props.itemHeight,
      verticalMargin: this.props.verticalMargin,
      zoom: this.props.zoom
    };
    const layout = new LayoutManager(options, this.state.layoutWidth);
    const gridStyle = {
      position: 'relative',
      display: 'block',
      height: layout.getTotalHeight(filteredIndex)
    };

    return (
      <div
        style={gridStyle}
        className="absoluteGrid"
        ref={node => this.container = node}>
        {gridItems}
      </div>
    );
  }

  componentDidMount() {
    //If responsive, listen for resize
    if (this.props.responsive) {
      window.addEventListener('resize', this.onResize);
    }
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(this.getDOMWidth);
    } else {
      setTimeout(this.getDOMWidth, 66);
    }
  }

  getDOMWidth() {
    const width = this.container && this.container.clientWidth;

    if (this.state.layoutWidth !== width) {
      this.setState({layoutWidth: width});
    }

  }

}

AnterosAbsoluteGrid.defaultProps = {
  items: [],
  keyProp: 'key',
  filterProp: 'filtered',
  sortProp: 'sort',
  itemWidth: 128,
  itemHeight: 128,
  verticalMargin: -1,
  responsive: false,
  dragEnabled: false,
  animation: 'transform 300ms ease',
  zoom: 1,
  onMove: () => {},
  onDragStart: () => {},
  onDragMove: () => {},
  onDragEnd: () => {}
}

AnterosAbsoluteGrid.propTypes = {
  itemRenderer: PropTypes.object,
  items: PropTypes
    .arrayOf(PropTypes.object)
    .isRequired,
  itemWidth: PropTypes.number,
  itemHeight: PropTypes.number,
  verticalMargin: PropTypes.number,
  zoom: PropTypes.number,
  responsive: PropTypes.bool,
  dragEnabled: PropTypes.bool,
  keyProp: PropTypes.string,
  sortProp: PropTypes.string,
  filterProp: PropTypes.string,
  animation: PropTypes.string,
  onMove: PropTypes.func,
  onDragStart: PropTypes.func,
  onDragMove: PropTypes.func,
  onDragEnd: PropTypes.func
}

class AnterosAbsoluteItem extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.onDrag = this
      .onDrag
      .bind(this);
    this.updateDrag = this
      .updateDrag
      .bind(this);
    this.getStyle = this
      .getStyle
      .bind(this);
    this.state = {}

  }

  updateDrag(x, y) {
    let pauseAnimation = false;
    if (!this.props.dragManager.dragItem) {
      pauseAnimation = true;
      setTimeout(() => {
        this.setState({pauseAnimation: false});
      }, 20);
    }
    this.setState({dragX: x, dragY: y, pauseAnimation: pauseAnimation});
  }

  onDrag(e) {
    if (this.props.dragManager) {
      this
        .props
        .dragManager
        .startDrag(e, this.domNode, this.props.item, this.updateDrag.bind(this));
    }
  }

  getStyle() {
    const options = {
      itemWidth: this.props.itemWidth,
      itemHeight: this.props.itemHeight,
      verticalMargin: this.props.verticalMargin,
      zoom: this.props.zoom
    };
    const layout = new LayoutManager(options, this.props.layoutWidth);
    const style = layout.getStyle(this.props.index, this.props.animation, this.props.item[this.props.filterProp]);
    if (this.props.dragManager.dragItem && this.props.dragManager.dragItem[this.props.keyProp] === this.props.item[this.props.keyProp]) {
      const dragStyle = this
        .props
        .dragManager
        .getStyle(this.state.dragX, this.state.dragY);
      return {
        ...style,
        ...dragStyle
      };
    } else if (this.state && this.state.pauseAnimation) {
      const pauseAnimationStyle = {
        ...style
      };
      pauseAnimationStyle.WebkitTransition = 'none';
      pauseAnimationStyle.MozTransition = 'none';
      pauseAnimationStyle.msTransition = 'none';
      pauseAnimationStyle.transition = 'none';
      return pauseAnimationStyle;
    }
    return style;
  }

  componentDidMount() {
    if (this.props.dragEnabled) {
      this
        .domNode
        .addEventListener('mousedown', this.onDrag);
      this
        .domNode
        .addEventListener('touchstart', this.onDrag);
      this
        .domNode
        .setAttribute('data-key', this.props.item[this.props.keyProp]);
    }
  }

  componentWillUnmount() {
    if (this.props.dragEnabled) {
      this
        .props
        .dragManager
        .endDrag();
      this
        .domNode
        .removeEventListener('mousedown', this.onDrag);
      this
        .domNode
        .removeEventListener('touchstart', this.onDrag);
    }
  }

  render() {
    const DisplayObject = this.props.itemRenderer;
    return (
      <div ref={node => this.domNode = node} style={this.getStyle()}>
        <DisplayObject
          {...this.props}
          item={this.props.item}
          index={this.props.index}
          itemsLength={this.props.itemsLength}/>
      </div>
    );
  }
}

AnterosAbsoluteItem.propTypes = {
  item: PropTypes.object,
  style: PropTypes.object,
  index: PropTypes.number,
  dragEnabled: PropTypes.bool,
  dragManager: PropTypes.object,
  itemsLength: PropTypes.number
}

class DragManager {

  dragItem;
  initialMouseX;
  initialMouseY;
  initialEventX;
  initialEventY;
  dragX;
  dragY;
  keyProp;

  constructor(moveFn, dragStartFn, dragEndFn, dragMoveFn, keyProp) {
    this.dragMove = this
      .dragMove
      .bind(this);
    this.endDrag = this
      .endDrag
      .bind(this);
    this.moveFn = moveFn;
    this.dragStartFn = dragStartFn;
    this.dragEndFn = dragEndFn;
    this.dragMoveFn = dragMoveFn;
    this.keyProp = keyProp;
  }

  dragMove(e) {
    const tolerance = 3;
    const isTouch = e.touches && e.touches.length;
    const pageX = isTouch
      ? e.touches[0].pageX
      : e.pageX;
    const pageY = isTouch
      ? e.touches[0].pageY
      : e.pageY;

    const xMovement = Math.abs(this.initialEventX - pageX);
    const yMovement = Math.abs(this.initialEventY - pageY);

    if (xMovement > tolerance || yMovement > tolerance) {
      const clientX = isTouch
        ? e.touches[0].clientX
        : e.clientX;
      const clientY = isTouch
        ? e.touches[0].clientY
        : e.clientY;

      this.dragX = clientX - this.initialMouseX;
      this.dragY = clientY - this.initialMouseY;

      this.update(this.dragX, this.dragY);

      let targetKey;
      let targetElement = document.elementFromPoint(clientX, clientY);
      while (targetElement.parentNode) {
        if (targetElement.getAttribute('data-key')) {
          targetKey = targetElement.getAttribute('data-key');
          break;
        }
        targetElement = targetElement.parentNode;
      }

      if (targetKey && targetKey !== this.dragItem[this.keyProp]) {
        this.moveFn(this.dragItem[this.keyProp], targetKey);
      }

      e.stopPropagation();
      e.preventDefault();
    }

    this.dragMoveFn(e);
  }

  endDrag() {

    document.removeEventListener('mousemove', this.dragMove);
    document.removeEventListener('mouseup', this.endDrag);

    this.dragItem = null;
    if (this.update && typeof this.update === 'function') {
      this.update(null, null);
    }
    this.update = null;

    this.dragEndFn();
  }

  startDrag(e, domNode, item, fnUpdate) {
    const isTouch = e.targetTouches && e.targetTouches.length === 1;
    if (e.button === 0 || isTouch) {
      const rect = domNode.getBoundingClientRect();

      this.update = fnUpdate;
      this.dragItem = item;
      const pageX = isTouch
        ? e.targetTouches[0].pageX
        : e.pageX;
      const pageY = isTouch
        ? e.targetTouches[0].pageY
        : e.pageY;

      this.initialMouseX = Math.round(pageX - (rect.left + window.pageXOffset));
      this.initialMouseY = Math.round(pageY - (rect.top + window.pageYOffset));
      this.initialEventX = pageX;
      this.initialEventY = pageY;

      document.addEventListener('mousemove', this.dragMove);
      document.addEventListener('touchmove', this.dragMove);
      document.addEventListener('mouseup', this.endDrag);
      document.addEventListener('touchend', this.endDrag);
      document.addEventListener('touchcancel', this.endDrag);

      //This is needed to stop text selection in most browsers
      e.preventDefault();
    }

    this.dragStartFn(e);
  }

  getStyle(x, y) {
    const dragStyle = {};
    const transform = `translate3d(${x}px, ${y}px, 0)`;
    //Makes positioning simpler if we're fixed
    dragStyle.position = 'fixed';
    dragStyle.zIndex = 1000;
    //Required for Fixed positioning
    dragStyle.left = 0;
    dragStyle.top = 0;
    dragStyle.WebkitTransform = transform;
    dragStyle.MozTransform = transform;
    dragStyle.msTransform = transform;
    dragStyle.transform = transform;

    //Turn off animations for this item
    dragStyle.WebkitTransition = 'none';
    dragStyle.MozTransition = 'none';
    dragStyle.msTransition = 'none';
    dragStyle.transition = 'none';

    //Allows mouseover to work
    dragStyle.pointerEvents = 'none';

    return dragStyle;
  }
}

class LayoutManager {

  columns;
  horizontalMargin;
  verticalMargin;
  layoutWidth;
  itemHeight;
  itemWidth;
  rowHeight;

  constructor(options, width) {
    this.update(options, width);
  }

  update(options, width) {

    //Calculates layout
    this.layoutWidth = width;
    this.zoom = options.zoom;
    this.itemWidth = Math.round(options.itemWidth * this.zoom);
    this.itemHeight = Math.round(options.itemHeight * this.zoom);
    this.columns = Math.floor(this.layoutWidth / this.itemWidth);
    this.horizontalMargin = (this.columns === 1)
      ? 0
      : Math.round(this.layoutWidth - (this.columns * this.itemWidth)) / (this.columns - 1);
    this.verticalMargin = (options.verticalMargin === -1)
      ? this.horizontalMargin
      : options.verticalMargin;
    this.rowHeight = this.itemHeight + this.verticalMargin;
  }

  getTotalHeight(filteredTotal) {
    return (Math.ceil(filteredTotal / this.columns) * this.rowHeight) - this.verticalMargin;
  }

  getRow(index) {
    return Math.floor(index / this.columns);
  }

  getColumn(index) {
    return index - (this.getRow(index) * this.columns);
  }

  getPosition(index) {
    const col = this.getColumn(index);
    const row = this.getRow(index);
    const margin = this.horizontalMargin;
    const width = this.itemWidth;

    return {
      x: Math.round((col * width) + (col * margin)),
      y: Math.round((this.itemHeight + this.verticalMargin) * row)
    };
  }

  getTransform(index) {
    const position = this.getPosition(index);
    return 'translate3d(' + position.x + 'px, ' + position.y + 'px, 0)';
  }

  getStyle(index, animation, isFiltered) {

    const transform = this.getTransform(index);
    const style = {
      width: this.itemWidth + 'px',
      height: this.itemHeight + 'px',
      WebkitTransform: transform,
      MozTransform: transform,
      msTransform: transform,
      transform: transform,
      position: 'absolute',
      boxSizing: 'border-box',
      display: isFiltered
        ? 'none'
        : 'block'
    };

    if (animation) {
      style.WebkitTransition = '-webkit-' + animation;
      style.MozTransition = '-moz-' + animation;
      style.msTransition = 'ms-' + animation;
      style.transition = animation;
    }

    return style;
  }
}
