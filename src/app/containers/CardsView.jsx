import React, { Component } from 'react';
import {AnterosCard, HeaderActions, FooterActions, AnterosCardGroup, AnterosCardDeck,AnterosCollapseContent } from "anteros-react-containers";
import {AnterosImage} from "anteros-react-image";
import {AnterosButton} from "anteros-react-buttons";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';

export default class CardView extends Component {
    render() {
        return (<AnterosCard caption="Cards">

            <AnterosCard caption="Cards with Images">
                <div className="row">
                    <div className="col-md-4">
                        <AnterosCard showHeader={false} image={require('../assets/img/card_1.jpg')}
                            imageTop title="Card title"
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi beatae incidunt molestiae illo esse, veniam fugit harum reprehenderit veritatis iure sapiente itaque facilis officia dolorum, mollitia amet reiciendis. Exercitationem.">
                            <HeaderActions>
                                <AnterosButton circle small link icon="fa fa-code"
                                    hint="Show code" hintPosition="left"
                                    collapseContent="idShowButtonsColors" />
                            </HeaderActions>
                            <AnterosButton primary>Go somewhere</AnterosButton>
                        </AnterosCard>
                    </div>
                    <div className="col-md-4">
                        <AnterosCard showHeader={false} image={require('../assets/img/card_2.jpg')}
                            imageTop title="Card title"
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi beatae incidunt molestiae illo esse, veniam fugit harum reprehenderit veritatis iure sapiente itaque facilis officia dolorum, mollitia amet reiciendis. Exercitationem.">
                            <HeaderActions>
                                <AnterosButton circle small link icon="fa fa-code"
                                    hint="Show code" hintPosition="left"
                                    collapseContent="idShowButtonsColors" />
                            </HeaderActions>
                            <AnterosButton primary>Go somewhere</AnterosButton>
                        </AnterosCard>

                    </div>
                    <div className="col-md-4">
                        <AnterosCard showHeader={false} image={require('../assets/img/card_3.jpg')}
                            imageTop title="Card title"
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi beatae incidunt molestiae illo esse, veniam fugit harum reprehenderit veritatis iure sapiente itaque facilis officia dolorum, mollitia amet reiciendis. Exercitationem.">
                            <HeaderActions>
                                <AnterosButton circle small link icon="fa fa-code"
                                    hint="Show code" hintPosition="left"
                                    collapseContent="idShowButtonsColors" />
                            </HeaderActions>
                            <AnterosButton primary>Go somewhere</AnterosButton>
                        </AnterosCard>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <AnterosCard showHeader={false} image={require('../assets/img/card_7.jpg')}
                            imageTop title="Card title"
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam similique architecto blanditiis sapiente rem necessitatibus vero amet, accusantium quos vel ex. Ipsum harum quia, earum magnam. Reprehenderit assumenda, voluptas totam.">
                            <HeaderActions>
                                <AnterosButton circle small link icon="fa fa-code"
                                    hint="Show code" hintPosition="left"
                                    collapseContent="idShowButtonsColors" />
                            </HeaderActions>
                        </AnterosCard>
                    </div>
                    <div className="col-md-6">
                        <AnterosCard showHeader={false} image={require('../assets/img/card_7.jpg')}
                            imageBottom title="Card title"
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, dolorum quod beatae repellat sed aut in, possimus harum impedit! Iusto accusantium tempora possimus quidem aperiam, dolor voluptate molestias esse ipsam.">
                            <HeaderActions>
                                <AnterosButton circle small link icon="fa fa-code"
                                    hint="Show code" hintPosition="left"
                                    collapseContent="idShowButtonsColors" />
                            </HeaderActions>
                        </AnterosCard>
                    </div>
                </div>
            </AnterosCard>

            <AnterosCard caption="Card with Image Overlay">
                <div className="row">
                    <div className="col-md-12">
                        <AnterosCard showHeader={false} image={require('../assets/img/card_8.jpg')}
                            imageOverlay title="Card title"
                            cardInverse
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam similique architecto blanditiis sapiente rem necessitatibus vero amet, accusantium quos vel ex. Ipsum harum quia, earum magnam. Reprehenderit assumenda, voluptas totam.">
                            <HeaderActions>
                                <AnterosButton circle small link icon="fa fa-code"
                                    hint="Show code" hintPosition="left"
                                    collapseContent="idShowButtonsColors" />
                            </HeaderActions>
                        </AnterosCard>
                    </div>
                </div>
            </AnterosCard>


            <AnterosCard caption="Simple Cards">

                <div className="row">

                    <div className="col-4">
                        <AnterosCard showFooter={true} caption="Default card">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
                            <HeaderActions>
                                <AnterosButton circle small link icon="fa fa-code"
                                    hint="Show code" hintPosition="left"
                                    collapseContent="idShowButtonsColors" />
                            </HeaderActions>
                            <FooterActions>
                                Card Footer
                        </FooterActions>
                        </AnterosCard>
                    </div>

                    <div className="col-4">
                        <AnterosCard primary showFooter={true} caption="Primary card">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
                            <HeaderActions>
                                <AnterosButton circle small link icon="fa fa-code"
                                    hint="Show code" hintPosition="left"
                                    collapseContent="idShowButtonsColors" />
                            </HeaderActions>
                            <FooterActions>
                                Card Footer
                        </FooterActions>
                        </AnterosCard>
                    </div>

                    <div className="col-4">
                        <AnterosCard success showFooter={true} caption="Success card">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
                            <HeaderActions>
                                <AnterosButton circle small link icon="fa fa-code"
                                    hint="Show code" hintPosition="left"
                                    collapseContent="idShowButtonsColors" />
                            </HeaderActions>
                            <FooterActions>
                                Card Footer
                        </FooterActions>
                        </AnterosCard>
                    </div>

                </div>

                <div className="row">

                    <div className="col-4">
                        <AnterosCard info showFooter={true} caption="Info card">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
                            <HeaderActions>
                                <AnterosButton circle small link icon="fa fa-code"
                                    hint="Show code" hintPosition="left"
                                    collapseContent="idShowButtonsColors" />
                            </HeaderActions>
                            <FooterActions>
                                Card Footer
                        </FooterActions>
                        </AnterosCard>
                    </div>

                    <div className="col-4">
                        <AnterosCard warning showFooter={true} caption="Warning card">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
                            <HeaderActions>
                                <AnterosButton circle small link icon="fa fa-code"
                                    hint="Show code" hintPosition="left"
                                    collapseContent="idShowButtonsColors" />
                            </HeaderActions>
                            <FooterActions>
                                Card Footer
                        </FooterActions>
                        </AnterosCard>
                    </div>

                    <div className="col-4">
                        <AnterosCard danger showFooter={true} caption="Danger card">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
                            <HeaderActions>
                                <AnterosButton circle small link icon="fa fa-code"
                                    hint="Show code" hintPosition="left"
                                    collapseContent="idShowButtonsColors" />
                            </HeaderActions>
                            <FooterActions>
                                Card Footer
                        </FooterActions>
                        </AnterosCard>
                    </div>

                </div>
            </AnterosCard >

            <AnterosCard caption="Cards Outline">
                <HeaderActions>
                    <AnterosButton circle small link icon="fa fa-code"
                        hint="Show code" hintPosition="left"
                        collapseContent="idShowButtonsColors" />
                </HeaderActions>

                <div className="row">

                    <div className="col-4">
                        <AnterosCard showHeader={false} outline >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title
                        </AnterosCard>
                    </div>

                    <div className="col-4">
                        <AnterosCard primary showHeader={false} outline>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title
                        </AnterosCard>
                    </div>

                    <div className="col-4">
                        <AnterosCard success showHeader={false} outline>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title
                        </AnterosCard>
                    </div>

                </div>

                <div className="row">

                    <div className="col-4">
                        <AnterosCard info showHeader={false} outline>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title
                        </AnterosCard>
                    </div>

                    <div className="col-4">
                        <AnterosCard warning showHeader={false} outline>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title
                        </AnterosCard>
                    </div>

                    <div className="col-4">
                        <AnterosCard danger showHeader={false} outline>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title
                        </AnterosCard>
                    </div>

                </div>
                <div className="row">

                    <div className="col-4">
                        <AnterosCard showHeader={true} outline caption="Title">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title
                        </AnterosCard>
                    </div>

                    <div className="col-4">
                        <AnterosCard primary showHeader={true} outline caption="Title">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title
                        </AnterosCard>
                    </div>

                    <div className="col-4">
                        <AnterosCard success showHeader={true} outline caption="Title">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title
                        </AnterosCard>
                    </div>

                </div>

                <div className="row">

                    <div className="col-4">
                        <AnterosCard info showHeader={true} outline caption="Title">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title
                        </AnterosCard>
                    </div>

                    <div className="col-4">
                        <AnterosCard warning showHeader={true} outline caption="Title">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title
                        </AnterosCard>
                    </div>

                    <div className="col-4">
                        <AnterosCard danger showHeader={true} outline caption="Title">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Someone famous in Source Title
                        </AnterosCard>
                    </div>

                </div>
            </AnterosCard >

            <AnterosCard caption="Cards Background variants">
                <HeaderActions>
                    <AnterosButton circle small link icon="fa fa-code"
                        hint="Show code" hintPosition="left"
                        collapseContent="idShowButtonsColors" />
                </HeaderActions>
                <div className="row">
                    <div className="col-4">
                        <AnterosCard showHeader={false}
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.">
                        </AnterosCard>
                    </div>

                    <div className="col-4">
                        <AnterosCard primary showHeader={false} cardInverse
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.">
                        </AnterosCard>
                    </div>

                    <div className="col-4">
                        <AnterosCard success showHeader={false} cardInverse
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.">
                        </AnterosCard>
                    </div>

                </div>

                <div className="row">
                    <div className="col-4">
                        <AnterosCard info showHeader={false} cardInverse>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
                        </AnterosCard>
                    </div>

                    <div className="col-4">
                        <AnterosCard warning showHeader={false} primary cardInverse>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
                        </AnterosCard>
                    </div>

                    <div className="col-4">
                        <AnterosCard danger showHeader={false} success cardInverse>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
                        </AnterosCard>
                    </div>

                </div>
            </AnterosCard>

            <AnterosCard caption="Cards text alignment">
                <HeaderActions>
                    <AnterosButton circle small link icon="fa fa-code"
                        hint="Show code" hintPosition="left"
                        collapseContent="idShowButtonsColors" />
                </HeaderActions>
                <div className="row">
                    <div className="col-4">
                        <AnterosCard showHeader={false} title="Card title"
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur repellat est voluptatem accusamus maxime? Obcaecati ipsam, culpa eum voluptatibus suscipit excepturi sequi! Facere magni ipsa suscipit, non qui dolores earum?Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.">
                        </AnterosCard>
                    </div>

                    <div className="col-4">
                        <AnterosCard primary showHeader={false} outline textCenter title="Card title"
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolores numquam similique at sapiente corporis non sint quo tenetur molestias, facere doloremque iure odio laudantium sequi animi perferendis necessitatibus ex!Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.">
                        </AnterosCard>
                    </div>

                    <div className="col-4">
                        <AnterosCard success showHeader={false} outline textRight title="Card title"
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero minima reprehenderit recusandae incidunt autem, corporis earum deleniti quam sunt velit facilis saepe dolores omnis placeat ad alias deserunt! Illo, excepturi!Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.">
                        </AnterosCard>
                    </div>

                </div>
            </AnterosCard>




            <AnterosCard caption="Cards Group">
                <HeaderActions>
                    <AnterosButton circle small link icon="fa fa-code"
                        hint="Show code" hintPosition="left"
                        collapseContent="idShowButtonsColors" />
                </HeaderActions>
                <AnterosCardGroup>
                    <AnterosCard imageTop title="Card title" image={require('../assets/img/group_1.jpg')} showFooter={true} showHeader={false}
                        text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." />
                    <AnterosCard imageTop title="Card title" image={require('../assets/img/group_2.jpg')} showFooter={true} showHeader={false}
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad iste deserunt, voluptates suscipit unde, repellat a doloribus ratione accusamus totam dicta! Quod, deserunt, natus? Laboriosam est magni velit beatae necessitatibus.This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." />
                    <AnterosCard imageTop title="Card title" image={require('../assets/img/group_3.jpg')} showFooter={true} showHeader={false}
                        text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." />
                </AnterosCardGroup>
            </AnterosCard>

            <AnterosCard caption="Cards Deck">
                <HeaderActions>
                    <AnterosButton circle small link icon="fa fa-code"
                        hint="Show code" hintPosition="left"
                        collapseContent="idShowButtonsColors" />
                </HeaderActions>
                <AnterosCardDeck>
                    <AnterosCard imageTop title="Card title" image={require('../assets/img/deck_1.jpg')} showFooter={true} showHeader={false}
                        text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex distinctio quaerat, illo, doloremque molestiae quisquam error similique a, blanditiis modi officiis obcaecati ullam quia delectus. Quas, aliquam veniam iure magnam." />
                    <AnterosCard imageTop title="Card title" image={require('../assets/img/deck_2.jpg')} showFooter={true} showHeader={false}
                        text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." />
                    <AnterosCard imageTop title="Card title" image={require('../assets/img/deck_3.jpg')} showFooter={true} showHeader={false}
                        text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." />
                </AnterosCardDeck>
            </AnterosCard>


            <AnterosCard caption="Cards with actions">
                <HeaderActions>
                    <AnterosButton circle small link icon="fa fa-code"
                        hint="Show code" hintPosition="left"
                        collapseContent="idShowButtonsColors" />
                </HeaderActions>

                <div className="row">
                    <div className="col-12">
                        <AnterosCardDeck>
                            <AnterosCard showFooter={true} caption="Header actions">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
                        <HeaderActions>
                                    <AnterosButton oval primary caption="Action 1" onButtonClick={() => console.log("Clicou na ação 1")} />
                                    <AnterosButton oval primary caption="Action 2" onButtonClick={() => console.log("Clicou na ação 2")} />
                                </HeaderActions>
                            </AnterosCard>
                            <AnterosCard primary outline showFooter={true} caption="Footer actions">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.
                        <FooterActions>
                                    <AnterosButton success oval caption="Action 1" onButtonClick={() => console.log("Clicou na ação 1")} />
                                    <AnterosButton success oval caption="Action 2" onButtonClick={() => console.log("Clicou na ação 2")} />
                                </FooterActions>
                            </AnterosCard>
                        </AnterosCardDeck>
                    </div>
                </div>
            </AnterosCard >

        </AnterosCard >);
    }
}



