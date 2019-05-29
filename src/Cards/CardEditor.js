import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import DescriptionComponent from "./DescriptionComponent.js"
import CardNameEditor from "./CardNameEditor";
import PersonFaceComponent from "../Components/Users/PersonFaceComponent.js";
import SectionsMenuComponent from "./SectionsMenu"
import "./CardEditor.css"
import BadgesPanel from "../Components/BadgesPanel"
import cards from "./CardDatabase"
import ChildernsNavBar from "./ChildernsNavBar"


class CardComponent extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            showDetails: true,
            showLabels: true,
            card: props.card
        };
    }


    switchLabels()
    {
        this.setState( { showLabels: !this.state.showLabels });
    }

    switchDetails()
    {
        this.setState( { showDetails: !this.state.showDetails });
    }

    switchToAnotherCard(newCard) {
        if (newCard) {
            this.setState({ card: newCard })
        }
    }

    render()
    {
        let details;
        let discussionsHeader;
        let labels;
        let childern;

        if (this.state.showLabels && this.state.card.labels.length > 0) {
            labels = (
                <tr>
                    <td></td>
                    <td>
                        <BadgesPanel showCaption="false" badges={this.state.card.labels} />
                    </td>
                </tr>
            )
        }


        let childernCards
        if (this.state.card.childernRefs && this.state.card.childernRefs.length > 0) {
            childernCards = cards.childernRefsToChildern(this.state.card.childernRefs)
        }
        if (this.state.card.childern && this.state.card.childern.length > 0) {
            childernCards = this.state.card.childern
        }
        if (childernCards) {
            console.log("childernCards:", childernCards)
            childern = (
                <tr>
                    <td></td>
                    <td>
                        <h1>Childern</h1>
                        {childernCards.map((childCard, index) => <div key={index}><a href="#" onClick={this.switchToAnotherCard.bind(this, childCard)}> {childCard.caption}</a></div> )}
                    </td>
                </tr>
            )
        }

        if (this.state.showDetails) {
            discussionsHeader = <tr>
                                    <td><img alt="Activity" src="img/Activity.png"/></td>
                                    <td><h1>Discussions</h1></td>
                                </tr>
            details = this.state.card.discussion.map((discussion, index) => (
                <tr key={index}>
                    <td><PersonFaceComponent showAsFace={true} personName={discussion.userId} /></td>
                    <td className="DiscussionThreat">
                        <div className="Discussion-item-header">
                            <PersonFaceComponent showAsFace={false} personName={discussion.userId} /> <span className="timestamp-action">commented on {discussion.dateTime}</span>
                        </div>

                        <div className="CommentText"><ReactMarkdown source={discussion.description} /></div>

                    </td>
                </tr>
            ));
        }

        return (
            <div className="Card">
                <table className="CardContentTable">
                    <tbody>
                    <tr>
                        <td>
                            <table width="100%">
                                <tbody>
                                <tr>
                                    <td className="IconsCol"><img alt="WindowHeaderFormIcon" src="img/WindowHeaderFormIcon.png"/></td>
                                    <td><CardNameEditor name={this.state.card.caption} /></td>
                                </tr>
                                { labels }
                                <tr>
                                    <td><img alt="DescriptionIcon" src="img/DescriptionIcon.png"/></td>
                                    <td>
                                        <DescriptionComponent description={this.state.card.description}/>
                                    </td>
                                </tr>
                                {childern}
                                {discussionsHeader}
                                {details}
                                </tbody>
                            </table>
                        </td>
                        <td className="VerticalButtonsCol">
                            <SectionsMenuComponent
                                card={this.state.card}
                                switchDetails={this.switchDetails.bind(this)}
                                switchLabels={this.switchLabels.bind(this)}
                            />

                            <ChildernsNavBar card={this.state.card}/>
                        </td>
                    </tr>
                    </tbody>
                </table>


            </div>
        )
    }
}
CardComponent.defaultProps = { showDetails: true };

export default CardComponent
