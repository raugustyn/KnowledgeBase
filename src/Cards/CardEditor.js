import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import "./CardEditor.css"
import cards from "./CardDatabase"
import DescriptionEditor from "./DescriptionEditor.js"
import CardNameEditor from "./CardNameEditor";
import PersonFaceComponent from "../Components/Users/PersonFaceComponent.js";
import SectionsMenuComponent from "./SectionsMenu"
import { BadgesPanel } from "../Components/Badges"
import ChildrenNavBar from "./ChildrenNavBar"
import GlyphIcon from "../Components/GlyphIcons"
import CheckListPanel from "../Components/CheckListPanel"


class CardComponent extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            showDetails: true,
            showLabels: true,
            showCheckLists: true,
            card: props.card
        };
        this.rowKey = 0
    }

    getRowKey() {
        this.rowKey = this.rowKey + 1
        return this.rowKey
    }

    switchCheckLists() {
        console.log("Switching this.state.showCheckLists:", this.state.showCheckLists)
        this.setState( { showCheckLists: !this.state.showCheckLists });
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

    getCheckListItems(checkList) {
        return (
                <tr key={this.getRowKey()}>
                    <td></td>
                    <td><CheckListPanel items={checkList.items} /></td>
                </tr>
        )
    }

    getCheckListsRows() {
        let checkLists = []
        for (var item of this.state.card.checklists) {
            checkLists.push(
                <tr key={this.getRowKey()} style={{ verticalAlign: "middle"}}>
                    <td className="SectionIcon">
                        <GlyphIcon charToBeDisplyed="\uE913"/>
                    </td>
                    <td>
                        <h1 className="NoBottomMargin">{item.caption}</h1>
                    </td>
                </tr>
            )
            checkLists = checkLists.concat(this.getCheckListItems(item))
        }
        return checkLists
    }

    renderchildrenCards() {
        let childrenCards
        let children

        if (this.state.card.childrenRefs && this.state.card.childrenRefs.length > 0) {
            childrenCards = cards.childrenRefsTochildren(this.state.card.childrenRefs)
        }
        if (this.state.card.children && this.state.card.children.length > 0) {
            childrenCards = this.state.card.children
        }
        if (childrenCards) {
            console.log("childrenCards:", childrenCards)
            children = (
                <tr key={this.getRowKey()}>
                    <td></td>
                    <td>
                        <h1>children</h1>
                        {childrenCards.map((childCard, index) => <div key={index}><a href="#" onClick={this.switchToAnotherCard.bind(this, childCard)}> {childCard.caption}</a></div> )}
                    </td>
                </tr>
            )
        }

        return children
    }

    render()
    {
        console.log("Rendering CardEditor")
        let details
        let discussionsHeader
        let labels
        console.log("this.state.showCheckLists:", this.state.showCheckLists)
        const checkLists = (this.state.showCheckLists) ? this.getCheckListsRows() : null

        if (this.state.showLabels && this.state.card.labels.length > 0) {
            labels = (
                <tr key={this.getRowKey()} style={{ verticalAlign: "middle"}}>
                    <td className="SectionIcon">
                        <GlyphIcon  charToBeDisplyed="\uE937"/>
                    </td>
                    <td>
                        <BadgesPanel showLabels={true} showAddButton={true} badges={this.state.card.labels} />
                    </td>
                </tr>
            )
        }


        let children = this.renderchildrenCards()

        if (this.state.showDetails) {
            discussionsHeader = <tr>
                                    <td className="SectionIcon">
                                        <GlyphIcon charToBeDisplyed="\uE900"/>
                                    </td>
                                    <td>
                                        <h1>Discussions</h1>
                                    </td>
                                </tr>
            details = this.state.card.discussion.map((discussion, index) => (
                <tr key={this.getRowKey()}>
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
                                <tr key={this.getRowKey()}>
                                    <td className="SectionIcon">
                                        <GlyphIcon charToBeDisplyed="\uE90F"/>
                                    </td>
                                    <td><CardNameEditor name={this.state.card.caption} /></td>
                                </tr>
                                { labels }
                                <tr key={this.getRowKey()}>
                                    <td className="SectionIcon">
                                        <GlyphIcon charToBeDisplyed="\uE91C"/>
                                    </td>
                                    <td>
                                        <DescriptionEditor description={this.state.card.description}/>
                                    </td>
                                </tr>
                                {checkLists.map(item => item)}
                                {children}
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
                                switchCheckLists={this.switchCheckLists.bind(this)}
                            />

                            <ChildrenNavBar card={this.state.card}/>
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
