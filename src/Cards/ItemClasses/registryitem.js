function stringValueCreator(options={}) {
    return options.value ? options.value : ""
}

export default class RegistryItem {

    constructor(name, editorComponentClass, valueCreator, caption=null, description=null, duplicitiesAllowed=true, sectionButtonDef=null) {
        this.name = name
        this.editorComponentClass = editorComponentClass

        if (!valueCreator) {
            valueCreator = stringValueCreator
        }
        this.valueCreator = valueCreator
        if (!caption) {
            caption = name
        }
        this.caption = caption
        this.description = description
        this.duplicitiesAllowed = duplicitiesAllowed
        this.sectionButtonDef = sectionButtonDef
    }

    getNewItem(options={}) {
        return this.valueCreator(options)
    }

}
