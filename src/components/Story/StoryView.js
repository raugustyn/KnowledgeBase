import React, {Component} from 'react'
import {ISSUE_TYPES} from "../../data"
import './StoryView.css'

class StoryView extends Component {

    render() {
        const story = this.props.story
        const items = story
                        .filter(item => item.isVisible())
                        .map((storyItem, index) => {
                            if (storyItem.itemType == ISSUE_TYPES.COMMENT) {
                                return <div className="Comment">{storyItem.value}</div>
                            }
                            return null
                        })

        return (
            <div className="StoryView">
                {items}
            </div>
        );
    }
}

export default StoryView