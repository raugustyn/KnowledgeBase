import React, {Fragment} from "react"
import './ImageRenderer.css'
import {renderers} from "./Renderers"

let imageCount = 0

export function resetImageCount() { imageCount = 0 }

function buildComponent(item, params) {
    imageCount = imageCount + 1
    const image = <img src={item.value} />
    if (params.isInCollection || false) {
        return <div className="Image">{image}</div>
    }
    else {
        let caption = item.getLastValue('caption')
        if (caption) {
            caption = <p className="Caption">Obrázek č.{imageCount} {caption}</p>
        }
        return (<div className="Image Image-top-margin">
            {image}
            {caption}
        </div>
        )
    }

}

renderers['Image'] = buildComponent