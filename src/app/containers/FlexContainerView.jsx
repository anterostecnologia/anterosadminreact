import ReactDOM from 'react-dom'
import React from 'react'
import {AnterosCard, HeaderActions} from "anteros-react-containers";
import { AnterosFlexContainer, AnterosFlexSplitter, AnterosFlexElement} from "../components/AnterosFlexContainer";


export default class FlexContainerView extends React.Component {
    render() {
        return (
            <AnterosCard caption="Layout flex">
                <div id="demo-basic">
                    <LayoutBasicDemo/>
                </div>
                <div id="demo-basic-splitter">
                    <LayoutBasicSplitterDemo/>
                </div>
                <div id="demo-splitter-propagation-2x">
                    <LayoutSplitterPropagationDemo2x/>
                </div>
                <div id="demo-splitter-propagation-3x">
                    <LayoutSplitterPropagationDemo3x/>
                </div>
                <div id="demo-advanced">
                    <LayoutAdvancedDemo/>
                </div>
                <div id="demo-controls">
                    <LayoutControlsDemo/>
                </div>
                <div id="demo-size-aware">
                    <LayoutSizeAwareDemo/>
                </div>
                <div id="demo-storage">
                    <LayoutStorageDemo/>
                </div>
            </AnterosCard>);
    }
}

class LayoutBasicDemo extends React.Component {

  render () {

    return (
      <AnterosFlexContainer orientation="vertical">
        <AnterosFlexElement className="left-pane">
          <div className="pane-content">
            <label>
              Left Pane (fixed)
            </label>
          </div>
        </AnterosFlexElement>

        <AnterosFlexElement className="right-pane">
          <div className="pane-content">
            <label>
              Right Pane (fixed)
            </label>
          </div>
        </AnterosFlexElement>

      </AnterosFlexContainer>
    )
  }
}

class LayoutBasicSplitterDemo extends React.Component {
  render () {
    return (
      <AnterosFlexContainer orientation="vertical">
        <AnterosFlexElement className="left-pane">
          <div className="pane-content">
            <label>
              Left Pane (resizable)
            </label>
          </div>
        </AnterosFlexElement>
        <AnterosFlexSplitter/>
        <AnterosFlexElement className="right-pane"
          minSize="200"
          maxSize="800">
          <div className="pane-content">
            <label>
              Right Pane (resizable)
              <br/>
              <br/>
              minSize = 200px
              <br/>
              maxSize = 800px
            </label>
          </div>
        </AnterosFlexElement>
      </AnterosFlexContainer>
    )
  }
}

class LayoutSplitterPropagationDemo2x extends React.Component {

  render () {

    return (
      <AnterosFlexContainer orientation="vertical">
        <AnterosFlexElement className="left-pane">
          <div className="pane-content">
            <label>
              Left Pane (resizable)
            </label>
          </div>
        </AnterosFlexElement>
        <AnterosFlexSplitter propagate={true}/>
        <AnterosFlexElement className="middle-pane"
          minSize="200"
          maxSize="800">
          <div className="pane-content">
            <label>
              Middle Pane (resizable)
              <br/>
              <br/>
              minSize = 200px
              <br/>
              maxSize = 800px
            </label>
          </div>
        </AnterosFlexElement>
        <AnterosFlexSplitter propagate={true}/>
        <AnterosFlexElement className="right-pane">
          <div className="pane-content">
            <label>
              Right Pane (resizable)
            </label>
          </div>
        </AnterosFlexElement>
      </AnterosFlexContainer>
    )
  }
}

class LayoutSplitterPropagationDemo3x extends React.Component {

  render () {
    return (
      <AnterosFlexContainer orientation="vertical">
        <AnterosFlexElement className="left-pane">
          <div className="pane-content">
            <label>
            Left Pane (resizable)
            </label>
          </div>
        </AnterosFlexElement>
        <AnterosFlexSplitter propagate={true}/>
        <AnterosFlexElement className="middle-pane">
          <div className="pane-content">
            <label>
            Middle Pane 1 (resizable)
            </label>
          </div>
        </AnterosFlexElement>
        <AnterosFlexSplitter propagate={true}/>
        <AnterosFlexElement className="middle-pane">
          <div className="pane-content">
            <label>
            Middle Pane 2 (resizable)
            </label>
          </div>
        </AnterosFlexElement>
        <AnterosFlexSplitter propagate={true}/>
        <AnterosFlexElement className="right-pane">
          <div className="pane-content">
            <label>
            Right Pane (resizable)
            </label>
          </div>
        </AnterosFlexElement>

      </AnterosFlexContainer>
    )
  }
}

class LayoutAdvancedDemo extends React.Component {
  constructor () {
    super()
    this.resizeProps = {
      onStopResize: this.onStopResize.bind(this),
      onResize: this.onResize.bind(this)
    }

    this.resizedElements = []
  }

  onResize (e) {

    if (e.domElement) {

      e.domElement.classList.add('resizing')

      this.resizedElements.push(e.domElement)
    }
  }

  onStopResize (e) {
    this.resizedElements.forEach((element) => {
      element.classList.remove('resizing')
    })
    this.resizedElements = []
  }

  render () {

    return (
      <AnterosFlexContainer orientation="horizontal">
        <AnterosFlexElement className="header_flex" flex={0.1}>
          <div className="pane-content">
            <label>
              Header (fixed)
            </label>
          </div>
        </AnterosFlexElement>
        <AnterosFlexElement>
          <AnterosFlexContainer orientation="vertical">
            <AnterosFlexElement {...this.resizeProps}>
              <AnterosFlexContainer orientation="horizontal">
                <AnterosFlexElement {...this.resizeProps}>
                  <div className="pane-content">
                    <div style={{height: '30%'}}/>
                    <label style={{height: '0%'}}>
                      Left Pane <br/> Top
                      <br/>
                      (splitter propagation)
                    </label>
                  </div>
                </AnterosFlexElement>
                <AnterosFlexSplitter propagate={true} {...this.resizeProps}/>
                <AnterosFlexElement {...this.resizeProps}>
                  <div className="pane-content">
                    <div style={{height: '30%'}}/>
                    <label style={{height: '0%'}}>
                      Left Pane <br/> Middle
                      <br/>
                      (splitter propagation)
                    </label>
                  </div>
                </AnterosFlexElement>
                <AnterosFlexSplitter propagate={true} {...this.resizeProps}/>
                <AnterosFlexElement {...this.resizeProps}>
                  <div className="pane-content">
                    <div style={{height: '30%'}}/>
                    <label style={{height: '0%'}}>
                      Left Pane <br/> Bottom
                      <br/>
                      (splitter propagation)
                    </label>
                  </div>
                </AnterosFlexElement>
              </AnterosFlexContainer>
            </AnterosFlexElement>
            <AnterosFlexSplitter {...this.resizeProps}/>
            <AnterosFlexElement flex={0.5} {...this.resizeProps}>
              <div className="pane-content">
                <label>
                  Middle Pane
                </label>
              </div>
            </AnterosFlexElement>
            <AnterosFlexSplitter{...this.resizeProps}/>
            <AnterosFlexElement {...this.resizeProps}>
              <AnterosFlexContainer orientation="horizontal">
                <AnterosFlexElement {...this.resizeProps}>
                  <div>
                    <AnterosFlexContainer orientation="vertical">
                      <AnterosFlexElement {...this.resizeProps}>
                        <div className="pane-content">
                          <label>
                            Right Pane <br/> Upper-Left
                          </label>
                        </div>
                      </AnterosFlexElement>
                      <AnterosFlexSplitter/>
                      <AnterosFlexElement {...this.resizeProps}>
                        <div className="pane-content">
                          <label>
                            Right Pane <br/> Upper-Right
                          </label>
                        </div>
                      </AnterosFlexElement>
                    </AnterosFlexContainer>
                  </div>
                </AnterosFlexElement>
                <AnterosFlexSplitter {...this.resizeProps}/>
                <AnterosFlexElement {...this.resizeProps}>
                  <div className="pane-content">
                    <label>
                      Right Pane <br/> Bottom
                    </label>
                  </div>
                </AnterosFlexElement>
              </AnterosFlexContainer>
            </AnterosFlexElement>
          </AnterosFlexContainer>
        </AnterosFlexElement>
        <AnterosFlexElement className="footer_flex" flex={0.1}>
          <div className="pane-content">
            <label>
              Footer (fixed)
            </label>
          </div>
        </AnterosFlexElement>
      </AnterosFlexContainer>
    )
  }
}

class ControlledElement extends React.Component {

  constructor () {
    super()
    this.onLockSizeClicked =
      this.onLockSizeClicked.bind(this)

    this.onMinimizeClicked =
      this.onMinimizeClicked.bind(this)

    this.onMaximizeClicked =
      this.onMaximizeClicked.bind(this)

    this.state = {
      size: -1
    }
  }

  onLockSizeClicked () {
    this.props.onLockSize({
      locked: this.props.sizeLocked,
      paneId: this.props.id,
      size: this.getSize()
    })
  }

  onMinimizeClicked () {
    const currentSize = this.getSize()
    const update = (size) => {
      return new Promise((resolve) => {
        this.setState(Object.assign({},
          this.state, {
            size: size < 25 ? 25 : size
          }), () => resolve())
      })
    }

    const done = (from, to) => {
      return from < to
    }

    this.animate (
      currentSize, 25, -8,
      done, update)
  }

  onMaximizeClicked () {
    const currentSize = this.getSize()
    const update = (size) => {
      return new Promise((resolve) => {
        this.setState(Object.assign({},
          this.state, {
            size
          }), () => resolve())
      })
    }

    const done = (from, to) => {
      return from > to
    }

    this.animate (
      currentSize, 400, 8,
      done, update)
  }

  getSize () {
    const domElement = ReactDOM.findDOMNode(this)
    switch (this.props.orientation) {
      case 'horizontal':
        return domElement.offsetHeight

      case 'vertical':
        return domElement.offsetWidth

      default:
        return 0
    }
  }

  animate (start, end, step, done, fn) {
    const stepFn = () => {
      if (!done(start, end)) {
        fn(start += step).then(() => {
          window.requestAnimationFrame(stepFn)
        })
      }
    }

    stepFn ()
  }

  render () {

    const lockStyle = this.props.sizeLocked ?
      { color: '#FF0000' } : {}

    return (
      <AnterosFlexElement size={this.state.size} {...this.props}>
        <div className="pane-content">
          <div className="pane-control">
            <label>
              {this.props.name}  Controls
            </label>
            <button onClick={this.onMaximizeClicked}>
              <label> + </label>
            </button>
            <button onClick={this.onMinimizeClicked}>
              <label> - </label>
            </button>
            <button onClick={this.onLockSizeClicked}>
              <label style={lockStyle} > = </label>
            </button>
          </div>
          <div className="ctrl-pane-content">
            <label>
              {this.props.name}
            </label>
          </div>
        </div>
      </AnterosFlexElement>
    )
  }
}

class LayoutControlsDemo extends React.Component {

  constructor () {
    super()

    this.onLockSize =
      this.onLockSize.bind(this)

    this.state = {
      pane1: {
        onLockSize: this.onLockSize,
        sizeLocked: false,
        name: 'Pane 1',
        direction: 1,
        id: 'pane1',
        minSize: 25
      },
      pane2: {
        onLockSize: this.onLockSize,
        sizeLocked: false,
        name: 'Pane 2',
        direction: [1, -1],
        id: 'pane2',
        minSize: 25
      },
      pane3: {
        onLockSize: this.onLockSize,
        sizeLocked: false,
        name: 'Pane 3',
        direction:-1,
        id: 'pane3',
        minSize: 25
      }
    }
  }

  onLockSize (data) {
    const locked = !this.state[data.paneId].sizeLocked
    this.state[data.paneId].sizeLocked = locked

    if (locked) {
      this.state[data.paneId].minSize = data.size
      this.state[data.paneId].maxSize = data.size
    } else {
      this.state[data.paneId].minSize = 25
      this.state[data.paneId].maxSize = Number.MAX_VALUE
    }

    this.setState(Object.assign({}, this.state))
  }

  render () {
    return (
      <AnterosFlexContainer orientation="vertical">
        <AnterosFlexElement flex={0.4}>
          <div className="pane-content">
            <AnterosFlexContainer orientation="horizontal">
              <ControlledElement {...this.state.pane1}/>
              <AnterosFlexSplitter propagate={true}/>
              <ControlledElement {...this.state.pane2}/>
              <AnterosFlexSplitter propagate={true}/>
              <ControlledElement {...this.state.pane3}/>
            </AnterosFlexContainer>
          </div>
        </AnterosFlexElement>
        <AnterosFlexSplitter/>
        <AnterosFlexElement>
          <div className="pane-content">
            <label>
            App Pane
            </label>
          </div>
        </AnterosFlexElement>
      </AnterosFlexContainer>
    )
  }
}

class SizeAwareElement extends React.Component {

  fitBounds (value, min, max) {
    return Math.max(Math.min(value, max), min)
  }

  rgbGradient (color1, color2, weight) {
    const w1 = weight
    const w2 = 1 - w1
    const rgb = [
      Math.round(color1[0] * w1 + color2[0] * w2),
      Math.round(color1[1] * w1 + color2[1] * w2),
      Math.round(color1[2] * w1 + color2[2] * w2)
    ]

    return rgb.map((c) => this.fitBounds(c, 0, 255))
  }

  render() {
    const { width, height } = this.props.dimensions
    const maxWidth = window.innerWidth - 100
    const maxHeight = 280
    const weight =
      (width * height) /
      (maxWidth * maxHeight)

    const rgb = this.rgbGradient(
      [0, 255, 0],
      [255, 0, 0],
      weight)

    const style = {
      background: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
      color: 'whitesmoke'
    }

    return (
      <div className="pane-content" style={style}>
        <label>
          I am so Size-Aware!
          <br/>
          <br/>
          Width: {width} px
          <br/>
          x
          <br/>
          Height: {height} px
        </label>
      </div>
    )
  }
}

class LayoutSizeAwareDemo extends React.Component {

  render () {
    return (
      <AnterosFlexContainer orientation="vertical">
        <AnterosFlexElement>
        <AnterosFlexContainer orientation="horizontal">
          <AnterosFlexElement
            propagateDimensions={true}
            renderOnResizeRate={50}
            renderOnResize={true}
            flex={0.8}>
            <SizeAwareElement/>
          </AnterosFlexElement>
          <AnterosFlexSplitter/>

          <AnterosFlexElement className="bottom-pane">
            <div className="pane-content">
              <label>
                Bottom Pane
              </label>
            </div>
          </AnterosFlexElement>

        </AnterosFlexContainer>

        </AnterosFlexElement>

      <AnterosFlexSplitter/>

        <AnterosFlexElement className="right-pane" flex={0.2}>
          <div className="pane-content">
            <label>
              Right Pane
            </label>
          </div>
        </AnterosFlexElement>

      </AnterosFlexContainer>
    )
  }
}

class LayoutStorageDemo  extends React.Component {

  constructor (props) {
    super (props)
    this.onResizePane = this.onResizePane.bind(this)
    this.layoutState = this.getLayoutState()
  }

  getLayoutState () {

    const item = window.localStorage.getItem(
      "re-flex-storage-demo")

    if (item) {
      return JSON.parse(item)
    }

    return {
      appPane: {
        flex: 0.8
      },
      rightPane: {
        flex: 0.2
      }
    }
  }

  onResizePane (event) {
    const { name, flex } = event.component.props
    this.layoutState[name].flex = flex
    window.localStorage.setItem(
      "re-flex-storage-demo",
      JSON.stringify(this.layoutState))
  }

  render () {

    return (
      <AnterosFlexContainer orientation="vertical">
        <AnterosFlexElement>
          <AnterosFlexContainer orientation="horizontal">
            <AnterosFlexElement flex={this.layoutState.appPane.flex}
              onResize={this.onResizePane}
              name="appPane">

              <div className="pane-content">
                <label>
                  App Pane
                </label>
              </div>

            </AnterosFlexElement>
            <AnterosFlexSplitter/>
            <AnterosFlexElement className="bottom-pane">
              <div className="pane-content">
                <label>
                  Bottom Pane
                </label>
              </div>
            </AnterosFlexElement>
          </AnterosFlexContainer>
        </AnterosFlexElement>
        <AnterosFlexSplitter/>
        <AnterosFlexElement flex={this.layoutState.rightPane.flex}
          onResize={this.onResizePane}
          className="right-pane"
          name="rightPane">

          <div className="pane-content">
            <label>
              Right Pane
            </label>
          </div>
        </AnterosFlexElement>
      </AnterosFlexContainer>
    )
  }
}


