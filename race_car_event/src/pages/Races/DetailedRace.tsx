import { useParams } from "react-router-dom";
import RaceDetail from "../../components/races/RaceDetail";
import { useContext } from "react";
import { RacesContext } from "../../contexts/races/racesContext";


const DetailedRace = () => {
    const id = useParams<{ id: string }>();
    const [state] = useContext(RacesContext); 
    const race = state.races.find((n) => String(n.id) === id.id);


  return (
    <div className="h-screen overflow-hidden flex justify-center">
    { race === undefined ? <div >Course introuvable</div> : <RaceDetail race={race} /> }
    </div>
    );
};

export default DetailedRace;
