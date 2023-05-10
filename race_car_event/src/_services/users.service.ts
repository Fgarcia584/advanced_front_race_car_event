import Axios from "./caller.service";

let getallUsers = () => {
    return Axios.get('api/users/');
}