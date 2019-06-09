

class Registry {

    constructor(items=[]) {
        this.items = items
    }

    append(registryItem) {
        this.items.push(registryItem)
    }
}

export default Registry
