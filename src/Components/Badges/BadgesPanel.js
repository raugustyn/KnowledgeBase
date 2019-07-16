import React, { Component } from 'react';
import "./BadgesPanel.css"
import GlyphIcon from "../GlyphIcons"
import { Button, Popover, PopoverBody, PopoverHeader } from "reactstrap"
import Badge from "./Badge"
import badgeNames from "./badgenames"

export default class BadgesPanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            popoverOpen: false,
            badges: this.props.badges,
            showLabels: this.props.showLabels
        }
    }

    onCheckBoxChange = (sender, newState) => {
        console.log("BadgesPanel.onCheckBoxChange('" + sender.props.name + "', " + newState + ")")
        if (newState === false) {
            let newBadgeNames = this.state.badges
            newBadgeNames.splice(newBadgeNames.indexOf(sender.props.name), 1)
            console.log(newBadgeNames)
            this.setState({ badges: newBadgeNames })
        }
    }

    switchLabels = () => {
        console.log("BadgesPanel.switchLabels()")
        const newState = !this.state.popoverOpen
        this.setState({
            popoverOpen: newState
        });

        if (this.props.onSwitchLabels) {
            this.props.onSwitchLabels(this, newState)
        }
    }

    switchLabelVisibility(){
        if (!this.props.showAddButton) {
            this.setState({
                showLabels: !this.state.showLabels
            })
        }
    }

    isLabelChecked(labelName) {
        return true
    }

    render() {
        let addButton = null
        let caption = this.props.showCaption === true ? <h1>Badges</h1>: null
        let addButtonText = this.state.badges.length > 0 ? "Add" : "Add Label"
        if (this.props.showAddButton && this.state.showLabels) {
            addButton = <span>
                <Button id="AddBadgeButton" color="secondary" size="sm" onClick={this.switchLabels}><GlyphIcon glyphName="PLUS" /> {addButtonText}</Button>
                                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="AddBadgeButton" toggle={this.toggle}>
                  <PopoverHeader>Badges <GlyphIcon glyphName="PLUS" />
                  </PopoverHeader>
                  <PopoverBody>
                      <div className="form-group col-xs-4">
                          <table>
                              {Object.keys(badgeNames).map( (item, index) => (
                                  <tr>
                                      <td>
                                          <Badge
                                              key={"ChooseLabelButton" + index}
                                              name={item}
                                              showLabel="true"
                                              showCheckBox="true"
                                              style={{ width: "100%" }}
                                              onCheckBoxChange={this.onCheckBoxChange}
                                          />
                                      </td>
                                      <td className="SectionIcon"><Button key={"EditLabelButton" + index} className="NoWrapText" ><GlyphIcon charToBeDisplyed="\uE922"/></Button></td></tr>
                                ))}
                          </table>
                          <br/><br/>
                        <Button color="primary" className="NoWrapText" disabled>Create Label</Button>
                      </div>
                  </PopoverBody>
                </Popover>
            </span>


        }

        return (
            <div style={{ verticalAlign: "middle" }} >
                {caption}
                <span onClick={this.switchLabelVisibility.bind(this)}>
                    { this.state.badges.map((badgeName, index) => <Badge key={index} name={badgeName} showCheckBox={this.props.showCheckBoxes} showLabel={this.state.showLabels} onCheckBoxChange={this.onCheckBoxChange.bind(this)} checked={this.isLabelChecked()}/>)}
                </span>
                {addButton}
            </div>
        )
    }

}
Badge.defaultProps = {
    showCheckBoxes: false,
    showLabels: true,
    showAddButton: true
};
