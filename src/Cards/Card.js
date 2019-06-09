import cards from "./CardDatabase"
import CheckList from "./CheckList"
import React from 'react';
import GlyphIcon from "../Components/GlyphIcons/GlyphIcon"

export default class Card  {

    constructor(ref, caption, description=null, discussion=[], labels=[], options={}) {
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
    }

    renderTreeIcon() {
        let glyphCharacter
        if (this.hasChildern()) {
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
                for (var childCard of this.childernCards) {
                    if (childCard.meetsFilter(filterText)) {
                        return true
                    }
                }
            }
        }

        return false
    }

    hasChildern() {
        return (this.childernRefs && this.childernRefs.length) || (this.childern && this.childern.length > 0)
    }

    getChildern(filterText = "") {
        let childernCards
        if (this.childernRefs && this.childernRefs.length > 0) {
            childernCards = cards.childernRefsToChildern(this.childernRefs)
        }
        if (this.childern && this.childern.length > 0) {
            childernCards = this.childern
        }

        return childernCards
    }

}
