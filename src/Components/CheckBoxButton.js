import React from 'react';
import GlyphIcon from "./GlyphIcons/GlyphIcon"


export default class CheckBoxButton extends GlyphIcon {

    constructor(props) {
        super(props)
        this.state = {
            checked: props.checked
        }
    }

    toggleChecked() {
        if (this.props.onChangeChecked) (
            this.props.onChangeChecked(this, !this.state.checked)
        )
        this.setState({ checked: !this.state.checked })
    }


    render() {
        const checkBoxChars = { true: "\uE913", false: "\uE914"}
        const charToBeDisplyed = checkBoxChars[this.state.checked]
        let paragraphStyle = { cursor: "pointer" }
        if (this.props.size) {
            paragraphStyle["fontSize"] = ["14px", "20px", "24px", "28px"][this.props.size]
        }
        return <span onClick={this.toggleChecked.bind(this)} style={paragraphStyle}><GlyphIcon charToBeDisplyed={charToBeDisplyed} /></span>
    }

}
CheckBoxButton.defaultProps = {
    checked: true,
    size: 3
};

