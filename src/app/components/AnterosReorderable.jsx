var React = require('react');
var findDOMNode = require('react-dom').findDOMNode;
var ReactDrag = require('react-drag');
var SIBLING_TYPES = {
  NONE: 0,
  NEXT: 1,
  PREVIOUS: 2
};


export default class AnterosReorderable extends React.Component {

  constructor(props) {
    super(props);
    this.onDragStop = this.onDragStop.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);

    var res = this.indexChildren(props.children);
    this.state = {
      order: res.ids,
      activeItem: 'node-3',
      startPosition: {
        x: '121px',
        y: '185px'
      },
      reorderableMap: res.map
    };
  }

  getClosestReorderable(el) {
    while (el) {
      if (el.className &&
        el.className.indexOf('react-reorderable-item') >= 0) {
        return el;
      }
      el = el.parentNode;
    }
    return null;
  }

  getControlPosition(e) {
    var position = (e.touches && e.touches[0]) || e;
    return {
      clientX: position.clientX,
      clientY: position.clientY
    };
  }

  getHorizontalSiblingType(e, node) {
    var rect = node.getBoundingClientRect();
    var nodeTop = rect.top;
    var nodeLeft = rect.left;
    var width = rect.width;
    var height = rect.height;
    var position = this.getControlPosition(e);

    if (position.clientY < nodeTop || position.clientY > nodeTop + height) {
      return SIBLING_TYPES.NONE;
    }
    if (position.clientX > nodeLeft && position.clientX < nodeLeft + 1 / 2 * width) {
      return SIBLING_TYPES.NEXT;
    }
    if (position.clientX > nodeLeft + 1 / 2 * width && position.clientX < nodeLeft + width) {
      return SIBLING_TYPES.PREVIOUS;
    }
    return SIBLING_TYPES.NONE;
  }

  getVerticalSiblingType(e, node) {
    var rect = node.getBoundingClientRect();
    var nodeTop = rect.top;
    var nodeLeft = rect.left;
    var width = rect.width;
    var height = rect.height;
    var position = this.getControlPosition(e);

    if (position.clientX < nodeLeft || position.clientX > nodeLeft + width) {
      return SIBLING_TYPES.NONE;
    }
    if (position.clientY > nodeTop && position.clientY < nodeTop + 1 / 2 * height) {
      return SIBLING_TYPES.NEXT;
    }
    if (position.clientY > nodeTop + 1 / 2 * height && position.clientY < nodeTop + height) {
      return SIBLING_TYPES.PREVIOUS;
    }
    return SIBLING_TYPES.NONE;
  }

  getSiblingNode(e, node, mode) {
    var p = node.parentNode;
    var siblings = p.children;
    var current;
    var done = false;
    var result = {};
    mode = mode || 'list';
    for (var i = 0; i < siblings.length && !done; i += 1) {
      current = siblings[i];
      if (current.getAttribute('data-reorderable-key') !==
        node.getAttribute('data-reorderable-key')) {
        var siblingType;
        if (mode === 'list') {
          siblingType = this.getVerticalSiblingType(e, current);
        } else {
          siblingType = this.getHorizontalSiblingType(e, current);
        }
        if (siblingType !== SIBLING_TYPES.NONE) {
          result.node = current;
          result.type = siblingType;
          return result;
        }
      }
    }
    return result;
  }

  indexChildren(children) {
    var prefix = 'node-';
    var map = {};
    var ids = [];
    var id;
    for (var i = 0; i < children.length; i += 1) {
      var id = prefix + (i + 1);
      ids.push(id);
      let newChild = React.createElement('div', {
        className: 'react-reorderable-item',
        key: id,
        'data-reorderable-key': id
      }, children[i]);
      map[id] = newChild;
    }
    return { map: map, ids: ids };
  }

  is(elem, selector) {
    var matches = elem.parentNode.querySelectorAll(selector);
    for (var i = 0; i < matches.length; i += 1) {
      if (elem === matches[i]) {
        return true;
      }
    }
    return false;
  }

  getNodesOrder(current, sibling, order) {
    var currentKey = current.getAttribute('data-reorderable-key');
    var currentPos = order.indexOf(currentKey);
    order.splice(currentPos, 1);
    var siblingKey = sibling.node.getAttribute('data-reorderable-key');
    var siblingKeyPos = order.indexOf(siblingKey);
    if (sibling.type === SIBLING_TYPES.PREVIOUS) {
      order.splice(siblingKeyPos + 1, 0, currentKey);
    } else {
      order.splice(siblingKeyPos, 0, currentKey);
    }
    return order;
  }


  componentWillMount() {
    window.addEventListener('mouseup', this._mouseupHandler = function () {
      this.setState({
        mouseDownPosition: null
      });
    }.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('mouseup', this._mouseupHandler);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.children) {
      var res = indexChildren(nextProps.children);
      this.setState({
        order: res.ids,
        reorderableMap: res.map
      });
    }
  }
  onDragStop(e) {
    this.setState({
      activeItem: null,
      startPosition: null
    });
    this.props.onDrop(this.state.order.map(function (id) {
      return this.state.reorderableMap[id].props.children;
    }, this));
  }
  onDrag(e) {
    var handle = findDOMNode(this.refs.handle);
    var sibling = this.getSiblingNode(e, handle, this.props.mode);

    if (sibling && sibling.node) {
      var oldOrder = this.state.order.slice();
      var order = this.getNodesOrder(this.getClosestReorderable(handle), sibling, this.state.order);
      var changed = false;
      for (var i = 0; i < order.length && !changed; i += 1) {
        if (order[i] !== oldOrder[i]) {
          changed = true;
        }
      }
      if (changed) {
        this.props.onChange(this.state.order.map(function (id) {
          return this.state.reorderableMap[id].props.children;
        }, this));
      }
      this.setState({
        order: order
      });
    }
  }
  onMouseDown(e) {
    var position;

    if (!this.props.handle || is(e.target, this.props.handle)) {
      position = this.getControlPosition(e);

      this.setState({
        mouseDownPosition: {
          x: position.clientX,
          y: position.clientY
        }
      });
    }
  }
  onTouchStart(e) {
    e.preventDefault();
    this.onMouseDown(e);
  }
  onMouseMove(e) {
    var position;

    if (!this.state.activeItem) {
      var initial = this.state.mouseDownPosition;
      if (!initial) {
        return;
      }

      position = this.getControlPosition(e);

      if (Math.abs(position.clientX - initial.x) >= 5 ||
        Math.abs(position.clientY - initial.y) >= 5) {
        var node = this.getClosestReorderable(e.target);
        var nativeEvent = e.nativeEvent;
        var id = node.getAttribute('data-reorderable-key');
        this.props.onDragStart(this.state.reorderableMap[id]);
        this.activeItem = node;
        var parentNode = node.parentNode && node.parentNode.parentNode;
        this.setState({
          mouseDownPosition: null,
          activeItem: id,
          startPosition: {
            x: node.offsetLeft - (parentNode && parentNode.scrollLeft || 0),
            y: node.offsetTop - (parentNode && parentNode.scrollTop || 0)
          }
        }, function () {
          this.refs.handle.handleDragStart(nativeEvent);
        }.bind(this));
      }
    }
  }
  render() {
    var children = this.state.order.map(function (id) {
      var className = (this.state.activeItem) ? 'noselect ' : '';
      if (this.state.activeItem === id) {
        className += 'react-reorderable-item-active';
      }
      var oldClass = this.state.reorderableMap[id].props.className || '';
      if (oldClass) {
        className = oldClass + ' ' + className;
      }
      return React.cloneElement(
        this.state.reorderableMap[id], {
          key: 'reaorderable-' + id,
          ref: 'active',
          onMouseDown: this.onMouseDown,
          onMouseMove: this.onMouseMove,
          onTouchStart: this.onTouchStart,
          onTouchMove: this.onMouseMove,
          className: className
        });
    }, this);
    var handle;
    if (this.state.activeItem) {
      var pos = this.state.startPosition;
      var className = 'react-reorderable-handle';
      var oldClass = this.state.reorderableMap[this.state.activeItem].props.className || '';
      if (oldClass) {
        className = oldClass + ' ' + className;
      }
      handle = React.cloneElement(
        this.state.reorderableMap[this.state.activeItem], {
          className: className
        });
      handle =
        React.createElement(ReactDrag, {
          onStop: this.onDragStop,
          onDrag: this.onDrag,
          ref: 'handle',
          start: { x: pos.x, y: pos.y }
        }, handle);
    }
    return React.createElement('div', {
      ref: 'wrapper'
    }, children, handle);
  }
}

AnterosReorderable.propTypes = {
  onDragStart: React.PropTypes.func,
  onDrag: React.PropTypes.func,
  onDrop: React.PropTypes.func,
  onChange: React.PropTypes.func
};

AnterosReorderable.defaultProps = {
  onDragStart: function () {},
  onDrag: function () {},
  onDrop: function () {},
  onChange: function () {}
};


