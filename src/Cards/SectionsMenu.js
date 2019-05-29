import React, { Component } from 'react';
import GlyphIcon from "../Components/GlyphIcons"
import "./CardNameEditor.css"
import {Popover, PopoverBody, PopoverHeader} from "reactstrap"
import "./FormStyles.css"
import { Button, ButtonGroup } from 'reactstrap';

export default class SectionsMenuComponent extends Component {

    constructor(props) {
        super(props);

        this.switchChecklists = this.switchChecklists.bind(this);
        this.state = {
            popoverOpen: false
        };
    }

    switchChecklists() {
        console.log("Switching check lists")
        this.setState({
          popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        let discussionCount = this.props.card.discussion.length === 0? "": "(" + this.props.card.discussion.length + ")"
        return (
            <ButtonGroup vertical={true}>
                <Button color="primary" active={true} className="NoWrapText" onClick={ this.props.switchDetails } ><GlyphIcon charToBeDisplyed="\uE919"/>Discussions&nbsp;{discussionCount}</Button>
                <Button  color="primary" className="NoWrapText" onClick={ this.props.switchLabels } ><GlyphIcon charToBeDisplyed="\uE937"/>Labels</Button>
                <Button id="LabelsButton" color="primary" className="btn btn-primary btn-xs NoWrapText" onClick={ this.switchChecklists }><GlyphIcon charToBeDisplyed="\uE913"/>Checklist</Button>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="LabelsButton" toggle={this.toggle}>
                  <PopoverHeader>Add Checklist</PopoverHeader>
                  <PopoverBody>
                      <div className="input-group">
                        <label>Title</label><br/>
                        <input defaultValue="ToDo" type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/><br/>
                        <label>Copy items from</label><br/>
                          <select id="pet-select" style={{ width: "100%"}} disabled>
                            <option value="">(None)</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="hamster">Hamster</option>
                            <option value="parrot">Parrot</option>
                            <option value="spider">Spider</option>
                            <option value="goldfish">Goldfish</option>
                        </select><br/>
                        <br/>
                        <button type="button" className="btn btn-primary btn-xs NoWrapText">Add</button>
                      </div>
                  </PopoverBody>
                </Popover>
                <Button color="primary" className="NoWrapText" onClick={ this.props.switchDetails } disabled><GlyphIcon charToBeDisplyed="\uE907"/>Attachment</Button>
            </ButtonGroup>
        )
    }

}
