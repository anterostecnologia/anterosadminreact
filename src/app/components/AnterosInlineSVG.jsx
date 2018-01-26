import React from 'react';
import PropTypes from 'prop-types';
import httpplease from 'httpplease';
import ieXDomain from 'httpplease/plugins/oldiexdomain';

const http = httpplease.use(ieXDomain);

const Status = {
    PENDING: 'pending',
    LOADING: 'loading',
    LOADED: 'loaded',
    FAILED: 'failed',
    UNSUPPORTED: 'unsupported'
};

export const supportsInlineSVG = once(() => {
    /* istanbul ignore next */
    if (!document) {
        return false;
    }

    const div = document.createElement('div');
    div.innerHTML = '<svg />';
    return div.firstChild && div.firstChild.namespaceURI === 'http://www.w3.org/2000/svg';
});

export const isSupportedEnvironment = once(() => ((typeof window !== 'undefined' && window !== null
    ? window.XMLHttpRequest
    : false) || (typeof window !== 'undefined' && window !== null
    ? window.XDomainRequest
    : false)) && supportsInlineSVG());

export const randomString = (length = 8) => {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const charset = letters + letters.toUpperCase() + numbers;

    const randomCharacter = array => array[Math.floor(Math.random() * array.length)];

    let R = '';
    for (let i = 0; i < length; i++) {
        R += randomCharacter(charset);
    }
    return R;
};

export const uniquifySVGIDs = (() => {
    const mkAttributePattern = attr => `(?:(?:\\s|\\:)${attr})`;

    const idPattern = new RegExp(`(?:(${ (mkAttributePattern('id'))})="([^"]+)")|(?:(${ (mkAttributePattern('href'))}|${ (mkAttributePattern('role'))}|${ (mkAttributePattern('arcrole'))})="\\#([^"]+)")|(?:="url\\(\\#([^\\)]+)\\)")`, 'g');

    return (svgText, svgID) => {
        const uniquifyID = id => `${id}___${svgID}`;

        return svgText.replace(idPattern, (m, p1, p2, p3, p4, p5) => { //eslint-disable-line consistent-return
            /* istanbul ignore else */
            if (p2) {
                return `${p1}="${ (uniquifyID(p2))}"`;
            } else if (p4) {
                return `${p3}="#${ (uniquifyID(p4))}"`;
            } else if (p5) {
                return `="url(#${ (uniquifyID(p5))})"`;
            }
        });
    };
})();

class AnterosInlineSVGError extends Error {
    constructor(message) {
        super();

        this.name = 'InlineSVGError';
        this.isSupportedBrowser = true;
        this.isConfigurationError = false;
        this.isUnsupportedBrowserError = false;
        this.message = message;

        return this;
    }
}

const createError = (message, attrs) => {
    const err = new AnterosInlineSVGError(message);

    return {
        ...err,
        ...attrs
    };
};

const unsupportedBrowserError = message => {
    let newMessage = message;

    /* istanbul ignore else */
    if (!newMessage) {
        newMessage = 'Unsupported Browser';
    }

    return createError(newMessage, {
        isSupportedBrowser: false,
        isUnsupportedBrowserError: true
    });
};

export const configurationError = message => createError(message, {isConfigurationError: true});

const getRequestsByUrl = {};
const loadedIcons = {};

export class AnterosInlineSVG extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
        this.getFile = this.getFile.bind(this);
        this.fail = this.fail.bind(this);
        this.startLoad = this.startLoad.bind(this);
        this.load = this.load.bind(this);
        this.getClassName = this.getClassName.bind(this);
        this.processSVG = this.processSVG.bind(this);
        this.renderContents = this.renderContents.bind(this);

        this.state = {
            status: Status.PENDING
        };

        this.isActive = false;
    }

    componentWillMount() {
        this.isActive = true;
    }

    componentDidMount() {
        /* istanbul ignore else */
        if (this.state.status === Status.PENDING) {
            if (this.props.supportTest()) {
                if (this.props.src) {
                    this.startLoad();
                } else {
                    this.fail(configurationError('Missing source'));
                }
            } else {
                this.fail(unsupportedBrowserError());
            }
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.src !== this.props.src) {
            if (this.props.src) {
                this.startLoad();
            } else {
                this.fail(configurationError('Missing source'));
            }
        }
    }

    componentWillUnmount() {
        this.isActive = false;
    }

    getFile(callback) {
        const {cacheGetRequests, src} = this.props;

        if (cacheGetRequests) {
            if (loadedIcons[src]) {
                const [err,
                    res] = loadedIcons[src];

                setTimeout(() => callback(err, res, true), 0);
            }

            if (!getRequestsByUrl[src]) {
                getRequestsByUrl[src] = [];

                http.get(src, (err, res) => {
                    getRequestsByUrl[src].forEach(cb => {
                        loadedIcons[src] = [err, res];
                        cb(err, res);
                    });
                });
            }

            getRequestsByUrl[src].push(callback);
        } else {
            http.get(src, (err, res) => {
                callback(err, res);
            });
        }
    }

    fail(error) {
        const status = error.isUnsupportedBrowserError
            ? Status.UNSUPPORTED
            : Status.FAILED;

        /* istanbul ignore else */
        if (this.isActive) {
            this.setState({
                status
            }, () => {
                if (typeof this.props.onError === 'function') {
                    this
                        .props
                        .onError(error);
                }
            });
        }
    }

    startLoad() {
        /* istanbul ignore else */
        if (this.isActive) {
            this.setState({
                status: Status.LOADING
            }, this.load);
        }
    }

    load() {
        const match = this
            .props
            .src
            .match(/data:image\/svg[^,]*?(;base64)?,(.*)/);

        if (match) {
            return this.handleLoad(null, {
                text: match[1]
                    ? atob(match[2])
                    : decodeURIComponent(match[2])
            });
        }

        return this.getFile(this.handleLoad);
    }

    handleLoad(err, res, isCached = false) {
        if (err) {
            this.fail(err);
            return;
        }

        if (this.isActive) {
            this.setState({
                loadedText: res.text,
                status: Status.LOADED
            }, () => {
                this
                    .props
                    .onLoad(this.props.src, isCached);
            });
        }
    };

    getClassName() {
        let className = `isvg ${this.state.status}`;

        if (this.props.className) {
            className += ` ${this.props.className}`;
        }

        return className;
    }

    processSVG(svgText) {
        const {uniquifyIDs, uniqueHash} = this.props;

        if (uniquifyIDs) {
            return uniquifySVGIDs(svgText, uniqueHash);
        }

        return svgText;
    }

    renderContents() {
        switch (this.state.status) {
            case Status.UNSUPPORTED:
            case Status.FAILED:
                return this.props.children;
            default:
                return this.props.preloader;
        }
    }

    render() {
        let content;
        let html;

        if (this.state.loadedText) {
            html = {
                __html: this.processSVG(this.state.loadedText)
            };
        } else {
            content = this.renderContents();
        }

        return this
            .props
            .wrapper({
                style: this.props.style,
                className: this.getClassName(),
                dangerouslySetInnerHTML: html
            }, content);
    }
}

AnterosInlineSVG.propTypes = {
    cacheGetRequests: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    onError: PropTypes.func,
    onLoad: PropTypes.func,
    preloader: PropTypes.node,
    src: PropTypes.string.isRequired,
    style: PropTypes.object,
    supportTest: PropTypes.func,
    uniqueHash: PropTypes.string,
    uniquifyIDs: PropTypes.bool,
    wrapper: PropTypes.func
};

AnterosInlineSVG.defaultProps = {
    cacheGetRequests: false,
    onLoad: () => {},
    supportTest: isSupportedEnvironment,
    uniquifyIDs: true,
    uniqueHash: randomString(),
    wrapper: React.createFactory('span')
};