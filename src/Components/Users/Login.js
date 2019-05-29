import React, { Component } from 'react';
import PersonFaceComponent from "./PersonFaceComponent"
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { users } from "./Users"

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.state = {
            userId: props.userId,
            dropDownOpen: false
        }
    }

    toggleDropDown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    switchUser(userId) {
        this.setState({
            userId: userId
        });
    }

    renderLogged() {
        // Create userIds list
        let userIds = Object.keys(users);
        if (this.state.userId) {
            userIds.splice(userIds.indexOf(this.state.userId), 1);
        }
        return (
            <div>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                    <DropdownToggle color="link">
                        <PersonFaceComponent personName={this.state.userId} />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Logged as {this.state.userId}</DropdownItem>
                        { userIds.map((userId, index) => (
                            <DropdownItem key={index} onClick={this.switchUser.bind(this, userId)}>
                                <PersonFaceComponent personName={userId} />{userId}
                            </DropdownItem>
                        ))
                        }
                      <DropdownItem divider />
                      <DropdownItem disabled>Account Details</DropdownItem>
                      <DropdownItem disabled>Change Password</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={this.switchUser.bind(this, null)}>Logout</DropdownItem>
                    </DropdownMenu>
              </ButtonDropdown>
            </div>
        )
    }

    render() {
        if (this.state.userId) {
            return this.renderLogged()
        }

        return <div>Login</div>
    }
}
