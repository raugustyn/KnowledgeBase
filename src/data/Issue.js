import Story from "./Story"


export default class Issue {

    static allInstances = []

    constructor(uid = null, caption = '', story = null) {
        this.uid = Issue.allInstances.length
        this.caption = caption

        if (Array.isArray(story)) {
            story = new Story(story)
        }
        this.story = story ? story : new Story()
        Issue.allInstances.push(this)
    }

    destroy(){
        Issue.allInstances.splice(Issue.allInstances.indexOf(this), 1);
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

export function getIssueById(uid) {
    return Issue.allInstances.find(item => item.uid == uid)
}
