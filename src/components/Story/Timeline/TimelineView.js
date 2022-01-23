import React, {Component} from 'react'
import TimeLineRow from "../../StoryItem/TimeLineRow"

class TimelineView extends Component {
    render() {
        const story = this.props.story
        return (
            <div>
                <h2>Timeline</h2>
                {story.timeline.map((storyItem, index) =>  <TimeLineRow key={index} storyItem={storyItem} /> )}
            </div>
        )
    }
}

export default TimelineView;