import React, { Component } from 'react';

export default class ImagePreview extends Component {

  render() {
    return (
        <div className="imageContainer">
          <img alt={"Image of " + this.props.caption} src={this.props.imageName} />
          <div className="content">
            <button type="button" className="btn btn-primary">
                {this.props.caption}
            </button>
            <p>{this.props.extent.toString()}</p>
          </div>
        </div>
    )
  }

}
