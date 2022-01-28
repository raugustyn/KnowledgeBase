import {User} from "./User";

class Users {

    constructor(users = []) {
        this.users = users
    }

    [Symbol.iterator]() {
        var index = -1;
        var users = this.users;

        return {
            next: () => ({value: users[++index], done: !(index in users)})
        }
    }

    findUser(userName, createIfNotFound = true) {
        const filteredUsers = this.users.filter(user => user.name === userName)

        let result = null
        if (filteredUsers.length == 1) {
            result = filteredUsers[0]
        } else {
            if (createIfNotFound) {
                result = new User(userName)
                this.users.push(result)
            }
        }

        return result
    }

}

export let users = new Users([
    new User('raugustyn', 'Radek', 'Augustýn', 'raugustyn.png'),
    new User('babnic'),
    new User('janlangr', 'Jan', 'Langr'),
    new User('kocenda', 'Antonín', 'Kočenda'),
    new User('zemekjar', 'Jaroslav', 'Zemek', '', 'Jarda'),
    new User('droyda', 'Jiří', 'Drozda', 'droyda.png', 'droyd')
])
