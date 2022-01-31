import React from "react"
import './ImageRenderer.css'
import {renderers} from "./Renderers"

function buildComponent(item, params) {
    return (
        <div>
            {item.value.map((subItem, index) => <div key={index}>{renderers.buildComponent(subItem, params)}</div>)}
        </div>
    )
}

renderers['Collection'] = buildComponent