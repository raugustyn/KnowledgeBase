import React, {Component, Fragment} from 'react'
import Avatar from '@mui/material/Avatar'
import {ISSUE_TYPES} from "../../data"
import UserLink from "../Users/UserLink"
import {users} from "../../data"
import addRenderer from "../ListView/Renderer"
import {StoryItem} from "../../data"
import '../Story/Timeline/TimelineView.css'
import {composeTimestampLabel} from "../timestamp"
import Sticker from "../Stickers/Sticker"
import {renderers} from "./Renderers"
import './index'

const iconSVGs = {
    showOptions: <svg aria-label="Show options" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-kebab-horizontal"><path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>,
    octiconSmiley: <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-smiley"><path fillRule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"></path></svg>
}

class TimeLineRow extends Component {

    renderComment(storyItem) {
        const originator = users.findUser(storyItem.originator, true)
        return (
            <div className='TimelineItem'>
                <div className="avatar-parent">
                    <Avatar alt={originator.getFullName()} src={'/Avatars/' + originator.avatarImage}>{originator.getInitials()}</Avatar>
                </div>
                <div className="TimeLineItem-body">
                    <div className="TimelineItem-Header">
                        <div className="timeline-comment-actions flex-shrink-0">
                            {iconSVGs.octiconSmiley}&nbsp;&nbsp;
                            {iconSVGs.showOptions}
                        </div>
                        <div className="timeline-comment-header-text">
                            <UserLink userName={storyItem.originator}/>&nbsp;
                            commented &nbsp;
                            {composeTimestampLabel(storyItem.timestamp)}
                        </div>
                    </div>
                    <div className="TimelineItem-Comment">
                        {storyItem.value}
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { storyItem } = this.props
        let content
        if (storyItem.itemType == ISSUE_TYPES.COMMENT) {
            content = this.renderComment(storyItem)
        }
        else {
                let processDescription
                let itemDetails
                switch (storyItem.itemType) {
                    case ISSUE_TYPES.ADD_LABEL:
                        const labels = typeof storyItem.value == 'string' ? [storyItem.value] : storyItem.value
                        processDescription = <span>added {labels.map((label, index) => <Sticker key={index} name={label} />) } label{labels.length > 1?'s':null}</span>
                        break
                    case ISSUE_TYPES.ADD_TO_MILESTONE:
                        processDescription = <span>added this to the {storyItem.value} milestone</span>
                        break;
                    case ISSUE_TYPES.ASSIGN_TO:
                        processDescription = (storyItem.originator == storyItem.value) ?
                            'self assigned this'
                            :
                            <>assigned this to <UserLink userName={storyItem.value}/></>
                        break
                    case ISSUE_TYPES.IMAGE:
                        itemDetails = renderers.buildComponent(storyItem, {})
                        break
                    case ISSUE_TYPES.COLLECTION:
                        itemDetails = renderers.buildComponent(storyItem, {})
                        break
                }
                processDescription = processDescription || storyItem.itemType.message
                content = (
                    <Fragment>
                        {storyItem.itemType.icon ?
                            <div className={ storyItem.itemType == ISSUE_TYPES.CLOSE ? "TimelineItem-badge close-badge" : "TimelineItem-badge" }>
                                {storyItem.itemType.icon}
                            </div>
                            :
                            null
                        }
                        <div className="TimeLineItem-body">
                            <UserLink userName={storyItem.originator}/>&nbsp;
                            {processDescription}&nbsp;
                            {composeTimestampLabel(storyItem.timestamp)}
                            { itemDetails ? <div className="item-details">{itemDetails}</div>:null }
                        </div>
                    </Fragment>
                )
        }

        return <div className={'TimelineItem' + (this.props.isLastItem ? '' : ' leading-TimelineItem')} >{content}</div>

    }

}

addRenderer(
    StoryItem.prototype,
    'StoryItem',
    (item, key, levelOfDetail) => (<TimeLineRow storyItem={item} key={key} isClicable={true} levelOfDetail={levelOfDetail}/>)
)

export default TimeLineRow