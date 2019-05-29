import React, { Component } from 'react';
import "./KanbanBoard.css"
import KanbanSlot from "./KanbanSlot"

class KanbanBoard extends Component {

    render() {
        return (
            <div className="KanbanBoard">
                <div className="BoardHeader">{this.props.title}</div>
                <div className="KanbanSlots">
                    <table>
                        <tbody>
                            <tr valign="top">
                                { this.props.slots.map((slot, index) => <td key={index}><KanbanSlot key={"KanbanSlot_" + index} title={slot.title} cards={slot.cards}/></td>)}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default KanbanBoard
