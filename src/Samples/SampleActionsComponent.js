import React, { Component } from 'react';


let config = {
    cleanBeforeRestore: true,
    generalizeAfterClone: false,
    showStatisticAfterClone: true
}


class SampleActionsComponent extends Component {
    constructor() {
        super()
        this.state = { isExpanded: false }
    }

    expand() {
        this.setState( { isExpanded: true } );
    }

    collapse() {
        this.setState( { isExpanded: false } );
    }

    clone() {
        console.log("clone()")
    }

    cloneContext() {
        console.log("cloneContext()")
    }

    commit() {
        console.log("commit()")
    }

    delete() {
        console.log("delete()")
    }

    renderExpanded() {
        return (
            <div className="btn-group" role="group" aria-label="Basic example" id="Buttons_1">
                <button type="button" onClick={this.collapse.bind(this)} id="commit_1" className="btn btn-dark btn-sm">...</button><br/>
                <button type="button" id="clone_1" className="btn btn-primary" onClick={this.clone.bind(this)}>Restore</button>
                <button type="button" id="cloneContext_1" className="btn btn-primary" onClick={this.cloneContext.bind(this)}>Restore Context</button>
                <br/>
                <br/>
                <input id="cleanBeforeClone_1" className="cleanBeforeCloneCheckBox" type="checkbox" defaultChecked={config.cleanBeforeRestore} />&nbsp;Clean Before Restore<br/>
                <input id="generalizeAfterClone_1" className="generalizeAfterCloneCheckBox" type="checkbox" defaultChecked={config.generalizeAfterClone}/>&nbsp;Generalize After Restore<br/>
                <input id="showStatisticAfterClone_1" className="showStatisticAfterCloneCheckBox" type="checkbox" defaultChecked={config.showStatisticAfterClone} />&nbsp;Show Statistic After Restore
                <br/><br/>
                <button type="button" id="commit_1" className="btn btn-primary" onClick={this.commit.bind(this)}>Update</button>
                <button type="button" id="delete_1" className="btn btn-primary" onClick={this.delete.bind(this)}>Delete</button>
            </div>
        )
    }

    renderCollapsed() {
        return <div><br/><button type="button" onClick={this.expand.bind(this)} id="commit_1" className="btn btn-dark btn-sm">...</button></div>
    }

    render() {
        console.log("this.state:" + this.state);
        if (this.state.isExpanded) {
            return this.renderExpanded()
        }
        else {
            return this.renderCollapsed()
        }
    }
}

export default SampleActionsComponent;