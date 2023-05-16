import { useContext, useReducer } from "react";
import { Race } from "../../types/race";
import RaceCard from "./RaceCard";
import { RacesContext } from "../../contexts/races/racesContext";
import useRaces from "../../hooks/useRaces";

const RacesList: React.FC = () => {
  useRaces();
  const [state] = useContext(RacesContext);
  const races_list: Race[] = state.races;

  if (state.loading) return <div>Loading...</div>;

  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 place-items-center">
      
      {races_list.map((race) => (
        <RaceCard key={race.id} race={race} />
      ))}
    </div>
  );
};

export default RacesList;
