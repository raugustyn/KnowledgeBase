import React, { Component } from 'react'
import { Button, Modal, ModalBody } from 'reactstrap'
import GlyphIcon from "../../Components/GlyphIcons/GlyphIcon"
import "./KanbanBoard.css"
import CardEditor from "../../Cards/CardEditor"


export default class KanbanCardComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { modal: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({ modal: !prevState.modal }));
    }

    render() {
        let discussion = (this.props.card.discussion && this.props.card.discussion.length !== 0)?  <span><GlyphIcon charToBeDisplyed="\uE919" />{this.props.card.discussion.length}</span> : null
        let toDos = null
        if (this.props.toDo) {
            let badgeClassName = "badge"
            if (this.props.toDo.doneCount === this.props.toDo.totalCount) {
                badgeClassName += " is-complete";
            }
            toDos = <span className={badgeClassName}><GlyphIcon charToBeDisplyed="\uE913" /> { this.props.toDo.doneCount + "/" + this.props.toDo.totalCount } </span>
        }
        let descriptionIcon = (this.props.card.description)?  <GlyphIcon charToBeDisplyed="\uE91C" /> : null
        let details = (toDos || discussion)? <div>{descriptionIcon}{discussion}{toDos}</div> : null
        return (
            <div className="KanbanCard">
                <table width="100%">
                    <tbody>
                        <tr>
                            <td>
                                {this.props.card.caption}{details}
                            </td>
                            <td>
                            <div>
                                <Button onClick={this.toggle}><GlyphIcon charToBeDisplyed="\uE94A" /></Button>
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                  <ModalBody>
                                    <CardEditor card={this.props.card} />
                                  </ModalBody>
                                </Modal>
                            </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}
