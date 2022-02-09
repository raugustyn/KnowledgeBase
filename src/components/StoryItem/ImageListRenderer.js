import React, {Fragment} from "react"
import './ImageRenderer.css'
import {renderers} from "./Renderers"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

let imageCount = 0

export function resetImageCount() { imageCount = 0 }

function buildComponent(item, params) {
    const images = item.getItemsToBePublished().map(collectionItem => ({
        src: collectionItem.value,
        caption: collectionItem.getLastValue('caption')
    }))

    const numRows = Math.ceil(images.length/3)

return (
    <ImageList sx={{ width: 510, height: numRows*170 }} cols={3} rowHeight={164}>
      {images.map((item, index) => (
        <ImageListItem key={index}>
          <img
            src={item.src}
            srcSet={item.src}
            alt={item.caption}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

renderers['Image list'] = buildComponent
