import React, { Component } from 'react';
import {AnterosCard,HeaderActions,AnterosPageControl,AnterosTab, 
    AnterosCollapseContent} from "anteros-react-containers";
import { AnterosAccordion,  AnterosAccordionItem } from "anteros-react-menu";   
import {AnterosButton} from "anteros-react-buttons";
import {AnterosImage} from "anteros-react-image";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';



export default class TabsView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AnterosCard caption="Default tabs">
                    <AnterosPageControl height="350px">
                        <AnterosTab id="tab1" caption="Home" active>
                            <div className="row">
                                <div className="col-md-2"> <AnterosImage src={require("../assets/img/1.jpg")} width={"256px"} height={"256px"} /> </div>
                                <div className="col-md-4">
                                    <h3>Best Clean Tab ever</h3>
                                    <h4>you can use it with the small code</h4>
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                </div>
                            </div>
                        </AnterosTab>
                        <AnterosTab id="tab2" caption="User">
                            <div className="p-20">
                                <h3>Best Clean Tab ever</h3>
                                <h4>you can use it with the small code</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, assumenda, repellendus optio delectus quasi, blanditiis doloribus laborum autem magni possimus at officia fuga minus rem ducimus. Officia sint aliquam ducimus.</p>
                            </div>
                        </AnterosTab>
                        <AnterosTab id="tab3" caption="E-mail">
                            <div className="p-20">
                                <h3>Clean Tab ever</h3>
                                <h4>you can use it with the small code</h4>
                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.
                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, quis necessitatibus iure sit reiciendis, hic illo doloribus voluptatum iste repudiandae enim unde temporibus obcaecati deleniti aut excepturi laudantium tempora dolorum.
                                </p>
                            </div>
                        </AnterosTab>
                    </AnterosPageControl>
                </AnterosCard>                
                <AnterosCard caption="Custom design 1 tabs">
                    <AnterosPageControl height="350px" custom1>
                        <AnterosTab id="tab11" caption="Home" active>
                            <div className="row">
                                <div className="col-md-2"> <AnterosImage src={require("../assets/img/2.jpg")} width={"256px"} height={"256px"} /> </div>
                                <div className="col-md-4">
                                    <h3>Best Clean Tab ever</h3>
                                    <h4>you can use it with the small code</h4>
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                </div>
                            </div>
                        </AnterosTab>
                        <AnterosTab id="tab21" caption="User">
                            <div className="p-20">
                                <h3>Best Clean Tab ever</h3>
                                <h4>you can use it with the small code</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, assumenda, repellendus optio delectus quasi, blanditiis doloribus laborum autem magni possimus at officia fuga minus rem ducimus. Officia sint aliquam ducimus.</p>
                            </div>
                        </AnterosTab>
                        <AnterosTab id="tab31" caption="E-mail">
                            <div className="p-20">
                                <h3>Clean Tab ever</h3>
                                <h4>you can use it with the small code</h4>
                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.
                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, quis necessitatibus iure sit reiciendis, hic illo doloribus voluptatum iste repudiandae enim unde temporibus obcaecati deleniti aut excepturi laudantium tempora dolorum.
                                </p>
                            </div>
                        </AnterosTab>
                    </AnterosPageControl>
                </AnterosCard>
                <AnterosCard caption="Vertical tabs custom design 1">
                    <AnterosPageControl height="350px" vertical>
                        <AnterosTab id="tab111" caption="Home" active>
                            <div className="row">
                                <div className="col-md-3"> <AnterosImage src={require("../assets/img/4.jpg")} width={"256px"} height={"256px"} /> </div>
                                <div className="col-md-4">
                                    <h3>Best Clean Tab ever</h3>
                                    <h4>you can use it with the small code</h4>
                                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                </div>
                            </div>
                        </AnterosTab>
                        <AnterosTab id="tab211" caption="User">
                            <div className="p-20">
                                <h3>Best Clean Tab ever</h3>
                                <h4>you can use it with the small code</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, assumenda, repellendus optio delectus quasi, blanditiis doloribus laborum autem magni possimus at officia fuga minus rem ducimus. Officia sint aliquam ducimus.</p>
                            </div>
                        </AnterosTab>
                        <AnterosTab id="tab311" caption="E-mail">
                            <div className="p-20">
                                <h3>Clean Tab ever</h3>
                                <h4>you can use it with the small code</h4>
                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.
                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, quis necessitatibus iure sit reiciendis, hic illo doloribus voluptatum iste repudiandae enim unde temporibus obcaecati deleniti aut excepturi laudantium tempora dolorum.
                                </p>
                            </div>
                        </AnterosTab>
                    </AnterosPageControl>
                </AnterosCard>
                <AnterosCard caption="Vertical tabs custom design 1">
                    <AnterosPageControl height="350px" vertical custom1>
                        <AnterosTab id="tab1115" caption="Home" active>
                            <div className="p-20">
                                <h3>Best Clean Tab ever</h3>
                                <h4>you can use it with the small code</h4>
                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                            </div>
                        </AnterosTab>
                        <AnterosTab id="tab2115" caption="User">
                            <div className="p-20">
                                <h3>Best Clean Tab ever</h3>
                                <h4>you can use it with the small code</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, assumenda, repellendus optio delectus quasi, blanditiis doloribus laborum autem magni possimus at officia fuga minus rem ducimus. Officia sint aliquam ducimus.</p>
                            </div>
                        </AnterosTab>
                        <AnterosTab id="tab3115" caption="E-mail">
                            <div className="p-20">
                                <h3>Clean Tab ever</h3>
                                <h4>you can use it with the small code</h4>
                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.
                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, quis necessitatibus iure sit reiciendis, hic illo doloribus voluptatum iste repudiandae enim unde temporibus obcaecati deleniti aut excepturi laudantium tempora dolorum.
                                </p>
                            </div>
                        </AnterosTab>
                    </AnterosPageControl>
                </AnterosCard>


                <AnterosCard caption="Custom design 2 tabs">
                    <AnterosPageControl height="350px" custom2>
                        <AnterosTab id="tab113" caption="Home" active>
                            <div className="p-20">
                                <h3>Best Clean Tab ever</h3>
                                <h4>you can use it with the small code</h4>
                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                            </div>
                        </AnterosTab>
                        <AnterosTab id="tab213" caption="User">
                            <div className="p-20">
                                <h3>Best Clean Tab ever</h3>
                                <h4>you can use it with the small code</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, assumenda, repellendus optio delectus quasi, blanditiis doloribus laborum autem magni possimus at officia fuga minus rem ducimus. Officia sint aliquam ducimus.</p>
                            </div>
                        </AnterosTab>
                        <AnterosTab id="tab313" caption="E-mail">
                            <div className="p-20">
                                <h3>Clean Tab ever</h3>
                                <h4>you can use it with the small code</h4>
                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.
                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, quis necessitatibus iure sit reiciendis, hic illo doloribus voluptatum iste repudiandae enim unde temporibus obcaecati deleniti aut excepturi laudantium tempora dolorum.
                                </p>
                            </div>
                        </AnterosTab>
                    </AnterosPageControl>
                </AnterosCard>

                <AnterosCard caption="Pills tabs">
                    <AnterosPageControl height="350px" pill>
                        <AnterosTab id="tab1134" caption="Home" active>
                            <div className="p-20">
                                <h3>Best Clean Tab ever</h3>
                                <h4>you can use it with the small code</h4>
                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                            </div>
                        </AnterosTab>
                        <AnterosTab id="tab2134" caption="User">
                            <div className="p-20">
                                <h3>Best Clean Tab ever</h3>
                                <h4>you can use it with the small code</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, assumenda, repellendus optio delectus quasi, blanditiis doloribus laborum autem magni possimus at officia fuga minus rem ducimus. Officia sint aliquam ducimus.</p>
                            </div>
                        </AnterosTab>
                        <AnterosTab id="tab3134" caption="E-mail">
                            <div className="p-20">
                                <h3>Clean Tab ever</h3>
                                <h4>you can use it with the small code</h4>
                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.
                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, quis necessitatibus iure sit reiciendis, hic illo doloribus voluptatum iste repudiandae enim unde temporibus obcaecati deleniti aut excepturi laudantium tempora dolorum.
                                </p>
                            </div>
                        </AnterosTab>
                    </AnterosPageControl>
                </AnterosCard>
                <AnterosCard caption="Tabs with icons and images">
                    <div className="row">
                        <div className="col-6">
                            <AnterosPageControl height="350px">
                                <AnterosTab id="tab19" caption="Home" active icon="fa fa-home">
                                    <div className="p-20">
                                        <h3>Best Clean Tab ever</h3>
                                        <h4>you can use it with the small code</h4>
                                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                    </div>
                                </AnterosTab>
                                <AnterosTab id="tab29" caption="User" icon="fa fa-user">
                                    <div className="p-20">
                                        <h3>Best Clean Tab ever</h3>
                                        <h4>you can use it with the small code</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, assumenda, repellendus optio delectus quasi, blanditiis doloribus laborum autem magni possimus at officia fuga minus rem ducimus. Officia sint aliquam ducimus.</p>
                                    </div>
                                </AnterosTab>
                                <AnterosTab id="tab39" caption="E-mail" icon="fa fa-envelope">
                                    <div className="p-20">
                                        <h3>Clean Tab ever</h3>
                                        <h4>you can use it with the small code</h4>
                                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.
                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, quis necessitatibus iure sit reiciendis, hic illo doloribus voluptatum iste repudiandae enim unde temporibus obcaecati deleniti aut excepturi laudantium tempora dolorum.
                                </p>
                                    </div>
                                </AnterosTab>
                            </AnterosPageControl>
                        </div>
                        <div className="col-6">
                            <AnterosPageControl height="350px">
                                <AnterosTab id="tab17" caption="Home" active image={require('../assets/img/home_1.png')}>
                                    <div className="p-20">
                                        <h3>Best Clean Tab ever</h3>
                                        <h4>you can use it with the small code</h4>
                                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                                    </div>
                                </AnterosTab>
                                <AnterosTab id="tab27" caption="User" image={require('../assets/img/user_1.png')}>
                                    <div className="p-20">
                                        <h3>Best Clean Tab ever</h3>
                                        <h4>you can use it with the small code</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, assumenda, repellendus optio delectus quasi, blanditiis doloribus laborum autem magni possimus at officia fuga minus rem ducimus. Officia sint aliquam ducimus.</p>
                                    </div>
                                </AnterosTab>
                                <AnterosTab id="tab37" caption="E-mail" image={require('../assets/img/mail_1.png')}>
                                    <div className="p-20">
                                        <h3>Clean Tab ever</h3>
                                        <h4>you can use it with the small code</h4>
                                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.
                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, quis necessitatibus iure sit reiciendis, hic illo doloribus voluptatum iste repudiandae enim unde temporibus obcaecati deleniti aut excepturi laudantium tempora dolorum.
                                </p>
                                    </div>
                                </AnterosTab>
                            </AnterosPageControl>
                        </div>
                    </div>
                </AnterosCard>


                <AnterosCard caption="Vertical tabs with icons and images">
                    <AnterosPageControl height="350px" vertical>
                        <AnterosTab id="tab1112" caption="Home" active icon="fa fa-home">
                            <div className="p-20">
                                <h3>Best Clean Tab ever</h3>
                                <h4>you can use it with the small code</h4>
                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                            </div>
                        </AnterosTab>
                        <AnterosTab id="tab2112" caption="User" icon="fa fa-user">
                            <div className="p-20">
                                <h3>Best Clean Tab ever</h3>
                                <h4>you can use it with the small code</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, assumenda, repellendus optio delectus quasi, blanditiis doloribus laborum autem magni possimus at officia fuga minus rem ducimus. Officia sint aliquam ducimus.</p>
                            </div>
                        </AnterosTab>
                        <AnterosTab id="tab3112" caption="E-mail" icon="fa fa-envelope">
                            <div className="p-20">
                                <h3>Clean Tab ever</h3>
                                <h4>you can use it with the small code</h4>
                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.
                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, quis necessitatibus iure sit reiciendis, hic illo doloribus voluptatum iste repudiandae enim unde temporibus obcaecati deleniti aut excepturi laudantium tempora dolorum.
                                </p>
                            </div>
                        </AnterosTab>
                    </AnterosPageControl>
                    <p></p>
                    <AnterosPageControl height="350px" vertical custom1>
                        <AnterosTab id="tab1113" caption="Home" active image={require('../assets/img/home_1.png')}>
                            <div className="p-20">
                                <h3>Best Clean Tab ever</h3>
                                <h4>you can use it with the small code</h4>
                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.</p>
                            </div>
                        </AnterosTab>
                        <AnterosTab id="tab2113" caption="User" image={require('../assets/img/user_1.png')}>
                            <div className="p-20">
                                <h3>Best Clean Tab ever</h3>
                                <h4>you can use it with the small code</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, assumenda, repellendus optio delectus quasi, blanditiis doloribus laborum autem magni possimus at officia fuga minus rem ducimus. Officia sint aliquam ducimus.</p>
                            </div>
                        </AnterosTab>
                        <AnterosTab id="tab3113" caption="E-mail" image={require('../assets/img/mail_1.png')}>
                            <div className="p-20">
                                <h3>Clean Tab ever</h3>
                                <h4>you can use it with the small code</h4>
                                <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a.
                                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, quis necessitatibus iure sit reiciendis, hic illo doloribus voluptatum iste repudiandae enim unde temporibus obcaecati deleniti aut excepturi laudantium tempora dolorum.
                                </p>
                            </div>
                        </AnterosTab>
                    </AnterosPageControl>
                </AnterosCard>

                <AnterosCard caption="Accordions">
                    <AnterosCard caption="Basic">
                        <AnterosAccordion id="acc1" onSelectAccordionItem={this.onSelectAccordionItem}>
                            <AnterosAccordionItem id="1" caption="Item 1" >
                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                             sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                             craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                             craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                             </p>
                                <AnterosImage src="http://lorempixel.com/400/200/sports/1" />
                            </AnterosAccordionItem>
                            <AnterosAccordionItem id="2" caption="Item 2">
                                <p>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                            cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                            on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                             synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                             </p>
                                <AnterosImage src="http://lorempixel.com/400/200/sports/2" />
                            </AnterosAccordionItem>
                            <AnterosAccordionItem id="3" caption="Item 3">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut aspernatur expedita aperiam dolorum quasi, nesciunt facilis hic vel, magni voluptatum accusamus molestiae totam ullam praesentium, omnis recusandae, aut laborum aliquam!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum molestiae facere alias quo officia dolorem laudantium dolore, aliquid temporibus non odit! Eligendi tempora ullam est deleniti autem, harum vero laboriosam.
                                </p>
                                <AnterosImage src="http://lorempixel.com/400/200/sports/3" />
                            </AnterosAccordionItem>
                        </AnterosAccordion>
                    </AnterosCard>

                    <AnterosCard caption="With icons">
                        <AnterosAccordion id="acc21" onSelectAccordionItem={this.onSelectAccordionItem}>
                            <AnterosAccordionItem id="21" caption="Item 1" icon="fa fa-home" iconColor="red">
                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                             sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                             craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                             craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                             </p>
                                <AnterosImage src="http://lorempixel.com/400/200/food/1" />
                            </AnterosAccordionItem>
                            <AnterosAccordionItem id="22" caption="Item 2" icon="fa fa-user" iconColor="blue">
                                <p>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                            cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                            on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                             synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                             </p>
                                <AnterosImage src="http://lorempixel.com/400/200/food/2" />
                            </AnterosAccordionItem>
                            <AnterosAccordionItem id="23" caption="Item 3" icon="fa fa-envelope" iconColor="green">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut aspernatur expedita aperiam dolorum quasi, nesciunt facilis hic vel, magni voluptatum accusamus molestiae totam ullam praesentium, omnis recusandae, aut laborum aliquam!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum molestiae facere alias quo officia dolorem laudantium dolore, aliquid temporibus non odit! Eligendi tempora ullam est deleniti autem, harum vero laboriosam.
                                </p>
                                <AnterosImage src="http://lorempixel.com/400/200/food/3" />
                            </AnterosAccordionItem>
                        </AnterosAccordion>
                    </AnterosCard>
                    <AnterosCard caption="With images">
                        <AnterosAccordion id="acc211" onSelectAccordionItem={this.onSelectAccordionItem}>
                            <AnterosAccordionItem id="211" caption="Item 1" image={require('../assets/img/home_1.png')}>
                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                             sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                             craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                             craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                             </p>
                                <AnterosImage src="http://lorempixel.com/400/200/animals/1" />
                            </AnterosAccordionItem>
                            <AnterosAccordionItem id="221" caption="Item 2" image={require('../assets/img/user_1.png')}>
                                <p>
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                            cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                            on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                             synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                             </p>
                                <AnterosImage src="http://lorempixel.com/400/200/animals/2" />
                            </AnterosAccordionItem>
                            <AnterosAccordionItem id="231" caption="Item 3" image={require('../assets/img/mail_1.png')}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut aspernatur expedita aperiam dolorum quasi, nesciunt facilis hic vel, magni voluptatum accusamus molestiae totam ullam praesentium, omnis recusandae, aut laborum aliquam!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum molestiae facere alias quo officia dolorem laudantium dolore, aliquid temporibus non odit! Eligendi tempora ullam est deleniti autem, harum vero laboriosam.
                                </p>
                                <AnterosImage src="http://lorempixel.com/400/200/animals/3" />
                            </AnterosAccordionItem>
                        </AnterosAccordion>
                    </AnterosCard>
                    <AnterosCard caption="Default colors and outline">
                        <h5> Colors </h5>
                        <div className="row">
                            <div className="col-md-3">
                                <AnterosAccordion id="acc2112" success onSelectAccordionItem={this.onSelectAccordionItem}>
                                    <AnterosAccordionItem id="2112" caption="Item 1">
                                    </AnterosAccordionItem>
                                    <AnterosAccordionItem id="2212" caption="Item 2">
                                    </AnterosAccordionItem>
                                    <AnterosAccordionItem id="2312" caption="Item 3">
                                    </AnterosAccordionItem>
                                </AnterosAccordion>
                            </div>
                            <div className="col-md-3">
                                <AnterosAccordion id="acc21122" warning onSelectAccordionItem={this.onSelectAccordionItem}>
                                    <AnterosAccordionItem id="21122" caption="Item 1">
                                    </AnterosAccordionItem>
                                    <AnterosAccordionItem id="22122" caption="Item 2">
                                    </AnterosAccordionItem>
                                    <AnterosAccordionItem id="23122" caption="Item 3">
                                    </AnterosAccordionItem>
                                </AnterosAccordion>
                            </div>
                            <div className="col-md-3">
                                <AnterosAccordion id="acc21125" info onSelectAccordionItem={this.onSelectAccordionItem}>
                                    <AnterosAccordionItem id="21125" caption="Item 1">
                                    </AnterosAccordionItem>
                                    <AnterosAccordionItem id="22125" caption="Item 2">
                                    </AnterosAccordionItem>
                                    <AnterosAccordionItem id="23125" caption="Item 3">
                                    </AnterosAccordionItem>
                                </AnterosAccordion>
                            </div>
                            <div className="col-md-3">
                                <AnterosAccordion id="acc211225" danger onSelectAccordionItem={this.onSelectAccordionItem}>
                                    <AnterosAccordionItem id="211225" caption="Item 1">
                                    </AnterosAccordionItem>
                                    <AnterosAccordionItem id="221225" caption="Item 2">
                                    </AnterosAccordionItem>
                                    <AnterosAccordionItem id="231225" caption="Item 3">
                                    </AnterosAccordionItem>
                                </AnterosAccordion>
                            </div>
                        </div>
                        <h5> Outline </h5>
                        <div className="row">
                            <div className="col-md-3">
                                <AnterosAccordion id="acc21124" success outline onSelectAccordionItem={this.onSelectAccordionItem}>
                                    <AnterosAccordionItem id="21124" caption="Item 1">
                                    </AnterosAccordionItem>
                                    <AnterosAccordionItem id="22124" caption="Item 2">
                                    </AnterosAccordionItem>
                                    <AnterosAccordionItem id="23124" caption="Item 3">
                                    </AnterosAccordionItem>
                                </AnterosAccordion>
                            </div>
                            <div className="col-md-3">
                                <AnterosAccordion id="acc211224" warning outline onSelectAccordionItem={this.onSelectAccordionItem}>
                                    <AnterosAccordionItem id="211224" caption="Item 1">
                                    </AnterosAccordionItem>
                                    <AnterosAccordionItem id="221224" caption="Item 2">
                                    </AnterosAccordionItem>
                                    <AnterosAccordionItem id="231224" caption="Item 3">
                                    </AnterosAccordionItem>
                                </AnterosAccordion>
                            </div>
                            <div className="col-md-3">
                                <AnterosAccordion id="acc211245" info outline onSelectAccordionItem={this.onSelectAccordionItem}>
                                    <AnterosAccordionItem id="211245" caption="Item 1">
                                    </AnterosAccordionItem>
                                    <AnterosAccordionItem id="221245" caption="Item 2">
                                    </AnterosAccordionItem>
                                    <AnterosAccordionItem id="231245" caption="Item 3">
                                    </AnterosAccordionItem>
                                </AnterosAccordion>
                            </div>
                            <div className="col-md-3">
                                <AnterosAccordion id="acc2112245" danger outline onSelectAccordionItem={this.onSelectAccordionItem}>
                                    <AnterosAccordionItem id="2112245" caption="Item 1">
                                    </AnterosAccordionItem>
                                    <AnterosAccordionItem id="2212245" caption="Item 2">
                                    </AnterosAccordionItem>
                                    <AnterosAccordionItem id="2312245" caption="Item 3">
                                    </AnterosAccordionItem>
                                </AnterosAccordion>
                            </div>
                        </div>
                    </AnterosCard>
                </AnterosCard>
            </div>);
    }
}