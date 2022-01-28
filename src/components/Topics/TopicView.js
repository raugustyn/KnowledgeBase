import React, {Component} from 'react'
import TimelineView from "../Story/Timeline/TimelineView"
import {useParams} from "react-router-dom";
import {ISSUE_TYPES, issues} from "../../data"
import TableView from "../Story/Timeline/TableView"
import './TopicView.css'
import UserLink from "../Users/UserLink"
import {composeTimestampLabel} from "../timestamp"


function withParams(Component) { return props => <Component {...props} params={useParams()} /> }

class TopicView extends Component {

    render() {
        let issue = this.props.issue
        if (!issue) {
            const filteredIssues = issues.filter(issue => issue.uid == this.props.params.id)
            if (filteredIssues.length == 1) {
                issue = filteredIssues[0]
            }
        }

        if (issue) {
           const openItem = issue.story.getOpenItem()

            return (
                <div>
                    <div className="Summary">
                        <h1>{' ' + issue.caption || ''} #{issue.uid}</h1>
                        { issue.story.getCloseItem() ? <span className='close-badge closed-chip'>{ISSUE_TYPES.CLOSE.icon}&nbsp;Closed</span> : null}
                        &nbsp;
                        <UserLink userName={openItem.originator} />&nbsp;
                        {openItem != null ? 'opened this topic ' + composeTimestampLabel(openItem.timestamp) : 'was closed ' + composeTimestampLabel(issue.closedat)}&nbsp;
                    </div>
                    <div>
                        { issue.description || '' }
                        <TimelineView story={issue.story} />
                        <TableView story={issue.story}/>
                    </div>
                </div>
            )
        }
        else {
            return <p>Issue: null</p>
        }

    }

}

export default withParams(TopicView);