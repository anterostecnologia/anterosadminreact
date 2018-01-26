import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import lodash from 'lodash';

function getSequencesFromMap(hotKeyMap, hotKeyName) {
    const sequences = hotKeyMap[hotKeyName];
    if (!sequences) {
        return [hotKeyName];
    }

    if (Array.isArray(sequences)) {
        return sequences;
    }

    return [sequences];
}

class FocusTrap extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const {
            component: Component,
            children,
            ...props
        } = this.props;

        return (
            <Component tabIndex="-1" {...props}>
                {children}
            </Component>
        );
    }
}


FocusTrap.propTypes = {
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    component: PropTypes.any,
    children: PropTypes.node
};

FocusTrap.defaultProps = {
    component: 'div'
};

export class AnterosHotKeys extends React.Component {
    constructor(props) {
        super(props);
        this.updateHotKeys = this.updateHotKeys.bind(this);
        this.childHandledSequence = this.childHandledSequence.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.updateMap = this.updateMap.bind(this);
        this.buildMap = this.buildMap.bind(this);
        this.getMap = this.getMap.bind(this);
        this.hotKeyMap = {};
    }

    getChildContext() {
        return {hotKeyParent: this, hotKeyMap: this.hotKeyMap};
    }

    componentDidMount() {
        const Mousetrap = require('mousetrap');
        this.__mousetrap__ = new Mousetrap(this.props.attach || ReactDOM.findDOMNode(this));

        this.updateHotKeys(true);
    }

    componentDidUpdate(prevProps) {
        this.updateHotKeys(false, prevProps);
    }

    componentWillMount(){
        this.updateMap();
    }

    componentWillUnmount() {
        if (this.context.hotKeyParent) {
            this
                .context
                .hotKeyParent
                .childHandledSequence(null);
        }

        if (this.__mousetrap__) {
            this
                .__mousetrap__
                .reset();
        }
    }

    updateMap() {
        const newMap = this.buildMap();
  
        if (!lodash.isEqual(newMap, this.hotKeyMap)) {
          this.hotKeyMap = newMap;
          return true;
        }
  
        return false;
      }
  
    buildMap() {
        const parentMap = this.context.hotKeyMap || {};
        const thisMap = this.props.keyMap || {};
  
        return {...parentMap, ...this.hotKeyMap, ...thisMap};
      }
  
      getMap() {
        return this.hotKeyMap;
      }

    updateHotKeys(force = false, prevProps = {}) {
        const {
            handlers = {}
        } = this.props;
        const {
            handlers: prevHandlers = handlers
        } = prevProps;

        if (!force && !this.updateMap() && lodash.isEqual(handlers, prevHandlers)) {
            return;
        }

        const hotKeyMap = this.getMap();
        const sequenceHandlers = [];
        const mousetrap = this.__mousetrap__;

        Object
            .keys(handlers)
            .forEach((hotKey) => {
                const handler = handlers[hotKey];
                const handlerSequences = getSequencesFromMap(hotKeyMap, hotKey);
                handlerSequences.forEach((sequence) => {
                    let action;

                    const callback = (event, sequence) => {
                        const isFocused = lodash.isBoolean(this.props.focused)
                            ? this.props.focused
                            : this.__isFocused__;

                        if (isFocused && sequence !== this.__lastChildSequence__) {
                            if (this.context.hotKeyParent) {
                                this
                                    .context
                                    .hotKeyParent
                                    .childHandledSequence(sequence);
                            }

                            return handler(event, sequence);
                        }
                    };

                    if (lodash.isObject(sequence)) {
                        action = sequence.action;
                        sequence = sequence.sequence;
                    }

                    sequenceHandlers.push({callback, action, sequence});
                });
            });

        mousetrap.reset();
        sequenceHandlers.forEach((handler) => mousetrap.bind(handler.sequence, handler.callback, handler.action));
    }

    childHandledSequence(sequence = null) {
        this.__lastChildSequence__ = sequence;
        if (this.context.hotKeyParent) {
            this
                .context
                .hotKeyParent
                .childHandledSequence(sequence);
        }
    }

    onFocus() {
        this.__isFocused__ = true;

        if (this.props.onFocus) {
            this
                .props
                .onFocus(...arguments);
        }
    }

    onBlur() {
        this.__isFocused__ = false;

        if (this.props.onBlur) {
            this
                .props
                .onBlur(...arguments);
        }
        if (this.context.hotKeyParent) {
            this
                .context
                .hotKeyParent
                .childHandledSequence(null);
        }
    }

    render() {
        const {
            children,
            keyMap,
            handlers,
            focused,
            attach,
            ...props
        } = this.props;

        return (
            <FocusTrap {...props} onFocus={this.onFocus} onBlur={this.onBlur}>
                {children}
            </FocusTrap>
        );
    }
}

AnterosHotKeys.contextTypes = {
    hotKeyMap: PropTypes.object,
    hotKeyParent: PropTypes.any
}

AnterosHotKeys.childContextTypes = {
    hotKeyMap: PropTypes.object,
    hotKeyParent: PropTypes.any
}

AnterosHotKeys.propTypes = {
    children: PropTypes.node,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    keyMap: PropTypes.object,
    handlers: PropTypes.object,
    focused: PropTypes.bool,
    attach: PropTypes.any
}

