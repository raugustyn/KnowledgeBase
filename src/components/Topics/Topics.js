import React, {Component} from 'react'
import {ListView} from "../ListView"
import TopicCard from "./TopicCard"
import {issues} from "../../data"

class Topics extends Component {

    render() {
        return (
                <ListView
                    items={issues}
                    renderers={{
                        2: (item, key) => (<TopicCard topic={item} key={key} isClicable={true} />)
                    }}
                />
        )
    }

}

export default Topics