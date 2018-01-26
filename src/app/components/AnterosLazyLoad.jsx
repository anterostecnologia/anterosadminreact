import React, {Children, Component} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import {add, remove} from 'eventlistener';
import lodash from 'lodash';

import "./AnterosLazyLoad.css";

export class AnterosLazyLoad extends Component {
    constructor(props) {
        super(props);

        this.lazyLoadHandler = this
            .lazyLoadHandler
            .bind(this);

        if (props.throttle > 0) {
            if (props.debounce) {
                this.lazyLoadHandler = lodash.debounce(this.lazyLoadHandler, props.throttle);
            } else {
                this.lazyLoadHandler = lodash.throttle(this.lazyLoadHandler, props.throttle);
            }
        }

        this.state = {
            visible: false
        };
    }

    componentDidMount() {
        this._mounted = true;
        const eventNode = this.getEventNode();

        this.lazyLoadHandler();

        if (this.lazyLoadHandler.flush) {
            this
                .lazyLoadHandler
                .flush();
        }

        add(window, 'resize', this.lazyLoadHandler);
        add(eventNode, 'scroll', this.lazyLoadHandler);
    }

    componentWillReceiveProps() {
        if (!this.state.visible) {
            this.lazyLoadHandler();
        }
    }

    shouldComponentUpdate(_nextProps, nextState) {
        return nextState.visible;
    }

    componentWillUnmount() {
        this._mounted = false;
        if (this.lazyLoadHandler.cancel) {
            this
                .lazyLoadHandler
                .cancel();
        }

        this.detachListeners();
    }

    getEventNode() {
        return scrollParent(findDOMNode(this));
    }

    getOffset() {
        const {
            offset,
            offsetVertical,
            offsetHorizontal,
            offsetTop,
            offsetBottom,
            offsetLeft,
            offsetRight,
            threshold
        } = this.props;

        const _offsetAll = threshold || offset;
        const _offsetVertical = offsetVertical || _offsetAll;
        const _offsetHorizontal = offsetHorizontal || _offsetAll;

        return {
            top: offsetTop || _offsetVertical,
            bottom: offsetBottom || _offsetVertical,
            left: offsetLeft || _offsetHorizontal,
            right: offsetRight || _offsetHorizontal
        };
    }

    lazyLoadHandler() {
        if (!this._mounted) {
            return;
        }
        const offset = this.getOffset();
        const node = findDOMNode(this);
        const eventNode = this.getEventNode();

        if (inViewport(node, eventNode, offset)) {
            const {onContentVisible} = this.props;

            this.setState({
                visible: true
            }, () => {
                if (onContentVisible) {
                    onContentVisible();
                }
            });
            this.detachListeners();
        }
    }

    detachListeners() {
        const eventNode = this.getEventNode();

        remove(window, 'resize', this.lazyLoadHandler);
        remove(eventNode, 'scroll', this.lazyLoadHandler);
    }

    render() {
        const {children, className, height, width} = this.props;
        const {visible} = this.state;

        const elStyles = {
            height,
            width
        };
        const elClasses = ('LazyLoad' + (visible
            ? ' is-visible'
            : '') + (className
            ? ` ${className}`
            : ''));

        return React.createElement(this.props.elementType, {
            className: elClasses,
            style: elStyles
        }, visible && Children.only(children));
    }
}

AnterosLazyLoad.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    debounce: PropTypes.bool,
    elementType: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    offset: PropTypes.number,
    offsetBottom: PropTypes.number,
    offsetHorizontal: PropTypes.number,
    offsetLeft: PropTypes.number,
    offsetRight: PropTypes.number,
    offsetTop: PropTypes.number,
    offsetVertical: PropTypes.number,
    threshold: PropTypes.number,
    throttle: PropTypes.number,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onContentVisible: PropTypes.func
};

AnterosLazyLoad.defaultProps = {
    elementType: 'div',
    debounce: true,
    offset: 0,
    offsetBottom: 0,
    offsetHorizontal: 0,
    offsetLeft: 0,
    offsetRight: 0,
    offsetTop: 0,
    offsetVertical: 0,
    throttle: 250
};

function getElementPosition(element) {
    const rect = element.getBoundingClientRect();

    return {
        top: rect.top + window.pageYOffset,
        left: rect.left + window.pageXOffset
    };
}

const isHidden = (element) => element.offsetParent === null;

function inViewport(element, container, customOffset) {
    if (isHidden(element)) {
        return false;
    }

    let top;
    let bottom;
    let left;
    let right;

    if (typeof container === 'undefined' || container === window) {
        top = window.pageYOffset;
        left = window.pageXOffset;
        bottom = top + window.innerHeight;
        right = left + window.innerWidth;
    } else {
        const containerPosition = getElementPosition(container);

        top = containerPosition.top;
        left = containerPosition.left;
        bottom = top + container.offsetHeight;
        right = left + container.offsetWidth;
    }

    const elementPosition = getElementPosition(element);

    return (top <= elementPosition.top + element.offsetHeight + customOffset.top && bottom >= elementPosition.top - customOffset.bottom && left <= elementPosition.left + element.offsetWidth + customOffset.left && right >= elementPosition.left - customOffset.right);
}


const style = (element, prop) =>
  typeof getComputedStyle !== 'undefined'
    ? getComputedStyle(element, null).getPropertyValue(prop)
    : element.style[prop];

const overflow = (element) =>
  style(element, 'overflow') + style(element, 'overflow-y') + style(element, 'overflow-x');

const scrollParent = (element) => {
  if (!(element instanceof HTMLElement)) {
    return window;
  }

  let parent = element;

  while (parent) {
    if (parent === document.body || parent === document.documentElement) {
      break;
    }

    if (!parent.parentNode) {
      break;
    }

    if (/(scroll|auto)/.test(overflow(parent))) {
      return parent;
    }

    parent = parent.parentNode;
  }

  return window;
};
