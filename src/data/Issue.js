import Story from "./Story"

export default class Issue {

    constructor(uid = null, caption = '', story = null) {
        this.uid = uid
        this.caption = caption

        if (Array.isArray(story)) {
            story = new Story(story)
        }
        this.story = story ? story : new Story()
    }

    getValue(name, defValue= null) {
        if (this.story.timeline != null) {
            const values = this.story.timeline.filter(storyItem => storyItem.caption == name)
            if (values.length > 0) {
                return values[values.length-1].value
            }
        }
        else {
            return defValue
        }
    }
}