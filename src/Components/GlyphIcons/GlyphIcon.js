import React, { Component } from 'react';
import "./GlyphIcon.css"

function convertUnicode(input) {
  return input.replace(/\\u(\w\w\w\w)/g,function(a,b) {
    var charcode = parseInt(b,16);
    return String.fromCharCode(charcode);
  });
}



class GlyphIcon extends Component {
    /*
        <GlyphIcon charToBeDisplyed="\uE919"/>
        <GlyphIcon glyphName="PLUS" />
    */

    glyphNames = {
        PLUS : "\uE901"
    }

    render() {
        let charToBeDisplayed = this.props.charToBeDisplyed
        if (this.props.glyphName) {
            charToBeDisplayed = this.glyphNames[this.props.glyphName]
        }

        charToBeDisplayed = convertUnicode(charToBeDisplayed)
        return <span className="GlyphIcon">{ charToBeDisplayed }</span>
    }

}

export default GlyphIcon
