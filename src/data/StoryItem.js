import Issue from "./Issue"

export default class StoryItem extends Issue {

    constructor(itemType, timestamp, originator, value = '', caption='', story = null) {
        super(null, caption, story)

        this.itemType = itemType
        this.timestamp = (typeof timestamp == 'string') ? Date.parse(timestamp) : timestamp
        this.originator = originator
        this.value = value
    }

}

export function storyItem(itemType, timestamp, originator, value = '', caption='', story = null)
{
    return new StoryItem(itemType, timestamp, originator, value, caption, story)
}