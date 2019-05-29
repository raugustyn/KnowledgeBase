import React, { Component } from 'react';
import KanbanCardComponent from "./KanbanCard"
import GlyphIcon from "../../Components/GlyphIcons"
import "./KanbanBoard.css"


class KanbanSlot extends Component {

    render() {
        console.log(this.props.cards, this.props.title)
        const addCardText = (this.props.cards &&  this.props.cards.length !== 0) ? "Add another card" : "Add a card"
        return (
            <div className="KanbanSlot">
                <div>
                    <table width="100%">
                        <tbody>
                            <tr>
                                <td><div className="CardsListCaption"> {this.props.title}</div></td>
                                <td align="right"><div className="CardListExtras"><GlyphIcon charToBeDisplyed="\uE94A"/></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="CardsList">
                    { this.props.cards.map((card, index) => <KanbanCardComponent key={index}{...card}/>)}
                </div>
                <div><GlyphIcon charToBeDisplyed="\uE901"/> {addCardText}</div>
            </div>
        )
    }

}

export default KanbanSlot
