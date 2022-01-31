import React, {Fragment} from 'react'

class Renderers extends Object {

    constructor(values= {}) {
        super();

        for (const [key, value] of Object.entries(values)) {
            this[key] = value
        }
    }

    buildComponent(item, params) {
        const renderer = this[item.itemType.caption]
        return renderer ? renderer(item, params) : <Fragment />
    }

}

export const renderers = new Renderers({})
