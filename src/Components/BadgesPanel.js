import React, { Component } from 'react';
import "./BadgesPanel.css"
import GlyphIcon from "./GlyphIcons"
import { Button, Popover, PopoverBody, PopoverHeader } from "reactstrap"
import CheckBoxButton from "./CheckBoxButton"


let defaultColor = '#000000'
let badgesConfig = {
    'Operator': 'rgb(97, 189, 79)',
    'Operátor': 'rgb(97, 189, 79)',
    'Strukturální vzor': 'rgb(242, 214, 0)',
    'Situation': 'rgb(255, 159, 26)',
    'Rule': 'rgb(235, 90, 70)',
    'Knowledge Item': 'rgb(235, 90, 70)'
}

class Badge extends Component {

    renderAsButton() {
        let backgroundColor = Object.keys(badgesConfig).indexOf(this.props.name) >= 0 ? badgesConfig[this.props.name] : defaultColor
        return (
            <Button color="primary" className="NoWrapText" size="sm" style={{ backgroundColor: backgroundColor, borderColor: "transparent" }}>
                <CheckBoxButton size={1}/>
                {this.props.name}
            </Button>
        )

    }

    renderAsSpan() {
        let backgroundColor = Object.keys(badgesConfig).indexOf(this.props.name) >= 0 ? badgesConfig[this.props.name] : defaultColor
        return (
            <span className="LargeBadge" style={{ backgroundColor: backgroundColor }}>
                {this.props.name}
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
Badge.defaultProps = { showCheckBox: true };


export default class BadgesPanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            popoverOpen: false
        }
    }

    switchLabels() {
        console.log("Switching check lists")
        this.setState({
          popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        let caption = this.props.showCaption === true ? <h1>Badges</h1>: null
        let addButtonText = this.props.badges.length > 0 ? "Add" : "Add Label"
        return (
            <div style={{ verticalAlign: "middle" }}>
                {caption}
                { this.props.badges.map((badgeName, index) => <Badge key={index} name={badgeName} />)}
                <Button id="AddBadgeButton" color="secondary" size="sm" onClick={this.switchLabels.bind(this)}><GlyphIcon glyphName="PLUS" /> {addButtonText}</Button>

                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="AddBadgeButton" toggle={this.toggle}>
                  <PopoverHeader>Labels <GlyphIcon glyphName="PLUS" />
                  </PopoverHeader>
                  <PopoverBody>
                      <div className="form-group col-xs-4">
                          <table>
                              {Object.keys(badgesConfig).map( (item, index) => (
                                  <tr>
                                      <td>
                                          <Button key={"ChooseLabelButton" + index} color="primary" className="NoWrapText" style={{ backgroundColor: badgesConfig[item], width: "100%", borderColor: "transparent" }}>
                                            <input type="checkbox"/>&nbsp;&nbsp;{item}
                                          </Button>
                                      </td>
                                      <td className="SectionIcon"><Button key={"EditLabelButton" + index} className="NoWrapText" ><GlyphIcon charToBeDisplyed="\uE922"/></Button></td></tr>
                                ))}
                          </table>
                          <br/><br/>
                        <Button color="primary" className="NoWrapText" disabled>Create Label</Button>
                      </div>
                  </PopoverBody>
                </Popover>

            </div>
        )
    }

}
