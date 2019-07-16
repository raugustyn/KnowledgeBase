import cards from "./CardDatabase"
import CheckList from "./CheckList"
import React from 'react';
import GlyphIcon from "../Components/GlyphIcons/GlyphIcon"

export default class Card  {

    constructor(ref, caption, description=null, discussion=[], labels=[], options=null) {
        // caption = edit label
        this.ref = ref
        this.caption = caption
        this.description = description
        this.discussion = discussion
        this.labels = labels
        this.checklists = [
            new CheckList("Rule Actions", [
                ["Make Caption", true],
                ["Make Description", true],
                ["Understand", true],
                ["Primary Analyse", true]
            ]),
            new CheckList("Constraints Definition", [
                ["Define Context Search", true],
                ["Define Measure Method", false],
                ["Implement Context Search", true],
                ["Implement Measure Method", false],
                ["Config Context Search", true],
                ["Config Measure Method", false]
            ])
        ]

        if (options != null) {
            Object.assign(this, options)
        }
    }

    renderTreeIcon() {
        let glyphCharacter
        if (this.haschildren()) {
            glyphCharacter = "\uE918"
        }
        else {
            glyphCharacter = this.glyphCharacter ? this.glyphCharacter : "\uE90F"
        }

        return (<GlyphIcon charToBeDisplyed={glyphCharacter} />)
    }

    meetsFilter(filterText) {
        if (filterText === "") {
            return true
        }
        else {
            if (this.caption.search(filterText) >= 0) {
                return true
            } else {
                for (var childCard of this.childrenCards) {
                    if (childCard.meetsFilter(filterText)) {
                        return true
                    }
                }
            }
        }

        return false
    }

    haschildren() {
        return (this.childrenRefs && this.childrenRefs.length) || (this.children && this.children.length > 0)
    }

    getchildren(filterText = "") {
        let childrenCards
        if (this.childrenRefs && this.childrenRefs.length > 0) {
            childrenCards = cards.childrenRefsTochildren(this.childrenRefs)
        }
        if (this.children && this.children.length > 0) {
            childrenCards = this.children
        }

        return childrenCards
    }

}
