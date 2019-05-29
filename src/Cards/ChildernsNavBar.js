import React, { Component } from 'react';
import "./ChildernsNavBar.css"

export default class ChildernsNavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            card: props.card
        };
    }

    render() {
        if (this.state.card) {
            let childern
            let childernCards = this.state.card.getChilderns()
            console.log(childernCards)
            if (childernCards) {
                console.log("ChildernsNavBar.render::childernCards:", childernCards)
                childern = (
                    <div className="ChildernsNavBar">
                        <h1>Childern</h1>
                        {childernCards.map((childCard, index) => <div key={index}>{childCard.caption}</div>)}
                    </div>
                )
            }

            return <div>{childern}</div>
        }
        else {
            return <div>ChildernsNavBar, card not defined.</div>
        }
    }
}
