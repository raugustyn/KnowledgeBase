import React, {Component} from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors'
import {Issue, users} from "../../data"
import {ISSUE_TYPES} from "../../data"
import {CgDetailsLess, CgDetailsMore} from "react-icons/cg";
import {BiDetail} from "react-icons/bi";
import {ImParagraphJustify} from "react-icons/im";
import {BsTable} from "react-icons/bs";
import addRenderer from "../ListView/Renderer"

class TopicCard extends Component {

  render() {
        const topic = this.props.topic
        const openItem = topic.story.getOpenItem()
        const user = users.findUser(openItem.originator, false)
        const lod = this.props.levelOfDetail || 0
        let avatar, subHeader, previewImage, title

        title = topic.caption + ' #' + topic.uid
        if (lod == 0) {
            subHeader = title
            title = null
        }
        else {
            avatar = <Avatar sx={{bgcolor: red[500]}} aria-label="recipe" src={'/Avatars/' + user.avatarImage}>{user.getInitials()}</Avatar>
        }

        if (lod > 1) {
            subHeader = openItem != null ? 'opened on ' + openItem.timestamp : 'was closed on ' + topic.closedat
        }

        if (lod == 3) {
            const commentsCount = topic.story.timeline.filter(item => item.itemType == ISSUE_TYPES.COMMENT).length
            if (commentsCount) {
                subHeader += ', ' + commentsCount + ' comments'
            }

            const images = topic.story.timeline.filter(item => item.itemType == ISSUE_TYPES.IMAGE)
            if (images.length > 0) {
                const imageURL = images[0].value
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
    [
        <CgDetailsLess/>,
        <CgDetailsMore/>,
        <BiDetail/>,
        <ImParagraphJustify/>,
        <BsTable/>
    ],
    1,
    (item, key, levelOfDetail) => (<TopicCard topic={item} key={key} isClicable={true} levelOfDetail={levelOfDetail}/>)
)

export default TopicCard;