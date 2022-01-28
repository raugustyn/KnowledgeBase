export default class StoryItem {

    constructor(itemType, timestamp, originator, value = '') {
        this.itemType = itemType
        this.timestamp = (typeof timestamp == 'string') ? Date.parse(timestamp) : timestamp
        this.originator = originator
        this.value = value
    }

}