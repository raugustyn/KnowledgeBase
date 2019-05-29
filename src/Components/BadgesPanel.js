import React, { Component } from 'react';
import "./BadgesPanel.css"
import GlyphIcon from "./GlyphIcons"


let defaultColor = 'black'
let badgesConfig = {
    'Operator': 'rgb(97, 189, 79)',
    'Strukturální vzor': 'rgb(242, 214, 0)',
    'Situation': 'rgb(255, 159, 26)',
    'Rule': 'rgb(235, 90, 70)',
    'Knowledge Item': 'rgb(235, 90, 70)'
}

class Badge extends Component {

    render() {
        let backgroundColor = this.props.name in Object.keys(badgesConfig) >=0 ? badgesConfig[this.props.name] : defaultColor
        return (
            <span className="LargeBadge" style={{ backgroundColor: backgroundColor }}>
                {this.props.name}
            </span>
        )
    }

}

export default class BadgesPanel extends Component {

    render() {
        let caption = this.props.showCaption === true ? <h1>Badges</h1>: null
        let addButtonText = this.props.badges.length > 0 ? "Add" : "Add Label"
        return (
            <div>
                {caption}
                { this.props.badges.map((badgeName, index) => <Badge key={index} name={badgeName} />)}
                <button type="button" className="btn btn-primary btn-sm" disabled><GlyphIcon glyphName="PLUS" /> {addButtonText}</button>
            </div>
        )
    }

}
