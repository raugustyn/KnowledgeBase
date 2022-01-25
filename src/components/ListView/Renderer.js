const addRenderer = (classPrototype, caption, getComponentProc, icons=[], defaultDetail=0) => {
    classPrototype.renderer = {
        caption: caption,
        getComponent: getComponentProc,
        icons: icons,
        defaultDetail: defaultDetail
    }
}

export default addRenderer