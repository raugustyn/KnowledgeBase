import cards from "./CardDatabase"

export default class Card  {

    constructor(ref, caption, description=null, discussion=[], labels=[], options={}) {
        this.ref = ref
        this.caption = caption
        this.description = description
        this.discussion = discussion
        this.labels = labels
        this.checklist = []
    }

    getChilderns() {
        let childernCards
        if (this.childernRefs && this.childernRefs.length > 0) {
            childernCards = cards.childernRefsToChildern(this.childernRefs)
        }
        if (this.childern && this.state.length > 0) {
            childernCards = this.childern
        }

        console.log("childernCards: ", childernCards)
        return childernCards
    }
}
