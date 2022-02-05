import React, {Component} from 'react'
import {useParams} from "react-router-dom"
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import {CardActionArea} from "@mui/material"
import Avatar from '@mui/material/Avatar'
import {red} from '@mui/material/colors'
import {users} from '../../data'
import addRenderer from "../ListView/Renderer"
import {User} from "../../data/User"
import {FcTimeline} from "react-icons/fc"
import IconButton from '@mui/material/IconButton'
import {getIssueRoute} from "../../Routes";

function withParams(Component) {
    return props => <Component {...props} params={useParams()}/>
}

class UserCard extends Component {

    render() {
        const user = this.props.user || users.findUser(this.props.params.userName, false) || users.findUser(this.props.userName, false)
        const isClicable = this.props.isClicable
        const cardHeader = <CardHeader
                            avatar={
                                <Avatar sx={{bgcolor: red[500]}} aria-label="recipe" src={'/Avatars/' + user.avatarImage}>
                                    {user.getInitials()}
                                </Avatar>
                            }
                            action={

                                <IconButton aria-label="settings" href={getIssueRoute(user.uid)}>
                                    <FcTimeline />
                                </IconButton>

                            }
                            title={user.getFullName()}
                            subheader={[user.name, (user.nick ? ' nicked ' + user.nick : '')].join(' ')}
                        />
        if (user) {
            return (
                <Card sx={{minWidth: 275}}>
                    {isClicable ?
                        <CardActionArea href={'/Users/' + user.name}>{cardHeader}</CardActionArea>
                        :
                        cardHeader
                    }
                </Card>
            )
        } else {
            return <div>User {this.props.params.userName} not found.</div>
        }
    }

}

addRenderer(
    User.prototype,
    'User',
    (item, key, levelOfDetail) => (<UserCard user={item} key={key} isClicable={true}/>)
)

export default withParams(UserCard)
