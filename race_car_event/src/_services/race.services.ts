import Axios from './caller.service';

let getRaces = async () => {
    return await Axios.get("/api/races/");
};

let getRace = (id: number) => {
    return Axios.get("/api/races/" + id + "/");
};

let createRace = (credentials : object) => {
    return Axios.post("/api/races/create", credentials);
};

let registerRace = (raceId: string, userId: string) => {
    return Axios.post("api/races/" + raceId + "/register", { user_id: userId });
};

export default {
    getRaces,
    getRace,
    createRace,
    registerRace,
};