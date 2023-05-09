import { useContext } from "react"
import raceServices from "../_services/race.services";
import { RacesContext } from "../contexts/racesContext";
import { RaceActionType } from "../contexts/racesReducer";

const useRaces = () => {
    const [, dispatch] = useContext(RacesContext);

    const getRaces = async () => {
       raceServices.getRaces()
       
        .then((res) => {
            console.log(res.data.data)
            dispatch({
                type : RaceActionType.SET_RACES,
                payload : res.data.data
            })
            return res.data.data
        })
        .catch((e) => console.error(e))
    };


    return {
        getRaces
    };
};

export default useRaces;
