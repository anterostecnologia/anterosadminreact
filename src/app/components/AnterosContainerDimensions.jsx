import React, { Children, Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import elementResizeDetectorMaker from 'element-resize-detector'


export class AnterosContainerDimensions extends Component { 

  static getDomNodeDimensions(node) {
    const { top, right, bottom, left, width, height } = node.getBoundingClientRect()
    return { top, right, bottom, left, width, height }
  }

  constructor() {
    super()
    this.state = {
      initiated: false
    }
    this.onResize = this.onResize.bind(this)
  }

  componentDidMount() {
    this.parentNode = ReactDOM.findDOMNode(this).parentNode
    this.elementResizeDetector = elementResizeDetectorMaker({
      strategy: 'scroll',
      callOnAdd: false
    })
    this.elementResizeDetector.listenTo(this.parentNode, this.onResize)
    this.onResize()
  }

  componentWillUnmount() {
    this.elementResizeDetector.uninstall(this.parentNode)
  }

  onResize() {
    const clientRect = ContainerDimensions.getDomNodeDimensions(this.parentNode)
    this.setState({
      initiated: true,
      ...clientRect
    })
  }

  render() {
    if (!this.state.initiated) {
      return <div />
    }
    if (typeof this.props.children === 'function') {
      const renderedChildren = this.props.children(this.state)
      return renderedChildren && Children.only(renderedChildren)
    }
    return Children.only(React.cloneElement(this.props.children, this.state))
  }
}


AnterosContainerDimensions.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
  }