import React, {Component} from 'react'
import TimelineView from "../Story/TimelineView"
import {useParams} from "react-router-dom";
import {ISSUE_TYPES, getIssueById} from "../../data"
import TableView from "../Story/TableView"
import UserLink from "../Users/UserLink"
import {composeTimestampLabel} from "../timestamp"
import ToggleButtons from "../ListView/ToggleButtons"
import './TopicView.css'
import StoryView from "../Story/StoryView"

function withParams(Component) {
    return props => <Component {...props} params={useParams()}/>
}

class TopicView extends Component {

    constructor() {
        super()
        this.state = {
            selection: 0
        }
    }

    changeSelection(newSelection) {
        this.setState({selection: newSelection})
    }

    render() {
        let issue = this.props.issue || getIssueById(this.props.id || this.props.params.id)
        let issueId = this.props.id || this.props.params.id
        if (!issue) {
            issue = getIssueById(issueId)
        }
        if (issue) {
            const openItem = issue.getOpenItem()
            let details
            switch (this.state.selection) {
                case 1:
                    details = <TableView story={issue.story}/>
                    break
                case 2:
                    details = <StoryView story={issue.story}/>
                    break
                default:
                    details = <TimelineView story={issue.story}/>
            }
            return (
                <div>
                    <div className="Summary">
                        <h1>{' ' + issue.name || ''} #{issue.uid} {issue.constructor.name}</h1>
                        {issue.getCloseItem() ? <span className='close-badge closed-chip'>{ISSUE_TYPES.CLOSE.icon}&nbsp;Closed</span> : null}
                        &nbsp;
                        {openItem ? <UserLink userName={openItem.originator}/> : null}&nbsp;
                        {openItem != null ? 'opened this topic ' + composeTimestampLabel(openItem.timestamp) : 'was closed ' + composeTimestampLabel(issue.closedat)}&nbsp;
                    </div>
                    <div>
                        {issue.description || ''}
                        <ToggleButtons
                            defaultSelection={0}
                            buttons={['Timeline', 'Table', 'Story']}
                            onChangeSelection={this.changeSelection.bind(this)}
                        />
                        {details}
                    </div>
                </div>
            )
        } else {
            return <p>Issue: null</p>
        }
    }

}

export default withParams(TopicView)