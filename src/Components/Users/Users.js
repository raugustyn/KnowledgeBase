class Person {
    constructor (userId, firstName, lastName, prevTitles, afterTitles, organization, jobTitle) {
        this.userId = userId
        this.firstName = firstName
        this.lastName = lastName
        this.prevTitles = prevTitles
        this.afterTitles = afterTitles
        this.organization = organization
        this.jobTitle = jobTitle
    }

    fullName() {
        let nameComponents = [this.prevTitles, this.firstName, this.lastName, this.afterTitles]
        nameComponents = nameComponents.filter(function (element) { return element != null; })
        return nameComponents.join(" ");
    }
}

export const users = {
    "Augustyn": new Person("Augustyn", "Radek", "Augustýn", "Ing.", "", "VÚGTK, v.v.i.", "Analyst"),
    "Drozda":   new Person("Drozda", "Jiří", "Drozda", "Ing.", "", "VÚGTK, v.v.i.", "Cartographer"),
    "Langr":    new Person("Langr", "Jan", "Langr", "Mgr.", "", "Unicorn, sro.", "Project Manager"),
    "Zemek":    new Person("Zemek", "Jaroslav", "Zemek", "Ing.", "CSc.", "VÚGTK, v.v.i.", "Cartographer"),
    "Guest":    null
}
