import { GROUP_TYPE } from "./index"
import Issue from "./Issue"
import {ISSUE_TYPES} from "./index"

export class User extends Issue {

    constructor(name, firstName='', lastName='', avatarImage='', nick = '') {
        super(ISSUE_TYPES.USER, Date.now(), 'raugustyn', name, null, [
            new Issue(ISSUE_TYPES.AVATARIMAGE, Date.now(), 'raugustyn', 'avatarImage', avatarImage),
            new Issue(ISSUE_TYPES.FIRSTNAME, Date.now(), 'raugustyn', 'firstName', firstName),
            new Issue(ISSUE_TYPES.LASTNAME, Date.now(), 'raugustyn', 'lastName', lastName),
            new Issue(ISSUE_TYPES.OTHER, Date.now(), 'raugustyn', 'nick', nick)
        ].filter(item => item.value))
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