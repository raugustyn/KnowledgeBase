import React, {Component, Fragment} from 'react'
import {useParams} from "react-router-dom"
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import {red} from '@mui/material/colors'
import { users } from '../../data'


function withParams(Component) {
    return props => <Component {...props} params={useParams()}/>
}

class UserCard extends Component {

    render() {
        const user = this.props.user ? this.props.user : users.findUser(this.props.params.userName, false)
        const isClicable = this.props.isClicable
        const cardHeader = <CardHeader
                            avatar={
                                <Avatar sx={{bgcolor: red[500]}} aria-label="recipe" src={'/Avatars/' + user.avatarImage}>
                                    {user.getInitials()}
                                </Avatar>
                            }
                            title={user.getFullName()}
                            subheader={[user.name, (user.nick ? ' nicked ' + user.nick : '')].join(' ')}
                        />
        if (user) {
            return (
                <Card sx={{minWidth: 275}}>
                    {isClicable ?
                        <a href={'/Users/' + user.name}>{cardHeader}</a>
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

export default withParams(UserCard)