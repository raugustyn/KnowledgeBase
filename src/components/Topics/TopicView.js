import React, {Component} from 'react'
import TimelineView from "../Story/Timeline/TimelineView"
import {useParams} from "react-router-dom";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { issues } from "../../data"
import TableView from "../Story/Timeline/TableView"
import './TopicView.css'
import UserLink from "../Users/UserLink"

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
                        <UserLink userName={openItem.originator} />&nbsp;
                        {openItem != null ? 'opened this topic on ' + openItem.timestamp : 'was closed on ' + issue.closedat}&nbsp;
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

export default withParams(TopicView)