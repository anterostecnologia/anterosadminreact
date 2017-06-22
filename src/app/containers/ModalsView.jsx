

import React, { Component } from 'react';
import AnterosCard, { AnterosCardDeck, HeaderActions } from "../components/AnterosCard";
import AnterosPageControl from "../components/AnterosPageControl";
import AnterosTable, { AnterosTableColumn } from "../components/AnterosTable";
import AnterosButton from "../components/AnterosButton";
import AnterosImage from "../components/AnterosImage";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import AnterosCollapseContent from '../components/AnterosCollapseContent';
import AnterosBadge from "../components/AnterosBadge";
import AnterosProgressBar from "../components/AnterosProgressBar";
import AnterosModal, { ModalActions } from "../components/AnterosModal";

const data = [{
    "id": 1,
    "first_name": "Justine",
    "last_name": "Pineaux",
    "email": "jpineaux0@indiatimes.com"
}, {
    "id": 2,
    "first_name": "Stacy",
    "last_name": "Whistance",
    "email": "swhistance1@eventbrite.com"
}, {
    "id": 3,
    "first_name": "Aldin",
    "last_name": "Huller",
    "email": "ahuller2@si.edu",
}];

export default class ModalsView extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = { openModal: null, openModalNested: false };
        this.onClose = this.onClose.bind(this);
        this.onClickCancel = this.onClickCancel.bind(this);
        this.onClickOk = this.onClickOk.bind(this);
    }

    onClick(event) {
        if (event.target.getAttribute("data-user") == "modalIconNested") {
            this.setState({ ...this.state, modalOpenNested: true });
        } else {
            this.setState({ modalOpen: event.target.getAttribute("data-user"), modalOpenNested: false });
        }
    }

    onClose(modal) {
        if (modal.props.id == "modalIconNested") {
            this.setState({
                ...this.state,
                modalOpenNested: false
            });
        } else {
            this.setState({
                ...this.state,
                modalOpen: null
            });
        }
    }

    onClickOk(event) {
        if (this.state.modalOpenNested) {
            this.setState({ ...this.state, modalOpenNested: false });
        } else {
            this.setState({ ...this.state, modalOpen: null });
        }
    }

    onClickCancel(event) {
        if (this.state.modalOpenNested) {
            this.setState({ ...this.state, modalOpenNested: false });
        } else {
            this.setState({ ...this.state,modalOpen: null });
        }
    }


    render() {
        return (
            <div>
                <AnterosCardDeck>
                    <AnterosCard caption="Basic">
                        <AnterosButton id="btnBasic" dataUser="modalBasic" secondary caption="Basic" onClick={this.onClick} />
                        <AnterosButton id="btnIcon" dataUser="modalIcon" secondary caption="Icon" onClick={this.onClick} />
                        <AnterosButton id="btnCenterIcon" dataUser="modalCenterIcon" secondary caption="Center icon" onClick={this.onClick} />
                        <AnterosButton id="btnNoTitle" dataUser="modalWithoutTitle" secondary caption="No title" onClick={this.onClick} />
                        <AnterosButton id="btnNoFooter" dataUser="modalWithoutFooter" secondary caption="No footer" onClick={this.onClick} />
                        <AnterosButton id="btnCenter" dataUser="modalCenter" secondary caption="Center" onClick={this.onClick} />
                    </AnterosCard>
                    <AnterosCard caption="Sizes">
                        <AnterosButton id="btnExtraSmall" dataUser="modalExtraSmall" secondary caption="Extra small" onClick={this.onClick} />
                        <AnterosButton id="btnSmall" dataUser="modalSmall" secondary caption="Small" onClick={this.onClick} />
                        <AnterosButton id="btnMedium" dataUser="modalMedium" secondary caption="Medium" onClick={this.onClick} />
                        <AnterosButton id="btnLarge" dataUser="modalLarge" secondary caption="Large" onClick={this.onClick} />
                        <AnterosButton id="btnFull" dataUser="modalFull" secondary caption="Full" onClick={this.onClick} />
                    </AnterosCard>
                </AnterosCardDeck>

                <AnterosCardDeck>
                    <AnterosCard caption="Contextual">
                        <AnterosButton id="btnContextualPrimary" dataUser="contextualPrimary" primary caption="Primary" onClick={this.onClick} />
                        <AnterosButton id="btnContextualSuccess" dataUser="contextualSuccess" success caption="Success" onClick={this.onClick} />
                        <AnterosButton id="btnContextualInfo" dataUser="contextualInfo" info caption="Info" onClick={this.onClick} />
                        <AnterosButton id="btnContextualWarning" dataUser="contextualWarning" warning caption="Warning" onClick={this.onClick} />
                        <AnterosButton id="btnContextualDanger" dataUser="contextualDanger" danger caption="Danger" onClick={this.onClick} />
                        <AnterosButton id="btnContextualInverse" dataUser="contextualInverse" inverse caption="Inverse" onClick={this.onClick} />
                    </AnterosCard>
                    <AnterosCard caption="Custom size">
                        <AnterosButton id="btnCustomWidth" dataUser="customWidth" caption="Custom width" onClick={this.onClick} />
                        <AnterosButton id="btnCustomHeight" dataUser="customHeight" caption="Custom height" onClick={this.onClick} />
                    </AnterosCard>

                </AnterosCardDeck>

                <AnterosCardDeck>
                    <AnterosCard caption="Contextual Header Color">
                        <AnterosButton id="btnContextualHeaderPrimary" dataUser="contextualHeaderPrimary" primary caption="Primary" onClick={this.onClick} />
                        <AnterosButton id="btnContextualHeaderSuccess" dataUser="contextualHeaderSuccess" success caption="Success" onClick={this.onClick} />
                        <AnterosButton id="btnContextualHeaderInfo" dataUser="contextualHeaderInfo" info caption="Info" onClick={this.onClick} />
                        <AnterosButton id="btnContextualHeaderWarning" dataUser="contextualHeaderWarning" warning caption="Warning" onClick={this.onClick} />
                        <AnterosButton id="btnContextualHeaderDanger" dataUser="contextualHeaderDanger" danger caption="Danger" onClick={this.onClick} />
                        <AnterosButton id="btnContextualHeaderInverse" dataUser="contextualHeaderInverse" inverse caption="Inverse" onClick={this.onClick} />
                    </AnterosCard>
                    <AnterosCard caption="Form">
                        <AnterosButton id="btnForm" dataUser="modalForm" caption="Open form" onClick={this.onClick} />
                    </AnterosCard>
                </AnterosCardDeck>

                <AnterosCardDeck>
                    <AnterosCard caption="Contextual Full Color">
                        <AnterosButton id="btnContextualFullPrimary" dataUser="contextualFullPrimary" primary caption="Primary" onClick={this.onClick} />
                        <AnterosButton id="btnContextualFullSuccess" dataUser="contextualFullSuccess" success caption="Success" onClick={this.onClick} />
                        <AnterosButton id="btnContextualFullInfo" dataUser="contextualFullInfo" info caption="Info" onClick={this.onClick} />
                        <AnterosButton id="btnContextualFullWarning" dataUser="contextualFullWarning" warning caption="Warning" onClick={this.onClick} />
                        <AnterosButton id="btnContextualFullDanger" dataUser="contextualFullDanger" danger caption="Danger" onClick={this.onClick} />
                        <AnterosButton id="btnContextualFullInverse" dataUser="contextualFullInverse" inverse caption="Inverse" onClick={this.onClick} />
                    </AnterosCard>
                    <AnterosCard caption="Nested modal">
                        <AnterosButton id="btnNestedModal" dataUser="nestedModal" caption="Open nested modal" onClick={this.onClick} />
                    </AnterosCard>
                </AnterosCardDeck>



                <AnterosModal id="modalBasic"
                    title="Are you sure?"
                    isOpen={this.state.modalOpen == "modalBasic"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <ModalActions>
                        <AnterosButton success onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton danger onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="modalIcon"
                    title="Are you sure?"
                    text="Are you sure that you want to delete this image?"
                    icon="fa fa-question-circle-o fa-3x"
                    iconColor="red"
                    isOpen={this.state.modalOpen == "modalIcon"} onClose={this.onClose}>
                    <ModalActions>
                        <AnterosButton success onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton danger onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="modalCenterIcon"
                    title="Are you sure?"
                    text="Are you sure that you want to delete this image?"
                    icon="fa fa-question-circle-o fa-3x"
                    iconColor="green"
                    iconCenter
                    isOpen={this.state.modalOpen == "modalCenterIcon"} onClose={this.onClose}>
                    <ModalActions>
                        <AnterosButton success onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton danger onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="modalWithoutTitle"
                    title="Are you sure?"
                    text="Are you sure that you want to delete this image?"
                    showHeader={false} center isOpen={this.state.modalOpen == "modalWithoutTitle"} onClose={this.onClose}>
                    <ModalActions>
                        <AnterosButton success onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton danger onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="modalWithoutFooter"
                    title="Lorem title"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, quisquam obcaecati, illum itaque nihil quia dignissimos sit non! Illo fugiat nam iure ducimus, et voluptatibus accusamus dolores odio commodi eaque"
                    isOpen={this.state.modalOpen == "modalWithoutFooter"} onClose={this.onClose}>
                </AnterosModal>

                <AnterosModal id="modalCenter"
                    title="Lorem title"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quidem vel, nihil quae explicabo facere beatae aspernatur excepturi minus ut deserunt hic corrupti omnis architecto molestiae, odit aut? Adipisci, omnis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel fuga deserunt officia totam, harum accusamus incidunt accusantium doloribus at commodi hic consequuntur natus magnam rem fugit molestiae dolor voluptas veritatis!"
                    center isOpen={this.state.modalOpen == "modalCenter"} onClose={this.onClose}>
                    <ModalActions>
                        <AnterosButton success onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton danger onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>


                <AnterosModal id="modalExtraSmall"
                    title="Lorem title"
                    extraSmall
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quidem vel, nihil quae explicabo facere beatae !"
                    isOpen={this.state.modalOpen == "modalExtraSmall"} onClose={this.onClose}>
                    <ModalActions>
                        <AnterosButton primary onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                    </ModalActions>
                </AnterosModal>


                <AnterosModal id="modalSmall"
                    title="Lorem title"
                    small
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse harum hic perspiciatis earum blanditiis eius assumenda doloribus cum aspernatur tempore natus, iste, corporis sequi sit. Minus error, optio laborum doloremque. !"
                    isOpen={this.state.modalOpen == "modalSmall"} onClose={this.onClose}>
                    <ModalActions>
                        <AnterosButton primary onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="modalMedium"
                    title="Lorem title"
                    medium
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse harum hic perspiciatis earum blanditiis eius assumenda doloribus cum aspernatur tempore natus, iste, corporis sequi sit. Minus error, optio laborum doloremque. !"
                    isOpen={this.state.modalOpen == "modalMedium"} onClose={this.onClose}>
                    <ModalActions>
                        <AnterosButton primary onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="modalLarge"
                    title="Lorem title"
                    large
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse harum hic perspiciatis earum blanditiis eius assumenda doloribus cum aspernatur tempore natus, iste, corporis sequi sit. Minus error, optio laborum doloremque. !"
                    isOpen={this.state.modalOpen == "modalLarge"} onClose={this.onClose}>
                    <ModalActions>
                        <AnterosButton primary onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="modalFull"
                    title="Lorem title"
                    full
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex cum, dolore quasi? Ipsum facere fugit ducimus nihil, eveniet recusandae ea. Numquam ipsa magni, beatae voluptates fugiat voluptatum minima distinctio odit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse harum hic perspiciatis earum blanditiis eius assumenda doloribus cum aspernatur tempore natus, iste, corporis sequi sit. Minus error, optio laborum doloremque. !"
                    isOpen={this.state.modalOpen == "modalFull"} onClose={this.onClose}>
                    <ModalActions>
                        <AnterosButton primary onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                    </ModalActions>
                </AnterosModal>


                <AnterosModal id="contextualPrimary"
                    title="Are you sure?"
                    primary
                    isOpen={this.state.modalOpen == "contextualPrimary"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut?
                    <ModalActions>
                        <AnterosButton primary onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton primary onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="contextualSuccess"
                    title="Lorem title"
                    success
                    isOpen={this.state.modalOpen == "contextualSuccess"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    <ModalActions>
                        <AnterosButton success onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton success onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="contextualInfo"
                    title="Lorem title"
                    info
                    isOpen={this.state.modalOpen == "contextualInfo"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    <ModalActions>
                        <AnterosButton info onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton info onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="contextualWarning"
                    title="Lorem title"
                    warning
                    isOpen={this.state.modalOpen == "contextualWarning"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    <ModalActions>
                        <AnterosButton warning onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton warning onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="contextualDanger"
                    title="Lorem title"
                    danger
                    isOpen={this.state.modalOpen == "contextualDanger"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    <ModalActions>
                        <AnterosButton danger onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton danger onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="contextualInverse"
                    title="Lorem title"
                    inverse
                    isOpen={this.state.modalOpen == "contextualInverse"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    <ModalActions>
                        <AnterosButton inverse onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton inverse onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="contextualSecondary"
                    title="Lorem title"
                    secondary
                    isOpen={this.state.modalOpen == "contextualSecondary"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    <ModalActions>
                        <AnterosButton secondary onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton secondary onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>


                <AnterosModal id="contextualHeaderPrimary"
                    title="Are you sure?"
                    primary
                    showHeaderColor={true}
                    isOpen={this.state.modalOpen == "contextualHeaderPrimary"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut?
                    <ModalActions>
                        <AnterosButton primary onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton primary onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="contextualHeaderSuccess"
                    title="Lorem title"
                    success
                    showHeaderColor={true}
                    isOpen={this.state.modalOpen == "contextualHeaderSuccess"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    <ModalActions>
                        <AnterosButton success onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton success onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="contextualHeaderInfo"
                    title="Lorem title"
                    info
                    showHeaderColor={true}
                    isOpen={this.state.modalOpen == "contextualHeaderInfo"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    <ModalActions>
                        <AnterosButton info onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton info onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="contextualHeaderWarning"
                    title="Lorem title"
                    warning
                    showHeaderColor={true}
                    isOpen={this.state.modalOpen == "contextualHeaderWarning"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    <ModalActions>
                        <AnterosButton warning onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton warning onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="contextualHeaderDanger"
                    title="Lorem title"
                    danger
                    showHeaderColor={true}
                    isOpen={this.state.modalOpen == "contextualHeaderDanger"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    <ModalActions>
                        <AnterosButton danger onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton danger onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="contextualHeaderInverse"
                    title="Lorem title"
                    inverse
                    showHeaderColor={true}
                    isOpen={this.state.modalOpen == "contextualHeaderInverse"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    <ModalActions>
                        <AnterosButton inverse onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton inverse onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="contextualHeaderSecondary"
                    title="Lorem title"
                    secondary
                    showHeaderColor={true}
                    isOpen={this.state.modalOpen == "contextualHeaderSecondary"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    <ModalActions>
                        <AnterosButton secondary onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton secondary onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>


                <AnterosModal id="contextualFullPrimary"
                    title="Are you sure?"
                    primary
                    showFullColor={true}
                    isOpen={this.state.modalOpen == "contextualFullPrimary"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut?
                    <ModalActions>
                        <AnterosButton default onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton default onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="contextualFullSuccess"
                    title="Lorem title"
                    success
                    showFullColor={true}
                    isOpen={this.state.modalOpen == "contextualFullSuccess"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    <ModalActions>
                        <AnterosButton default onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton default onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="contextualFullInfo"
                    title="Lorem title"
                    info
                    showFullColor={true}
                    isOpen={this.state.modalOpen == "contextualFullInfo"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    <ModalActions>
                        <AnterosButton default onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton default onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="contextualFullWarning"
                    title="Lorem title"
                    warning
                    showFullColor={true}
                    isOpen={this.state.modalOpen == "contextualFullWarning"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    <ModalActions>
                        <AnterosButton default onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton default onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="contextualFullDanger"
                    title="Lorem title"
                    danger
                    showFullColor={true}
                    isOpen={this.state.modalOpen == "contextualFullDanger"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    <ModalActions>
                        <AnterosButton default onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton default onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="contextualFullInverse"
                    title="Lorem title"
                    inverse
                    showFullColor={true}
                    isOpen={this.state.modalOpen == "contextualFullInverse"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    <ModalActions>
                        <AnterosButton default onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton default onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="contextualFullSecondary"
                    title="Lorem title"
                    secondary
                    showFullColor={true}
                    isOpen={this.state.modalOpen == "contextualFullSecondary"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    <ModalActions>
                        <AnterosButton secondary onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton secondary onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>


                <AnterosModal id="customWidth"
                    title="Lorem title"
                    inverse
                    width="800px"
                    isOpen={this.state.modalOpen == "customWidth"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    <ModalActions>
                        <AnterosButton secondary onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton secondary onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>

                <AnterosModal id="customHeight"
                    title="Lorem title"
                    secondary
                    height="600px"
                    isOpen={this.state.modalOpen == "customHeight"} onClose={this.onClose}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                    <ModalActions>
                        <AnterosButton secondary onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton secondary onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>


                <AnterosModal id="modalForm"
                    title="Form"
                    primary
                    showHeaderColor={true}
                    showContextIcon={false}
                    isOpen={this.state.modalOpen == "modalForm"} onClose={this.onClose}>
                    <ModalActions>
                        <AnterosButton success onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton danger onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>

                    <div>
                        <div className="form-group row">
                            <label for="example-text-input" className="col-2 col-form-label">Text</label>
                            <div className="col-10">
                                <input className="form-control" type="text" value="Artisanal kale" id="example-text-input" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="example-search-input" className="col-2 col-form-label">Search</label>
                            <div className="col-10">
                                <input className="form-control" type="search" value="How do I shoot web" id="example-search-input" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="example-email-input" className="col-2 col-form-label">Email</label>
                            <div className="col-10">
                                <input className="form-control" type="email" value="bootstrap@example.com" id="example-email-input" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="example-url-input" className="col-2 col-form-label">URL</label>
                            <div className="col-10">
                                <input className="form-control" type="url" value="https://getbootstrap.com" id="example-url-input" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="example-tel-input" className="col-2 col-form-label">Telephone</label>
                            <div className="col-10">
                                <input className="form-control" type="tel" value="1-(555)-555-5555" id="example-tel-input" />
                            </div>
                        </div>
                    </div>
                </AnterosModal>


                <AnterosModal id="nestedModal"
                    title="Nested modal"
                    primary
                    showHeaderColor={true}
                    showContextIcon={false}
                    isOpen={this.state.modalOpen == "nestedModal"} onClose={this.onClose}>
                    <AnterosButton id="btnNested" dataUser="modalIconNested" warning caption="Another modal" onClick={this.onClick} />
                    <ModalActions>
                        <AnterosButton success onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton danger onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>


                <AnterosModal id="modalIconNested"
                    title="Are you sure?"
                    text="Are you sure that you want to delete this image?"
                    icon="fa fa-question-circle-o fa-3x"
                    iconColor="red"
                    isOpen={this.state.modalOpenNested} onClose={this.onClose}>
                    <ModalActions>
                        <AnterosButton success onClick={this.onClickOk}>Ok</AnterosButton>{' '}
                        <AnterosButton danger onClick={this.onClickCancel}>Cancel</AnterosButton>
                    </ModalActions>
                </AnterosModal>
            </div>);
    }
}