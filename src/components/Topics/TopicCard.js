import React, {Component} from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import {CardActionArea} from "@mui/material"
import {Issue, users} from "../../data"
import {ISSUE_TYPES} from "../../data"
import {CgDetailsLess, CgDetailsMore} from "react-icons/cg"
import {BiDetail} from "react-icons/bi"
import {ImParagraphJustify} from "react-icons/im"
import {BsTable} from "react-icons/bs"
import addRenderer from "../ListView/Renderer"
import {composeTimestampLabel} from "../timestamp"
import {getIssueRoute} from "../../Routes"
import UserAvatar from "../Users/UserAvatar"

class TopicCard extends Component {

  render() {
        const topic = this.props.topic
        const openItem = topic.getOpenItem()
        const user = users.findUser(openItem.originator, false)
        const lod = this.props.levelOfDetail || 0
        let avatar, subHeader, previewImage, title

      const bindToLink = (content) => (content ? <CardActionArea href={getIssueRoute(topic.uid)}>{content}</CardActionArea>: null)

      title = <span>{topic.getCaption()} #{topic.uid}</span>
        if (lod === 0) {
            subHeader = title
            title = null
        }
        else {
            avatar = <UserAvatar user={user} />
        }

        if (lod > 1) {
            subHeader = openItem != null ? 'opened ' + composeTimestampLabel(openItem.timestamp) : 'was closed ' + composeTimestampLabel(topic.closedat)
        }

        if (lod === 3) {
            const commentsCount = topic.story.filter(item => item.itemType === ISSUE_TYPES.COMMENT).length
            if (commentsCount) {
                subHeader += ', ' + commentsCount + ' comments'
            }

            const firstImage = topic.story.find(item => item.itemType === ISSUE_TYPES.IMAGE)
            if (firstImage) {
                previewImage = <CardMedia
                    component="img"
                    height="194"
                    image={firstImage.value}
                    alt={firstImage.value}
                  />
            }
        }
        return (
            <Card sx={{maxWidth: 345}}>
                <CardHeader
                    avatar={avatar}
                    title={bindToLink(title)}
                    subheader={bindToLink(subHeader)}
                />
                {previewImage}
            </Card>
        )
    }

}

addRenderer(
    Issue.prototype,
    'Topic',
    (item, key, levelOfDetail) => (<TopicCard topic={item} key={key} isClicable={true} levelOfDetail={levelOfDetail}/>),
    [
        <CgDetailsLess/>,
        <CgDetailsMore/>,
        <BiDetail/>,
        <ImParagraphJustify/>,
        <BsTable/>
    ],
    1
)

export default TopicCard