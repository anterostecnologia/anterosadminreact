import React, { Component } from 'react';
import AnterosCard from "../components/AnterosCard";
import AnterosPageControl from "../components/AnterosPageControl";
import AnterosTab from "../components/AnterosTab";
import AnterosButton from "../components/AnterosButton";
import AnterosImage from "../components/AnterosImage";


export default class TabsView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AnterosCard caption="Default tabs">
                    <AnterosPageControl height="200px">
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
                    <AnterosPageControl height="200px" custom1>
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
                    <AnterosPageControl height="200px" vertical>
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
                    <AnterosPageControl height="200px" vertical custom1>
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
                    <AnterosPageControl height="200px" custom2>
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
                    <AnterosPageControl height="200px" pill>
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
                            <AnterosPageControl height="200px">
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
                            <AnterosPageControl height="200px">
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
                    <AnterosPageControl height="200px" vertical>
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
                    <AnterosPageControl height="200px" vertical custom1>
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
            </div>);
    }
}