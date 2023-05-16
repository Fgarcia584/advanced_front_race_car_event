import  { useContext, useState } from "react";
import { UserContext } from "../../contexts/auth/authContext";
import raceServices from "../../_services/race.services";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from 'date-fns/locale/fr';
import geocodingService from "../../_services/geocoding.service";
import { useNavigate } from "react-router-dom";
import { MapContainer,TileLayer } from "react-leaflet";
import useGeocoords from "../../hooks/useGeocoords";
import SetMapCenter from "./SetMapCenter";

import "leaflet/dist/leaflet.css";
registerLocale('fr', fr)



function RaceForm() {
    let navigate = useNavigate()
    const usercontext = useContext(UserContext);

    const { coords } = useGeocoords();
    const center: [number, number] = [
    coords?.latitude ?? 50.6311278,
    coords?.longitude ?? 3.0056985,
  ];

    const [credentials, setCredentials] = useState({
        name: "",
        description: "",
        adress : "",
        owner_id: usercontext.user.id
    });
    const [startDate, setStartDate] = useState(new Date(Date.now()));

    const [adresses, setAdresses] = useState([]);
    
    const [coordonates, setCoordonates] = useState({
        longitude: "",
        latitude: ""
    });

    const [error, setError] = useState("");

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        geocodingService.getGeocoords(credentials.adress).then(
            res => {
                setAdresses(res.data.features);
            }
        )

        setCredentials({
        ...credentials,
        [event.currentTarget.name]: value        
        });
    };

    const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {

        event.preventDefault();
        console.log(credentials);
        raceServices.createRace({
            name: credentials.name,
            description: credentials.description,
            date: startDate,
            longitude: coordonates.longitude,
            latitude: coordonates.latitude,
            owner_id: credentials.owner_id
        })
        .then(
            res => {
                console.log(res);
                navigate('/races')
            }
        )
        .catch(err => console.log(err))
      };


      const setPlace = (event: React.MouseEvent<HTMLButtonElement>) => {
        const value = event.currentTarget.value;
            setCoordonates({
                longitude: value.split(',')[1],
                latitude: value.split(',')[0]
            })

            setCredentials(
                {
                    ...credentials,
                    adress: event.currentTarget.innerHTML
                }
            )
            setAdresses([]);
      }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">  
                <div className="card-content h-1/2">
                    <MapContainer className="h-full m-10" zoom={13} scrollWheelZoom={true}>
                        <TileLayer attribution='&amp;copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <SetMapCenter latitude={center[0]} longitude={center[1]} />
                    </MapContainer>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold">Créer une course</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Nom</span>
                            </label>
                            <input name="name" value={credentials.name} onChange={onChange} type="text" placeholder="Nom" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Desciption</span>
                            </label>
                            <input name="description" value={credentials.description} onChange={onChange} type="text" placeholder="Description" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <DatePicker className="input input-bordered px-7" locale="fr" selected={startDate} onChange={(date) => date && setStartDate(date)} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Point de RDV</span>
                            </label>
                            <input name="adress" value={credentials.adress} onChange={onChange} type="text" placeholder="Adresse" className="input input-bordered" />

                            { adresses.length !== 0 && 

                                <div className="dropdown dropdown-open">
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52">
                                
                                    {adresses.map((adress: any) => (
                                        <li key={adress.id} className="menu-title">
                                            <button className="btn-ghost text-white hover:cursor-pointer" value={adress.center} onClick={setPlace}>{adress.place_name}</button>
                                        </li>
                                        ))}
                                    
                                </ul>
                            </div>
                            }
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary" onClick={onSubmit}>Enregister</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    };

export default RaceForm;
