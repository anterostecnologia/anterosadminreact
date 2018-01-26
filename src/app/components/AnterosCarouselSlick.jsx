'use strict';

import React, {Component} from 'react';
import assign from 'object-assign';
import json2mq from 'json2mq';
import canUseDOM from 'can-use-dom';
import {AnterosUtils} from "anteros-react-core";
import createReactClass from 'create-react-class';
const enquire = canUseDOM && require('enquire.js');
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import "./slick.css";
import "./slick-theme.css";

export class AnterosCarouselSlick extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      breakpoint: null
    };
    this._responsiveMediaHandlers = [];
    this.innerSliderRefHandler = this
      .innerSliderRefHandler
      .bind(this);
    this.media = this
      .media
      .bind(this);
    this.slickPrev = this
      .slickPrev
      .bind(this);
    this.slickNext = this
      .slickNext
      .bind(this);
    this.slickGoTo = this
      .slickGoTo
      .bind(this);
  }
  innerSliderRefHandler(ref) {
    this.innerSlider = ref;
  }
  media(query, handler) {
    enquire.register(query, handler);
    this
      ._responsiveMediaHandlers
      .push({query, handler});
  }
  componentWillMount() {
    if (this.props.responsive) {
      var breakpoints = this
        .props
        .responsive
        .map(breakpt => breakpt.breakpoint);
      breakpoints.sort((x, y) => x - y);

      breakpoints.forEach((breakpoint, index) => {
        var bQuery;
        if (index === 0) {
          bQuery = json2mq({minWidth: 0, maxWidth: breakpoint});
        } else {
          bQuery = json2mq({
            minWidth: breakpoints[index - 1],
            maxWidth: breakpoint
          });
        }
        canUseDOM && this.media(bQuery, () => {
          this.setState({breakpoint: breakpoint});
        })
      });

      // Register media query for full screen. Need to support resize from small to
      // large
      var query = json2mq({
        minWidth: breakpoints.slice(-1)[0]
      });

      canUseDOM && this.media(query, () => {
        this.setState({breakpoint: null});
      });
    }
  }

  componentWillUnmount() {
    this
      ._responsiveMediaHandlers
      .forEach(function (obj) {
        enquire.unregister(obj.query, obj.handler);
      });
  }

  slickPrev() {
    this
      .innerSlider
      .slickPrev();
  }

  slickNext() {
    this
      .innerSlider
      .slickNext();
  }

  slickGoTo(slide) {
    this
      .innerSlider
      .slickGoTo(slide)
  }

  render() {
    var settings;
    var newProps;
    if (this.state.breakpoint) {
      newProps = this
        .props
        .responsive
        .filter(resp => resp.breakpoint === this.state.breakpoint);
      settings = newProps[0].settings === 'unslick'
        ? 'unslick'
        : assign({}, this.props, newProps[0].settings);
    } else {
      settings = assign({}, this.props);
    }

    var children = this.props.children;
    if (!Array.isArray(children)) {
      children = [children]
    }

    children = children.filter(function (child) {
      return !!child
    })

    if (settings === 'unslick') {
      return (
        <div className={`${this.props.className} unslicked`}>
          {children}
        </div>
      );
    } else {
      return (
        <InnerSlider ref={this.innerSliderRefHandler} {...settings}>
          {children}
        </InnerSlider>
      );
    }
  }
}



class InnerSlider extends React.Component {
  constructor(props) {
    super(props);
    this.list = null;
    this.track = null;
    this.listRefHandler = this
      .listRefHandler
      .bind(this);
    this.trackRefHandler = this
      .trackRefHandler
      .bind(this);
    this.onWindowResized = this
      .onWindowResized
      .bind(this);
    this.slickPrev = this
      .slickPrev
      .bind(this);
    this.slickNext = this
      .slickNext
      .bind(this);
    this.slickGoTo = this
      .slickGoTo
      .bind(this);
    this.changeSlide = this
      .changeSlide
      .bind(this);
    this.keyHandler = this
      .keyHandler
      .bind(this);
    this.selectHandler = this
      .selectHandler
      .bind(this);
    this.swipeStart = this
      .swipeStart
      .bind(this);
    this.swipeMove = this
      .swipeMove
      .bind(this);
    this.getNavigableIndexes = this
      .getNavigableIndexes
      .bind(this);
    this.checkNavigable = this
      .checkNavigable
      .bind(this);
    this.getSlideCount = this
      .getSlideCount
      .bind(this);
    this.swipeEnd = this
      .swipeEnd
      .bind(this);
    this.onInnerSliderEnter = this
      .onInnerSliderEnter
      .bind(this);
    this.onInnerSliderOver = this
      .onInnerSliderOver
      .bind(this);
    this.onInnerSliderLeave = this
      .onInnerSliderLeave
      .bind(this);
    this.initialize = this
      .initialize
      .bind(this);
    this.update = this
      .update
      .bind(this);
    this.getWidth = this
      .getWidth
      .bind(this);
    this.getHeight = this
      .getHeight
      .bind(this);
    this.adaptHeight = this
      .adaptHeight
      .bind(this);
    this.canGoNext = this
      .canGoNext
      .bind(this);
    this.slideHandler = this
      .slideHandler
      .bind(this);
    this.swipeDirection = this
      .swipeDirection
      .bind(this);
    this.play = this
      .play
      .bind(this);
    this.autoPlay = this
      .autoPlay
      .bind(this);
    this.pause = this
      .pause
      .bind(this);

     this.state = {animating: false,
      dragging: false,
      autoPlayTimer: null,
      currentDirection: 0,
      currentLeft: null,
      currentSlide: 0,
      direction: 1,
      listWidth: null,
      listHeight: null,
      scrolling: false,
      // loadIndex: 0,
      slideCount: null,
      slideWidth: null,
      slideHeight: null,
      swiping: false,
      // sliding: false, slideOffset: 0,
      swipeLeft: null,
      touchObject: {
        startX: 0,
        startY: 0,
        curX: 0,
        curY: 0
      },
    
      lazyLoadedList: [],
    
      // added for react
      initialized: false,
      edgeDragged: false,
      swiped: false, // used by swipeEvent. differentites between touch and swipe.
      trackStyle: {},
      trackWidth: 0,
    
      // Removed transformsEnabled: false, $nextArrow: null, $prevArrow: null, $dots:
      // null, $list: null, $slideTrack: null, $slides: null,
      currentSlide: this.props.initialSlide}; 
  }

  listRefHandler(ref) {
    this.list = ref;
  }
  trackRefHandler(ref) {
    this.track = ref;
  }
  
  componentWillMount() {
    if (this.props.init) {
      this
        .props
        .init();
    }
    this.setState({mounted: true});
    var lazyLoadedList = [];
    for (var i = 0; i < React.Children.count(this.props.children); i++) {
      if (i >= this.state.currentSlide && i < this.state.currentSlide + this.props.slidesToShow) {
        lazyLoadedList.push(i);
      }
    }

    if (this.props.lazyLoad && this.state.lazyLoadedList.length === 0) {
      this.setState({lazyLoadedList: lazyLoadedList});
    }
  }
  componentDidMount() {
    this.initialize(this.props);
    this.adaptHeight();

    if (!window) {
      return
    }
    if (window.addEventListener) {
      window.addEventListener('resize', this.onWindowResized);
    } else {
      window.attachEvent('onresize', this.onWindowResized);
    }
  }
  componentWillUnmount() {
    if (this.animationEndCallback) {
      clearTimeout(this.animationEndCallback);
    }
    if (window.addEventListener) {
      window.removeEventListener('resize', this.onWindowResized);
    } else {
      window.detachEvent('onresize', this.onWindowResized);
    }
    if (this.state.autoPlayTimer) {
      clearInterval(this.state.autoPlayTimer);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.slickGoTo != nextProps.slickGoTo) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('AnterosCarouselSlick deprecation warning: slickGoTo prop is deprecated and it wi' +
            'll be removed in next release. Use slickGoTo method instead')
      }
      this.changeSlide({message: 'index', index: nextProps.slickGoTo, currentSlide: this.state.currentSlide});
    } else if (this.state.currentSlide >= nextProps.children.length) {
      this.update(nextProps);
      this.changeSlide({
        message: 'index',
        index: nextProps.children.length - nextProps.slidesToShow,
        currentSlide: this.state.currentSlide
      });
    } else {
      this.update(nextProps);
    }
  }
  componentDidUpdate() {
    this.adaptHeight();
  }
  onWindowResized() {
    this.update(this.props);
    this.setState({animating: false});
    clearTimeout(this.animationEndCallback);
    delete this.animationEndCallback;
  }
  slickPrev() {
    this.changeSlide({message: 'previous'});
  }
  slickNext() {
    this.changeSlide({message: 'next'});
  }
  slickGoTo(slide) {
    slide = Number(slide)
    !isNaN(slide) && this.changeSlide({message: 'index', index: slide, currentSlide: this.state.currentSlide});
  }

  /**
   * Events
   */
  // Event handler for previous and next
  changeSlide(options) {
    var indexOffset,
      previousInt,
      slideOffset,
      unevenOffset,
      targetSlide;
    const {slidesToScroll, slidesToShow} = this.props
    const {slideCount, currentSlide} = this.state
    unevenOffset = (slideCount % slidesToScroll !== 0);
    indexOffset = unevenOffset
      ? 0
      : (slideCount - currentSlide) % slidesToScroll;

    if (options.message === 'previous') {
      slideOffset = (indexOffset === 0)
        ? slidesToScroll
        : slidesToShow - indexOffset;
      targetSlide = currentSlide - slideOffset;
      if (this.props.lazyLoad) {
        previousInt = currentSlide - slideOffset;
        targetSlide = previousInt === -1
          ? slideCount - 1
          : previousInt;
      }
    } else if (options.message === 'next') {
      slideOffset = (indexOffset === 0)
        ? slidesToScroll
        : indexOffset;
      targetSlide = currentSlide + slideOffset;
      if (this.props.lazyLoad) {
        targetSlide = ((currentSlide + slidesToScroll) % slideCount) + indexOffset;
      }
    } else if (options.message === 'dots' || options.message === 'children') {
      // Click on dots
      targetSlide = options.index * options.slidesToScroll;
      if (targetSlide === options.currentSlide) {
        return;
      }
    } else if (options.message === 'index') {
      targetSlide = Number(options.index);
      if (targetSlide === options.currentSlide) {
        return;
      }
    }

    this.slideHandler(targetSlide);
  }

  // Accessiblity handler for previous and next
  keyHandler(e) {
    //Dont slide if the cursor is inside the form fields and arrow keys are pressed
    if (!e.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
      if (e.keyCode === 37 && this.props.accessibility === true) {
        this.changeSlide({
          message: this.props.rtl === true
            ? 'next'
            : 'previous'
        });
      } else if (e.keyCode === 39 && this.props.accessibility === true) {
        this.changeSlide({
          message: this.props.rtl === true
            ? 'previous'
            : 'next'
        });
      }
    }
  }
  // Focus on selecting a slide (click handler on track)
  selectHandler(options) {
    this.changeSlide(options)
  }
  swipeStart(e) {
    var touches,
      posX,
      posY;

    if ((this.props.swipe === false) || ('ontouchend' in document && this.props.swipe === false)) {
      return;
    } else if (this.props.draggable === false && e.type.indexOf('mouse') !== -1) {
      return;
    }
    posX = (e.touches !== undefined)
      ? e.touches[0].pageX
      : e.clientX;
    posY = (e.touches !== undefined)
      ? e.touches[0].pageY
      : e.clientY;
    this.setState({
      dragging: true,
      touchObject: {
        startX: posX,
        startY: posY,
        curX: posX,
        curY: posY
      }
    });
  }
  swipeMove(e) {
    if (!this.state.dragging) {
      e.preventDefault();
      return;
    }
    if (this.state.scrolling) {
      return;
    }
    if (this.state.animating) {
      e.preventDefault();
      return;
    }
    if (this.props.vertical && this.props.swipeToSlide && this.props.verticalSwiping) {
      e.preventDefault();
    }
    var swipeLeft;
    var curLeft,
      positionOffset;
    var touchObject = this.state.touchObject;

    curLeft = getTrackLeft(assign({
      slideIndex: this.state.currentSlide,
      trackRef: this.track
    }, this.props, this.state));
    touchObject.curX = (e.touches)
      ? e.touches[0].pageX
      : e.clientX;
    touchObject.curY = (e.touches)
      ? e.touches[0].pageY
      : e.clientY;
    touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
    var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));

    if (!this.props.verticalSwiping && !this.state.swiping && verticalSwipeLength > 4) {
      this.setState({scrolling: true})
      return;
    }

    if (this.props.verticalSwiping) {
      touchObject.swipeLength = verticalSwipeLength;
    }

    positionOffset = (this.props.rtl === false
      ? 1
      : -1) * (touchObject.curX > touchObject.startX
      ? 1
      : -1);

    if (this.props.verticalSwiping) {
      positionOffset = touchObject.curY > touchObject.startY
        ? 1
        : -1;
    }

    var currentSlide = this.state.currentSlide;
    var dotCount = Math.ceil(this.state.slideCount / this.props.slidesToScroll);
    var swipeDirection = this.swipeDirection(this.state.touchObject);
    var touchSwipeLength = touchObject.swipeLength;

    if (this.props.infinite === false) {
      if ((currentSlide === 0 && swipeDirection === 'right') || (currentSlide + 1 >= dotCount && swipeDirection === 'left')) {
        touchSwipeLength = touchObject.swipeLength * this.props.edgeFriction;

        if (this.state.edgeDragged === false && this.props.edgeEvent) {
          this
            .props
            .edgeEvent(swipeDirection);
          this.setState({edgeDragged: true});
        }
      }
    }

    if (this.state.swiped === false && this.props.swipeEvent) {
      this
        .props
        .swipeEvent(swipeDirection);
      this.setState({swiped: true});
    }

    if (!this.props.vertical) {
      swipeLeft = curLeft + touchSwipeLength * positionOffset;
    } else {
      swipeLeft = curLeft + (touchSwipeLength * (this.state.listHeight / this.state.listWidth)) * positionOffset;
    }

    if (this.props.verticalSwiping) {
      swipeLeft = curLeft + touchSwipeLength * positionOffset;
    }

    this.setState({
      touchObject: touchObject,
      swipeLeft: swipeLeft,
      trackStyle: getTrackCSS(assign({
        left: swipeLeft
      }, this.props, this.state))
    });

    if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
      return;
    }
    if (touchObject.swipeLength > 4) {
      this.setState({swiping: true})
      e.preventDefault();
    }
  }
  getNavigableIndexes() {
    let max;
    let breakPoint = 0;
    let counter = 0;
    let indexes = [];

    if (!this.props.infinite) {
      max = this.state.slideCount;
    } else {
      breakPoint = this.props.slidesToShow * -1;
      counter = this.props.slidesToShow * -1;
      max = this.state.slideCount * 2;
    }

    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + this.props.slidesToScroll;

      counter += this.props.slidesToScroll <= this.props.slidesToShow
        ? this.props.slidesToScroll
        : this.props.slidesToShow;
    }

    return indexes;
  }
  checkNavigable(index) {
    const navigables = this.getNavigableIndexes();
    let prevNavigable = 0;

    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }

        prevNavigable = navigables[n];
      }
    }

    return index;
  }
  getSlideCount() {
    const centerOffset = this.props.centerMode
      ? this.state.slideWidth * Math.floor(this.props.slidesToShow / 2)
      : 0;

    if (this.props.swipeToSlide) {
      let swipedSlide;

      const slickList = ReactDOM.findDOMNode(this.list);

      const slides = slickList.querySelectorAll('.slick-slide');

      Array
        .from(slides)
        .every((slide) => {
          if (!this.props.vertical) {
            if (slide.offsetLeft - centerOffset + (this.getWidth(slide) / 2) > this.state.swipeLeft * -1) {
              swipedSlide = slide;
              return false;
            }
          } else {
            if (slide.offsetTop + (this.getHeight(slide) / 2) > this.state.swipeLeft * -1) {
              swipedSlide = slide;
              return false;
            }
          }

          return true;
        });

      const slidesTraversed = Math.abs(swipedSlide.dataset.index - this.state.currentSlide) || 1;

      return slidesTraversed;
    } else {
      return this.props.slidesToScroll;
    }
  }
  swipeEnd(e) {
    if (!this.state.dragging) {
      if (this.props.swipe) {
        e.preventDefault();
      }
      return;
    }
    var touchObject = this.state.touchObject;
    var minSwipe = this.state.listWidth / this.props.touchThreshold;
    var swipeDirection = this.swipeDirection(touchObject);

    if (this.props.verticalSwiping) {
      minSwipe = this.state.listHeight / this.props.touchThreshold;
    }

    var wasScrolling = this.state.scrolling;
    // reset the state of touch related state variables.
    this.setState({
      dragging: false,
      edgeDragged: false,
      scrolling: false,
      swiping: false,
      swiped: false,
      swipeLeft: null,
      touchObject: {}
    });
    if (wasScrolling) {
      return;
    }

    // Fix for #13
    if (!touchObject.swipeLength) {
      return;
    }
    if (touchObject.swipeLength > minSwipe) {
      e.preventDefault();

      let slideCount,
        newSlide;

      switch (swipeDirection) {

        case 'left':
        case 'down':
          newSlide = this.state.currentSlide + this.getSlideCount();
          slideCount = this.props.swipeToSlide
            ? this.checkNavigable(newSlide)
            : newSlide;
          this.state.currentDirection = 0;
          break;

        case 'right':
        case 'up':
          newSlide = this.state.currentSlide - this.getSlideCount();
          slideCount = this.props.swipeToSlide
            ? this.checkNavigable(newSlide)
            : newSlide;
          this.state.currentDirection = 1;
          break;

        default:
          slideCount = this.state.currentSlide;

      }

      this.slideHandler(slideCount);
    } else {
      // Adjust the track back to it's original position.
      var currentLeft = getTrackLeft(assign({
        slideIndex: this.state.currentSlide,
        trackRef: this.track
      }, this.props, this.state));

      this.setState({
        trackStyle: getTrackAnimateCSS(assign({
          left: currentLeft
        }, this.props, this.state))
      });
    }
  }
  onInnerSliderEnter(e) {
    if (this.props.autoplay && this.props.pauseOnHover) {
      this.pause();
    }
  }
  onInnerSliderOver(e) {
    if (this.props.autoplay && this.props.pauseOnHover) {
      this.pause();
    }
  }
  onInnerSliderLeave(e) {
    if (this.props.autoplay && this.props.pauseOnHover) {
      this.autoPlay();
    }
  }

  initialize(props) {
    const slickList = ReactDOM.findDOMNode(this.list);

    var slideCount = React
      .Children
      .count(props.children);
    var listWidth = this.getWidth(slickList);
    var trackWidth = this.getWidth(ReactDOM.findDOMNode(this.track));
    var slideWidth;

    if (!props.vertical) {
      var centerPaddingAdj = props.centerMode && (parseInt(props.centerPadding) * 2);
      slideWidth = (this.getWidth(ReactDOM.findDOMNode(this)) - centerPaddingAdj) / props.slidesToShow;
    } else {
      slideWidth = this.getWidth(ReactDOM.findDOMNode(this));
    }

    const slideHeight = this.getHeight(slickList.querySelector('[data-index="0"]'));
    const listHeight = slideHeight * props.slidesToShow;

    var currentSlide = props.rtl
      ? slideCount - 1 - props.initialSlide
      : props.initialSlide;

    this.setState({
      slideCount,
      slideWidth,
      listWidth,
      trackWidth,
      currentSlide,
      slideHeight,
      listHeight
    }, function () {

      var targetLeft = getTrackLeft(assign({
        slideIndex: this.state.currentSlide,
        trackRef: this.track
      }, props, this.state));
      // getCSS function needs previously set state
      var trackStyle = getTrackCSS(assign({
        left: targetLeft
      }, props, this.state));

      this.setState({trackStyle: trackStyle});

      this.autoPlay(); // once we're set up, trigger the initial autoplay.
    });
  }
  update(props) {
    const slickList = ReactDOM.findDOMNode(this.list);
    // This method has mostly same code as initialize method. Refactor it
    var slideCount = React
      .Children
      .count(props.children);
    var listWidth = this.getWidth(slickList);
    var trackWidth = this.getWidth(ReactDOM.findDOMNode(this.track));
    var slideWidth;

    if (!props.vertical) {
      var centerPaddingAdj = props.centerMode && (parseInt(props.centerPadding) * 2);
      slideWidth = (this.getWidth(ReactDOM.findDOMNode(this)) - centerPaddingAdj) / props.slidesToShow;
    } else {
      slideWidth = this.getWidth(ReactDOM.findDOMNode(this));
    }

    const slideHeight = this.getHeight(slickList.querySelector('[data-index="0"]'));
    const listHeight = slideHeight * props.slidesToShow;

    // pause slider if autoplay is set to false
    if (!props.autoplay) {
      this.pause();
    } else {
      this.autoPlay();
    }

    this
      .setState({
        slideCount,
        slideWidth,
        listWidth,
        trackWidth,
        slideHeight,
        listHeight
      }, function () {

        var targetLeft = getTrackLeft(assign({
          slideIndex: this.state.currentSlide,
          trackRef: this.track
        }, props, this.state));
        // getCSS function needs previously set state
        var trackStyle = getTrackCSS(assign({
          left: targetLeft
        }, props, this.state));

        this.setState({trackStyle: trackStyle});
      });
  }
  getWidth(elem) {
    return elem && (elem.getBoundingClientRect().width || elem.offsetWidth) || 0;
  }
  getHeight(elem) {
    return elem && (elem.getBoundingClientRect().height || elem.offsetHeight) || 0;
  }
  adaptHeight() {
    if (this.props.adaptiveHeight) {
      var selector = '[data-index="' + this.state.currentSlide + '"]';
      if (this.list) {
        var slickList = ReactDOM.findDOMNode(this.list);
        slickList.style.height = slickList
          .querySelector(selector)
          .offsetHeight + 'px';
      }
    }
  }
  canGoNext(opts) {
    var canGo = true;
    if (!opts.infinite) {
      if (opts.centerMode) {
        // check if current slide is last slide
        if (opts.currentSlide >= (opts.slideCount - 1)) {
          canGo = false;
        }
      } else {
        // check if all slides are shown in slider
        if (opts.slideCount <= opts.slidesToShow || opts.currentSlide >= (opts.slideCount - opts.slidesToShow)) {
          canGo = false;
        }
      }
    }
    return canGo;
  }
  slideHandler(index) {
    // Functionality of animateSlide and postSlide is merged into this function
    // console.log('slideHandler', index);
    var targetSlide,
      currentSlide;
    var targetLeft,
      currentLeft;
    var callback;

    if (this.props.waitForAnimate && this.state.animating) {
      return;
    }

    if (this.props.fade) {
      currentSlide = this.state.currentSlide;

      // Don't change slide if it's not infite and current slide is the first or last
      // slide.
      if (this.props.infinite === false && (index < 0 || index >= this.state.slideCount)) {
        return;
      }

      //  Shifting targetSlide back into the range
      if (index < 0) {
        targetSlide = index + this.state.slideCount;
      } else if (index >= this.state.slideCount) {
        targetSlide = index - this.state.slideCount;
      } else {
        targetSlide = index;
      }

      if (this.props.lazyLoad && this.state.lazyLoadedList.indexOf(targetSlide) < 0) {
        this.setState({
          lazyLoadedList: this
            .state
            .lazyLoadedList
            .concat(targetSlide)
        });
      }

      callback = () => {
        this.setState({animating: false});
        if (this.props.afterChange) {
          this
            .props
            .afterChange(targetSlide);
        }
        delete this.animationEndCallback;
      };

      this.setState({
        animating: true,
        currentSlide: targetSlide
      }, function () {
        this.animationEndCallback = setTimeout(callback, this.props.speed);
      });

      if (this.props.beforeChange) {
        this
          .props
          .beforeChange(this.state.currentSlide, targetSlide);
      }

      this.autoPlay();
      return;
    }

    targetSlide = index;
    if (targetSlide < 0) {
      if (this.props.infinite === false) {
        currentSlide = 0;
      } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
        currentSlide = this.state.slideCount - (this.state.slideCount % this.props.slidesToScroll);
      } else {
        currentSlide = this.state.slideCount + targetSlide;
      }
    } else if (targetSlide >= this.state.slideCount) {
      if (this.props.infinite === false) {
        currentSlide = this.state.slideCount - this.props.slidesToShow;
      } else if (this.state.slideCount % this.props.slidesToScroll !== 0) {
        currentSlide = 0;
      } else {
        currentSlide = targetSlide - this.state.slideCount;
      }
    } else {
      currentSlide = targetSlide;
    }

    targetLeft = getTrackLeft(assign({
      slideIndex: targetSlide,
      trackRef: this.track
    }, this.props, this.state));

    currentLeft = getTrackLeft(assign({
      slideIndex: currentSlide,
      trackRef: this.track
    }, this.props, this.state));

    if (this.props.infinite === false) {
      targetLeft = currentLeft;
    }

    if (this.props.beforeChange) {
      this
        .props
        .beforeChange(this.state.currentSlide, currentSlide);
    }

    if (this.props.lazyLoad) {
      var loaded = true;
      var slidesToLoad = [];
      for (var i = targetSlide; i < targetSlide + this.props.slidesToShow; i++) {
        loaded = loaded && (this.state.lazyLoadedList.indexOf(i) >= 0);
        if (!loaded) {
          slidesToLoad.push(i);
        }
      }
      if (!loaded) {
        this.setState({
          lazyLoadedList: this
            .state
            .lazyLoadedList
            .concat(slidesToLoad)
        });
      }
    }

    // Slide Transition happens here. animated transition happens to target Slide
    // and non - animated transition happens to current Slide If CSS transitions are
    // false, directly go the current slide.

    if (this.props.useCSS === false) {

      this
        .setState({
          currentSlide: currentSlide,
          trackStyle: getTrackCSS(assign({
            left: currentLeft
          }, this.props, this.state))
        }, function () {
          if (this.props.afterChange) {
            this
              .props
              .afterChange(currentSlide);
          }
        });

    } else {

      var nextStateChanges = {
        animating: false,
        currentSlide: currentSlide,
        trackStyle: getTrackCSS(assign({
          left: currentLeft
        }, this.props, this.state)),
        swipeLeft: null
      };

      callback = () => {
        this.setState(nextStateChanges);
        if (this.props.afterChange) {
          this
            .props
            .afterChange(currentSlide);
        }
        delete this.animationEndCallback;
      };

      this.setState({
        animating: true,
        currentSlide: currentSlide,
        trackStyle: getTrackAnimateCSS(assign({
          left: targetLeft
        }, this.props, this.state))
      }, function () {
        this.animationEndCallback = setTimeout(callback, this.props.speed);
      });

    }

    this.autoPlay();
  }
  swipeDirection(touchObject) {
    var xDist,
      yDist,
      r,
      swipeAngle;

    xDist = touchObject.startX - touchObject.curX;
    yDist = touchObject.startY - touchObject.curY;
    r = Math.atan2(yDist, xDist);

    swipeAngle = Math.round(r * 180 / Math.PI);
    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }
    if ((swipeAngle <= 45) && (swipeAngle >= 0) || (swipeAngle <= 360) && (swipeAngle >= 315)) {
      return (this.props.rtl === false
        ? 'left'
        : 'right');
    }
    if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
      return (this.props.rtl === false
        ? 'right'
        : 'left');
    }
    if (this.props.verticalSwiping === true) {
      if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
        return 'down';
      } else {
        return 'up';
      }
    }

    return 'vertical';
  }
  play() {
    var nextIndex;

    if (!this.state.mounted) {
      return false
    }

    if (this.props.rtl) {
      nextIndex = this.state.currentSlide - this.props.slidesToScroll;
    } else {
      if (this.canGoNext(Object.assign({}, this.props, this.state))) {
        nextIndex = this.state.currentSlide + this.props.slidesToScroll;
      } else {
        return false;
      }
    }

    this.slideHandler(nextIndex);
  }
  autoPlay() {
    if (this.state.autoPlayTimer) {
      clearTimeout(this.state.autoPlayTimer);
    }
    if (this.props.autoplay) {
      this.setState({
        autoPlayTimer: setTimeout(this.play, this.props.autoplaySpeed)
      });
    }
  }
  pause() {
    if (this.state.autoPlayTimer) {
      clearTimeout(this.state.autoPlayTimer);
      this.setState({autoPlayTimer: null});
    }
  }

  render() {
    var className = AnterosUtils.buildClassNames('slick-initialized', 'slick-slider', this.props.className, {'slick-vertical': this.props.vertical});

    var trackProps = {
      fade: this.props.fade,
      cssEase: this.props.cssEase,
      speed: this.props.speed,
      infinite: this.props.infinite,
      centerMode: this.props.centerMode,
      focusOnSelect: this.props.focusOnSelect
        ? this.selectHandler
        : null,
      currentSlide: this.state.currentSlide,
      lazyLoad: this.props.lazyLoad,
      lazyLoadedList: this.state.lazyLoadedList,
      rtl: this.props.rtl,
      slideWidth: this.state.slideWidth,
      slidesToShow: this.props.slidesToShow,
      slidesToScroll: this.props.slidesToScroll,
      slideCount: this.state.slideCount,
      trackStyle: this.state.trackStyle,
      variableWidth: this.props.variableWidth
    };

    var dots;

    if (this.props.dots === true && this.state.slideCount >= this.props.slidesToShow) {
      var dotProps = {
        dotsClass: this.props.dotsClass,
        slideCount: this.state.slideCount,
        slidesToShow: this.props.slidesToShow,
        currentSlide: this.state.currentSlide,
        slidesToScroll: this.props.slidesToScroll,
        clickHandler: this.changeSlide,
        children: this.props.children,
        customPaging: this.props.customPaging
      };

      dots = (<Dots {...dotProps}/>);
    }

    var prevArrow,
      nextArrow;

    var arrowProps = {
      infinite: this.props.infinite,
      centerMode: this.props.centerMode,
      currentSlide: this.state.currentSlide,
      slideCount: this.state.slideCount,
      slidesToShow: this.props.slidesToShow,
      prevArrow: this.props.prevArrow,
      nextArrow: this.props.nextArrow,
      clickHandler: this.changeSlide,
      canGoNext: this.canGoNext
    };

    if (this.props.arrows) {
      prevArrow = (<PrevArrow {...arrowProps}/>);
      nextArrow = (<NextArrow {...arrowProps}/>);
    }

    var verticalHeightStyle = null;

    if (this.props.vertical) {
      verticalHeightStyle = {
        height: this.state.listHeight
      };
    }

    var centerPaddingStyle = null;

    if (this.props.vertical === false) {
      if (this.props.centerMode === true) {
        centerPaddingStyle = {
          padding: ('0px ' + this.props.centerPadding)
        };
      }
    } else {
      if (this.props.centerMode === true) {
        centerPaddingStyle = {
          padding: (this.props.centerPadding + ' 0px')
        };
      }
    }

    const listStyle = assign({}, verticalHeightStyle, centerPaddingStyle);

    return (
      <div
        className={className}
        onMouseEnter={this.onInnerSliderEnter}
        onMouseLeave={this.onInnerSliderLeave}
        onMouseOver={this.onInnerSliderOver}>
        {prevArrow}
        <div
          ref={this.listRefHandler}
          className="slick-list"
          style={listStyle}
          onMouseDown={this.swipeStart}
          onMouseMove={this.state.dragging
          ? this.swipeMove
          : null}
          onMouseUp={this.swipeEnd}
          onMouseLeave={this.state.dragging
          ? this.swipeEnd
          : null}
          onTouchStart={this.swipeStart}
          onTouchMove={this.state.dragging
          ? this.swipeMove
          : null}
          onTouchEnd={this.swipeEnd}
          onTouchCancel={this.state.dragging
          ? this.swipeEnd
          : null}
          onKeyDown={this.props.accessibility
          ? this.keyHandler
          : null}>
          <Track ref={this.trackRefHandler} {...trackProps}>
            {this.props.children}
          </Track>
        </div>
        {nextArrow}
        {dots}
      </div>
    );
  }
}


InnerSlider.defaultProps = {
  className: '',
  accessibility: true,
  adaptiveHeight: false,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: false,
  centerPadding: '50px',
  cssEase: 'ease',
  customPaging: function (i) {
    return <button>{i + 1}</button>;
  },
  dots: false,
  dotsClass: 'slick-dots',
  draggable: true,
  easing: 'linear',
  edgeFriction: 0.35,
  fade: false,
  focusOnSelect: false,
  infinite: true,
  initialSlide: 0,
  lazyLoad: false,
  pauseOnHover: true,
  responsive: null,
  rtl: false,
  slide: 'div',
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  swipe: true,
  swipeToSlide: false,
  touchMove: true,
  touchThreshold: 5,
  useCSS: true,
  variableWidth: false,
  vertical: false,
  waitForAnimate: true,
  afterChange: null,
  beforeChange: null,
  edgeEvent: null,
  init: null,
  swipeEvent: null,
  // nextArrow, prevArrow are react componets
  nextArrow: null,
  prevArrow: null
};

class PrevArrow extends React.Component {
  clickHandler(options, e) {
    if (e) {
      e.preventDefault();
    }
    this
      .props
      .clickHandler(options, e);
  }
  render() {
    let prevClasses = {
      'slick-arrow': true,
      'slick-prev': true
    };
    let prevHandler = this
      .clickHandler
      .bind(this, {message: 'previous'});

    if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
      prevClasses['slick-disabled'] = true;
      prevHandler = null;
    }

    let prevArrowProps = {
      key: '0',
      'data-role': 'none',
      className: AnterosUtils.buildClassNames(prevClasses),
      style: {
        display: 'block'
      },
      onClick: prevHandler
    };
    let customProps = {
      currentSlide: this.props.currentSlide,
      slideCount: this.props.slideCount
    };
    let prevArrow;

    if (this.props.prevArrow) {
      prevArrow = React.cloneElement(this.props.prevArrow, {
        ...prevArrowProps,
        ...customProps
      });
    } else {
      prevArrow = <button key='0' type='button' {...prevArrowProps}>
        Previous</button>;
    }

    return prevArrow;
  }
}

class NextArrow extends React.Component {
  clickHandler(options, e) {
    if (e) {
      e.preventDefault();
    }
    this
      .props
      .clickHandler(options, e);
  }
  render() {
    let nextClasses = {
      'slick-arrow': true,
      'slick-next': true
    };
    let nextHandler = this
      .clickHandler
      .bind(this, {message: 'next'});

    if (!this.props.canGoNext(this.props)) {
      nextClasses['slick-disabled'] = true;
      nextHandler = null;
    }

    let nextArrowProps = {
      key: '1',
      'data-role': 'none',
      className: AnterosUtils.buildClassNames(nextClasses),
      style: {
        display: 'block'
      },
      onClick: nextHandler
    };
    let customProps = {
      currentSlide: this.props.currentSlide,
      slideCount: this.props.slideCount
    };
    let nextArrow;

    if (this.props.nextArrow) {
      nextArrow = React.cloneElement(this.props.nextArrow, {
        ...nextArrowProps,
        ...customProps
      });
    } else {
      nextArrow = <button key='1' type='button' {...nextArrowProps}>
        Next</button>;
    }

    return nextArrow;
  }
}

var getDotCount = function (spec) {
  var dots;
  dots = Math.ceil(spec.slideCount / spec.slidesToScroll);
  return dots;
};

class Dots extends React.Component {
  clickHandler(options, e) {
    e.preventDefault();
    this
      .props
      .clickHandler(options);
  }
  render() {

    var dotCount = getDotCount({slideCount: this.props.slideCount, slidesToScroll: this.props.slidesToScroll});

    var dots = Array
      .apply(null, Array(dotCount + 1).join('0').split(''))
      .map((x, i) => {

        var leftBound = (i * this.props.slidesToScroll);
        var rightBound = (i * this.props.slidesToScroll) + (this.props.slidesToScroll - 1);
        var className = AnterosUtils.buildClassNames({
          'slick-active': (this.props.currentSlide >= leftBound) && (this.props.currentSlide <= rightBound)
        });

        var dotOptions = {
          message: 'dots',
          index: i,
          slidesToScroll: this.props.slidesToScroll,
          currentSlide: this.props.currentSlide
        };

        var onClick = this
          .clickHandler
          .bind(this, dotOptions);

        return (
          <li key={i} className={className}>
            {React.cloneElement(this.props.customPaging(i), {onClick})}
          </li>
        );
      });

    return (
      <ul className={this.props.dotsClass} style={{
        display: 'block'
      }}>
        {dots}
      </ul>
    );
  }
}

var getSlideClasses = (spec) => {
  var slickActive,
    slickCenter,
    slickCloned;
  var centerOffset,
    index;

  if (spec.rtl) {
    index = spec.slideCount - 1 - spec.index;
  } else {
    index = spec.index;
  }
  slickCloned = (index < 0) || (index >= spec.slideCount);
  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (index - spec.currentSlide) % spec.slideCount === 0;
    if ((index > spec.currentSlide - centerOffset - 1) && (index <= spec.currentSlide + centerOffset)) {
      slickActive = true;
    }
  } else {
    slickActive = (spec.currentSlide <= index) && (index < spec.currentSlide + spec.slidesToShow);
  }
  return AnterosUtils.buildClassNames({'slick-slide': true, 'slick-active': slickActive, 'slick-center': slickCenter, 'slick-cloned': slickCloned});
};

var getSlideStyle = function (spec) {
  var style = {};

  if (spec.variableWidth === undefined || spec.variableWidth === false) {
    style.width = spec.slideWidth;
  }

  if (spec.fade) {
    style.position = 'relative';
    style.left = -spec.index * spec.slideWidth;
    style.opacity = (spec.currentSlide === spec.index)
      ? 1
      : 0;
    style.transition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase;
    style.WebkitTransition = 'opacity ' + spec.speed + 'ms ' + spec.cssEase;
  }

  return style;
};

var getKey = (child, fallbackKey) => {
  // key could be a zero
  return (child.key === null || child.key === undefined)
    ? fallbackKey
    : child.key;
};

var renderSlides = function (spec) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];
  var count = React
    .Children
    .count(spec.children);

  React
    .Children
    .forEach(spec.children, (elem, index) => {
      let child;
      var childOnClickOptions = {
        message: 'children',
        index: index,
        slidesToScroll: spec.slidesToScroll,
        currentSlide: spec.currentSlide
      };

      if (!spec.lazyLoad || (spec.lazyLoad && spec.lazyLoadedList.indexOf(index) >= 0)) {
        child = elem;
      } else {
        child = (
          <div></div>
        );
      }
      var childStyle = getSlideStyle(assign({}, spec, {index: index}));
      const slideClass = child.props.className || ''

      const onClick = function (e) {
        child.props && child.props.onClick && child
          .props
          .onClick(e)
        if (spec.focusOnSelect) {
          spec.focusOnSelect(childOnClickOptions)
        }
      }

      slides.push(React.cloneElement(child, {
        key: 'original' + getKey(child, index),
        'data-index': index,
        className: AnterosUtils.buildClassNames(getSlideClasses(assign({
          index: index
        }, spec)), slideClass),
        tabIndex: '-1',
        style: assign({
          outline: 'none'
        }, child.props.style || {}, childStyle),
        onClick
      }));

      // variableWidth doesn't wrap properly.
      if (spec.infinite && spec.fade === false) {
        var infiniteCount = spec.variableWidth
          ? spec.slidesToShow + 1
          : spec.slidesToShow;

        if (index >= (count - infiniteCount)) {
          key = -(count - index);
          preCloneSlides.push(React.cloneElement(child, {
            key: 'precloned' + getKey(child, key),
            'data-index': key,
            className: AnterosUtils.buildClassNames(getSlideClasses(assign({
              index: key
            }, spec)), slideClass),
            style: assign({}, child.props.style || {}, childStyle),
            onClick
          }));
        }

        if (index < infiniteCount) {
          key = count + index;
          postCloneSlides.push(React.cloneElement(child, {
            key: 'postcloned' + getKey(child, key),
            'data-index': key,
            className: AnterosUtils.buildClassNames(getSlideClasses(assign({
              index: key
            }, spec)), slideClass),
            style: assign({}, child.props.style || {}, childStyle),
            onClick
          }));
        }
      }
    });

  if (spec.rtl) {
    return preCloneSlides
      .concat(slides, postCloneSlides)
      .reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }

};

class Track extends React.Component {
  render() {
    var slides = renderSlides.call(this, this.props);
    return (
      <div className='slick-track' style={this.props.trackStyle}>
        {slides}
      </div>
    );
  }
}

var checkSpecKeys = function (spec, keysArray) {
  return keysArray.reduce((value, key) => {
    return value && spec.hasOwnProperty(key);
  }, true)
    ? null
    : console.error('Keys Missing', spec);
};

export var getTrackCSS = function (spec) {
  checkSpecKeys(spec, ['left', 'variableWidth', 'slideCount', 'slidesToShow', 'slideWidth']);

  var trackWidth,
    trackHeight;

  const trackChildren = (spec.slideCount + 2 * spec.slidesToShow);

  if (!spec.vertical) {
    if (spec.variableWidth) {
      trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
    } else if (spec.centerMode) {
      trackWidth = (spec.slideCount + 2 * (spec.slidesToShow + 1)) * spec.slideWidth;
    } else {
      trackWidth = (spec.slideCount + 2 * spec.slidesToShow) * spec.slideWidth;
    }
  } else {
    trackHeight = trackChildren * spec.slideHeight;
  }

  var style = {
    opacity: 1,
    WebkitTransform: !spec.vertical
      ? 'translate3d(' + spec.left + 'px, 0px, 0px)'
      : 'translate3d(0px, ' + spec.left + 'px, 0px)',
    transform: !spec.vertical
      ? 'translate3d(' + spec.left + 'px, 0px, 0px)'
      : 'translate3d(0px, ' + spec.left + 'px, 0px)',
    transition: '',
    WebkitTransition: '',
    msTransform: !spec.vertical
      ? 'translateX(' + spec.left + 'px)'
      : 'translateY(' + spec.left + 'px)'
  };

  if (trackWidth) {
    assign(style, {width: trackWidth});
  }

  if (trackHeight) {
    assign(style, {height: trackHeight});
  }

  // Fallback for IE8
  if (window && !window.addEventListener && window.attachEvent) {
    if (!spec.vertical) {
      style.marginLeft = spec.left + 'px';
    } else {
      style.marginTop = spec.left + 'px';
    }
  }

  return style;
};

export var getTrackAnimateCSS = function (spec) {
  checkSpecKeys(spec, [
    'left',
    'variableWidth',
    'slideCount',
    'slidesToShow',
    'slideWidth',
    'speed',
    'cssEase'
  ]);

  var style = getTrackCSS(spec);
  // useCSS is true by default so it can be undefined
  style.WebkitTransition = '-webkit-transform ' + spec.speed + 'ms ' + spec.cssEase;
  style.transition = 'transform ' + spec.speed + 'ms ' + spec.cssEase;
  return style;
};

export var getTrackLeft = function (spec) {

  checkSpecKeys(spec, [
    'slideIndex',
    'trackRef',
    'infinite',
    'centerMode',
    'slideCount',
    'slidesToShow',
    'slidesToScroll',
    'slideWidth',
    'listWidth',
    'variableWidth',
    'slideHeight'
  ]);

  var slideOffset = 0;
  var targetLeft;
  var targetSlide;
  var verticalOffset = 0;

  if (spec.fade) {
    return 0;
  }

  if (spec.infinite) {
    if (spec.slideCount >= spec.slidesToShow) {
      slideOffset = (spec.slideWidth * spec.slidesToShow) * -1;
      verticalOffset = (spec.slideHeight * spec.slidesToShow) * -1;
    }
    if (spec.slideCount % spec.slidesToScroll !== 0) {
      if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
        if (spec.slideIndex > spec.slideCount) {
          slideOffset = ((spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideWidth) * -1;
          verticalOffset = ((spec.slidesToShow - (spec.slideIndex - spec.slideCount)) * spec.slideHeight) * -1;
        } else {
          slideOffset = ((spec.slideCount % spec.slidesToScroll) * spec.slideWidth) * -1;
          verticalOffset = ((spec.slideCount % spec.slidesToScroll) * spec.slideHeight) * -1;
        }
      }
    }
  } else {

    if (spec.slideCount % spec.slidesToScroll !== 0) {
      if (spec.slideIndex + spec.slidesToScroll > spec.slideCount && spec.slideCount > spec.slidesToShow) {
        var slidesToOffset = spec.slidesToShow - (spec.slideCount % spec.slidesToScroll);
        slideOffset = slidesToOffset * spec.slideWidth;
      }
    }
  }

  if (spec.centerMode) {
    if (spec.infinite) {
      slideOffset += spec.slideWidth * Math.floor(spec.slidesToShow / 2);
    } else {
      slideOffset = spec.slideWidth * Math.floor(spec.slidesToShow / 2);
    }
  }

  if (!spec.vertical) {
    targetLeft = ((spec.slideIndex * spec.slideWidth) * -1) + slideOffset;
  } else {
    targetLeft = ((spec.slideIndex * spec.slideHeight) * -1) + verticalOffset;
  }

  if (spec.variableWidth === true) {
    var targetSlideIndex;
    if (spec.slideCount <= spec.slidesToShow || spec.infinite === false) {
      targetSlide = ReactDOM
        .findDOMNode(spec.trackRef)
        .childNodes[spec.slideIndex];
    } else {
      targetSlideIndex = (spec.slideIndex + spec.slidesToShow);
      targetSlide = ReactDOM
        .findDOMNode(spec.trackRef)
        .childNodes[targetSlideIndex];
    }
    targetLeft = targetSlide
      ? targetSlide.offsetLeft * -1
      : 0;
    if (spec.centerMode === true) {
      if (spec.infinite === false) {
        targetSlide = ReactDOM
          .findDOMNode(spec.trackRef)
          .children[spec.slideIndex];
      } else {
        targetSlide = ReactDOM
          .findDOMNode(spec.trackRef)
          .children[(spec.slideIndex + spec.slidesToShow + 1)];
      }

      if (targetSlide) {
        targetLeft = targetSlide.offsetLeft * -1 + (spec.listWidth - targetSlide.offsetWidth) / 2;
      }
    }
  }

  return targetLeft;
};
