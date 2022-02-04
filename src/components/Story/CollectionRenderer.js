import React from "react"
import '../StoryItem/ImageRenderer.css'
import {renderers} from "../StoryItem/Renderers"
import Carousel from "./Carousel";

function buildComponent(item, params) {
    return <Carousel items={item.story} params={params}/>
}

renderers['Collection'] = buildComponent