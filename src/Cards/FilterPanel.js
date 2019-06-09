import React, { Component } from 'react';

export default class FilterPanel extends Component {

    constructor(props) {
        super(props)
        this.filterRef = React.createRef()
    }

    onFilterChange() {
        console.log("this.filterRef.current.value:", this.filterRef.current.value)
        if (this.props.onFilterChange) {
            this.props.onFilterChange(this.filterRef.current.value)
        }
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label>Filter:</label>
                    <input ref={this.filterRef} onChange={this.onFilterChange.bind(this)} />
                </div>
            </div>
        )
    }
}
