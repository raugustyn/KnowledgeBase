import {ISSUE_TYPES} from "./index"

export default class Story {

    constructor(timeline = []) {
        this.timeline = timeline
    }

    getOpenItem() {
        let result = this.timeline.filter(item => item.itemType == ISSUE_TYPES.OPEN)
        result = result.length == 0 ? this.timeline[0] : result[0]

        return result
    }

    getCloseItem() {
        let result = this.timeline.filter(item => item.itemType == ISSUE_TYPES.CLOSE)
        result = result.length == 0 ? this.timeline[0] : result[0]

        return result
    }

}