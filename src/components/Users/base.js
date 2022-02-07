import {users} from "../../data";

export const findUserFromProps = (props) => props.user || users.findUser(props.params.userName, false) || users.findUser(props.userName, false)
