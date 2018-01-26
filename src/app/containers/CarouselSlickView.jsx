import ReactDOM from 'react-dom'
import React, {Component} from 'react'
import {AnterosCard, HeaderActions, AnterosPanel} from "anteros-react-containers";
import {AnterosCarouselSlick} from "../components/AnterosCarouselSlick";
import {AnterosButton} from "anteros-react-buttons";

export default class FlexContainerView extends React.Component {
  render() {
    return (
      <AnterosCard caption="Layout flex" withScroll={false}>
        <div className="slick-content">
          <AdaptiveHeight/>
          <AutoPlay/>
          <CenterMode/>
          <CustomPaging/>
          <CustomSlide/>
          <DynamicSlides/>
          <Fade/>
          <FocusOnSelect/>
          <LazyLoad/>
          <MultipleItems/>
          <PauseOnHover/>
          <PreviousNextMethods/>
          <Responsive/>
          <Rtl/>
          <SimpleSlider/>
          <SingleSlider/>
          <SlickGoTo/>
          <SlideChangeHooks/>
          <SwipeToSlide/>
          <UnevenSetsFinite/>
          <UnevenSetsInfinite/>
          <VariableWidth/>
          <VerticalMode/>
          <VerticalSwipeToSlide/>
        </div>
      </AnterosCard>
    );
  }
}

class AdaptiveHeight extends Component {
  render() {
    var settings = {
      className: '',
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    return (
      <div>
        <h2>Adaptive height</h2>
        <AnterosCarouselSlick {...settings}>
          <div>
            <AnterosPanel info className="slide-demo">
              <h3>1</h3>
            </AnterosPanel>
          </div>
          <div>
            <AnterosPanel info className="slide-demo">
              <h3>2</h3>
            </AnterosPanel>
            <p>Hello</p>
          </div>
          <div>
            <AnterosPanel info className="slide-demo">
              <h3>3</h3>
            </AnterosPanel>
            <p>See ....</p>
            <p>Height is adaptive</p>
          </div>
          <div>
            <AnterosPanel info className="slide-demo">
              <h3>4</h3>
            </AnterosPanel>
          </div>
          <div>
            <AnterosPanel info className="slide-demo">
              <h3>5</h3>
            </AnterosPanel>
          </div>
          <div>
            <AnterosPanel info className="slide-demo">
              <h3>6</h3>
            </AnterosPanel>
          </div>
        </AnterosCarouselSlick>
      </div>
    );
  }
}

class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000

    };
    return (
      <div>
        <h2>Auto Play</h2>
        <AnterosCarouselSlick {...settings}>
          <div>
            <Slide index={1}/>
          </div>
          <div>
            <Slide index={2}/>
          </div>
          <div>
            <Slide index={3}/>
          </div>
          <div>
            <Slide index={4}/>
          </div>
          <div>
            <Slide index={5}/>
          </div>
          <div>
            <Slide index={6}/>
          </div>
        </AnterosCarouselSlick>
      </div>
    );
  }
}

class CenterMode extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div>
        <h2>Center Mode</h2>
        <AnterosCarouselSlick {...settings}>
          <div>
            <Slide index={1}/>
          </div>
          <div>
            <Slide index={2}/>
          </div>
          <div>
            <Slide index={3}/>
          </div>
          <div>
            <Slide index={4}/>
          </div>
          <div>
            <Slide index={5}/>
          </div>
          <div>
            <Slide index={6}/>
          </div>
          <div>
            <Slide index={7}/>
          </div>
          <div>
            <Slide index={8}/>
          </div>
          <div>
            <Slide index={9}/>
          </div>
        </AnterosCarouselSlick>
      </div>
    );
  }
}

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{
      ...style,
      display: 'block',
      background: 'red'
    }}
      onClick={onClick}></div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{
      ...style,
      display: 'block',
      background: 'green'
    }}
      onClick={onClick}></div>
  );
}

class CustomPaging extends Component {
  render() {
    const settings = {
      customPaging: function (i) {
        if (i == 0) {
          return <a><img style={{maxWidth: "100%"}} src={require("../assets/img/1.jpg")}/></a>
        }
        if (i == 1) {
          return <a><img style={{maxWidth: "100%"}} src={require("../assets/img/2.jpg")}/></a>
        }
        if (i == 2) {
          return <a><img style={{maxWidth: "100%"}} src={require("../assets/img/3.jpg")}/></a>
        }
        if (i == 3) {
          return <a><img style={{maxWidth: "100%"}} src={require("../assets/img/4.jpg")}/></a>
        }
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Custom Paging</h2>
        <AnterosCarouselSlick {...settings}>
          <div>
            <div><img src={require("../assets/img/1.jpg")}/></div>
          </div>
          <div>
            <div><img src={require("../assets/img/2.jpg")}/></div>
          </div>
          <div>
            <div><img src={require("../assets/img/3.jpg")}/></div>
          </div>
          <div>
            <div><img src={require("../assets/img/4.jpg")}/></div>
          </div>
        </AnterosCarouselSlick>
      </div>
    )
  }
}

class CustomSlide extends Component {
  render() {
    const {
      index,
      ...props
    } = this.props
    return (
      <div {...props}>
        <h3>{index}</h3>
      </div>
    )
  }
}

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Custom Slides</h2>
        <AnterosCarouselSlick {...settings}>
          <CustomSlide index={1}/>
          <CustomSlide index={2}/>
          <CustomSlide index={3}/>
          <CustomSlide index={4}/>
          <CustomSlide index={5}/>
          <CustomSlide index={6}/>
        </AnterosCarouselSlick>
      </div>
    );
  }
}

class DynamicSlides extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slides: [
        1,
        2,
        3,
        4,
        5,
        6
      ]
    }
    this.click = this
      .click
      .bind(this)
  }
  click() {
    const {slides} = this.state
    this.setState({
      slides: slides.length === 6
        ? [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ]
        : [
          1,
          2,
          3,
          4,
          5,
          6
        ]
    })
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <h2>Dynamic slides</h2>
        <button className='button' onClick={this.click}>Click to change slide count</button>
        <AnterosCarouselSlick {...settings}>
          {this
            .state
            .slides
            .map(function (slide) {
              return <div key={slide}>
                <AnterosPanel info className="slide-demo">
                  <h3>{slide}</h3>
                </AnterosPanel>
              </div>
            })}
        </AnterosCarouselSlick>
      </div>
    );
  }
}

class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Fade</h2>
        <AnterosCarouselSlick {...settings}>
          <div><img src={require("../assets/img/7.jpg")}/></div>
          <div><img src={require("../assets/img/6.jpg")}/></div>
          <div><img src={require("../assets/img/5.jpg")}/></div>
          <div><img src={require("../assets/img/4.jpg")}/></div>
        </AnterosCarouselSlick>
      </div>
    );
  }
}

class FocusOnSelect extends Component {
  render() {
    const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500
    };
    return (
      <div>
        <h2>FocusOnSelect</h2>
        <div>Click on any slide to select and make it current slide</div>
        <AnterosCarouselSlick {...settings}>
          <div>
            <Slide index={1}/>
          </div>
          <div>
            <Slide index={2}/>
          </div>
          <div>
            <Slide index={3}/>
          </div>
          <div>
            <Slide index={4}/>
          </div>
          <div>
            <Slide index={5}/>
          </div>
          <div>
            <Slide index={6}/>
          </div>
        </AnterosCarouselSlick>
      </div>
    );
  }
}

class LazyLoad extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2
    };
    return (
      <div>
        <h2>
          Lazy Load</h2>
        <AnterosCarouselSlick {...settings}>
          <div><img src={require("../assets/img/7.jpg")}/></div>
          <div><img src={require("../assets/img/6.jpg")}/></div>
          <div><img src={require("../assets/img/5.jpg")}/></div>
          <div><img src={require("../assets/img/4.jpg")}/></div>
        </AnterosCarouselSlick>
      </div>
    );
  }
}

class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <h2>
          Multiple items
        </h2>
        <AnterosCarouselSlick {...settings}>
          <div>
            <Slide index={1}/>
          </div>
          <div>
            <Slide index={2}/>
          </div>
          <div>
            <Slide index={3}/>
          </div>
          <div>
            <Slide index={4}/>
          </div>
          <div>
            <Slide index={5}/>
          </div>
          <div>
            <Slide index={6}/>
          </div>
          <div>
            <Slide index={7}/>
          </div>
          <div>
            <Slide index={8}/>
          </div>
          <div>
            <Slide index={9}/>
          </div>
        </AnterosCarouselSlick>
      </div>
    );
  }
}

class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div>
        <h2>Pause On Hover</h2>
        <AnterosCarouselSlick {...settings}>
          <div>
            <Slide index={1}/>
          </div>
          <div>
            <Slide index={2}/>
          </div>
          <div>
            <Slide index={3}/>
          </div>
          <div>
            <Slide index={4}/>
          </div>
          <div>
            <Slide index={5}/>
          </div>
          <div>
            <Slide index={6}/>
          </div>
        </AnterosCarouselSlick>
      </div>
    );
  }
}

class PreviousNextMethods extends Component {
  constructor(props) {
    super(props)
    this.next = this
      .next
      .bind(this)
    this.previous = this
      .previous
      .bind(this)
  }
  next() {
    this
      .slider
      .slickNext()
  }
  previous() {
    this
      .slider
      .slickPrev()
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2>Previous and Next methods</h2>
        <AnterosCarouselSlick ref={c => this.slider = c} {...settings}>
          <div>
            <Slide index={1}/>
          </div>
          <div>
            <Slide index={2}/>
          </div>
          <div>
            <Slide index={3}/>
          </div>
          <div>
            <Slide index={4}/>
          </div>
          <div>
            <Slide index={5}/>
          </div>
          <div>
            <Slide index={6}/>
          </div>
        </AnterosCarouselSlick>
        <div style={{
          textAlign: 'right'
        }}>
          <AnterosButton primary onButtonClick={this.previous} caption="Previous"/>
          <AnterosButton primary onButtonClick={this.next} caption="Next"/>
        </div>
      </div>
    );
  }
}

class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2>
          Responsive
        </h2>
        <AnterosCarouselSlick {...settings}>
          <div>
            <Slide index={1}/>
          </div>
          <div>
            <Slide index={2}/>
          </div>
          <div>
            <Slide index={3}/>
          </div>
          <div>
            <Slide index={4}/>
          </div>
          <div>
            <Slide index={5}/>
          </div>
          <div>
            <Slide index={6}/>
          </div>
          <div>
            <Slide index={7}/>
          </div>
          <div>
            <Slide index={8}/>
          </div>
        </AnterosCarouselSlick>
      </div>
    );
  }
};

class Rtl extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      rtl: true
    };
    return (
      <div>
        <h2>Right to Left</h2>
        <AnterosCarouselSlick {...settings}>
          <div>
            <Slide index={1}/>
          </div>
          <div>
            <Slide index={2}/>
          </div>
          <div>
            <Slide index={3}/>
          </div>
          <div>
            <Slide index={4}/>
          </div>
          <div>
            <Slide index={5}/>
          </div>
          <div>
            <Slide index={6}/>
          </div>
        </AnterosCarouselSlick>
      </div>
    );
  }
}

class SingleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slick-content">
        <h2>
          Single Item</h2>
        <AnterosCarouselSlick {...settings}>
          <div>
            <Slide index={1}/>
          </div>
          <div>
            <Slide index={2}/>
          </div>
          <div>
            <Slide index={3}/>
          </div>
          <div>
            <Slide index={4}/>
          </div>
          <div>
            <Slide index={5}/>
          </div>
          <div>
            <Slide index={6}/>
          </div>
        </AnterosCarouselSlick>
      </div>
    );
  }
}
class SlickGoTo extends Component {
  constructor(props) {
    super(props)
    this.changeHandler = this
      .changeHandler
      .bind(this)
  }
  changeHandler(e) {
    this
      .refs
      .slider
      .slickGoTo(e.target.value)
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      ...this.props
    };
    return (
      <div>
        <h2>Slick Go To</h2>
        <input
          onChange={this.changeHandler}
          defaultValue={0}
          type='range'
          min={0}
          max={3}/>
        <AnterosCarouselSlick ref='slider' {...settings}>
          <div><img src={require("../assets/img/7.jpg")}/></div>
          <div><img src={require("../assets/img/6.jpg")}/></div>
          <div><img src={require("../assets/img/5.jpg")}/></div>
          <div><img src={require("../assets/img/4.jpg")}/></div>
        </AnterosCarouselSlick>
      </div>
    );
  }
}

class SlideChangeHooks extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: function (currentSlide, nextSlide) {
        console.log('before change', currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log('after change', currentSlide);
      }
    };
    return (
      <div>
        <h2>beforeChange and afterChange hooks</h2>
        <AnterosCarouselSlick {...settings}>
          <div>
            <Slide index={1}/>
          </div>
          <div>
            <Slide index={2}/>
          </div>
          <div>
            <Slide index={3}/>
          </div>
          <div>
            <Slide index={4}/>
          </div>
          <div>
            <Slide index={5}/>
          </div>
          <div>
            <Slide index={6}/>
          </div>
        </AnterosCarouselSlick>
      </div>
    );
  }
}

class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: 'center',
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function (index) {
        console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
      }
    };
    return (
      <div>
        <h2>Swipe To Slide</h2>
        <AnterosCarouselSlick {...settings}>
          <div>
            <Slide index={1}/>
          </div>
          <div>
            <Slide index={2}/>
          </div>
          <div>
            <Slide index={3}/>
          </div>
          <div>
            <Slide index={4}/>
          </div>
          <div>
            <Slide index={5}/>
          </div>
          <div>
            <Slide index={6}/>
          </div>
        </AnterosCarouselSlick>
      </div>
    )
  }
}

class UnevenSetsFinite extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToScroll: 4,
      slidesToShow: 4
    };
    return (
      <div>
        <h2>Uneven sets (finite)</h2>
        <AnterosCarouselSlick {...settings}>
          <div>
            <Slide index={1}/>
          </div>
          <div>
            <Slide index={2}/>
          </div>
          <div>
            <Slide index={3}/>
          </div>
          <div>
            <Slide index={4}/>
          </div>
          <div>
            <Slide index={5}/>
          </div>
          <div>
            <Slide index={6}/>
          </div>
        </AnterosCarouselSlick>
      </div>
    );
  }
}

class UnevenSetsInfinite extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 4,
      slidesToShow: 4
    };
    return (
      <div>
        <h2>Uneven sets (infinite)</h2>
        <AnterosCarouselSlick {...settings}>
          <div>
            <Slide index={1}/>
          </div>
          <div>
            <Slide index={2}/>
          </div>
          <div>
            <Slide index={3}/>
          </div>
          <div>
            <Slide index={4}/>
          </div>
          <div>
            <Slide index={5}/>
          </div>
          <div>
            <Slide index={6}/>
          </div>
        </AnterosCarouselSlick>
      </div>
    );
  }
}

class VariableWidth extends Component {
  render() {
    const settings = {
      className: 'slider variable-width',
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true
    };
    return (
      <div>
        <h2>Variable width</h2>
        <AnterosCarouselSlick {...settings}>
          <div style={{
            width: 100
          }}>
            <Slide index={100}/>
          </div>
          <div style={{
            width: 200
          }}>
            <Slide index={200}/>
          </div>
          <div style={{
            width: 75
          }}>
            <Slide index={75}/>
          </div>
          <div style={{
            width: 300
          }}>
            <Slide index={300}/>
          </div>
          <div style={{
            width: 225
          }}>
            <Slide index={225}/>
          </div>
          <div style={{
            width: 175
          }}>
            <Slide index={175}/>
          </div>
        </AnterosCarouselSlick>
      </div>
    );
  }
}

class VerticalMode extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      beforeChange: function (currentSlide, nextSlide) {
        console.log('before change', currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log('after change', currentSlide);
      }
    };
    return (
      <div>
        <h2>Vertical Mode</h2>
        <AnterosCarouselSlick {...settings}>
          <div>
            <Slide index={1}/>
          </div>
          <div>
            <Slide index={2}/>
          </div>
          <div>
            <Slide index={3}/>
          </div>
          <div>
            <Slide index={4}/>
          </div>
          <div>
            <Slide index={5}/>
          </div>
          <div>
            <Slide index={6}/>
          </div>
        </AnterosCarouselSlick>
      </div>
    );
  }
}

class VerticalSwipeToSlide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      beforeChange: function (currentSlide, nextSlide) {
        console.log('before change', currentSlide, nextSlide);
      },
      afterChange: function (currentSlide) {
        console.log('after change', currentSlide);
      }
    };
    return (
      <div>
        <h2>Vertical Mode with Swipe To Slide</h2>
        <AnterosCarouselSlick {...settings}>
          <div>
            <Slide index={1}/>
          </div>
          <div>
            <Slide index={2}/>
          </div>
          <div>
            <Slide index={3}/>
          </div>
          <div>
            <Slide index={4}/>
          </div>
          <div>
            <Slide index={5}/>
          </div>
          <div>
            <Slide index={6}/>
          </div>
        </AnterosCarouselSlick>
      </div>
    );
  }
}

class Slide extends React.Component {

  render() {
    return <div>
      <AnterosPanel info className="slide-demo">
        <h3>{this.props.index}</h3>
      </AnterosPanel>
    </div>;
  }
}