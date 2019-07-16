import React, { Component } from 'react';

import ImagePreview from "./ImagePreview.js";
import BookmarksGallery from "../../Bookmarks/BookmarksGallery"
import { BadgesFilterPanel } from "../../Components/Badges"

export default class PreviewGallery extends Component {

    constructor(props) {
        super(props)
        this.state = {
            checkedLabelNames: this.collectLabelNames()
        };
    }

    collectLabelNames() {
        let labelNames = []
        for (let card of this.props.items) {
            for (let labelName of card.labels) {
                if (labelNames.indexOf(labelName) < 0) {
                    labelNames.push(labelName)
                }
            }
        }

        return labelNames
    }

    render () {
        const labelNames = this.collectLabelNames()


        return (
            <ul className="GalleryList">
                <div>{this.props.items.length} records</div>
                <BadgesFilterPanel showCheckBoxes="true" showCaption="true" badges={labelNames} showLabels="true" checkedLabelNames={this.state.checkedLabelNames}/>
                {this.props.items.map((card, index) => <li key={index}><ImagePreview card={card} /></li>)}
            </ul>
        )
    }

}
BookmarksGallery.defaultProps = {
    imagesPath : ""
}

