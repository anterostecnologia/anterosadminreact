import {createElement, Component} from 'react';
import {findDOMNode} from 'react-dom';

let passiveEventSupport;

const handlersMap = {};
const enabledInstances = {};

const touchEvents = ['touchstart', 'touchmove'];
export const IGNORE_CLASS_NAME = 'ignore-react-onclickoutside';

/**
 * This function generates the HOC function that you'll use
 * in order to impart onOutsideClick listening to an
 * arbitrary component. It gets called at the end of the
 * bootstrapping code to yield an instance of the
 * onClickOutsideHOC function defined inside setupHOC().
 */
export default function onClickOutside(WrappedComponent, config) {
    return class onClickOutside extends Component {
        static displayName = `OnClickOutside(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

        static defaultProps = {
            eventTypes: [
                'mousedown', 'touchstart'
            ],
            excludeScrollbar: (config && config.excludeScrollbar) || false,
            outsideClickIgnoreClass: IGNORE_CLASS_NAME,
            preventDefault: false,
            stopPropagation: false
        };

        static getClass = () => (WrappedComponent.getClass
            ? WrappedComponent.getClass()
            : WrappedComponent);

        constructor(props) {
            super(props);
            this._uid = uid();
        }

        /**
     * Access the WrappedComponent's instance.
     */
        getInstance() {
            if (!WrappedComponent.prototype.isReactComponent) {
                return this;
            }
            const ref = this.instanceRef;
            return ref.getInstance
                ? ref.getInstance()
                : ref;
        }

        __outsideClickHandler = event => {
            if (typeof this.__clickOutsideHandlerProp === 'function') {
                this.__clickOutsideHandlerProp(event);
                return;
            }

            const instance = this.getInstance();

            if (typeof instance.props.handleClickOutside === 'function') {
                instance
                    .props
                    .handleClickOutside(event);
                return;
            }

            if (typeof instance.handleClickOutside === 'function') {
                instance.handleClickOutside(event);
                return;
            }

            throw new Error('WrappedComponent lacks a handleClickOutside(event) function for processing outsi' +
                    'de click events.',);
        };

        /**
     * Add click listeners to the current document,
     * linked to this component's state.
     */
        componentDidMount() {
            // If we are in an environment without a DOM such as shallow rendering or
            // snapshots then we exit early to prevent any unhandled errors being thrown.
            if (typeof document === 'undefined' || !document.createElement) {
                return;
            }

            const instance = this.getInstance();

            if (config && typeof config.handleClickOutside === 'function') {
                this.__clickOutsideHandlerProp = config.handleClickOutside(instance);
                if (typeof this.__clickOutsideHandlerProp !== 'function') {
                    throw new Error('WrappedComponent lacks a function for processing outside click events specified ' +
                            'by the handleClickOutside config option.',);
                }
            }

            this.componentNode = findDOMNode(this.getInstance());
            this.enableOnClickOutside();
        }

        componentDidUpdate() {
            this.componentNode = findDOMNode(this.getInstance());
        }

        /**
     * Remove all document's event listeners for this component
     */
        componentWillUnmount() {
            this.disableOnClickOutside();
        }

        /**
     * Can be called to explicitly enable event listening
     * for clicks and touches outside of this element.
     */
        enableOnClickOutside = () => {
            if (typeof document === 'undefined' || enabledInstances[this._uid]) {
                return;
            }

            if (typeof passiveEventSupport === 'undefined') {
                passiveEventSupport = testPassiveEventSupport();
            }

            enabledInstances[this._uid] = true;

            let events = this.props.eventTypes;
            if (!events.forEach) {
                events = [events];
            }

            handlersMap[this._uid] = event => {
                if (this.props.disableOnClickOutside) 
                    return;
                if (this.componentNode === null) 
                    return;
                
                if (this.props.preventDefault) {
                    event.preventDefault();
                }

                if (this.props.stopPropagation) {
                    event.stopPropagation();
                }

                if (this.props.excludeScrollbar && DOMHelpers.clickedScrollbar(event)) 
                    return;
                
                const current = event.target;

                if (DOMHelpers.findHighest(current, this.componentNode, this.props.outsideClickIgnoreClass) !== document) {
                    return;
                }

                this.__outsideClickHandler(event);
            };

            events.forEach(eventName => {
                let handlerOptions = null;
                const isTouchEvent = touchEvents.indexOf(eventName) !== -1;

                if (isTouchEvent && passiveEventSupport) {
                    handlerOptions = {
                        passive: !this.props.preventDefault
                    };
                }

                document.addEventListener(eventName, handlersMap[this._uid], handlerOptions);
            });
        };

        /**
     * Can be called to explicitly disable event listening
     * for clicks and touches outside of this element.
     */
        disableOnClickOutside = () => {
            delete enabledInstances[this._uid];
            const fn = handlersMap[this._uid];

            if (fn && typeof document !== 'undefined') {
                let events = this.props.eventTypes;
                if (!events.forEach) {
                    events = [events];
                }
                events.forEach(eventName => document.removeEventListener(eventName, fn));
                delete handlersMap[this._uid];
            }
        };

        getRef = ref => (this.instanceRef = ref);

        /**
     * Pass-through render
     */
        render() {
            // eslint-disable-next-line no-unused-vars
            let {
                excludeScrollbar,
                ...props
            } = this.props;

            if (WrappedComponent.prototype.isReactComponent) {
                props.ref = this.getRef;
            } else {
                props.wrappedRef = this.getRef;
            }

            props.disableOnClickOutside = this.disableOnClickOutside;
            props.enableOnClickOutside = this.enableOnClickOutside;

            return createElement(WrappedComponent, props);
        }
    };
}

function autoInc(seed = 0) {
    return () => ++seed;
}

/**
 * Check whether some DOM node is our Component's node.
 */
function isNodeFound(current, componentNode, ignoreClass) {
    if (current === componentNode) {
        return true;
    }
    // SVG <use/> elements do not technically reside in the rendered DOM, so they do
    // not have classList directly, but they offer a link to their corresponding
    // element, which can have classList. This extra check is for that case. See:
    // http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement Discussion:
    // https://github.com/Pomax/react-onclickoutside/pull/17
    if (current.correspondingElement) {
        return current
            .correspondingElement
            .classList
            .contains(ignoreClass);
    }
    return current
        .classList
        .contains(ignoreClass);
}

/**
   * Try to find our node in a hierarchy of nodes, returning the document
   * node as highest node if our node is not found in the path up.
   */
function findHighest(current, componentNode, ignoreClass) {
    if (current === componentNode) {
        return true;
    }

    // If source=local then this event came from 'somewhere' inside and should be
    // ignored. We could handle this with a layered approach, too, but that requires
    // going back to thinking in terms of Dom node nesting, running counter to
    // React's 'you shouldn't care about the DOM' philosophy.
    while (current.parentNode) {
        if (isNodeFound(current, componentNode, ignoreClass)) {
            return true;
        }
        current = current.parentNode;
    }
    return current;
}

/**
   * Check if the browser scrollbar was clicked
   */
function clickedScrollbar(evt) {
    return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
}

// ideally will get replaced with external dep when
// rafrex/detect-passive-events#4 and rafrex/detect-passive-events#5 get merged
// in
const testPassiveEventSupport = () => {
    if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {
        return;
    }

    let passive = false;

    const options = Object.defineProperty({}, 'passive', {
        get() {
            passive = true;
        }
    });

    const noop = () => {};

    window.addEventListener('testPassiveEventSupport', noop, options);
    window.removeEventListener('testPassiveEventSupport', noop, options);

    return passive;
};
