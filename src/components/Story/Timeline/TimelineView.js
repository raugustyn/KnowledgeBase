import React, {Component} from 'react'
import TimeLineRow from "../../StoryItem/TimeLineRow"
import './TimelineView.css'

class TimelineView extends Component {

    render() {
        const story = this.props.story
        return (
            <div>
                <h2>Timeline</h2>
                <div className="Timeline">
                    <div className="TimelineChannel">
                        {story.timeline.map((storyItem, index) =>  <TimeLineRow key={index} storyItem={storyItem} /> )}
                    </div>
                </div>
            </div>
        )
    }

}

export default TimelineView