import React, { Component } from 'react';
import "./CardNameEditor.css"

/*
 * Dictionary iterating helper
 * See https://www.peterbe.com/plog/items-function-in-javascript-maps
 */
function iterateDict(dict, fn) {
     return Object.keys(dict).map((key, i) => { return fn(key, dict[key], i) })
}

class CardNameEditor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editMode: false,
            name: props.name
        }
        this.name = props.name
        this.inputRef = React.createRef()
        this.captionRef = React.createRef()
        this.eventListeners = {
            "mousedown": this.handleClick.bind(this)
        }
    }

    onChangeInput(event) {
        this.name = event.target.value
    }

    saveEdits() {
        this.setState({
            editMode: false,
            name: this.name
        } )
    }

    handleClick(event) {
        if (this.state.editMode) {
            const target = (event.target) ? event.target : event.srcElement;
            if ((target !== this.captionRef.current) && (target !== this.inputRef.current)) {
                this.saveEdits()
            }
        }
    }

    componentWillUnmount() {
        iterateDict(this.eventListeners, (key, value) => { window.removeEventListener(key, value); });
    }

    componentDidMount() {
        iterateDict(this.eventListeners, (key, value) => { window.addEventListener(key, value); });
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            this.setState({ editMode: false } )
        }
    }

    switchEditMode(newEditMode) {
        this.setState({ editMode: newEditMode} )
    }

    renderDisplay() {
        return <div ref={this.captionRef} className="CardName" onClick={this.switchEditMode.bind(this, true)}>{this.state.name}</div>
    }

    renderEdit() {
        return (
            <div className="CardNameEditor" >
                <input ref={this.inputRef} onKeyPress={this.handleKeyPress.bind(this)} onBlur={this.saveEdits.bind(this)} onChange={this.onChangeInput.bind(this)} defaultValue={this.state.name} />
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

export default CardNameEditor;
