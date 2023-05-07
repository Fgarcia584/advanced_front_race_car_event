import { Dispatch, PropsWithChildren, createContext, useReducer } from "react";
import { Race } from "../components/Types/race";
import { RaceActionType, RaceState, initialRaceState, raceReducer } from "./racesReducer";
import { Action } from "../components/Types/action";


export const RacesContext = createContext<[RaceState, Dispatch<Action<RaceActionType>>]>([
    initialRaceState,
    () => null,
  ]);
  
  const RacesProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(raceReducer, initialRaceState);
  
    return (
      <RacesContext.Provider value={[state, dispatch]}>
        {children}
      </RacesContext.Provider>
    );
  };