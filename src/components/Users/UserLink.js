import React, { Component, Fragment } from 'react'
import { users } from '../../data'
import UserCard from "./UserCard"
import './UserLink.css'
export const USER_DISPLAY_TYPE = {
    DT_SHORTNAME: 0,
    DT_FULLNAME: 1,
    AVATAR: 2
}

class UserLink extends Component {

    render() {
        let user = this.props.user ? this.props.user : users.findUser(this.props.userName, false)

        if (user) {
            const displayType = this.props.displayType || USER_DISPLAY_TYPE.DT_SHORTNAME
            let userName = ''
            switch (displayType) {
                case USER_DISPLAY_TYPE.DT_SHORTNAME:
                    userName = user.getShortName()
                    break
                case USER_DISPLAY_TYPE.DT_FULLNAME:
                    userName = user.getFullName()
                    break
                default:
                    console.warn('displayType not found', displayType)
                    return
            }

            return (
                <Fragment>
                    <a className="Link--muted para-highlites UserLink" href={'/Users/' + user.name}>
                        {userName}
                    </a>
                    <div className="UserPopup">
                        <UserCard user={user} />
                    </div>
                </Fragment>
            )
        }
        else {
            return this.props.userName || ''
        }
    }

}

export default UserLink