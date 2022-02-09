import React, {Component} from 'react'
import {ISSUE_TYPES} from "../../data"
import './StoryView.css'
import {renderers} from "../StoryItem"
import StackedPaper from "../ListView/StackedPaper"

class StoryView extends Component {

    render() {
        const story = this.props.story
        const items = story
                        .filter(item => item.isVisible())
                        .map((storyItem, index) => {
                            if (storyItem.itemType == ISSUE_TYPES.COMMENT) {
                                const className = storyItem.hasSticker('HEADING') ? ' Heading1' : ''
                                return (
                                    <div className={"Comment" + className}>
                                        {storyItem.value}
                                    </div>
                                )
                            }
                            else {
                                return renderers.buildComponent(storyItem, {})

                            }
                            return null
                        })

        return (
            <StackedPaper className="StoryView">
                {items}
            </StackedPaper>
        )
    }

}

export default StoryView