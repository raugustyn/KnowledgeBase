
const addRenderer = (classPrototype, caption, icons, defaultDetail, renderer) => {
    classPrototype.renderer = {
        caption: caption,
        icons: icons,
        defaultDetail: defaultDetail,
        renderer: renderer
    }
}

export default addRenderer