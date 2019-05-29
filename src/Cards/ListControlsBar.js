import React, { Component } from 'react';
import bookmarks from "../Bookmarks/Bookmarks";
import BookmarksGallery from "../Bookmarks/BookmarksGallery.js";



class ListControlsBar extends Component {
    showAsList() {
        console.log("showAsList");
    }


    showAsGallery() {
        console.log("showAsGallery");
    }

    render() {
        return (
            <div>
                <div id="LeftSide"></div>
                <div id="Dummy"></div>
                <div id="FileListControls" className="float-right">
                    <div id="GalleryItemsDisplayButtonDiv" className="float-right" onClick={this.showAsGallery.bind(this)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                            <path fill="#3D4752" className="primary" fill-rule="evenodd"
                                  d="M13 12h6c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1zM3 12h6c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1zM13 2h6c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1zM3 2h6c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1z"></path>
                        </svg>
                    </div>

                    <div id="ListItemsDisplayButtonDiv" className="float-right" onClick={this.showAsList.bind(this)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                            <path fill="#3D4752" className="primary" fill-rule="evenodd"
                                  d="M2 20h1c.6 0 1-.4 1-1v-1c0-.6-.4-1-1-1H2c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1zm0-7h1c.6 0 1-.4 1-1v-1c0-.6-.4-1-1-1H2c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1zm0-7h1c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1H2c-.6 0-1 .4-1 1v1c0 .6.4 1 1 1zm18 14H7c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h13c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm0-7H7c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h13c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm0-7H7c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h13c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1z"></path>
                        </svg>
                    </div>

                    <div id="SearchDiv" className="float-right">
                        <div className="SearchPanel">

                                <svg className="SVGButton" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                                    <path fill="#3D4752" className="primary" fill-rule="evenodd"
                                          d="M7 1c3.28 0 6 2.72 6 6s-2.72 6-6 6-6-2.72-6-6 2.72-6 6-6zm0 1.6c-2.4 0-4.4 2-4.4 4.4 0 2.4 2 4.4 4.4 4.4 2.4 0 4.4-2 4.4-4.4 0-2.4-2-4.4-4.4-4.4zm4.751 10.849a1.2 1.2 0 1 1 1.698-1.698l3.2 3.2a1.2 1.2 0 1 1-1.698 1.698l-3.2-3.2z"></path>
                                </svg>

                            <input className="BlankInput" value="Search"/>
                        </div>
                    </div>

                </div>
                <BookmarksGallery bookmarks={bookmarks} imagesPath="bookmarks/"/>

            </div>
        )
    }
}


export default ListControlsBar