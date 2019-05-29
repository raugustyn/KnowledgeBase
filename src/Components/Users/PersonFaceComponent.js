import React, { Component } from 'react';
import "./PersonFaceComponent.css"

class PersonFaceComponent extends Component {

    render() {
        let result;

        if (this.props.showAsFace) {
            const imageName = this.props.personName ? this.props.personName : "Guest"
            result = <img alt="Person face" className="image-cropper" src={"img/People/" + imageName + ".png"}/>
        }
        else {
            result = <span className="person-name">{this.props.personName}</span>
        }

        return result
    }
}
PersonFaceComponent.defaultProps = { showAsFace: true };

export default PersonFaceComponent;
