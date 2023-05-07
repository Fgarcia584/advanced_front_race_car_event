import Axios from './caller.service';

let getRaces = () => {
    return Axios.get("/api/races/");
};

let getRace = (id: number) => {
    return Axios.get("/api/races/" + id + "/");
};

let createRace =(credentials : object) => {
    return Axios.post("/api/races/create", credentials);
};

export default {
    getRaces,
    getRace,
    createRace
};