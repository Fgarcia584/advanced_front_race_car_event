import { Dispatch, PropsWithChildren, createContext, useReducer } from "react";
import {
  RaceActionType,
  RaceState,
  initialRaceState,
  raceReducer,
} from "./racesReducer";
import { Action } from "../../types/action";

export const RacesContext = createContext<
  [RaceState, Dispatch<Action<RaceActionType>>]
>([initialRaceState, () => null]);

const RacesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(raceReducer, initialRaceState);
  return (
    <RacesContext.Provider value={[state, dispatch]}>
      {children}
    </RacesContext.Provider>
  );
};

export default RacesProvider;
