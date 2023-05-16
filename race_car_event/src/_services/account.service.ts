import Axios from './caller.service';

let login = (credentials: object) => {
    return Axios.post('/api/auth/login/', credentials)
};

let register = (credentials: object) => {
    return Axios.post('/api/auth/register/', credentials)
};

let saveToken = (token: string ) => {
    if (token) {
        window.localStorage['jwtToken'] = token;
    } else {
        window.localStorage.setItem('jwtToken', token);
    }
};

let logout = () => {
    window.localStorage.removeItem('jwtToken');
};

let getToken = () => {
    return window.localStorage['jwtToken'];
}

let isLoggedIn = () => {
    let token = getToken();
    let payload;

    if (token) {
        payload = token.split('.')[1];
        payload = window.atob(payload);
        payload = JSON.parse(payload);

        return payload.exp > Date.now() / 1000;
    } else {
        return false;
    }
}

export default {
    login,
    register,
    saveToken,
    logout,
    getToken,
    isLoggedIn
};