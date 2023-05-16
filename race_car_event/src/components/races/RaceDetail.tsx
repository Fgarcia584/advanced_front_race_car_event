import { useEffect, useState } from "react";
import { Race } from "../../types/race";
import geocodingService from "../../_services/geocoding.service";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

interface Props {
  race: Race;
}

const RaceDetail: React.FC<Props> = ({ race }) => {
  const [adress, setAdress] = useState("");

  useEffect(() => {
    geocodingService.getAdress(race.longitude, race.latitude).then((res) => {
      console.log(res.data.features);
      setAdress(res.data.features[0].place_name);
    });
  }, []);

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconSize: [38, 38], // size of the icon
  });

  return (
    <div className="flex card w-3/4 h-3/4 p-10 mt-10 bg-base-100 shadow-xl">
      <div className="grid grid-cols-5 grid-flow-col gap-4">
        <div className="card-content space-y-4">
          <figure className="pt-10">
            <img src="https://loremflickr.com/g/320/240/car" alt="Race Car" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{race.name}</h2>
            <p>{race.description}</p>
            <p>{race.date}</p>
            <p>{adress}</p>
          </div>
        </div>

        <div className="card-content col-span-4">
          <MapContainer className="h-full m-10" center ={[race.longitude, race.latitude]} zoom={13} scrollWheelZoom={true}>
            <TileLayer attribution='&amp;copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker
            id={race.id}
            position={[race.longitude, race.latitude]}
            icon={customIcon}
          ></Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default RaceDetail;
