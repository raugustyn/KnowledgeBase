import React, {Component} from 'react'
import IssueLink from "./IssueLink"
import {composeTimestampLabel} from "../timestamp"

class IssueDateLink extends Component {
    render() {
        const issue=this.props.issue
        return (
            <IssueLink issue={issue}>
                {composeTimestampLabel(issue.timestamp)}
            </IssueLink>
        )
    }
}

export default IssueDateLink