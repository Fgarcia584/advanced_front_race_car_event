import axios from "axios";

let getGeocoords = async (address: string) => {
    const access_token = "pk.eyJ1IjoiZWxiYXJvbml0b3NhbWVkaSIsImEiOiJjbGhuenMxNHoxcmE5M2VudTZhbHNsNzc5In0.SkFkq5LGTbjBV2lGPLKb-Q"
    return await axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?proximity=ip&access_token=" + access_token);
};

let getAdress = async (longitude: string, latitude: string) => {
    const access_token = "pk.eyJ1IjoiZWxiYXJvbml0b3NhbWVkaSIsImEiOiJjbGhuenMxNHoxcmE5M2VudTZhbHNsNzc5In0.SkFkq5LGTbjBV2lGPLKb-Q"
    return await axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/" + longitude + "," + latitude + ".json?limit=1&proximity=ip&access_token=" + access_token);
};

export default {
    getGeocoords,
    getAdress
};