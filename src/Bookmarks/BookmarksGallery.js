import React, { Component } from 'react';

import ImagePreview from "./ImagePreview.js";
import ExtentCoordinates from "./ExtentCoordinates";
import "./BookmarksGallery.css"
import DefaultHeader from "../containers/DefaultLayout/DefaultHeader"


export default class BookmarksGallery extends Component {

    render () {
        return (
            <ul className="GalleryList">
                {this.props.bookmarks.map((bookmark, index) => <li key={index}><ImagePreview imageName={this.props.imagesPath + bookmark.previewFileName} caption={bookmark.caption} extent={new ExtentCoordinates(bookmark.minX,bookmark.minY,bookmark.maxX,bookmark.maxY)} /></li>)}
            </ul>
        )
    }

}
BookmarksGallery.defaultProps = {
    imagesPath : ""
}
