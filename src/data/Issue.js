import Story from "./Story"

export default class Issue {

    constructor(uid = null, caption = '', story = null) {
        this.uid = uid
        this.caption = caption
        this.props = {}
        this.story = story ? story : new Story()
    }

}