import React, {Component} from 'react'
import {ISSUES_ROUTE} from "../../Routes"

class IssueLink extends Component {
    render() {
        return (
            <a href={ISSUES_ROUTE + this.props.issue.uid}>
                {this.props.children}
            </a>
        )
    }
}

export default IssueLink