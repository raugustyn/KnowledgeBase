import React, {Component} from 'react'
import Avatar from '@mui/material/Avatar'
import {red} from "@mui/material/colors"
import {findUserFromProps} from "./base"
import Link from '@mui/material/Link'
import {getUserRoute} from "../../Routes"

class UserAvatar extends Component {
    render() {
        let user = findUserFromProps(this.props)
        const avatar = (
            <Avatar
                sx={{bgcolor: red[500]}}
                aria-label="recipe"
                src={'/Avatars/' + user.avatarImage}
                alt={user.getFullName()}>
                {user.getInitials()}
            </Avatar>
        )
        return this.props.addLink !== false ? <Link href={getUserRoute(user)}>{avatar}</Link> : avatar
    }
}

export default UserAvatar
