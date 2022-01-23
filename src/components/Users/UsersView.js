import React, {Component} from 'react'
import { users } from "../../data"
import { ListView, VIEW_STYLE } from "../ListView"

import UserCard from "./UserCard"

class UsersView extends Component {

    render() {
        return (
                <ListView
                    items={users.users}
                    renderers={{
                        2: (item, key) => (<UserCard user={item} key={key} isClicable={true}/>)
                    }}
                />
        )
    }

}

export default UsersView
