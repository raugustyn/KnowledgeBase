import React, { Component } from 'react'
import { users } from '../../data'

export const USER_DISPLAY_TYPE = {
    DT_SHORTNAME: 0,
    DT_FULLNAME: 1,
    AVATAR: 2
}

class UserLink extends Component {

    render() {
        let user = this.props.user ? this.props.user : users.findUser(this.props.userName)

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
                    console.warn('userName not found', displayType)
                    return
            }

            return <a className="Link--muted" href={'/Users/' + user.name}>{userName}</a>
        }
        else {
            console.warn('User not found...')
        }
    }

}

export default UserLink