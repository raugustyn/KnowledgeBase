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
                        {story.map((storyItem, index) =>  <TimeLineRow key={index} storyItem={storyItem} isLastItem={index == story.length - 1}/> )}
                    </div>
                </div>
            </div>
        )
    }

}

export default TimelineView