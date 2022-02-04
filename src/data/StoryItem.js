import {ISSUE_TYPES} from "./IssueTypes"

export default class StoryItem {

    static allInstances = []

    constructor(itemType, timestamp, originator, value = '', caption='', story = null) {
        this.uid = StoryItem.allInstances.length
        this.caption = caption
        this.story = story || []
        this.itemType = itemType
        this.timestamp = (typeof timestamp == 'string') ? Date.parse(timestamp) : timestamp
        this.originator = originator
        this.value = value

        StoryItem.allInstances.push(this)
    }

    destroy(){
        StoryItem.allInstances.splice(StoryItem.allInstances.indexOf(this), 1);
    }

    getValue(name, defValue= null) {
        return this.story != null ?
                    this.story.reverse().find(storyItem => storyItem.caption == name).value || defValue
                :
                defValue
    }

    getOpenItem() {
        return this.story.find(item => item.itemType === ISSUE_TYPES.OPEN) || this
    }

    getCloseItem() {
        return this.story.find(item => item.itemType === ISSUE_TYPES.CLOSE)
    }

    getCaption() {
        return this.caption || this.itemType.caption
    }
}

export function getIssueById(uid) {
    return StoryItem.allInstances.find(item => item.uid == uid)
}

export function storyItem(itemType, timestamp, originator, value = '', caption='', story = null)
{
    return new StoryItem(itemType, timestamp, originator, value, caption, story)
}

export function createTopic(uid = null, caption = '', story = null) {
    return new StoryItem(ISSUE_TYPES.TOPIC, Date.now(), 'raugustyn', null, caption, story)
}
