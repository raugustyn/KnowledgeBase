import React from "react"
import './ImageRenderer.css'
import {renderers} from "./Renderers"
import Carousel from "./Carousel";

function buildComponent(item, params) {
    return <Carousel items={item.value}/>
}

renderers['Collection'] = buildComponent