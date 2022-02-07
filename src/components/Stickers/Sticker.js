import React, {Component} from 'react';
import {red, blue,amber,deepPurple, green, yellow, orange} from "@mui/material/colors";
import './Sticker.css'

const stickerColors = {
    'Generalizace': red,
    'Pochopil Aug': amber,
    'Pochopil Zem': deepPurple,
    'Generalization Issue': green,
    'PARAGRAPH': yellow,
    'DESCRIPTION': orange
}

function addAlpha(color, opacity) {
    // coerce values so ti is between 0 and 1.
    const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return color + _opacity.toString(16).toUpperCase();
}

class Sticker extends Component {

    render() {
        const { name } = this.props
        const color = stickerColors[name] || blue
        return (
            <span className="Sticker" style={{ color: color[800], backgroundColor: addAlpha(color[500], 0.18), borderColor: addAlpha(color[600], 0.3) }}>{name}</span>
        );
    }

}

export default Sticker