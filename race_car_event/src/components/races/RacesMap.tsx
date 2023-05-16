import { useContext, useEffect } from "react";
import { RacesContext } from "../../contexts/races/racesContext";
import useRaces from "../../hooks/useRaces";
import { MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import { Icon } from "leaflet";

import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-cluster";
import useGeocoords from "../../hooks/useGeocoords";
import SetMapCenter from "./SetMapCenter";
import RaceCardCore from "./RaceCardCore";

const RacesMap = () => {
  useRaces();
  const { coords } = useGeocoords();
  const center: [number, number] = [
    coords?.latitude ?? 50.6311278,
    coords?.longitude ?? 3.0056985,
  ];
  const [state] = useContext(RacesContext);

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconSize: [38, 38], // size of the icon
  });

  if (state.loading) return <div>Loading...</div>;

  return (
    <MapContainer className="h-screen m-10" zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&amp;copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup chunkedLoading>
        {state.races.map((race) => (
          <Marker
            id={race.id}
            position={[race.longitude, race.latitude]}
            icon={customIcon}
          >
            <Popup id={race.id}>
              <RaceCardCore key={race.id} race={race} />
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
      <SetMapCenter latitude={center[0]} longitude={center[1]} />
    </MapContainer>
  );
};

export default RacesMap;
