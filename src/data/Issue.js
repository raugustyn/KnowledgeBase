import {ISSUE_TYPES} from "./IssueTypes"

export default class Issue {

    static allInstances = []

    constructor(itemType, timestamp, originator, name='', value = '', story = null) {
        this.uid = Issue.allInstances.length + ''
        this.itemType = itemType
        this.name = name
        this.value = value
        this.story = story || []
        this.timestamp = (typeof timestamp == 'string') ? Date.parse(timestamp) : timestamp
        this.originator = originator

        Issue.allInstances.push(this)
    }

    isVisible() {
        if (this.itemType == ISSUE_TYPES.COMMENT) {
            return this.story.find(item => item.itemType == ISSUE_TYPES.ADD_LABEL && item.value == 'PARAGRAPH')
        }

        return false
    }

    destroy(){
        Issue.allInstances.splice(Issue.allInstances.indexOf(this), 1);
    }

    getLastValue(name, defValue= null) {
        const lastItem = this.story.reverse().find(storyItem => storyItem.name === name)
        return lastItem ? lastItem.value || defValue : defValue
    }

    getOpenItem() {
        return this.story.find(item => item.itemType === ISSUE_TYPES.OPEN) || this
    }

    getCloseItem() {
        return this.story.find(item => item.itemType === ISSUE_TYPES.CLOSE)
    }

    getCaption() {
        return this.name || this.itemType.caption || ''
    }

}

export function getIssueById(uid) {
    return Issue.allInstances.find(item => item.uid === uid)
}

export function storyItem(itemType, timestamp, originator, value = '', name='', story = null)
{
    return new Issue(itemType, timestamp, originator, name, value, story)
}

export function createTopic(name = '', story = null) {
    return new Issue(ISSUE_TYPES.TOPIC, Date.now(), 'raugustyn', name, null, story)
}

export function getTopics() {
    return Issue.allInstances.filter(item => item.itemType === ISSUE_TYPES.TOPIC)
}
