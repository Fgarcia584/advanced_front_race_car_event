import { useContext, useEffect } from "react";
import raceServices from "../_services/race.services";
import { RacesContext } from "../contexts/races/racesContext";
import { Race } from "../types/race";
import { RaceActionType } from "../contexts/races/racesReducer";

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


  const addRace = async ( credentials : Race) => { 
    await raceServices
      .createRace(credentials)
      .then((res) => {
        dispatch({
          type : RaceActionType.ADD_RACE,
          payload : res.data.data
        })
      })
      .catch((e) => console.error(e))
      .finally(() => {
        dispatch({
          type: RaceActionType.SET_LOADING,
          payload: false,
        })
      }
      );
  };

  const registerRace = async (raceId: string, userId: string) => {
    await raceServices
    .registerRace(raceId, userId)
    .then((res) => {
      dispatch({
        type: RaceActionType.EDIT_RACE,
        payload: res.data.data,
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
    addRace,
  };
};

export default useRaces;
