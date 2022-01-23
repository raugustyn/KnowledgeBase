import { GROUP_TYPE } from "./index"

export class User {

    constructor(name, firstName='', lastName='', avatarImage='', nick = '') {
        this.name = name
        this.avatarImage = avatarImage
        this.firstName = firstName
        this.lastName = lastName
        this.nick = nick
    }

    getFullName() {
        return [this.firstName, this.lastName].join(' ').trim() || this.name
    }

    getInitials() {
        return this.getFullName().split(" ").map(n=>n[0]).join("").toUpperCase()
    }

    getShortName() {
        let result = this.name

        switch (GROUP_TYPE) {
            case 'Familiar':
                result = this.nick || this.firstName
                break

            case 'Formal':
                result = this.getFullName()
                break
        }

        return result
    }
}