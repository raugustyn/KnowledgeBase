import React, { Component } from 'react';
import "./ChildrenNavBar.css"

export default class ChildrenNavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            card: props.card
        };
    }

    render() {
        if (this.state.card) {
            let children
            let childrenCards = this.state.card.getchildren()
            if (childrenCards) {
                children = (
                    <div className="childrensNavBar">
                        <h1>children</h1>
                        {childrenCards.map((childCard, index) => <div key={index}>{childCard.caption}</div>)}
                    </div>
                )
            }

            return <div>{children}</div>
        }
        else {
            return <div>childrensNavBar, card not defined.</div>
        }
    }
}
