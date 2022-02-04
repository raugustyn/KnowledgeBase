import {ISSUE_TYPES} from "./IssueTypes"

export default class Issue {

    static allInstances = []

    constructor(itemType, timestamp, originator, value = '', caption='', story = null) {
        this.uid = Issue.allInstances.length
        this.caption = caption
        this.story = story || []
        this.itemType = itemType
        this.timestamp = (typeof timestamp == 'string') ? Date.parse(timestamp) : timestamp
        this.originator = originator
        this.value = value

        Issue.allInstances.push(this)
    }

    destroy(){
        Issue.allInstances.splice(Issue.allInstances.indexOf(this), 1);
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
    return Issue.allInstances.find(item => item.uid == uid)
}

export function storyItem(itemType, timestamp, originator, value = '', caption='', story = null)
{
    return new Issue(itemType, timestamp, originator, value, caption, story)
}

export function createTopic(uid = null, caption = '', story = null) {
    return new Issue(ISSUE_TYPES.TOPIC, Date.now(), 'raugustyn', null, caption, story)
}
