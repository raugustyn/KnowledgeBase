import React, {Component} from 'react'
import {useParams} from "react-router-dom"
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import {CardActionArea} from "@mui/material"
import addRenderer from "../ListView/Renderer"
import {User} from "../../data/User"
import {FcTimeline} from "react-icons/fc"
import IconButton from '@mui/material/IconButton'
import {getIssueRoute} from "../../Routes"
import UserAvatar from "./UserAvatar"
import {findUserFromProps} from "./base"

function withParams(Component) {
    return props => <Component {...props} params={useParams()}/>
}

class UserCard extends Component {

    render() {
        const user = findUserFromProps(this.props)
        if (user) {
            const isClicable = this.props.isClicable
            const cardHeader = (<CardHeader
                    avatar={<UserAvatar user={user} addLink={false}/>}
                    action={
                        <IconButton aria-label="settings" href={getIssueRoute(user.uid)}>
                            <FcTimeline/>
                        </IconButton>
                    }
                    title={user.getFullName()}
                    subheader={[user.name, (user.nick ? ' nicked ' + user.nick : '')].join(' ')}
                />
            )
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
            return <div>UserCard.render({JSON.stringify(this.props, null, 4)}) -> User not found.</div>
        }
    }

}

addRenderer(
    User.prototype,
    'User',
    (item, key, levelOfDetail) => (<UserCard user={item} key={key} isClicable={true}/>)
)

export default withParams(UserCard)
