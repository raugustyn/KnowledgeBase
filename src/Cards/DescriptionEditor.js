import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import "./DescriptionEditor.css"
import "./CardEditor.css"
import GlyphIcon from "../Components/GlyphIcons"


export default class DescriptionEditor extends Component {

    constructor(props) {
        super(props)
        this.descriptionTextArea = React.createRef();
        this.description = props.description
        this.state = {
            editMode: false,
            description: props.description
        };
    }

    onChangeTextArea(event) {
        this.description = event.target.value
    }

    saveChanges() {
        this.setState({
            editMode: false,
            description: this.description
        })
    }

    switchEditMode(newEditMode) {
        this.setState({ editMode: newEditMode })
    }

    renderEdit() {
        return (
            <div className="DescriptionEdit">
                <h1>Description</h1>
                <div className="textwrapper">
                    <textarea ref={this.descriptionTextArea} onChange={this.onChangeTextArea.bind(this)} onBlur={this.saveChanges.bind(this)} defaultValue={this.state.description}></textarea>
                </div>
                <div>
                    <button type="button" className="btn btn-primary btn-xs" onClick={this.saveChanges.bind(this, false)}>Save</button>
                    <button type="button" className="btn btn-danger btn-xs" aria-label="Close" onClick={this.switchEditMode.bind(this, false)}>
                        <GlyphIcon charToBeDisplyed="\uE917" />
                    </button>
                </div>
            </div>
        )
    }

    renderDisplay() {
        var descComponent;
        if (this.state.description === '') {
            descComponent = <div className="EmptyDescription">Add a more detailed description</div>
        }
        else {
            descComponent = <ReactMarkdown source={this.state.description} />
        }

        return (
            <div>
                <h1>Description</h1>
                <div onClick={this.switchEditMode.bind(this, true)}>
                    {descComponent}
                </div>
            </div>
        )
    }

    render() {
        if (this.state.editMode === true) {
            return this.renderEdit();
        }
        else {
            return this.renderDisplay();
        }
    }
}
