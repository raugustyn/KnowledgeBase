import React, { Component } from 'react';
import {Button} from "reactstrap"
import CheckBoxButton from "../CheckBoxButton"
import badgeNames from "./badgenames"

let defaultColor = '#ff0000'

export default class Badge extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showLabel: props.showLabel
        }
    }


    onCheckBoxChange(sender, newState) {
        console.log("Badge.onCheckBoxChange(" + newState + ")")
        if (this.props.onCheckBoxChange) {
            this.props.onCheckBoxChange(this, newState)
        }
    }


    renderAsButton() {
        let backgroundColor = Object.keys(badgeNames).indexOf(this.props.name) >= 0 ? badgeNames[this.props.name] : defaultColor
        let style = { backgroundColor: backgroundColor, borderColor: "transparent" }
        if (this.props.style) {
            style = Object.assign({}, style, this.props.style)
        }
        return (
            <Button color="primary" className="NoWrapText" size="sm" style={style}>
                <CheckBoxButton size={1} onChange={this.onCheckBoxChange.bind(this)}/>
                {this.props.name}
            </Button>
        )

    }

    renderAsSpan() {
        let className, labelText

        let backgroundColor = Object.keys(badgeNames).indexOf(this.props.name) >= 0 ? badgeNames[this.props.name] : defaultColor
        if (this.props.showLabel) {
            className = "LargeBadge"
            labelText = this.props.name
        }
        else {
            className = "SmallBadge"
            labelText = ''
        }

        return (
            <span className={className} style={{ backgroundColor: backgroundColor }}>
                {labelText}
            </span>
        )

    }

    render() {
        if (this.props.showCheckBox) {
            return this.renderAsButton()
        }
        else {
            return this.renderAsSpan()
        }
    }

}
Badge.defaultProps = {
    showCheckBox: true,
    showLabel: true,
    checked: true
};
