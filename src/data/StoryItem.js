export default class StoryItem {

    constructor(itemType, timestamp, originator, value = '') {
        this.itemType = itemType
        this.timestamp = timestamp
        this.originator = originator
        this.value = value
    }

}