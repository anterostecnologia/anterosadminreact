import React, {Component} from 'react';
import {AnterosCard, HeaderActions, AnterosPanel, AnterosForm, AnterosFormGroup} from "anteros-react-containers";
import {AnterosButton} from "anteros-react-buttons";
import lodash from "lodash";
import "./Misc.css";
import AnterosRecaptcha from "../components/AnterosRecaptcha";
import {AnterosFlexContainer} from "../components/AnterosFlexContainer";
import {AnterosBarcode} from "../components/AnterosBarcode";
import {AnterosQRCode} from "../components/AnterosQRCode";
import {AnterosTimeSlider} from "../components/AnterosTimeSlider.jsx";
import {AnterosCreditCard} from '../components/AnterosCreditCard';
import {AnterosMaskEdit, AnterosEdit} from "anteros-react-editors";
import {AnterosLabel} from "anteros-react-label";
import {AnterosRow, AnterosCol} from "anteros-react-layout";
import { AnterosMultiSelect, AnterosMultiSelectOption } from '../components/AnterosMultiSelect.jsx';
import { AnterosTypeahead } from '../components/AnterosTypeahead';
import { AnterosYoutubeSuggest } from "../components/AnterosYoutubeSuggest";
import { AnterosNetflixSuggest } from '../components/AnterosNetflixSuggest';
import { AnterosLazyLoad } from '../components/AnterosLazyLoad';
import { AnterosImageLightbox } from "../components/AnterosImageLightbox";
import { AnterosTimeAgo } from "../components/AnterosTimeAgo";
import { AnterosImageMapper } from "../components/AnterosImageMapper";
import { AnterosIdleTimer } from "../components/AnterosIdleTimer";
import { AnterosHotKeys } from "../components/AnterosHotKeys";
import { AnterosBlockUI } from "../components/AnterosBlockUI";
import { AnterosLoader } from "../components/AnterosLoader";
import { AnterosResizeDetector } from "../components/AnterosResizeDetector";
import { AnterosContainerDimensions } from "../components/AnterosContainerDimensions";
import { AnterosCircularProgress } from "../components/AnterosCircularProgress";
import { AnterosProgressButton } from "../components/AnterosProgressButton";
import { AnterosInlineSVG } from "../components/AnterosInlineSVG";

import image1 from '../assets/img/cat_1.jpg';
import image2 from '../assets/img/cat_2.jpg';
import image3 from '../assets/img/cat_3.jpg';
import image4 from '../assets/img/cat_4.jpg';

import image1Thumb from '../assets/img/cat_1_thumb.jpg';
import image2Thumb from '../assets/img/cat_2_thumb.jpg';
import image3Thumb from '../assets/img/cat_3_thumb.jpg';
import image4Thumb from '../assets/img/cat_4_thumb.jpg';

const DEFAULT_NODE_SIZE = 100;
const SIZE_INCREMENT = 5;
const POS_INCREMENT = 5;

const keyMap = {
    'delete': ['del', {sequence: 'backspace', action: 'keyup'}],
    'expand': 'alt+up',
    'contract': 'alt+down',
    'konami': 'up up down down left right left right b a enter',
    'commandDown': {sequence: 'command', action: 'keydown'},
    'commandUp': {sequence: 'command', action: 'keyup'}
  };

const titles = [
    '',
    (<span>
        by&nbsp;
        <a href="http://flickr.com/photos/titrans/">
            quatre mains
        </a>
        &nbsp;(<a href="http://creativecommons.org/licenses/by/2.0/" title="Attribution License">
            Some rights reserved
        </a>)
    </span>),
    (<span>
        by&nbsp;
        <a href="http://flickr.com/photos/lachlanrogers/">latch.r</a>
        &nbsp;(<a href="http://creativecommons.org/licenses/by-sa/2.0/" title="Attribution-ShareAlike License">
            Some rights reserved
        </a>)
    </span>),
    (<span>
        by&nbsp;
        <a href="http://flickr.com/photos/fazen/">
            fazen
        </a>
        &nbsp;(<a href="http://creativecommons.org/licenses/by/2.0/" title="Attribution License">
            Some rights reserved
        </a>)
    </span>),
];

const images = [image1, image2, image3, image4];
const thumbs = [image1Thumb, image2Thumb, image3Thumb, image4Thumb];

const sitekey = '6LeFMzEUAAAAAPAbmw7B7yyAVYTzlz2FsK-V-c48';

const options = ["Apple","Banana","Blueberry","Cherry","Coconut","Grapefruit","Kiwi","Lemon","Lime","Mango","Orange","Papaya"];

var MAP = {
	name: 'my-map',
	areas: [
		{shape: 'poly', coords: [25,33,27,300,128,240,128,94]},
		{shape: 'poly', coords: [219,118,220,210,283,210,284,119]},
		{shape: 'poly', coords: [381,241,383,94,462,53,457,282]},
		{shape: 'poly', coords: [245,285,290,285,274,239,249,238]},
	]
};

var URL = 'https://c1.staticflickr.com/5/4052/4503898393_303cfbc9fd_b.jpg';

export default class MiscView extends Component {

    constructor(props) {
        super(props);
        this.recaptchaInstance;
        this.resetRecaptcha = this
            .resetRecaptcha
            .bind(this);
        this.onChangeCardNumber = this
            .onChangeCardNumber
            .bind(this);
        this.onChangeName = this
            .onChangeName
            .bind(this);
        this.onChangeValidThru = this
            .onChangeValidThru
            .bind(this);
        this.onChangeCVC = this
            .onChangeCVC
            .bind(this);
            this.onFocused = this.onFocused.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
        this.onChangeTypeahead = this.onChangeTypeahead.bind(this);
        this.onHandleComplete = this.onHandleComplete.bind(this)
        this.onOptionClick = this.onOptionClick.bind(this);
        this.onOptionChange = this.onOptionChange.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.moveNext = this.moveNext.bind(this);
        this.movePrev = this.movePrev.bind(this);

        this.state = {
            value: 'https://github.com/anterostecnologia',
            valueQrCode: '',
            number: '',
            name: '',
            expiry: '',
            cvc: '',
            focused: '',
            index: 0,
            timeout: 3000,
            remaining: null,
            isIdle: false,
            lastActive: null,
            elapsed: null
        };
        this.update = this
            .update
            .bind(this);
        this.updateQrCode = this
            .updateQrCode
            .bind(this);

        this.onActive = this.onActive.bind(this);
        this.onIdle = this.onIdle.bind(this);
        this.changeTimeout = this.changeTimeout.bind(this);            
        this.reset = this.reset.bind(this);            
        this.pause = this.pause.bind(this);            
        this.resume = this.resume.bind(this);
    }
    componentDidMount() {
        this.setState({...this.state,
            remaining: this.refs.idleTimer.getRemainingTime(),
            lastActive: this.refs.idleTimer.getLastActiveTime(),
            elapsed: this.refs.idleTimer.getElapsedTime()
          });
      
          setInterval(() => {
            this.setState({...this.state,
              remaining: this.refs.idleTimer.getRemainingTime(),
              lastActive: this.refs.idleTimer.getLastActiveTime(),
              elapsed: this.refs.idleTimer.getElapsedTime()
            });
          }, 1000);
    }
    

    openLightbox() {
        this.setState({...this.state, isOpen: true });
      }
    
      closeLightbox() {
        this.setState({...this.state, isOpen: false });
      }
    
      moveNext() {
        this.setState({...this.state, index: (this.state.index + 1) % images.length });
      }
    
      movePrev() {
        this.setState({...this.state,
          index: (this.state.index + images.length - 1) % images.length,
        });
      }

    onChangeCardNumber(value) {
        this.setState({
            ...this.state,
            number: value
        });
    }

    onChangeName(event, value) {
        this.setState({
            ...this.state,
            name: value
        });
    }
    onChangeValidThru(value) {
        this.setState({
            ...this.state,
            expiry: value
        });
    }
    onChangeCVC(value) {
        this.setState({
            ...this.state,
            cvc: value
        });
    }

    callback() {
        console.log('Done!!!!');
    };

    verifyCallback(response) {
        console.log(response);
    };

    expiredCallback() {
        console.log(`Recaptcha expired`);
    };

    resetRecaptcha() {
        this
            .recaptchaInstance
            .reset();
    };

    update(event) {
        this.setState({...this.state, value: event.target.value});
    }

    updateQrCode(event) {
        this.setState({...this.state, valueQrCode: event.target.value});
    }

    onFocused(event){
        this.setState({...this.state, focused: event.target.id});
    }

    onChangeSelection(value){
      console.log(value);
    }

    onChangeTypeahead(value){
        this.setState({...this.state, inputValue: value});
    }

    onHandleComplete(event, completedInputValue) {
        this.setState({...this.state,inputValue: completedInputValue});
    }

    onOptionClick(event, value, index){
        this.setState({...this.state,inputValue: value}); 
    }
    onOptionChange(event,value){
        this.setState({...this.state,inputValue: value});  
    }

    onActive(){
        this.setState({ isIdle: false });
      }
    
    onIdle(){
        this.setState({ isIdle: true });
      }
    
    changeTimeout() {
        this.setState({
          timeout: this.refs.timeoutInput.state.value()
        });
      }
    
    reset() {
        this.refs.idleTimer.reset();
      }
    
    pause() {
        this.refs.idleTimer.pause();
      }
    
    resume() {
        this.refs.idleTimer.resume();
      }

      onKonami() {
        this.setState({konamiTime: true});
      }
    
      commandDown() {
        console.log('comm down');
      }
    
      commandUp() {
        console.log('comm up');
      }
    

    render() {
        const handlers = {
            'konami': this.onKonami.bind(this),
            'commandDown': this.commandDown.bind(this),
            'commandUp': this.commandUp.bind(this)
          };

        let lightbox;
        if (this.state.isOpen) {
          lightbox = (
            <AnterosImageLightbox
              mainSrc={images[this.state.index]}
              nextSrc={images[(this.state.index + 1) % images.length]}
              prevSrc={
                images[(this.state.index + images.length - 1) % images.length]
              }
              mainSrcThumbnail={thumbs[this.state.index]}
              nextSrcThumbnail={thumbs[(this.state.index + 1) % images.length]}
              prevSrcThumbnail={
                thumbs[(this.state.index + images.length - 1) % images.length]
              }
              onCloseRequest={this.closeLightbox}
              onMovePrevRequest={this.movePrev}
              onMoveNextRequest={this.moveNext}
              imageTitle={titles[this.state.index]}
            />
          );
        }


        const {name, number, expiry, cvc, focused} = this.state;
        return (
            <AnterosCard caption="Miscellaneous">
                <AnterosPanel>
                    <h1>Google Recaptcha</h1>
                    <AnterosRecaptcha
                        ref={e => this.recaptchaInstance = e}
                        sitekey={sitekey}
                        size="compact"
                        render="explicit"
                        verifyCallback={this.verifyCallback}
                        onloadCallback={this.callback}
                        expiredCallback={this.expiredCallback}/>

                    <AnterosButton primary onClick={this.resetRecaptcha}>
                        Reset
                    </AnterosButton>
                </AnterosPanel>

                <AnterosPanel>
                    <div>
                        <div>
                            <input
                                type="text"
                                style={{
                                width: 300 + 'px'
                            }}
                                onChange={this.update}
                                value={this.state.value}/>
                        </div>

                        <AnterosBarcode
                            value={this.state.value}
                            width={this.state.width}
                            height={this.state.height}
                            format={this.state.format}
                            displayValue={this.state.displayValue}
                            fontOptions={this.state.fontOptions}
                            font={this.state.font}
                            textAlign={this.state.center}
                            textPosition={this.state.textPosition}
                            textMargin={this.state.textMargin}
                            fontSize={this.state.fontSize}
                            background={this.state.background}
                            lineColor={this.state.lineColor}
                            margin={this.state.margin}
                            marginTop={this.state.marginTop}
                            marginBottom={this.state.marginBottom}
                            marginLeft={this.state.marginLeft}
                            marginRight={this.state.marginRight}/>
                    </div>
                </AnterosPanel>
                <AnterosPanel>
                    <div className='application'>
                        <AnterosEdit
                            className='qrcode-input'
                            onChange={this.updateQrCode}
                            value={this.state.valueQrCode}
                            placeholder="input string"/>
                        <AnterosQRCode
                            className='qrcode'
                            value={this.state.valueQrCode}
                            size={300}
                            fgColor='black'
                            bgColor='white'
                            logoWidth="100"
                            logoHeight="100"
                            logo='https://avatars1.githubusercontent.com/u/16067889?s=200&v=4'/>
                    </div>
                </AnterosPanel>
                <AnterosPanel>
                    <AnterosTimeSlider
                        startTimestamp={new Date().getTime() - 3600 * 12 * 1000}
                        initCells={[
                        {
                            '_id': 'c1',
                            'start': (new Date().getTime() - (3600 * 5.4 * 1000) + 1234),
                            'stop': new Date().getTime() - 3600 * 3.2 * 1000,
                            'style': {
                                'background-color': '#76C4FF'
                            }
                        }, {
                            '_id': 'c2',
                            'start': (new Date().getTime() - (3600 * 2.1 * 1000))
                        }
                    ]}/>
                    <AnterosTimeSlider
                        updateTimestampInterval={10}
                        updateInterval={10}
                        showMs={true}
                        hoursPerRuler={9}
                        graduationStep={6}
                        startTimestamp={new Date().getTime() - 3600 * 7 * 1000}
                        init_cells={[
                        {
                            '_id': 'c1',
                            'start': (new Date().getTime() - (3600 * 6.2 * 1000) + 5678),
                            'stop': new Date().getTime() - 3600 * 4.8 * 1000
                        }, {
                            '_id': 'c2',
                            'start': (new Date().getTime() - (3600 * 3.1 * 1000) + 864),
                            'stop': new Date().getTime()
                        }
                    ]}/>
                </AnterosPanel>

                <AnterosPanel>
                    <AnterosCreditCard
                        number={number}
                        name={name}
                        expiry={expiry}
                        cvc={cvc}
                        focused={focused}
                        callback={this.handleCallback}/>

                    <AnterosForm>
                        <AnterosRow>
                            <AnterosCol>
                                <AnterosFormGroup>
                                    <AnterosLabel caption="Credit card number" small={2} />
                                    <AnterosMaskEdit
                                        id="number"
                                        mask="9999 9999 9999 9999"
                                        small={9}
                                        value={number}
                                        onChange={this.onChangeCardNumber}
                                        onFocus={this.onFocused}/>
                                </AnterosFormGroup>
                                <AnterosFormGroup>
                                    <AnterosLabel caption="Name" small={2}/>
                                    <AnterosEdit id="name" value={name} small={9} onChange={this.onChangeName} onFocus={this.onFocused}/>
                                </AnterosFormGroup>
                                <AnterosFormGroup>
                                    <AnterosLabel caption="Valid Thru" small={2}/>
                                    <AnterosMaskEdit
                                        id="expiry"
                                        mask="99/99"
                                        value={expiry}
                                        small={9}
                                        onFocus={this.onFocused}
                                        onChange={this.onChangeValidThru}/>
                                </AnterosFormGroup>
                                <AnterosFormGroup>
                                    <AnterosLabel caption="CVC" small={2}/>
                                    <AnterosMaskEdit id="cvc" mask="999" value={cvc} small={9} onChange={this.onChangeCVC} onFocus={this.onFocused}/>
                                </AnterosFormGroup>
                            </AnterosCol>
                        </AnterosRow>
                    </AnterosForm>

                </AnterosPanel>
                <AnterosPanel>
                    <AnterosMultiSelect searchEnabled={true} onChangeSelection={this.onChangeSelection}>
                        <AnterosMultiSelectOption>{"Apple"}</AnterosMultiSelectOption>
                        <AnterosMultiSelectOption>{"Banana"}</AnterosMultiSelectOption>
                        <AnterosMultiSelectOption>{"Blueberry"}</AnterosMultiSelectOption>
                        <AnterosMultiSelectOption>{"Cherry"}</AnterosMultiSelectOption>
                        <AnterosMultiSelectOption>{"Coconut"}</AnterosMultiSelectOption>
                        <AnterosMultiSelectOption>{"Grapefruit"}</AnterosMultiSelectOption>
                        <AnterosMultiSelectOption>{"Kiwi"}</AnterosMultiSelectOption>
                        <AnterosMultiSelectOption>{"Lemon"}</AnterosMultiSelectOption>
                        <AnterosMultiSelectOption>{"Lime"}</AnterosMultiSelectOption> 
                        <AnterosMultiSelectOption>{"Mango"}</AnterosMultiSelectOption>
                        <AnterosMultiSelectOption>{"Orange"}</AnterosMultiSelectOption>
                        <AnterosMultiSelectOption>{"Papaya"}</AnterosMultiSelectOption>/>
                    </AnterosMultiSelect>
                </AnterosPanel>
                <AnterosPanel>
                    <AnterosTypeahead 
                    width="400px"
                    options={options} 
                    inputValue={this.state.inputValue} 
                    onChange={this.onChangeTypeahead}
                    onComplete={this.onHandleComplete}
                    onOptionChange={this.onOptionChange}
                    onOptionClick={this.onOptionClick}/>
                </AnterosPanel>
                <AnterosPanel>
                    <AnterosYoutubeSuggest/>
                </AnterosPanel>
                <AnterosPanel>
                    <AnterosNetflixSuggest/>
                </AnterosPanel> 

                <AnterosPanel>
                    <div>
                        Scroll to load images.
                        <div className="filler" />
                        <AnterosLazyLoad height={762} offsetVertical={300}>
                            <img src='http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg' />
                        </AnterosLazyLoad>
                        <div className="filler" />
                        <AnterosLazyLoad height={683} offsetVertical={300}>
                            <img src='http://apod.nasa.gov/apod/image/1502/2015_02_20_conj_bourque1024.jpg' />
                        </AnterosLazyLoad>
                        <div className="filler" />
                        <div className="ScrollableContainer">
                        <div className="filler" />
                        <div className="filler" />
                        <div className="filler" />
                        <AnterosLazyLoad height={480}>
                            <img src='http://apod.nasa.gov/apod/image/1502/MarsPlume_jaeschke_480.gif' />
                        </AnterosLazyLoad>
                        </div>
                        <div className="filler" />
                        <AnterosLazyLoad height={720} offsetVertical={300}>
                            <img src='http://apod.nasa.gov/apod/image/1502/ToadSky_Lane_1080_annotated.jpg' />
                        </AnterosLazyLoad>
                        <div className="filler" />
                    </div>
                </AnterosPanel>

                <AnterosPanel>
                    <div>
                        <AnterosButton
                            id="open-lightbox"
                            onButtonClick={this.openLightbox}>
                                Open Lightbox
                        </AnterosButton>
                        {lightbox}
                    </div>
                </AnterosPanel>

                <AnterosPanel>
                    <AnterosTimeAgo datetime={'2017-04-22'}
                        style={{textDecoration: 'underline', color: 'blue'}}/>
                    <AnterosTimeAgo datetime={new Date().getTime() - 1000 * 11}
                           live={false} />   
                </AnterosPanel>

                <AnterosPanel>
				    <AnterosImageMapper src={URL} map={MAP} width={500}/>
                </AnterosPanel>

                <AnterosPanel>
                    <AnterosIdleTimer
                        ref="idleTimer"
                        activeAction={this.onActive}
                        idleAction={this.onIdle}
                        timeout={this.state.timeout}
                        startOnLoad={true}
                        format="MM-DD-YYYY HH:MM:ss.SSS">

                        <div>

                        <div>
                            <h1>Timeout: {this.state.timeout}ms</h1>
                            <h1>Time Remaining: {this.state.remaining}</h1>
                            <h1>Time Elapsed: {this.state.elapsed}</h1>
                            <h1>Last Active: {this.state.lastActive}</h1>
                            <h1>Idle: {this.state.isIdle.toString()}</h1>
                        </div>

                        <AnterosIdleTimer />

                        <div>
                            <button onClick={this.reset}>RESET</button>
                            <button onClick={this.pause}>PAUSE</button>
                            <button onClick={this.resume}>RESUME</button>
                        </div>

                        </div>

                    </AnterosIdleTimer>
                </AnterosPanel>
                <AnterosPanel>
                    <div className="tips">
                    <ul>
                        <li>Select a node and move it with your arrow keys</li>
                        <li>Expand or contract a node with `alt+up` or `alt+down` respectively</li>
                        <li>Delete a node with `delete` or `backspace`</li>
                        <li>How about the konami code? `up up down down left right left right b a enter`</li>
                    </ul>
                    </div>
                    <AnterosHotKeys keyMap={keyMap} handlers={handlers} className={'viewport ' + (this.state && this.state.konamiTime ? 'konamiTime' : '')}>
                        {Array.apply(null, new Array(10)).map((e, i) => <Node key={i} />)}
                    </AnterosHotKeys>
                </AnterosPanel>
                
            </AnterosCard>

        );
    }
}


class Node extends React.Component {

    constructor() {
      super();
      this.state = {
        pos: [
          lodash.random(0, window.innerWidth - DEFAULT_NODE_SIZE),
          lodash.random(0, window.innerHeight - DEFAULT_NODE_SIZE)
        ],
        size: DEFAULT_NODE_SIZE,
        deleted: false
      };
    }
  
    move(x = 0, y = 0) {
      this.setState(({pos}) => ({pos: [pos[0] + (x * POS_INCREMENT), pos[1] + (y * POS_INCREMENT)]}));
    }
  
    resize(expansion = 0) {
      this.setState((state) => ({size: state.size + (expansion * SIZE_INCREMENT)}));
    }
  
    requestDelete() {
      this.setState({deleted: true});
    }
  
    render() {
      const handlers = {
        'up': this.move.bind(this, 0, -1),
        'down': this.move.bind(this, 0, 1),
        'left': this.move.bind(this, -1, 0),
        'right': this.move.bind(this, 1, 0),
        'delete': this.requestDelete.bind(this),
        'expand': this.resize.bind(this, 1),
        'contract': this.resize.bind(this, -1)
      };
  
      const {size, pos, deleted} = this.state;
      const [x, y] = pos;
  
      const style = {
        width: size,
        height: size,
        left: x,
        top: y,
        opacity: deleted ? 0.2 : 1
      };
  
      return (
        <AnterosHotKeys tabIndex="0" handlers={handlers} className="node" style={style}>
          Node
        </AnterosHotKeys>
      );
    }
  
  }

