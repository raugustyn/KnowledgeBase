import React, {Component} from 'react'
import Avatar from '@mui/material/Avatar'
import { ISSUE_TYPES} from "../../data"
import './StoryItem.css'
import UserLink from "../Users/UserLink"
import { users } from "../../data"
import addRenderer from "../ListView/Renderer"
import {StoryItem} from "../../data"

class TimeLineRow extends Component {

    renderComment(storyItem) {
        const originator = users.findUser(storyItem.originator, true)

        return (
            <div className='StoryItem'>
                <div className="AvatarCol">
                    <Avatar alt={originator.getFullName()} src={'/Avatars/' + originator.avatarImage} >{originator.getInitials()}</Avatar>
                </div>
                <div className="timeline-comment">
                    <div className="CommentHeader">
                        <UserLink userName={storyItem.originator} />&nbsp;
                        commented at&nbsp;
                        {storyItem.timestamp}
                    </div>
                    <div className="CommentText">
                        {storyItem.value}
                    </div>
                </div>
            </div>
        )

    }

    render() {
        const storyItem = this.props.storyItem
        switch (storyItem.itemType) {
            case ISSUE_TYPES.COMMENT:
                return this.renderComment(storyItem)
            default:
                return (
                    <div className='TimelineItem'>
                        <div className="TimelineItem-badge">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true"
                             className="octicon octicon-milestone color-fg-inherit">
                            <path fillRule="evenodd"
                                  d="M7.75 0a.75.75 0 01.75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 010 2.672l-2.07 1.75a1.75 1.75 0 01-1.13.414H8.5v5.25a.75.75 0 11-1.5 0V10H2.75A1.75 1.75 0 011 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 017.75 0zm0 8.5h4.384a.25.25 0 00.161-.06l2.07-1.75a.25.25 0 000-.38l-2.07-1.75a.25.25 0 00-.161-.06H2.75a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h5z"></path>
                        </svg>
                            </div>
                        <div>
                            Other Content
                        </div>
                    </div>
                )
        }

    }

}

addRenderer(
    StoryItem.prototype,
    'StoryItem',
    (item, key, levelOfDetail) => (<TimeLineRow storyItem={item} key={key} isClicable={true} levelOfDetail={levelOfDetail}/>)
)

export default TimeLineRow