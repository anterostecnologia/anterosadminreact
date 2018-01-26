import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import React from 'react'
import Measure from 'react-measure'
import lodash from 'lodash'
import Browser from "./Browser";
import "./reflex-styles.css";

export class AnterosFlexContainer extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      flexData: []
    }
    this.events = new AnterosFlexEvents()
    this.onSplitterStartResize = this.onSplitterStartResize.bind(this)
    this.onSplitterStopResize = this.onSplitterStopResize.bind(this)
    this.onSplitterResize = this.onSplitterResize.bind(this)
    this.onElementSize = this.onElementSize.bind(this)
    this.children = []
  }

  setPartialState (partialState) {
    return new Promise((resolve) => {
      this.setState(Object.assign({}, this.state,
        partialState), () => {
        resolve()
      })
    })
  }

  componentDidMount () {
    const flexData = this.computeFlexData()
    this.setPartialState ({
      flexData
    })

    this.events.on(
      'splitter.startResize',
      this.onSplitterStartResize)

    this.events.on(
      'splitter.stopResize',
      this.onSplitterStopResize)

    this.events.on(
      'splitter.resize',
      this.onSplitterResize)

    this.events.on(
      'element.size',
      this.onElementSize)
  }

  componentWillUnmount () {
    this.events.off()
  }

  getValidChildren (props = this.props) {
    return this.toArray(props.children).filter((child) => {
      return !!child
    })
  }

  componentWillReceiveProps (props) {
    const children = this.getValidChildren (props)
    if (children.length !== this.state.flexData.length ||
      this.flexHasChanged(props)) {
      const flexData = this.computeFlexData(children)
      this.setPartialState({
        flexData
      })
    }
  }

  flexHasChanged (props) {
    const nextChildrenFlex =
      this.getValidChildren(props).map((child) => {
        return child.props.flex || 0
      })

    const childrenFlex =
      this.getValidChildren().map((child) => {
        return child.props.flex || 0
      })

    return !childrenFlex.every((flex, idx) => {
      return flex === nextChildrenFlex[idx]
    })
  }

  getSize (element) {
    const ref = element.ref
      ? this.refs[element.ref]
      : element
    const domElement = ReactDOM.findDOMNode(ref)
    switch (this.props.orientation) {
      case 'horizontal':
        return domElement.offsetHeight
      case 'vertical':
        return domElement.offsetWidth
      default:
        return 0
    }
  }

  getOffset (event) {
    const pos = event.changedTouches ?
      event.changedTouches[0] :
      event
    switch (this.props.orientation) {
      case 'horizontal':
        return pos.pageY - this.previousPos
      case 'vertical':
        return pos.pageX - this.previousPos
    }
  }

  onSplitterStartResize (data) {
    const pos = data.event.changedTouches ?
      data.event.changedTouches[0] :
      data.event
    switch (this.props.orientation) {
      case 'horizontal':
        document.body.style.cursor = 'row-resize'
        this.previousPos = pos.pageY
        break
      case 'vertical':
        document.body.style.cursor = 'col-resize'
        this.previousPos = pos.pageX
        break
    }
    const idx = data.splitter.props.index
    this.elements = [
      this.children[idx - 1],
      this.children[idx + 1]
    ]
    this.emitElementsEvent(
      this.elements, 'onStartResize')
  }

  onSplitterResize (data) {
    const idx = data.splitter.props.index
    const offset = this.getOffset(data.event)
    const availableOffset =
      this.computeAvailableOffset(
        idx, offset)

    if (availableOffset) {
      const pos = data.event.changedTouches ?
        data.event.changedTouches[0] :
        data.event

      switch (this.props.orientation) {
        case 'horizontal':
          this.previousPos = pos.pageY
          break
        case 'vertical':
          this.previousPos = pos.pageX
          break
      }

      this.elements = this.dispatchOffset(
        idx, availableOffset)
      this.adjustFlex(this.elements)
      this.setPartialState(this.state).then(() => {
        this.emitElementsEvent(
          this.elements, 'onResize')
      })
    }
  }

  isSplitterElement (element) {
    return element.type === AnterosFlexSplitter
  }

  onSplitterStopResize (data) {
    document.body.style.cursor = 'auto'
    const resizedRefs = this.elements.map((element) => {
      return element.ref
    })

    const elements = this.children.filter((child) => {
      return !this.isSplitterElement(child) &&
        resizedRefs.includes(child.ref)
    })

    this.emitElementsEvent(elements, 'onStopResize')
  }

  onElementSize (data) {
    return new Promise((resolve) => {
      try {
        const idx = data.element.props.index
        const size = this.getSize(this.children[idx])
        const offset = data.size - size
        const dir = data.direction
        const splitterIdx = idx + dir
        const availableOffset =
          this.computeAvailableOffset(
            splitterIdx, dir * offset)

        this.elements = null
        if (availableOffset) {
          this.elements = this.dispatchOffset(
            splitterIdx, availableOffset)
          this.adjustFlex(this.elements)
        }

        this.setPartialState(this.state).then(() => {
          this.emitElementsEvent(
            this.elements, 'onResize')
          resolve()
        })
      } catch (ex) {
        // TODO handle exception ...
      }
    })
  }

  adjustFlex (elements) {
    const diffFlex = elements.reduce((sum, element) => {
      const idx = element.props.index
      const previousFlex = element.props.flex
      const nextFlex = this.state.flexData[idx].flex
      return sum +
        (previousFlex - nextFlex) / elements.length
    }, 0)

    elements.forEach((element) => {
      this.state.flexData[element.props.index].flex
        += diffFlex
    })
  }

  computeAvailableOffset (idx, offset) {
    const stretch = this.computeAvailableStretch(
      idx, offset)
    const shrink = this.computeAvailableShrink(
      idx, offset)
    const availableOffset =
      Math.min(stretch, shrink) *
      Math.sign(offset)
    return availableOffset
  }

  checkPropagate (idx, direction) {
    if (direction > 0) {
      if (idx < this.children.length - 2) {
        const child = this.children[idx + 2]
        const typeCheck = this.isSplitterElement(child)
        return typeCheck && child.props.propagate
      }
    } else {
      if (idx > 2) {
        const child = this.children[idx - 2]
        const typeCheck = this.isSplitterElement(child)
        return typeCheck && child.props.propagate
      }
    }
    return false
  }

  computeAvailableStretch (idx, offset) {
    const childIdx = offset < 0 ? idx + 1 : idx - 1
    const child = this.children[childIdx]
    const size = this.getSize(child)
    const maxSize = child.props.maxSize
    const availableStretch = maxSize - size
    if (availableStretch < Math.abs(offset)) {
      if (this.checkPropagate(idx, -1 * offset)) {
        const nextOffset = Math.sign(offset) *
          (Math.abs(offset) - availableStretch)
        return availableStretch +
          this.computeAvailableStretch(
            offset < 0 ? idx + 2 : idx - 2,
            nextOffset)
      }
    }
    return Math.min(availableStretch, Math.abs(offset))
  }

  computeAvailableShrink (idx, offset) {
    const childIdx = offset > 0 ? idx + 1 : idx -1
    const child = this.children[childIdx]
    const size = this.getSize(child)
    const minSize = Math.max(
      child.props.minSize, 0)
    const availableShrink = size - minSize
    if (availableShrink < Math.abs(offset)) {
      if (this.checkPropagate(idx, offset)) {
        const nextOffset = Math.sign(offset) *
          (Math.abs(offset) - availableShrink)
        return availableShrink +
          this.computeAvailableShrink(
            offset > 0 ? idx + 2 : idx - 2,
            nextOffset)
      }
    }
    return Math.min(availableShrink, Math.abs(offset))
  }

  computePixelFlex () {
    const domElement = ReactDOM.findDOMNode(this)
    switch (this.props.orientation) {
      case 'horizontal':
        return 1.0 / domElement.offsetHeight
      case 'vertical':
        return 1.0 / domElement.offsetWidth
      default :
        return 0
    }
  }

  addOffset (element, offset) {
    const size = this.getSize(element)
    const idx = element.props.index
    const newSize = Math.max(size + offset, 0)
    const currentFlex = this.state.flexData[idx].flex
    const newFlex = (currentFlex > 0)
        ? currentFlex * newSize / size
        : this.computePixelFlex () * newSize
    this.state.flexData[idx].flex =
      (!isFinite(newFlex) || isNaN(newFlex))
        ? 0 : newFlex
  }

  dispatchStretch (idx, offset) {
    const childIdx = offset < 0 ? idx + 1 : idx - 1
    if (childIdx < 0 || childIdx > this.children.length-1) {
      return []
    }

    const child = this.children[childIdx]
    const size = this.getSize(child)
    const newSize = Math.min(
      child.props.maxSize,
      size + Math.abs(offset))

    const dispatchedStretch = newSize - size
    this.addOffset(child, dispatchedStretch)
    if (dispatchedStretch < Math.abs(offset)) {
      const nextIdx = idx - Math.sign(offset) * 2
      const nextOffset = Math.sign(offset) *
        (Math.abs(offset) - dispatchedStretch)
      return [
        child,
        ...this.dispatchStretch(nextIdx, nextOffset)
      ]
    }

    return [child]
  }

  dispatchShrink (idx, offset) {
    const childIdx = offset > 0 ? idx + 1 : idx - 1
    if (childIdx < 0 || childIdx > this.children.length-1) {
      return []
    }
    const child = this.children[childIdx]
    const size = this.getSize(child)
    const newSize = Math.max(
      child.props.minSize,
      size - Math.abs(offset))
    const dispatchedShrink = newSize - size
    this.addOffset(child, dispatchedShrink)
    if (Math.abs(dispatchedShrink) < Math.abs(offset)) {
      const nextIdx = idx + Math.sign(offset) * 2
      const nextOffset = Math.sign(offset) *
        (Math.abs(offset) + dispatchedShrink)
      return [
        child,
        ...this.dispatchShrink(nextIdx, nextOffset)
      ]
    }

    return [child]
  }

  dispatchOffset (idx, offset) {
    return [
      ...this.dispatchStretch(idx, offset),
      ...this.dispatchShrink(idx, offset)
    ]
  }

  emitElementsEvent (elements, event) {
    this.toArray(elements).forEach((element) => {
      if (element.props[event]) {
        const ref = this.refs[element.ref]
        element.props[event]({
          domElement: ReactDOM.findDOMNode(ref),
          component: element
        })
      }
    })
  }

  computeFlexData (children = this.getValidChildren()) {
    const pixelFlex = this.computePixelFlex()
    const computeFreeFlex = (flexData) => {
      return flexData.reduce((sum, entry) => {
        if (!this.isSplitterElement(entry)
          && entry.constrained) {
          return sum - entry.flex
        }
        return sum
      }, 1)
    }

    const computeFreeElements = (flexData) => {
      return flexData.reduce((sum, entry) => {
        if (!this.isSplitterElement(entry)
          && !entry.constrained) {
          return sum + 1
        }
        return sum
      }, 0)
    }

    const flexDataInit = children.map((child) => {
      const props = child.props
      return {
        maxFlex: (props.maxSize || Number.MAX_VALUE) * pixelFlex,
        sizeFlex: (props.size || Number.MAX_VALUE) * pixelFlex,
        minFlex: (props.minSize || 1) * pixelFlex,
        constrained: props.flex !== undefined,
        guid: props.ref || this.guid(),
        flex: props.flex || 0,
        type: child.type
      }
    })

    const computeFlexDataRec = (flexDataIn) => {
      let hasContrain = false
      const freeElements = computeFreeElements(flexDataIn)
      const freeFlex = computeFreeFlex(flexDataIn)
      const flexDataOut = flexDataIn.map((entry) => {
        if (this.isSplitterElement(entry)) {
          return entry
        }

        const proposedFlex = !entry.constrained
          ? freeFlex / freeElements
          : entry.flex

        const constrainedFlex =
          Math.min(entry.sizeFlex,
            Math.min(entry.maxFlex,
              Math.max(entry.minFlex,
                proposedFlex)))

        const constrained =
          (constrainedFlex !== proposedFlex)
        hasContrain = hasContrain || constrained
        return Object.assign({}, entry, {
          flex: constrainedFlex,
          constrained
        })
      })

      return hasContrain
        ? computeFlexDataRec(flexDataOut)
        : flexDataOut
    }

    const flexData = computeFlexDataRec(flexDataInit)
    return flexData.map((entry) => {
      return {
          flex: !this.isSplitterElement(entry)
            ? entry.flex : 0.0,
          guid: entry.guid
       }
    })
  }

  guid (format = 'xxxx-xxxx') {
    let d = new Date().getTime()
    return format.replace(
      /[xy]/g,
      function (c) {
        var r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16)
      })
  }

  toArray (obj) {
    return obj ? (Array.isArray(obj) ? obj : [obj]) : []
  }

  render () {
    const classNames = [
      'reflex-layout',
      'reflex-container',
      this.props.orientation,
      ...this.props.className.split(' '),
    ]

    this.children = React.Children.map(
      this.getValidChildren(), (child, idx) => {

        if (idx > this.state.flexData.length - 1) {
          return <div/>
        }
        const flexData = this.state.flexData[idx]
        const newProps = Object.assign({}, child.props, {
          maxSize: child.props.maxSize || Number.MAX_VALUE,
          orientation: this.props.orientation,
          minSize: child.props.minSize || 1,
          events: this.events,
          flex: flexData.flex,
          ref: flexData.guid,
          index: idx
        })

        return React.cloneElement(child, newProps)
      })

    return (
      <div className={classNames.join(' ')}
        style={this.props.style}>
        { this.children }
      </div>
    )
  }
}


AnterosFlexContainer.propTypes = {
  orientation: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
}

AnterosFlexContainer.defaultProps = {
  orientation: 'horizontal',
  className: '',
  style: {}
}





export class AnterosFlexElement extends React.Component {

  constructor (props) {
    super (props)
    this.onResize = this.onResize.bind(this)
    this.setStateThrottled = lodash.throttle((state) => {
      this.setState(state)
    }, this.props.renderOnResizeRate)

    this.state = {
      dimensions: {
        height: "100%",
        width: "100%"
      }
    }
  }

  async componentWillReceiveProps (props) {

    if (props.size !== this.props.size) {
      const directions = this.toArray(props.direction)
      for (let dir of directions) {
        await this.props.events.emit('element.size', {
          size: props.size,
          direction: dir,
          element: this
        })
      }
    }
  }

  toArray (obj) {
    return obj ? (Array.isArray(obj) ? obj : [obj]) : []
  }

  onResize (rect) {
    if (this.props.renderOnResize) {

      this.setStateThrottled({
        dimensions: {
          height: Math.floor(rect.bounds.height),
          width: Math.floor(rect.bounds.width)
        }
      })
    }
  }

  renderChildren () {
    if (this.props.propagateDimensions) {
      return React.Children.map(this.props.children, (child) => {
        const newProps = Object.assign({},
          child.props, {
            dimensions: this.state.dimensions
          })

        return React.cloneElement(child, newProps)
      })
    }

    return this.props.children
  }

  render () {
    const classNames = [
      'reflex-element',
      ...this.props.className.split(' ')
    ]

    const className = classNames.join(' ')

    const outerStyle = Object.assign({}, {
        WebkitBoxFlex: this.props.flex,
        FlexElement: this.props.flex,
        MozBoxFlex: this.props.flex,
        WebkitFlex: this.props.flex,
        flex: this.props.flex
      }, this.props.style)

    const innerStyle = {
      height: this.state.dimensions.height,
      width: this.state.dimensions.width
    }

    return (
      <Measure bounds onResize={this.onResize}>
        {
          ({ measureRef }) =>
          <div ref={measureRef} className={className} style={outerStyle}>
            <div style={innerStyle}>
              { this.renderChildren() }
            </div>
          </div>
        }
      </Measure>
    )
  }
}

AnterosFlexElement.propTypes = {
  renderOnResizeRate: PropTypes.number,
  propagateDimensions: PropTypes.bool,
  renderOnResize: PropTypes.bool,
  className: PropTypes.string
}

AnterosFlexElement.defaultProps = {
  renderOnResize: Browser.isSafari(),
  propagateDimensions: false,
  renderOnResizeRate: 60,
  className: ''
}




class AnterosFlexEvents {

  constructor () {
    this._events = {}
  }

  on (events, fct) {
    events.split(' ').forEach((event) => {
      this._events[event] = this._events[event]	|| []
      this._events[event].push(fct)
    })

    return this
  }

  off (events, fct) {
    if (events == undefined) {
      this._events = {}
      return
    }
    events.split(' ').forEach((event) => {
      if (event in this._events === false)
        return;

      if (fct) {
        this._events[event].splice(
          this._events[event].indexOf(fct), 1)
      } else {
        this._events[event] = []
      }
    })

    return this
  }

  
  emit (event /* , args... */) {
    if(this._events[event] === undefined)
      return;
    var tmpArray = this._events[event].slice()
    for(var i = 0; i < tmpArray.length; ++i) {
      var result	= tmpArray[i].apply(this,
        Array.prototype.slice.call(arguments, 1))
      if(result !== undefined) {
        return result
      }
    }
    return undefined
  }
}




export class AnterosFlexSplitter extends React.Component {

  constructor (props) {
    super (props)
    this.state = {
      active: false
    }
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseDown = this.onMouseDown.bind(this)
    this.onMouseUp   = this.onMouseUp.bind(this)
    this.document = props.document
  }

  componentDidMount () {
    this.document.addEventListener(
      'touchend',
      this.onMouseUp)

    this.document.addEventListener(
      'mouseup',
      this.onMouseUp)

    this.document.addEventListener(
      'mousemove',
      this.onMouseMove, {
        passive: false
      })

    this.document.addEventListener(
      'touchmove',
      this.onMouseMove, {
        passive: false
      })
  }

  componentWillUnmount () {
    this.document.removeEventListener(
      'mouseup',
      this.onMouseUp)

    this.document.removeEventListener(
      'touchend',
      this.onMouseUp)

    this.document.removeEventListener(
      'mousemove',
      this.onMouseMove)

    this.document.removeEventListener(
      'touchmove',
      this.onMouseMove)
  }

  onMouseMove (event) {
    if (this.state.active) {
      this.props.events.emit(
        'splitter.resize', {
          splitter: this,
          event
        })

      if (this.props.onResize) {

        this.props.onResize({
          domElement: ReactDOM.findDOMNode(this),
          component: this
        })
      }
      event.stopPropagation()
      event.preventDefault()
    }
  }

  onMouseDown (event) {
    this.setState({
      active: true
    })

    if (this.props.onStartResize) {
      if (this.props.onStartResize({
          domElement: ReactDOM.findDOMNode(this),
          component: this
      })) {
        return
      }
    }

    this.props.events.emit('splitter.startResize', {
      splitter: this,
      event
    })
  }

  onMouseUp (event) {
    if (this.state.active) {
      this.setState({
        active: false
      })

      if (this.props.onStopResize) {
        this.props.onStopResize({
          domElement: ReactDOM.findDOMNode(this),
          component: this
        })
      }

      this.props.events.emit('splitter.stopResize', {
        splitter: this,
        event
      })
    }
  }

  render () {
    const classNames = [
      'reflex-splitter',
      ...this.props.className.split(' ')
    ]
    if (Browser.isMobile()) {
      classNames.push('reflex-thin')
    }
    if (this.state.active) {
      classNames.push('active')
    }

    return (
      <div className={classNames.join(' ')}
        onTouchStart={this.onMouseDown}
        onMouseDown={this.onMouseDown}
        style={this.props.style}
        id={this.props.id}>
        {this.props.children}
      </div>
    )
  }
}


AnterosFlexSplitter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onStartResize: PropTypes.func,
  onStopResize: PropTypes.func,
  className: PropTypes.string,
  propagate: PropTypes.bool,
  onResize: PropTypes.func,
  style: PropTypes.object
}

AnterosFlexSplitter.defaultProps = {
  onStartResize: null,
  onStopResize: null,
  propagate: false,
  onResize:null,
  className: '',
  style: {},
  document
}