import React, { Component } from 'react';
import AnterosNavigatorLink from "./AnterosNavigatorLink";
import lodash from 'lodash';
import { AnterosError } from "./AnterosExceptions";

const BASE_SHIFT = 0;
const TITLE_SHIFT = 1;

const TITLES = {
    first: 'Primeira',
    prev: '\u00AB',
    prevSet: '...',
    nextSet: '...',
    next: '\u00BB',
    last: 'Última',
};


class AnterosPagination extends Component {
    constructor(props) {
        super(props);

        this.handleFirstPage = this.handleFirstPage.bind(this);
        this.handlePreviousPage = this.handlePreviousPage.bind(this);
        this.handleNextPage = this.handleNextPage.bind(this);
        this.handleLastPage = this.handleLastPage.bind(this);
        this.handleMorePrevPages = this.handleMorePrevPages.bind(this);
        this.handleMoreNextPages = this.handleMoreNextPages.bind(this);
        this.handlePageChanged = this.handlePageChanged.bind(this);
    }


    getTitles(key) {
        let title = this.props.titles[key];
        if (title==undefined)
            title = TITLES[key];
        return title;    
    }

    getImages(key) {
        if (this.props.images)
            return this.props.images[key];
        return null;
    }

    getIcons(key) {
        if (this.props.icons)
            return this.props.icons[key];
        return null;
    }

    calcBlocks() {
        const props = this.props;
        const total = props.total;
        const blockSize = props.visiblePages;
        const current = props.current + TITLE_SHIFT;
        const blocks = Math.ceil(total / blockSize);
        const currBlock = Math.ceil(current / blockSize) - TITLE_SHIFT;

        return {
            total: blocks,
            current: currBlock,
            size: blockSize,
        };
    }

    isPrevDisabled() {
        return this.props.current <= BASE_SHIFT;
    }

    isNextDisabled() {
        return this.props.current >= (this.props.total - TITLE_SHIFT);
    }

    isPrevMoreHidden() {
        const blocks = this.calcBlocks();
        return (blocks.total === TITLE_SHIFT) || (blocks.current === BASE_SHIFT);
    }

    isNextMoreHidden() {
        const blocks = this.calcBlocks();
        return (blocks.total === TITLE_SHIFT) || (blocks.current === (blocks.total - TITLE_SHIFT));
    }

    visibleRange() {
        const blocks = this.calcBlocks();
        const start = blocks.current * blocks.size;
        const delta = this.props.total - start;
        const end = start + ((delta > blocks.size) ? blocks.size : delta);

        return [start + TITLE_SHIFT, end + TITLE_SHIFT];
    }


    handleFirstPage() {
        if (!this.isPrevDisabled()) {
            this.handlePageChanged(BASE_SHIFT);
        }
    }

    handlePreviousPage() {
        if (!this.isPrevDisabled()) {
            this.handlePageChanged(this.props.current - TITLE_SHIFT);
        }
    }

    handleNextPage() {
        if (!this.isNextDisabled()) {
            this.handlePageChanged(this.props.current + TITLE_SHIFT);
        }
    }

    handleLastPage() {
        if (!this.isNextDisabled()) {
            this.handlePageChanged(this.props.total - TITLE_SHIFT);
        }
    }

    handleMorePrevPages() {
        const blocks = this.calcBlocks();
        this.handlePageChanged((blocks.current * blocks.size) - TITLE_SHIFT);
    }

    handleMoreNextPages() {
        const blocks = this.calcBlocks();
        this.handlePageChanged((blocks.current + TITLE_SHIFT) * blocks.size);
    }

    handlePageChanged(num) {
        const handler = this.props.onPageChanged;
        if (handler) handler(num);
    }


    renderPages(pair) {
        return range(pair[0], pair[1]).map((num, idx) => {
            const current = num - TITLE_SHIFT;
            const onClick = this.handlePageChanged.bind(this, current);
            const active = (this.props.current === current);

            return (
                <AnterosPaginationPage
                    key={idx}
                    index={idx}
                    active={active}
                    className="btn-numbered-page"
                    onClick={onClick}
                    caption={num}>
                </AnterosPaginationPage>
            );
        });
    }


    render() {
        if (!this.props.children) {
            if (!this.props.total || this.props.total == 0) {
                throw new AnterosError("Informe o número total de página do navegador.");
            }
            if (!this.props.visiblePages || this.props.visiblePages == 0) {
                throw new AnterosError("Informe o número de páginas visíveis por bloco no navegador.");
            }

        }
        const titles = this.getTitles.bind(this);
        const images = this.getImages.bind(this);
        const icons = this.getIcons.bind(this);
        let className = "pagination";
        if (this.props.large) {
            className += " pagination-lg";
        }
        if (this.props.small) {
            className += " pagination-sm";
        }

        if (this.props.className) {
            className += " " + this.props.className;
        }

        if (this.props.children) {
            return (<nav>
                <ul className={className}>
                    {this.props.children}
                </ul>
            </nav>)
        } else {
            return (
                <nav>
                    <ul className={className}>
                        <AnterosPaginationPage
                            className="btn-first-page"
                            key="btn-first-page"
                            disabled={this.isPrevDisabled()}
                            onClick={this.handleFirstPage}
                            image={images('first')}
                            icon={icons('first')}
                            caption={titles('first')}>
                        </AnterosPaginationPage>

                        <AnterosPaginationPage
                            className="btn-prev-page"
                            key="btn-prev-page"
                            disabled={this.isPrevDisabled()}
                            onClick={this.handlePreviousPage}
                            image={images('prev')}
                            icon={icons('prev')}
                            caption={titles('prev')}>
                        </AnterosPaginationPage>

                        <AnterosPaginationPage
                            className="btn-prev-more"
                            key="btn-prev-more"
                            hidden={this.isPrevMoreHidden()}
                            onClick={this.handleMorePrevPages}
                            image={images('prevSet')}
                            icon={icons('prevSet')}
                            caption={titles('prevSet')}>
                        </AnterosPaginationPage>

                        {this.renderPages(this.visibleRange())}

                        <AnterosPaginationPage
                            className="btn-next-more"
                            key="btn-next-more"
                            hidden={this.isNextMoreHidden()}
                            onClick={this.handleMoreNextPages}
                            image={images('nextSet')}
                            icon={icons('nextSet')}
                            caption={titles('nextSet')}>
                        </AnterosPaginationPage>

                        <AnterosPaginationPage
                            className="btn-next-page"
                            key="btn-next-page"
                            disabled={this.isNextDisabled()}
                            onClick={this.handleNextPage}
                            image={images('next')}
                            icon={icons('next')}
                            caption={titles('next')}>
                        </AnterosPaginationPage>

                        <AnterosPaginationPage
                            className="btn-last-page"
                            key="btn-last-page"
                            disabled={this.isNextDisabled()}
                            onClick={this.handleLastPage}
                            image={images('last')}
                            icon={icons('last')}
                            caption={titles('last')}>
                        </AnterosPaginationPage>
                    </ul>
                </nav>);
        }
    }
}

AnterosPagination.propTypes = {
    current: React.PropTypes.number,
    total: React.PropTypes.number,
    visiblePages: React.PropTypes.number,
    titles: React.PropTypes.object,
    images: React.PropTypes.object,
    icons: React.PropTypes.object,
    onPageChanged: React.PropTypes.func,
    large: React.PropTypes.bool,
    small: React.PropTypes.bool
};

AnterosPagination.defaultProps = {
    titles: TITLES,
    current: 1
};


export class AnterosPaginationPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.hidden) return null;
        const baseCss = this.props.className ? `${this.props.className} ` : '';
        const fullCss = `${baseCss}${this.props.active ? ' active' : ''}${this.props.disabled ? ' disabled' : ''}${' page-item'}`;

        let icon;
        if (this.props.icon) {
            icon = (<i className={this.props.icon}></i>);
        }

        return (
            <li key={this.props.index} className={fullCss}>
                <a href={this.props.href} className="page-link" onClick={this.props.onClick}>{icon}<img src={this.props.image}/> {this.props.caption}</a>
            </li>
        );
    }
};

AnterosPaginationPage.propTypes = {
    hidden: React.PropTypes.bool,
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    className: React.PropTypes.string,
    onClick: React.PropTypes.func,
    image: React.PropTypes.string,
    icon: React.PropTypes.string,
    href: React.PropTypes.string
};


function range(start, end) {
    const res = [];
    for (let i = start; i < end; i++) {
        res.push(i);
    }

    return res;
}

export default AnterosPagination;


