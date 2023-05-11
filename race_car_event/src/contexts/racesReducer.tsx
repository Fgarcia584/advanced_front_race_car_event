import { Action } from "../types/action";
import { Race } from "../types/race";

export enum RaceActionType {
  SET_RACES = "SET_RACES",
  ADD_RACE = "ADD_RACE",
  EDIT_RACE = "EDIT_RACE",
  REGISTER_TO_RACE = "REGISTER_TO_RACE",
  SET_LOADING = "SET_LOADING",
}
export interface RaceState {
  races: Race[];
  loading?: boolean;
}

export const initialRaceState: RaceState = {
  races: [],
  loading: true,
};

export const raceReducer = (
  state: RaceState,
  action: Action<RaceActionType>
) => {
  switch (action.type) {
    case RaceActionType.SET_RACES:
      return {
        ...state,
        races: action.payload,
        loading: false,
      };
    case RaceActionType.ADD_RACE:
      return {
        ...state,
        races: [action.payload, ...state.races],
      };
    case RaceActionType.EDIT_RACE:
      return {
        ...state,
        races: [
          action.payload,
          ...state.races.filter((n) => n.id !== action.payload.id),
        ],
      };
    case RaceActionType.REGISTER_TO_RACE:
      return {
        ...state,
      };
    case RaceActionType.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      throw new Error(`Unsupported action type: ${action}`);
  }
};
