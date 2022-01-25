
const addRenderer = (classPrototype, caption, icons, defaultDetail, getComponentProc) => {
    classPrototype.renderer = {
        caption: caption,
        icons: icons,
        defaultDetail: defaultDetail,
        getComponent: getComponentProc
    }
}

export default addRenderer