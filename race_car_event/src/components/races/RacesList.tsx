import { races } from "../../mock/races"
import { Race } from "../Types/race";
import RaceCard from "./RaceCard";

const RacesList: React.FC = () => {
    const races_list: Race[] = races;

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 place-items-center">
            {races_list.map((race) => (
                <RaceCard key={race.id} race={race} />
                ))}
        </div>
    )
}

export default RacesList;