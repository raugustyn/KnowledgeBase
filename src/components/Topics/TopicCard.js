import React, {Component} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import {red} from '@mui/material/colors'
import {Issue, users} from "../../data"
import {ISSUE_TYPES} from "../../data"
import {CgDetailsLess, CgDetailsMore} from "react-icons/cg";
import {BiDetail} from "react-icons/bi";
import {ImParagraphJustify} from "react-icons/im";
import {BsTable} from "react-icons/bs";
import addRenderer from "../ListView/Renderer"
import {composeTimestampLabel} from "../timestamp"
import IssueLink from "../StoryItem/IssueLink"

class TopicCard extends Component {

  render() {
        const topic = this.props.topic
        const openItem = topic.getOpenItem()
        const user = users.findUser(openItem.originator, false)
        const lod = this.props.levelOfDetail || 0
        let avatar, subHeader, previewImage, title

      title = <span>{topic.getCaption()} <IssueLink issue={topic}># {topic.uid}</IssueLink></span>
        if (lod === 0) {
            subHeader = title
            title = null
        }
        else {
            avatar = <Avatar sx={{bgcolor: red[500]}} aria-label="recipe" src={'/Avatars/' + user.avatarImage}>{user.getInitials()}</Avatar>
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
                const imageURL = firstImage.value
                previewImage = <CardMedia
                    component="img"
                    height="194"
                    image={imageURL}
                    alt="Paella dish"
                  />
            }
        }
        return (
            <Card sx={{maxWidth: 345}}>
                <CardHeader avatar={avatar} title={title} subheader={subHeader} />
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