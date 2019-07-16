import React, { Component } from 'react';
import { BadgesPanel } from "../../Components/Badges"

export default class ImagePreview extends Component {

    constructor(props) {
        super(props)
        this.state = {
            card: props.card,
            showLabels: props.showLabels
        };
    }

    render() {
        let labels = this.state.showLabels ? <BadgesPanel showCaption="false" badges={this.props.card.labels}/> : ""
        return (
            <div className="imageContainer">
                <img alt={"Image of " + this.props.card.caption} src={this.props.card.imageName} />
                <div className="content">
                    <button type="button" className="btn btn-primary" disabled>
                        {this.props.card.caption}
                    </button>
                    {labels}
                </div>
            </div>
        )
    }

}
ImagePreview.defaultProps = {
    showLabels : true
}

