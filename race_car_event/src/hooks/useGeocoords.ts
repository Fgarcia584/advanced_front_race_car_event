import { useState, useEffect } from "react";

const useGeocoords = () => {
    const [coords, setCoords] = useState<GeolocationCoordinates>();
    const [ validate, setValidate ] = useState<boolean>(false);
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
        setCoords(position.coords);
        setValidate(true);
        });
    }, []);
    
    return {
        coords,
        validate
    };
};

export default useGeocoords;