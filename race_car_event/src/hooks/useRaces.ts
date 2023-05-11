import { useContext, useEffect } from "react";
import raceServices from "../_services/race.services";
import { RacesContext } from "../contexts/racesContext";
import { RaceActionType } from "../contexts/racesReducer";
import { Race } from "../types/race";

const useRaces = () => {
  const [state, dispatch] = useContext(RacesContext);

  useEffect(() => {
    if (state.races.length == 0) {
      getRaces();
    }
  }, []);

  const getRaces = async () => {
    await raceServices
      .getRaces()
      .then((res) => {
        const races: Race[] = res.data.data;
        dispatch({
          type: RaceActionType.SET_RACES,
          payload: races,
        });
      })
      .catch((e) => console.error(e))
      .finally(() =>
        dispatch({
          type: RaceActionType.SET_LOADING,
          payload: false,
        })
      );
  };

  return {
    getRaces,
  };
};

export default useRaces;
