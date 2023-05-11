import { useEffect } from "react";
import { useMap } from "react-leaflet";

interface Props {
    latitude: number;
    longitude: number;
}

const setMapcenter: React.FC<Props> = ({ latitude, longitude }) => {
    const map = useMap();
    const center: [number, number ] = [latitude , longitude];
    useEffect(() => {
        if (latitude != 0 && longitude != 0 ) {
            map.setView(center , 13);
        }
    }, [latitude, longitude]);
    return null;
};

export default setMapcenter;
