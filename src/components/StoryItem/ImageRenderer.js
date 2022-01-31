import React, {Fragment} from "react"
import './ImageRenderer.css'
import {renderers} from "./Renderers"


function buildComponent(item, params) {
    return <img className="Image" src={item.value} />
}

renderers['Image'] = buildComponent