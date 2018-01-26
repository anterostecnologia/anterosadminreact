import React, { Component } from 'react';
import { AnterosCard, HeaderActions } from "anteros-react-containers";
import { AnterosIcon } from "anteros-react-image";
import { AnterosLabel } from "anteros-react-label";
import { AnterosRow, AnterosCol } from "anteros-react-layout";
import { AnterosButton } from "anteros-react-buttons";

export default class IconsAwesomeView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <AnterosCard caption="News in version 4.7">
                <div className="icon-list-demo">
                    <AnterosRow >
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-address-book" />
                            <AnterosLabel caption="address-book" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-address-book-o " />
                            <AnterosLabel caption="address-book-o" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-address-card " />
                            <AnterosLabel caption="address-card" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-address-card-o " />
                            <AnterosLabel caption="address-card-o" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bandcamp " />
                            <AnterosLabel caption="bandcamp" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bath " />
                            <AnterosLabel caption="bath" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bathtub " />
                            <AnterosLabel caption="bathtub" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-drivers-license " />
                            <AnterosLabel caption="drivers-license" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-drivers-license-o " />
                            <AnterosLabel caption="drivers-license-o" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-eercast " />
                            <AnterosLabel caption="eercast" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-envelope-open " />
                            <AnterosLabel caption="envelope-open" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-envelope-open-o " />
                            <AnterosLabel caption="envelope-open-o" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-etsy " />
                            <AnterosLabel caption="etsy" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-free-code-camp " />
                            <AnterosLabel caption="free-code-camp" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-grav " />
                            <AnterosLabel caption="grav" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-handshake-o " />
                            <AnterosLabel caption="handshake-o" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-id-badge " />
                            <AnterosLabel caption="id-badge" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-id-card " />
                            <AnterosLabel caption="id-card" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-id-card-o " />
                            <AnterosLabel caption="id-card-o" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-imdb " />
                            <AnterosLabel caption="imdb" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-linode " />
                            <AnterosLabel caption="linode" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-meetup " />
                            <AnterosLabel caption="meetup" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-microchip " />
                            <AnterosLabel caption="microchip" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-podcast " />
                            <AnterosLabel caption="podcast" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-quora " />
                            <AnterosLabel caption="quora" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-ravelry " />
                            <AnterosLabel caption="ravelry" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-s15 " />
                            <AnterosLabel caption="s15" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-shower " />
                            <AnterosLabel caption="shower" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-snowflake-o " />
                            <AnterosLabel caption="snowflake-o" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-superpowers " />
                            <AnterosLabel caption="superpowers" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-telegram " />
                            <AnterosLabel caption="telegram" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-thermometer " />
                            <AnterosLabel caption="thermometer" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-thermometer-0 " />
                            <AnterosLabel caption="thermometer-0" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-thermometer-1 " />
                            <AnterosLabel caption="thermometer-1" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-thermometer-2 " />
                            <AnterosLabel caption="thermometer-2" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-thermometer-3 " />
                            <AnterosLabel caption="thermometer-3" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-thermometer-4 " />
                            <AnterosLabel caption="thermometer-4" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-thermometer-empty " />
                            <AnterosLabel caption="thermometer-empty" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-thermometer-full " />
                            <AnterosLabel caption="thermometer-full" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-thermometer-half " />
                            <AnterosLabel caption="thermometer-half" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-thermometer-quarter " />
                            <AnterosLabel caption="thermometer-quarter" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-thermometer-three-quarters " />
                            <AnterosLabel caption="thermometer-three-quarters" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-times-rectangle " />
                            <AnterosLabel caption="times-rectangle" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-times-rectangle-o " />
                            <AnterosLabel caption="times-rectangle-o" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-user-circle " />
                            <AnterosLabel caption="user-circle" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-user-circle-o " />
                            <AnterosLabel caption="user-circle-o" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-user-o " />
                            <AnterosLabel caption="user-o" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-vcard " />
                            <AnterosLabel caption="vcard" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-vcard-o " />
                            <AnterosLabel caption="vcard-o" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-window-close " />
                            <AnterosLabel caption="window-close" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-window-close-o " />
                            <AnterosLabel caption="window-close-o" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-window-maximize " />
                            <AnterosLabel caption="window-maximize" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-window-minimize " />
                            <AnterosLabel caption="window-minimize" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-window-restore " />
                            <AnterosLabel caption="window-restore" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-wpexplorer " />
                            <AnterosLabel caption="wpexplorer" />
                        </AnterosCol>


                    </AnterosRow>
                </div>
            </AnterosCard>

            <AnterosCard caption="News in version 4.5">
                <div className="icon-list-demo">
                    <AnterosRow >
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bluetooth" />
                            <AnterosLabel caption="bluetooth" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bluetooth-b" />
                            <AnterosLabel caption="bluetooth-b" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-codiepie" />
                            <AnterosLabel caption="codiepie" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-credit-card-alt" />
                            <AnterosLabel caption="credit-card-alt" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-edge" />
                            <AnterosLabel caption="edge" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-fort-awesome" />
                            <AnterosLabel caption="fort-awesome" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hashtag" />
                            <AnterosLabel caption="hashtag" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-mixcloud" />
                            <AnterosLabel caption="mixcloud" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-modx" />
                            <AnterosLabel caption="modx" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-pause-circle" />
                            <AnterosLabel caption="pause-circle" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-pause-circle-o" />
                            <AnterosLabel caption="pause-circle-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-percent" />
                            <AnterosLabel caption="percent" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-product-hunt" />
                            <AnterosLabel caption="product-hunt" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-reddit-alien" />
                            <AnterosLabel caption="reddit-alien" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-scribd" />
                            <AnterosLabel caption="scribd" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-shopping-bag" />
                            <AnterosLabel caption="shopping-bag" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-shopping-basket" />
                            <AnterosLabel caption="shopping-basket" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-stop-circle" />
                            <AnterosLabel caption="stop-circle" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-stop-circle-o" />
                            <AnterosLabel caption="stop-circle-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-usb" />
                            <AnterosLabel caption="usb" />
                        </AnterosCol>
                    </AnterosRow>
                </div>
            </AnterosCard>



            <AnterosCard caption="Web Application Icons">
                <div className="icon-list-demo">
                    <AnterosRow >
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-adjust" />
                            <AnterosLabel caption="adjust" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-anchor" />
                            <AnterosLabel caption="anchor" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-archive" />
                            <AnterosLabel caption="archive" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-area-chart" />
                            <AnterosLabel caption="area-chart" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-arrows" />
                            <AnterosLabel caption="arrows" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-arrows-h" />
                            <AnterosLabel caption="arrows-h" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-arrows-v" />
                            <AnterosLabel caption="arrows-v" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-asterisk" />
                            <AnterosLabel caption="asterisk" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-at" />
                            <AnterosLabel caption="at" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-automobile" />
                            <AnterosLabel caption="automobile" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-balance-scale" />
                            <AnterosLabel caption="balance-scale" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-ban" />
                            <AnterosLabel caption="ban" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bank" />
                            <AnterosLabel caption="bank" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bar-chart" />
                            <AnterosLabel caption="bar-chart" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bar-chart-o" />
                            <AnterosLabel caption="bar-chart-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-barcode" />
                            <AnterosLabel caption="barcode" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bars" />
                            <AnterosLabel caption="bars" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-battery-0" />
                            <AnterosLabel caption="battery-0" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-battery-1" />
                            <AnterosLabel caption="battery-1" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-battery-2" />
                            <AnterosLabel caption="battery-2" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-battery-3" />
                            <AnterosLabel caption="battery-3" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-battery-4" />
                            <AnterosLabel caption="battery-4" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-battery-empty" />
                            <AnterosLabel caption="battery-empty" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-battery-full" />
                            <AnterosLabel caption="battery-full" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-battery-half" />
                            <AnterosLabel caption="battery-half" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-battery-quarter" />
                            <AnterosLabel caption="battery-quarter" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-battery-three-quarters" />
                            <AnterosLabel caption="battery-three-quarters" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bed" />
                            <AnterosLabel caption="bed" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-beer" />
                            <AnterosLabel caption="beer" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bell" />
                            <AnterosLabel caption="bell" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bell-o" />
                            <AnterosLabel caption="bell-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bell-slash" />
                            <AnterosLabel caption="bell-slash" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bell-slash-o" />
                            <AnterosLabel caption="bell-slash-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bicycle" />
                            <AnterosLabel caption="bicycle" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-binoculars" />
                            <AnterosLabel caption="binoculars" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-birthday-cake" />
                            <AnterosLabel caption="birthday-cake" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bluetooth" />
                            <AnterosLabel caption="bluetooth" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bluetooth-b" />
                            <AnterosLabel caption="bluetooth-b" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bolt" />
                            <AnterosLabel caption="bolt" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bomb" />
                            <AnterosLabel caption="bomb" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-book" />
                            <AnterosLabel caption="book" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bookmark" />
                            <AnterosLabel caption="bookmark" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bookmark-o" />
                            <AnterosLabel caption="bookmark-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-briefcase" />
                            <AnterosLabel caption="briefcase" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bug" />
                            <AnterosLabel caption="bug" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-building" />
                            <AnterosLabel caption="building" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-building-o" />
                            <AnterosLabel caption="building-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bullhorn" />
                            <AnterosLabel caption="bullhorn" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bullseye" />
                            <AnterosLabel caption="bullseye" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bus" />
                            <AnterosLabel caption="bus" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cab" />
                            <AnterosLabel caption="cab" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-calculator" />
                            <AnterosLabel caption="calculator" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-calendar" />
                            <AnterosLabel caption="calendar" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-calendar-check-o" />
                            <AnterosLabel caption="calendar-check-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-calendar-minus-o" />
                            <AnterosLabel caption="calendar-minus-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-calendar-o" />
                            <AnterosLabel caption="calendar-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-calendar-plus-o" />
                            <AnterosLabel caption="calendar-plus-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-calendar-times-o" />
                            <AnterosLabel caption="calendar-times-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-camera" />
                            <AnterosLabel caption="camera" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-camera-retro" />
                            <AnterosLabel caption="camera-retro" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-car" />
                            <AnterosLabel caption="car" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-caret-square-o-down" />
                            <AnterosLabel caption="caret-square-o-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-caret-square-o-left" />
                            <AnterosLabel caption="caret-square-o-left" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-caret-square-o-right" />
                            <AnterosLabel caption="caret-square-o-right" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-caret-square-o-up" />
                            <AnterosLabel caption="caret-square-o-up" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cart-arrow-down" />
                            <AnterosLabel caption="cart-arrow-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cart-plus" />
                            <AnterosLabel caption="cart-plus" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cc" />
                            <AnterosLabel caption="cc" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-certificate" />
                            <AnterosLabel caption="certificate" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-check" />
                            <AnterosLabel caption="check" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-check-circle" />
                            <AnterosLabel caption="check-circle" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-check-circle-o" />
                            <AnterosLabel caption="check-circle-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-check-square" />
                            <AnterosLabel caption="check-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-check-square-o" />
                            <AnterosLabel caption="check-square-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-child" />
                            <AnterosLabel caption="child" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-circle" />
                            <AnterosLabel caption="circle" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-circle-o" />
                            <AnterosLabel caption="circle-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-circle-o-notch" />
                            <AnterosLabel caption="circle-o-notch" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-circle-thin" />
                            <AnterosLabel caption="circle-thin" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-clock-o" />
                            <AnterosLabel caption="clock-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-clone" />
                            <AnterosLabel caption="clone" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-close" />
                            <AnterosLabel caption="close" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cloud" />
                            <AnterosLabel caption="cloud" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cloud-download" />
                            <AnterosLabel caption="cloud-download" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cloud-upload" />
                            <AnterosLabel caption="cloud-upload" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-code" />
                            <AnterosLabel caption="code" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-code-fork" />
                            <AnterosLabel caption="code-fork" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-coffee" />
                            <AnterosLabel caption="coffee" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cog" />
                            <AnterosLabel caption="cog" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cogs" />
                            <AnterosLabel caption="cogs" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-comment" />
                            <AnterosLabel caption="comment" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-comment-o" />
                            <AnterosLabel caption="comment-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-commenting" />
                            <AnterosLabel caption="commenting" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-commenting-o" />
                            <AnterosLabel caption="commenting-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-comments" />
                            <AnterosLabel caption="comments" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-comments-o" />
                            <AnterosLabel caption="comments-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-compass" />
                            <AnterosLabel caption="compass" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-copyright" />
                            <AnterosLabel caption="copyright" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-creative-commons" />
                            <AnterosLabel caption="creative-commons" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-credit-card" />
                            <AnterosLabel caption="credit-card" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-credit-card-alt" />
                            <AnterosLabel caption="credit-card-alt" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-crop" />
                            <AnterosLabel caption="crop" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-crosshairs" />
                            <AnterosLabel caption="crosshairs" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cube" />
                            <AnterosLabel caption="cube" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cubes" />
                            <AnterosLabel caption="cubes" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cutlery" />
                            <AnterosLabel caption="cutlery" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-dashboard" />
                            <AnterosLabel caption="dashboard" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-database" />
                            <AnterosLabel caption="database" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-desktop" />
                            <AnterosLabel caption="desktop" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-diamond" />
                            <AnterosLabel caption="diamond" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-dot-circle-o" />
                            <AnterosLabel caption="dot-circle-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-download" />
                            <AnterosLabel caption="download" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-edit" />
                            <AnterosLabel caption="edit" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-ellipsis-h" />
                            <AnterosLabel caption="ellipsis-h" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-ellipsis-v" />
                            <AnterosLabel caption="ellipsis-v" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-envelope" />
                            <AnterosLabel caption="envelope" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-envelope-o" />
                            <AnterosLabel caption="envelope-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-envelope-square" />
                            <AnterosLabel caption="envelope-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-eraser" />
                            <AnterosLabel caption="eraser" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-exchange" />
                            <AnterosLabel caption="exchange" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-exclamation" />
                            <AnterosLabel caption="exclamation" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-exclamation-circle" />
                            <AnterosLabel caption="exclamation-circle" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-exclamation-triangle" />
                            <AnterosLabel caption="exclamation-triangle" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-external-link" />
                            <AnterosLabel caption="external-link" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-external-link-square" />
                            <AnterosLabel caption="external-link-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-eye" />
                            <AnterosLabel caption="eye" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-eye-slash" />
                            <AnterosLabel caption="eye-slash" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-eyedropper" />
                            <AnterosLabel caption="eyedropper" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-fax" />
                            <AnterosLabel caption="fax" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-feed" />
                            <AnterosLabel caption="feed" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-female" />
                            <AnterosLabel caption="female" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-fighter-jet" />
                            <AnterosLabel caption="fighter-jet" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-archive-o" />
                            <AnterosLabel caption="file-archive-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-audio-o" />
                            <AnterosLabel caption="file-audio-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-code-o" />
                            <AnterosLabel caption="file-code-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-excel-o" />
                            <AnterosLabel caption="file-excel-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-image-o" />
                            <AnterosLabel caption="file-image-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-movie-o" />
                            <AnterosLabel caption="file-movie-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-pdf-o" />
                            <AnterosLabel caption="file-pdf-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-photo-o" />
                            <AnterosLabel caption="file-photo-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-picture-o" />
                            <AnterosLabel caption="file-picture-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-powerpoint-o" />
                            <AnterosLabel caption="file-powerpoint-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-sound-o" />
                            <AnterosLabel caption="file-sound-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-video-o" />
                            <AnterosLabel caption="file-video-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-word-o" />
                            <AnterosLabel caption="file-word-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-zip-o" />
                            <AnterosLabel caption="file-zip-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-film" />
                            <AnterosLabel caption="film" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-filter" />
                            <AnterosLabel caption="filter" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-fire" />
                            <AnterosLabel caption="fire" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-fire-extinguisher" />
                            <AnterosLabel caption="fire-extinguisher" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-flag" />
                            <AnterosLabel caption="flag" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-flag-checkered" />
                            <AnterosLabel caption="flag-checkered" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-flag-o" />
                            <AnterosLabel caption="flag-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-flash" />
                            <AnterosLabel caption="flash" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-flask" />
                            <AnterosLabel caption="flask" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-folder" />
                            <AnterosLabel caption="folder" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-folder-o" />
                            <AnterosLabel caption="folder-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-folder-open" />
                            <AnterosLabel caption="folder-open" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-folder-open-o" />
                            <AnterosLabel caption="folder-open-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-frown-o" />
                            <AnterosLabel caption="frown-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-futbol-o" />
                            <AnterosLabel caption="futbol-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-gamepad" />
                            <AnterosLabel caption="gamepad" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-gavel" />
                            <AnterosLabel caption="gavel" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-gear" />
                            <AnterosLabel caption="gear" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-gears" />
                            <AnterosLabel caption="gears" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-gift" />
                            <AnterosLabel caption="gift" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-glass" />
                            <AnterosLabel caption="glass" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-globe" />
                            <AnterosLabel caption="globe" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-graduation-cap" />
                            <AnterosLabel caption="graduation-cap" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-group" />
                            <AnterosLabel caption="group" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-grab-o" />
                            <AnterosLabel caption="hand-grab-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-lizard-o" />
                            <AnterosLabel caption="hand-lizard-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-paper-o" />
                            <AnterosLabel caption="hand-paper-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-peace-o" />
                            <AnterosLabel caption="hand-peace-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-pointer-o" />
                            <AnterosLabel caption="hand-pointer-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-rock-o" />
                            <AnterosLabel caption="hand-rock-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-scissors-o" />
                            <AnterosLabel caption="hand-scissors-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-spock-o" />
                            <AnterosLabel caption="hand-spock-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-stop-o" />
                            <AnterosLabel caption="hand-stop-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hashtag" />
                            <AnterosLabel caption="hashtag" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hdd-o" />
                            <AnterosLabel caption="hdd-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-headphones" />
                            <AnterosLabel caption="headphones" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-heart" />
                            <AnterosLabel caption="heart" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-heart-o" />
                            <AnterosLabel caption="heart-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-heartbeat" />
                            <AnterosLabel caption="heartbeat" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-history" />
                            <AnterosLabel caption="history" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-home" />
                            <AnterosLabel caption="home" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hotel" />
                            <AnterosLabel caption="hotel" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hourglass" />
                            <AnterosLabel caption="hourglass" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hourglass-1" />
                            <AnterosLabel caption="hourglass-1" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hourglass-2" />
                            <AnterosLabel caption="hourglass-2" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hourglass-3" />
                            <AnterosLabel caption="hourglass-3" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hourglass-end" />
                            <AnterosLabel caption="hourglass-end" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hourglass-half" />
                            <AnterosLabel caption="hourglass-half" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hourglass-o" />
                            <AnterosLabel caption="hourglass-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hourglass-start" />
                            <AnterosLabel caption="hourglass-start" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-i-cursor" />
                            <AnterosLabel caption="i-cursor" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-image" />
                            <AnterosLabel caption="image" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-inbox" />
                            <AnterosLabel caption="inbox" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-industry" />
                            <AnterosLabel caption="industry" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-info" />
                            <AnterosLabel caption="info" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-info-circle" />
                            <AnterosLabel caption="info-circle" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-institution" />
                            <AnterosLabel caption="institution" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-key" />
                            <AnterosLabel caption="key" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-keyboard-o" />
                            <AnterosLabel caption="keyboard-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-language" />
                            <AnterosLabel caption="language" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-laptop" />
                            <AnterosLabel caption="laptop" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-leaf" />
                            <AnterosLabel caption="leaf" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-legal" />
                            <AnterosLabel caption="legal" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-lemon-o" />
                            <AnterosLabel caption="lemon-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-level-down" />
                            <AnterosLabel caption="level-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-level-up" />
                            <AnterosLabel caption="level-up" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-life-bouy" />
                            <AnterosLabel caption="life-bouy" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-life-buoy" />
                            <AnterosLabel caption="life-buoy" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-life-ring" />
                            <AnterosLabel caption="life-ring" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-life-saver" />
                            <AnterosLabel caption="life-saver" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-lightbulb-o" />
                            <AnterosLabel caption="lightbulb-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-line-chart" />
                            <AnterosLabel caption="line-chart" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-location-arrow" />
                            <AnterosLabel caption="location-arrow" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-lock" />
                            <AnterosLabel caption="lock" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-magic" />
                            <AnterosLabel caption="magic" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-magnet" />
                            <AnterosLabel caption="magnet" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-mail-forward" />
                            <AnterosLabel caption="mail-forward" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-mail-reply" />
                            <AnterosLabel caption="mail-reply" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-mail-reply-all" />
                            <AnterosLabel caption="mail-reply-all" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-male" />
                            <AnterosLabel caption="male" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-map" />
                            <AnterosLabel caption="map" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-map-marker" />
                            <AnterosLabel caption="map-marker" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-map-o" />
                            <AnterosLabel caption="map-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-map-pin" />
                            <AnterosLabel caption="map-pin" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-map-signs" />
                            <AnterosLabel caption="map-signs" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-meh-o" />
                            <AnterosLabel caption="meh-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-microphone" />
                            <AnterosLabel caption="microphone" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-microphone-slash" />
                            <AnterosLabel caption="microphone-slash" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-minus" />
                            <AnterosLabel caption="minus" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-minus-circle" />
                            <AnterosLabel caption="minus-circle" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-minus-square" />
                            <AnterosLabel caption="minus-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-minus-square-o" />
                            <AnterosLabel caption="minus-square-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-mobile" />
                            <AnterosLabel caption="mobile" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-mobile-phone" />
                            <AnterosLabel caption="mobile-phone" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-money" />
                            <AnterosLabel caption="money" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-moon-o" />
                            <AnterosLabel caption="moon-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-mortar-board" />
                            <AnterosLabel caption="mortar-board" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-motorcycle" />
                            <AnterosLabel caption="motorcycle" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-mouse-pointer" />
                            <AnterosLabel caption="mouse-pointer" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-music" />
                            <AnterosLabel caption="music" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-navicon" />
                            <AnterosLabel caption="navicon" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-newspaper-o" />
                            <AnterosLabel caption="newspaper-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-object-group" />
                            <AnterosLabel caption="object-group" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-object-ungroup" />
                            <AnterosLabel caption="object-ungroup" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-paint-brush" />
                            <AnterosLabel caption="paint-brush" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-paper-plane" />
                            <AnterosLabel caption="paper-plane" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-paper-plane-o" />
                            <AnterosLabel caption="paper-plane-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-paw" />
                            <AnterosLabel caption="paw" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-pencil" />
                            <AnterosLabel caption="pencil" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-pencil-square" />
                            <AnterosLabel caption="pencil-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-pencil-square-o" />
                            <AnterosLabel caption="pencil-square-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-percent" />
                            <AnterosLabel caption="percent" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-phone" />
                            <AnterosLabel caption="phone" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-phone-square" />
                            <AnterosLabel caption="phone-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-photo" />
                            <AnterosLabel caption="photo" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-picture-o" />
                            <AnterosLabel caption="picture-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-pie-chart" />
                            <AnterosLabel caption="pie-chart" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-plane" />
                            <AnterosLabel caption="plane" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-plug" />
                            <AnterosLabel caption="plug" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-plus" />
                            <AnterosLabel caption="plus" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-plus-circle" />
                            <AnterosLabel caption="plus-circle" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-plus-square" />
                            <AnterosLabel caption="plus-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-plus-square-o" />
                            <AnterosLabel caption="plus-square-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-power-off" />
                            <AnterosLabel caption="power-off" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-print" />
                            <AnterosLabel caption="print" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-puzzle-piece" />
                            <AnterosLabel caption="puzzle-piece" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-qrcode" />
                            <AnterosLabel caption="qrcode" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-question" />
                            <AnterosLabel caption="question" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-question-circle" />
                            <AnterosLabel caption="question-circle" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-quote-left" />
                            <AnterosLabel caption="quote-left" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-quote-right" />
                            <AnterosLabel caption="quote-right" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-random" />
                            <AnterosLabel caption="random" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-recycle" />
                            <AnterosLabel caption="recycle" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-refresh" />
                            <AnterosLabel caption="refresh" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-registered" />
                            <AnterosLabel caption="registered" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-remove" />
                            <AnterosLabel caption="remove" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-reorder" />
                            <AnterosLabel caption="reorder" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-reply" />
                            <AnterosLabel caption="reply" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-reply-all" />
                            <AnterosLabel caption="reply-all" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-retweet" />
                            <AnterosLabel caption="retweet" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-road" />
                            <AnterosLabel caption="road" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-rocket" />
                            <AnterosLabel caption="rocket" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-rss" />
                            <AnterosLabel caption="rss" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-rss-square" />
                            <AnterosLabel caption="rss-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-search" />
                            <AnterosLabel caption="search" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-search-minus" />
                            <AnterosLabel caption="search-minus" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-search-plus" />
                            <AnterosLabel caption="search-plus" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-send" />
                            <AnterosLabel caption="send" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-send-o" />
                            <AnterosLabel caption="send-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-server" />
                            <AnterosLabel caption="server" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-share" />
                            <AnterosLabel caption="share" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-share-alt" />
                            <AnterosLabel caption="share-alt" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-share-alt-square" />
                            <AnterosLabel caption="share-alt-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-share-square" />
                            <AnterosLabel caption="share-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-share-square-o" />
                            <AnterosLabel caption="share-square-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-shield" />
                            <AnterosLabel caption="shield" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-ship" />
                            <AnterosLabel caption="ship" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-shopping-bag" />
                            <AnterosLabel caption="shopping-bag" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-shopping-basket" />
                            <AnterosLabel caption="shopping-basket" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-shopping-cart" />
                            <AnterosLabel caption="shopping-cart" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-sign-in" />
                            <AnterosLabel caption="sign-in" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-sign-out" />
                            <AnterosLabel caption="sign-out" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-signal" />
                            <AnterosLabel caption="signal" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-sitemap" />
                            <AnterosLabel caption="sitemap" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-sliders" />
                            <AnterosLabel caption="sliders" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-smile-o" />
                            <AnterosLabel caption="smile-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-soccer-ball-o" />
                            <AnterosLabel caption="soccer-ball-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-sort" />
                            <AnterosLabel caption="sort" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-sort-alpha-asc" />
                            <AnterosLabel caption="sort-alpha-asc" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-sort-alpha-desc" />
                            <AnterosLabel caption="sort-alpha-desc" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-sort-amount-asc" />
                            <AnterosLabel caption="sort-amount-asc" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-sort-amount-desc" />
                            <AnterosLabel caption="sort-amount-desc" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-sort-asc" />
                            <AnterosLabel caption="sort-asc" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-sort-desc" />
                            <AnterosLabel caption="sort-desc" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-sort-down" />
                            <AnterosLabel caption="sort-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-sort-numeric-asc" />
                            <AnterosLabel caption="sort-numeric-asc" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-sort-numeric-desc" />
                            <AnterosLabel caption="sort-numeric-desc" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-sort-up" />
                            <AnterosLabel caption="sort-up" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-space-shuttle" />
                            <AnterosLabel caption="space-shuttle" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-spinner" />
                            <AnterosLabel caption="spinner" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-spoon" />
                            <AnterosLabel caption="spoon" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-square" />
                            <AnterosLabel caption="square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-square-o" />
                            <AnterosLabel caption="square-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-star" />
                            <AnterosLabel caption="star" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-star-half" />
                            <AnterosLabel caption="star-half" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-star-half-empty" />
                            <AnterosLabel caption="star-half-empty" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-star-half-full" />
                            <AnterosLabel caption="star-half-full" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-star-half-o" />
                            <AnterosLabel caption="star-half-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-star-o" />
                            <AnterosLabel caption="star-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-sticky-note" />
                            <AnterosLabel caption="sticky-note" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-sticky-note-o" />
                            <AnterosLabel caption="sticky-note-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-street-view" />
                            <AnterosLabel caption="street-view" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-suitcase" />
                            <AnterosLabel caption="suitcase" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-sun-o" />
                            <AnterosLabel caption="sun-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-support" />
                            <AnterosLabel caption="support" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-tablet" />
                            <AnterosLabel caption="tablet" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-tachometer" />
                            <AnterosLabel caption="tachometer" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-tag" />
                            <AnterosLabel caption="tag" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-tags" />
                            <AnterosLabel caption="tags" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-tasks" />
                            <AnterosLabel caption="tasks" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-taxi" />
                            <AnterosLabel caption="taxi" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-television" />
                            <AnterosLabel caption="television" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-terminal" />
                            <AnterosLabel caption="terminal" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-thumb-tack" />
                            <AnterosLabel caption="thumb-tack" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-thumbs-down" />
                            <AnterosLabel caption="thumbs-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-thumbs-o-down" />
                            <AnterosLabel caption="thumbs-o-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-thumbs-o-up" />
                            <AnterosLabel caption="thumbs-o-up" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-thumbs-up" />
                            <AnterosLabel caption="thumbs-up" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-ticket" />
                            <AnterosLabel caption="ticket" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-times" />
                            <AnterosLabel caption="times" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-times-circle" />
                            <AnterosLabel caption="times-circle" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-times-circle-o" />
                            <AnterosLabel caption="times-circle-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-tint" />
                            <AnterosLabel caption="tint" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-toggle-down" />
                            <AnterosLabel caption="toggle-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-toggle-left" />
                            <AnterosLabel caption="toggle-left" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-toggle-off" />
                            <AnterosLabel caption="toggle-off" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-toggle-on" />
                            <AnterosLabel caption="toggle-on" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-toggle-right" />
                            <AnterosLabel caption="toggle-right" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-toggle-up" />
                            <AnterosLabel caption="toggle-up" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-trademark" />
                            <AnterosLabel caption="trademark" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-trash" />
                            <AnterosLabel caption="trash" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-trash-o" />
                            <AnterosLabel caption="trash-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-tree" />
                            <AnterosLabel caption="tree" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-trophy" />
                            <AnterosLabel caption="trophy" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-truck" />
                            <AnterosLabel caption="truck" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-tty" />
                            <AnterosLabel caption="tty" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-tv" />
                            <AnterosLabel caption="tv" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-umbrella" />
                            <AnterosLabel caption="umbrella" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-university" />
                            <AnterosLabel caption="university" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-unlock" />
                            <AnterosLabel caption="unlock" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-unlock-alt" />
                            <AnterosLabel caption="unlock-alt" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-unsorted" />
                            <AnterosLabel caption="unsorted" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-upload" />
                            <AnterosLabel caption="upload" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-user" />
                            <AnterosLabel caption="user" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-user-plus" />
                            <AnterosLabel caption="user-plus" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-user-secret" />
                            <AnterosLabel caption="user-secret" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-user-times" />
                            <AnterosLabel caption="user-times" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-users" />
                            <AnterosLabel caption="users" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-video-camera" />
                            <AnterosLabel caption="video-camera" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-volume-down" />
                            <AnterosLabel caption="volume-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-volume-off" />
                            <AnterosLabel caption="volume-off" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-volume-up" />
                            <AnterosLabel caption="volume-up" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-warning" />
                            <AnterosLabel caption="warning" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-wheelchair" />
                            <AnterosLabel caption="wheelchair" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-wifi" />
                            <AnterosLabel caption="wifi" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-wrench" />
                            <AnterosLabel caption="wrench" />
                        </AnterosCol>
                    </AnterosRow>
                </div>
            </AnterosCard>


            <AnterosCard caption="Hand Icons">
                <div className="icon-list-demo">
                    <AnterosRow >
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-grab-o" />
                            <AnterosLabel caption="hand-grab-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-lizard-o" />
                            <AnterosLabel caption="hand-lizard-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-o-down" />
                            <AnterosLabel caption="hand-o-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-o-left" />
                            <AnterosLabel caption="hand-o-left" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-o-right" />
                            <AnterosLabel caption="hand-o-right" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-o-up" />
                            <AnterosLabel caption="hand-o-up" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-paper-o" />
                            <AnterosLabel caption="hand-paper-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-peace-o" />
                            <AnterosLabel caption="hand-peace-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-pointer-o" />
                            <AnterosLabel caption="hand-pointer-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-rock-o" />
                            <AnterosLabel caption="hand-rock-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-scissors-o" />
                            <AnterosLabel caption="hand-scissors-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-spock-o" />
                            <AnterosLabel caption="hand-spock-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-stop-o" />
                            <AnterosLabel caption="hand-stop-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-thumbs-down" />
                            <AnterosLabel caption="thumbs-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-thumbs-o-down" />
                            <AnterosLabel caption="thumbs-o-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-thumbs-o-up" />
                            <AnterosLabel caption="thumbs-o-up" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-thumbs-up" />
                            <AnterosLabel caption="thumbs-up" />
                        </AnterosCol>
                    </AnterosRow>
                </div>
            </AnterosCard>


            <AnterosCard caption="Transportation Icons">
                <div className="icon-list-demo">
                    <AnterosRow >
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-ambulance" />
                            <AnterosLabel caption="ambulance" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-automobile" />
                            <AnterosLabel caption="automobile" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bicycle" />
                            <AnterosLabel caption="bicycle" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bus" />
                            <AnterosLabel caption="bus" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cab" />
                            <AnterosLabel caption="cab" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-car" />
                            <AnterosLabel caption="car" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-fighter-jet" />
                            <AnterosLabel caption="fighter-jet" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-motorcycle" />
                            <AnterosLabel caption="motorcycle" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-plane" />
                            <AnterosLabel caption="plane" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-rocket" />
                            <AnterosLabel caption="rocket" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-ship" />
                            <AnterosLabel caption="ship" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-space-shuttle" />
                            <AnterosLabel caption="space-shuttle" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-subway" />
                            <AnterosLabel caption="subway" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-taxi" />
                            <AnterosLabel caption="taxi" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-train" />
                            <AnterosLabel caption="train" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-truck" />
                            <AnterosLabel caption="truck" />
                        </AnterosCol>
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-wheelchair" />
                            <AnterosLabel caption="wheelchair" />
                        </AnterosCol>
                    </AnterosRow>
                </div>
            </AnterosCard>




            <AnterosCard caption="Gender Icons">
                <div className="icon-list-demo">
                    <AnterosRow >

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-genderless" />
                            <AnterosLabel caption="genderless" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-intersex" />
                            <AnterosLabel caption="intersex" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-mars" />
                            <AnterosLabel caption="mars" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-mars-double" />
                            <AnterosLabel caption="mars-double" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-mars-stroke" />
                            <AnterosLabel caption="mars-stroke" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-mars-stroke-h" />
                            <AnterosLabel caption="mars-stroke-h" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-mars-stroke-v" />
                            <AnterosLabel caption="mars-stroke-v" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-mercury" />
                            <AnterosLabel caption="mercury" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-neuter" />
                            <AnterosLabel caption="neuter" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-transgender" />
                            <AnterosLabel caption="transgender" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-transgender-alt" />
                            <AnterosLabel caption="transgender-alt" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-venus" />
                            <AnterosLabel caption="venus" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-venus-double" />
                            <AnterosLabel caption="venus-double" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-venus-mars" />
                            <AnterosLabel caption="venus-mars" />
                        </AnterosCol>

                    </AnterosRow>
                </div>
            </AnterosCard>


            <AnterosCard caption="File Type Icons">
                <div className="icon-list-demo">
                    <AnterosRow >

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file" />
                            <AnterosLabel caption="file" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-archive-o" />
                            <AnterosLabel caption="file-archive-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-audio-o" />
                            <AnterosLabel caption="file-audio-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-code-o" />
                            <AnterosLabel caption="file-code-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-excel-o" />
                            <AnterosLabel caption="file-excel-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-image-o" />
                            <AnterosLabel caption="file-image-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-movie-o" />
                            <AnterosLabel caption="file-movie-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-o" />
                            <AnterosLabel caption="file-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-pdf-o" />
                            <AnterosLabel caption="file-pdf-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-photo-o" />
                            <AnterosLabel caption="file-photo-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-picture-o" />
                            <AnterosLabel caption="file-picture-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-powerpoint-o" />
                            <AnterosLabel caption="file-powerpoint-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-sound-o" />
                            <AnterosLabel caption="file-sound-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-text" />
                            <AnterosLabel caption="file-text" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-text-o" />
                            <AnterosLabel caption="file-text-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-video-o" />
                            <AnterosLabel caption="file-video-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-word-o" />
                            <AnterosLabel caption="file-word-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-zip-o" />
                            <AnterosLabel caption="file-zip-o" />
                        </AnterosCol>
                    </AnterosRow>
                </div>
            </AnterosCard>



            <AnterosCard caption="Spinner Icons">
                <div className="icon-list-demo">
                    <AnterosRow >
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-circle-o-notch fa-spin" />
                            <AnterosLabel caption="circle-o-notch" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cog" />
                            <AnterosLabel caption="cog" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-gear" />
                            <AnterosLabel caption="gear" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-refresh" />
                            <AnterosLabel caption="refresh" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-spinner" />
                            <AnterosLabel caption="spinner" />
                        </AnterosCol>
                    </AnterosRow >
                </div>
            </AnterosCard>


            <AnterosCard caption="Form Control Icons">
                <div className="icon-list-demo">
                    <AnterosRow >
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-check-square " />
                            <AnterosLabel caption="check-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-check-square-o " />
                            <AnterosLabel caption="check-square-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-circle " />
                            <AnterosLabel caption="circle" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-circle-o " />
                            <AnterosLabel caption="circle-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-dot-circle-o " />
                            <AnterosLabel caption="dot-circle-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-minus-square " />
                            <AnterosLabel caption="minus-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-minus-square-o " />
                            <AnterosLabel caption="minus-square-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-plus-square " />
                            <AnterosLabel caption="plus-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-plus-square-o " />
                            <AnterosLabel caption="plus-square-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-square " />
                            <AnterosLabel caption="square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-square-o " />
                            <AnterosLabel caption="square-o" />
                        </AnterosCol>
                    </AnterosRow>
                </div>
            </AnterosCard>

            <AnterosCard caption="Payment Icons">
                <div className="icon-list-demo">
                    <AnterosRow >
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cc-amex" />
                            <AnterosLabel caption="cc-amex" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cc-diners-club" />
                            <AnterosLabel caption="cc-diners-club" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cc-discover" />
                            <AnterosLabel caption="cc-discover" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cc-jcb" />
                            <AnterosLabel caption="cc-jcb" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cc-mastercard" />
                            <AnterosLabel caption="cc-mastercard" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cc-paypal" />
                            <AnterosLabel caption="cc-paypal" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cc-stripe" />
                            <AnterosLabel caption="cc-stripe" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cc-visa" />
                            <AnterosLabel caption="cc-visa" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-credit-card" />
                            <AnterosLabel caption="credit-card" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-credit-card-alt" />
                            <AnterosLabel caption="credit-card-alt" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-google-wallet" />
                            <AnterosLabel caption="google-wallet" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-paypal" />
                            <AnterosLabel caption="paypal" />
                        </AnterosCol>
                    </AnterosRow>
                </div>
            </AnterosCard>

            <AnterosCard caption="Chart Icons">
                <div className="icon-list-demo">
                    <AnterosRow >
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-area-chart" />
                            <AnterosLabel caption="area-chart" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bar-chart" />
                            <AnterosLabel caption="bar-chart" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bar-chart-o" />
                            <AnterosLabel caption="bar-chart-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-line-chart" />
                            <AnterosLabel caption="line-chart" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-pie-chart" />
                            <AnterosLabel caption="pie-chart" />
                        </AnterosCol>
                    </AnterosRow>
                </div>
            </AnterosCard>


            <AnterosCard caption="Currency Icons">
                <div className="icon-list-demo">
                    <AnterosRow >
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bitcoin" />
                            <AnterosLabel caption="bitcoin" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-btc" />
                            <AnterosLabel caption="btc" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cny" />
                            <AnterosLabel caption="cny" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-dollar" />
                            <AnterosLabel caption="dollar" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-eur" />
                            <AnterosLabel caption="eur" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-euro" />
                            <AnterosLabel caption="euro" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-gbp" />
                            <AnterosLabel caption="gbp" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-gg" />
                            <AnterosLabel caption="gg" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-gg-circle" />
                            <AnterosLabel caption="gg-circle" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-ils" />
                            <AnterosLabel caption="ils" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-inr" />
                            <AnterosLabel caption="inr" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-jpy" />
                            <AnterosLabel caption="jpy" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-krw" />
                            <AnterosLabel caption="krw" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-money" />
                            <AnterosLabel caption="money" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-rmb" />
                            <AnterosLabel caption="rmb" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-rouble" />
                            <AnterosLabel caption="rouble" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-rub" />
                            <AnterosLabel caption="rub" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-ruble" />
                            <AnterosLabel caption="ruble" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-rupee" />
                            <AnterosLabel caption="rupee" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-shekel" />
                            <AnterosLabel caption="shekel" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-sheqel" />
                            <AnterosLabel caption="sheqel" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-try" />
                            <AnterosLabel caption="try" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-turkish-lira" />
                            <AnterosLabel caption="turkish-lira" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-usd" />
                            <AnterosLabel caption="usd" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-won" />
                            <AnterosLabel caption="won" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-yen" />
                            <AnterosLabel caption="yen" />
                        </AnterosCol>
                    </AnterosRow>
                </div>
            </AnterosCard>

            <AnterosCard caption="Text Editor Icons">
                <div className="icon-list-demo">
                    <AnterosRow >
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-align-center" />
                            <AnterosLabel caption="align-center" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-align-justify" />
                            <AnterosLabel caption="align-justify" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-align-left" />
                            <AnterosLabel caption="align-left" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-align-right" />
                            <AnterosLabel caption="align-right" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bold" />
                            <AnterosLabel caption="bold" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-chain" />
                            <AnterosLabel caption="chain" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-chain-broken" />
                            <AnterosLabel caption="chain-broken" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-clipboard" />
                            <AnterosLabel caption="clipboard" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-columns" />
                            <AnterosLabel caption="columns" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-copy" />
                            <AnterosLabel caption="copy" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cut" />
                            <AnterosLabel caption="cut" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-dedent" />
                            <AnterosLabel caption="dedent" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-eraser" />
                            <AnterosLabel caption="eraser" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file" />
                            <AnterosLabel caption="file" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-o" />
                            <AnterosLabel caption="file-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-text" />
                            <AnterosLabel caption="file-text" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-file-text-o" />
                            <AnterosLabel caption="file-text-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-files-o" />
                            <AnterosLabel caption="files-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-floppy-o" />
                            <AnterosLabel caption="floppy-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-font" />
                            <AnterosLabel caption="font" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-header" />
                            <AnterosLabel caption="header" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-indent" />
                            <AnterosLabel caption="indent" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-italic" />
                            <AnterosLabel caption="italic" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-link" />
                            <AnterosLabel caption="link" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-list" />
                            <AnterosLabel caption="list" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-list-alt" />
                            <AnterosLabel caption="list-alt" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-list-ol" />
                            <AnterosLabel caption="list-ol" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-list-ul" />
                            <AnterosLabel caption="list-ul" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-outdent" />
                            <AnterosLabel caption="outdent" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-paperclip" />
                            <AnterosLabel caption="paperclip" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-paragraph" />
                            <AnterosLabel caption="paragraph" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-paste" />
                            <AnterosLabel caption="paste" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-repeat" />
                            <AnterosLabel caption="repeat" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-rotate-left" />
                            <AnterosLabel caption="rotate-left" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-rotate-right" />
                            <AnterosLabel caption="rotate-right" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-save" />
                            <AnterosLabel caption="save" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-scissors" />
                            <AnterosLabel caption="scissors" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-strikethrough" />
                            <AnterosLabel caption="strikethrough" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-subscript" />
                            <AnterosLabel caption="subscript" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-superscript" />
                            <AnterosLabel caption="superscript" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-table" />
                            <AnterosLabel caption="table" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-text-height" />
                            <AnterosLabel caption="text-height" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-text-width" />
                            <AnterosLabel caption="text-width" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-th" />
                            <AnterosLabel caption="th" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-th-large" />
                            <AnterosLabel caption="th-large" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-th-list" />
                            <AnterosLabel caption="th-list" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-underline" />
                            <AnterosLabel caption="underline" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-undo" />
                            <AnterosLabel caption="undo" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-unlink" />
                            <AnterosLabel caption="unlink" />
                        </AnterosCol>
                    </AnterosRow>
                </div>
            </AnterosCard>


            <AnterosCard caption="Directional Icons">
                <div className="icon-list-demo">
                    <AnterosRow >
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-angle-double-down" />
                            <AnterosLabel caption="angle-double-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-angle-double-left" />
                            <AnterosLabel caption="angle-double-left" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-angle-double-right" />
                            <AnterosLabel caption="angle-double-right" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-angle-double-up" />
                            <AnterosLabel caption="angle-double-up" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-angle-down" />
                            <AnterosLabel caption="angle-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-angle-left" />
                            <AnterosLabel caption="angle-left" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-angle-right" />
                            <AnterosLabel caption="angle-right" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-angle-up" />
                            <AnterosLabel caption="angle-up" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-arrow-circle-down" />
                            <AnterosLabel caption="arrow-circle-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-arrow-circle-left" />
                            <AnterosLabel caption="arrow-circle-left" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-arrow-circle-o-down" />
                            <AnterosLabel caption="arrow-circle-o-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-arrow-circle-o-left" />
                            <AnterosLabel caption="arrow-circle-o-left" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-arrow-circle-o-right" />
                            <AnterosLabel caption="arrow-circle-o-right" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-arrow-circle-o-up" />
                            <AnterosLabel caption="arrow-circle-o-up" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-arrow-circle-right" />
                            <AnterosLabel caption="arrow-circle-right" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-arrow-circle-up" />
                            <AnterosLabel caption="arrow-circle-up" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-arrow-down" />
                            <AnterosLabel caption="arrow-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-arrow-left" />
                            <AnterosLabel caption="arrow-left" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-arrow-right" />
                            <AnterosLabel caption="arrow-right" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-arrow-up" />
                            <AnterosLabel caption="arrow-up" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-arrows" />
                            <AnterosLabel caption="arrows" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-arrows-alt" />
                            <AnterosLabel caption="arrows-alt" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-arrows-h" />
                            <AnterosLabel caption="arrows-h" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-arrows-v" />
                            <AnterosLabel caption="arrows-v" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-caret-down" />
                            <AnterosLabel caption="caret-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-caret-left" />
                            <AnterosLabel caption="caret-left" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-caret-right" />
                            <AnterosLabel caption="caret-right" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-caret-square-o-down" />
                            <AnterosLabel caption="caret-square-o-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-caret-square-o-left" />
                            <AnterosLabel caption="caret-square-o-left" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-caret-square-o-right" />
                            <AnterosLabel caption="caret-square-o-right" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-caret-square-o-up" />
                            <AnterosLabel caption="caret-square-o-up" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-caret-up" />
                            <AnterosLabel caption="caret-up" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-chevron-circle-down" />
                            <AnterosLabel caption="chevron-circle-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-chevron-circle-left" />
                            <AnterosLabel caption="chevron-circle-left" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-chevron-circle-right" />
                            <AnterosLabel caption="chevron-circle-right" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-chevron-circle-up" />
                            <AnterosLabel caption="chevron-circle-up" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-chevron-down" />
                            <AnterosLabel caption="chevron-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-chevron-left" />
                            <AnterosLabel caption="chevron-left" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-chevron-right" />
                            <AnterosLabel caption="chevron-right" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-chevron-up" />
                            <AnterosLabel caption="chevron-up" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-exchange" />
                            <AnterosLabel caption="exchange" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-o-down" />
                            <AnterosLabel caption="hand-o-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-o-left" />
                            <AnterosLabel caption="hand-o-left" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-o-right" />
                            <AnterosLabel caption="hand-o-right" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hand-o-up" />
                            <AnterosLabel caption="hand-o-up" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-long-arrow-down" />
                            <AnterosLabel caption="long-arrow-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-long-arrow-left" />
                            <AnterosLabel caption="long-arrow-left" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-long-arrow-right" />
                            <AnterosLabel caption="long-arrow-right" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-long-arrow-up" />
                            <AnterosLabel caption="long-arrow-up" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-toggle-down" />
                            <AnterosLabel caption="toggle-down" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-toggle-left" />
                            <AnterosLabel caption="toggle-left" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-toggle-right" />
                            <AnterosLabel caption="toggle-right" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-toggle-up" />
                            <AnterosLabel caption="toggle-up" />
                        </AnterosCol>
                    </AnterosRow>
                </div>
            </AnterosCard>



            <AnterosCard caption="Brand Icons">
                <div className="icon-list-demo">
                    <AnterosRow >
                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-500px" />
                            <AnterosLabel caption="500px" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-adn" />
                            <AnterosLabel caption="adn" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-amazon" />
                            <AnterosLabel caption="amazon" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-android" />
                            <AnterosLabel caption="android" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-angellist" />
                            <AnterosLabel caption="angellist" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-apple" />
                            <AnterosLabel caption="apple" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-behance" />
                            <AnterosLabel caption="behance" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-behance-square" />
                            <AnterosLabel caption="behance-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bitbucket" />
                            <AnterosLabel caption="bitbucket" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bitbucket-square" />
                            <AnterosLabel caption="bitbucket-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bitcoin" />
                            <AnterosLabel caption="bitcoin" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-black-tie" />
                            <AnterosLabel caption="black-tie" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bluetooth" />
                            <AnterosLabel caption="bluetooth" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-bluetooth-b" />
                            <AnterosLabel caption="bluetooth-b" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-btc" />
                            <AnterosLabel caption="btc" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-buysellads" />
                            <AnterosLabel caption="buysellads" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cc-amex" />
                            <AnterosLabel caption="cc-amex" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cc-diners-club" />
                            <AnterosLabel caption="cc-diners-club" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cc-discover" />
                            <AnterosLabel caption="cc-discover" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cc-jcb" />
                            <AnterosLabel caption="cc-jcb" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cc-mastercard" />
                            <AnterosLabel caption="cc-mastercard" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cc-paypal" />
                            <AnterosLabel caption="cc-paypal" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cc-stripe" />
                            <AnterosLabel caption="cc-stripe" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-cc-visa" />
                            <AnterosLabel caption="cc-visa" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-chrome" />
                            <AnterosLabel caption="chrome" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-codepen" />
                            <AnterosLabel caption="codepen" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-codiepie" />
                            <AnterosLabel caption="codiepie" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-connectdevelop" />
                            <AnterosLabel caption="connectdevelop" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-contao" />
                            <AnterosLabel caption="contao" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-css3" />
                            <AnterosLabel caption="css3" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-dashcube" />
                            <AnterosLabel caption="dashcube" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-delicious" />
                            <AnterosLabel caption="delicious" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-deviantart" />
                            <AnterosLabel caption="deviantart" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-digg" />
                            <AnterosLabel caption="digg" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-dribbble" />
                            <AnterosLabel caption="dribbble" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-dropbox" />
                            <AnterosLabel caption="dropbox" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-drupal" />
                            <AnterosLabel caption="drupal" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-edge" />
                            <AnterosLabel caption="edge" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-empire" />
                            <AnterosLabel caption="empire" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-expeditedssl" />
                            <AnterosLabel caption="expeditedssl" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-facebook" />
                            <AnterosLabel caption="facebook" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-facebook-f" />
                            <AnterosLabel caption="facebook-f" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-facebook-official" />
                            <AnterosLabel caption="facebook-official" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-facebook-square" />
                            <AnterosLabel caption="facebook-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-firefox" />
                            <AnterosLabel caption="firefox" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-flickr" />
                            <AnterosLabel caption="flickr" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-fonticons" />
                            <AnterosLabel caption="fonticons" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-fort-awesome" />
                            <AnterosLabel caption="fort-awesome" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-forumbee" />
                            <AnterosLabel caption="forumbee" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-foursquare" />
                            <AnterosLabel caption="foursquare" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-ge" />
                            <AnterosLabel caption="ge" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-get-pocket" />
                            <AnterosLabel caption="get-pocket" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-gg" />
                            <AnterosLabel caption="gg" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-gg-circle" />
                            <AnterosLabel caption="gg-circle" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-git" />
                            <AnterosLabel caption="git" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-git-square" />
                            <AnterosLabel caption="git-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-github" />
                            <AnterosLabel caption="github" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-github-alt" />
                            <AnterosLabel caption="github-alt" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-github-square" />
                            <AnterosLabel caption="github-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-gittip" />
                            <AnterosLabel caption="gittip" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-google" />
                            <AnterosLabel caption="google" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-google-plus" />
                            <AnterosLabel caption="google-plus" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-google-plus-square" />
                            <AnterosLabel caption="google-plus-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-google-wallet" />
                            <AnterosLabel caption="google-wallet" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-gratipay" />
                            <AnterosLabel caption="gratipay" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hacker-news" />
                            <AnterosLabel caption="hacker-news" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-houzz" />
                            <AnterosLabel caption="houzz" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-html5" />
                            <AnterosLabel caption="html5" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-instagram" />
                            <AnterosLabel caption="instagram" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-internet-explorer" />
                            <AnterosLabel caption="internet-explorer" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-ioxhost" />
                            <AnterosLabel caption="ioxhost" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-joomla" />
                            <AnterosLabel caption="joomla" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-jsfiddle" />
                            <AnterosLabel caption="jsfiddle" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-lastfm" />
                            <AnterosLabel caption="lastfm" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-lastfm-square" />
                            <AnterosLabel caption="lastfm-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-leanpub" />
                            <AnterosLabel caption="leanpub" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-linkedin" />
                            <AnterosLabel caption="linkedin" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-linkedin-square" />
                            <AnterosLabel caption="linkedin-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-linux" />
                            <AnterosLabel caption="linux" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-maxcdn" />
                            <AnterosLabel caption="maxcdn" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-meanpath" />
                            <AnterosLabel caption="meanpath" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-medium" />
                            <AnterosLabel caption="medium" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-mixcloud" />
                            <AnterosLabel caption="mixcloud" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-modx" />
                            <AnterosLabel caption="modx" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-odnoklassniki" />
                            <AnterosLabel caption="odnoklassniki" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-odnoklassniki-square" />
                            <AnterosLabel caption="odnoklassniki-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-opencart" />
                            <AnterosLabel caption="opencart" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-openid" />
                            <AnterosLabel caption="openid" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-opera" />
                            <AnterosLabel caption="opera" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-optin-monster" />
                            <AnterosLabel caption="optin-monster" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-pagelines" />
                            <AnterosLabel caption="pagelines" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-paypal" />
                            <AnterosLabel caption="paypal" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-pied-piper" />
                            <AnterosLabel caption="pied-piper" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-pied-piper-alt" />
                            <AnterosLabel caption="pied-piper-alt" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-pinterest" />
                            <AnterosLabel caption="pinterest" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-pinterest-p" />
                            <AnterosLabel caption="pinterest-p" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-pinterest-square" />
                            <AnterosLabel caption="pinterest-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-product-hunt" />
                            <AnterosLabel caption="product-hunt" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-qq" />
                            <AnterosLabel caption="qq" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-ra" />
                            <AnterosLabel caption="ra" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-rebel" />
                            <AnterosLabel caption="rebel" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-reddit" />
                            <AnterosLabel caption="reddit" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-reddit-alien" />
                            <AnterosLabel caption="reddit-alien" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-reddit-square" />
                            <AnterosLabel caption="reddit-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-renren" />
                            <AnterosLabel caption="renren" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-safari" />
                            <AnterosLabel caption="safari" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-scribd" />
                            <AnterosLabel caption="scribd" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-sellsy" />
                            <AnterosLabel caption="sellsy" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-share-alt" />
                            <AnterosLabel caption="share-alt" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-share-alt-square" />
                            <AnterosLabel caption="share-alt-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-shirtsinbulk" />
                            <AnterosLabel caption="shirtsinbulk" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-simplybuilt" />
                            <AnterosLabel caption="simplybuilt" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-skyatlas" />
                            <AnterosLabel caption="skyatlas" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-skype" />
                            <AnterosLabel caption="skype" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-slack" />
                            <AnterosLabel caption="slack" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-slideshare" />
                            <AnterosLabel caption="slideshare" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-soundcloud" />
                            <AnterosLabel caption="soundcloud" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-spotify" />
                            <AnterosLabel caption="spotify" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-stack-exchange" />
                            <AnterosLabel caption="stack-exchange" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-stack-overflow" />
                            <AnterosLabel caption="stack-overflow" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-steam" />
                            <AnterosLabel caption="steam" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-steam-square" />
                            <AnterosLabel caption="steam-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-stumbleupon" />
                            <AnterosLabel caption="stumbleupon" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-stumbleupon-circle" />
                            <AnterosLabel caption="stumbleupon-circle" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-tencent-weibo" />
                            <AnterosLabel caption="tencent-weibo" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-trello" />
                            <AnterosLabel caption="trello" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-tripadvisor" />
                            <AnterosLabel caption="tripadvisor" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-tumblr" />
                            <AnterosLabel caption="tumblr" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-tumblr-square" />
                            <AnterosLabel caption="tumblr-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-twitch" />
                            <AnterosLabel caption="twitch" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-twitter" />
                            <AnterosLabel caption="twitter" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-twitter-square" />
                            <AnterosLabel caption="twitter-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-usb" />
                            <AnterosLabel caption="usb" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-viacoin" />
                            <AnterosLabel caption="viacoin" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-vimeo" />
                            <AnterosLabel caption="vimeo" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-vimeo-square" />
                            <AnterosLabel caption="vimeo-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-vine" />
                            <AnterosLabel caption="vine" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-vk" />
                            <AnterosLabel caption="vk" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-wechat" />
                            <AnterosLabel caption="wechat" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-weibo" />
                            <AnterosLabel caption="weibo" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-weixin" />
                            <AnterosLabel caption="weixin" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-whatsapp" />
                            <AnterosLabel caption="whatsapp" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-wikipedia-w" />
                            <AnterosLabel caption="wikipedia-w" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-windows" />
                            <AnterosLabel caption="windows" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-wordpress" />
                            <AnterosLabel caption="wordpress" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-xing" />
                            <AnterosLabel caption="xing" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-xing-square" />
                            <AnterosLabel caption="xing-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-y-combinator" />
                            <AnterosLabel caption="y-combinator" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-y-combinator-square" />
                            <AnterosLabel caption="y-combinator-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-yahoo" />
                            <AnterosLabel caption="yahoo" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-yc" />
                            <AnterosLabel caption="yc" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-yc-square" />
                            <AnterosLabel caption="yc-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-yelp" />
                            <AnterosLabel caption="yelp" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-youtube" />
                            <AnterosLabel caption="youtube" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-youtube-play" />
                            <AnterosLabel caption="youtube-play" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-youtube-square" />
                            <AnterosLabel caption="youtube-square" />
                        </AnterosCol>
                    </AnterosRow>
                </div>
            </AnterosCard>


            <AnterosCard caption="Medical Icons">
                <div className="icon-list-demo">
                    <AnterosRow >

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-ambulance" />
                            <AnterosLabel caption="ambulance" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-h-square" />
                            <AnterosLabel caption="h-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-heart" />
                            <AnterosLabel caption="heart" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-heart-o" />
                            <AnterosLabel caption="heart-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-heartbeat" />
                            <AnterosLabel caption="heartbeat" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-hospital-o" />
                            <AnterosLabel caption="hospital-o" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-medkit" />
                            <AnterosLabel caption="medkit" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-plus-square" />
                            <AnterosLabel caption="plus-square" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-stethoscope" />
                            <AnterosLabel caption="stethoscope" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-user-md" />
                            <AnterosLabel caption="user-md" />
                        </AnterosCol>

                        <AnterosCol small={12} medium={6} large={4} extraLarge={3}>
                            <AnterosIcon icon="fa fa-wheelchair" />
                            <AnterosLabel caption="wheelchair" />
                        </AnterosCol>

                    </AnterosRow>
                </div>
            </AnterosCard>




        </div>);
    }

}
