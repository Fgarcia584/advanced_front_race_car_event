import { Action } from "../components/Types/action";
import { Race } from "../components/Types/race";

export enum RaceActionType {
    SET_RACES = "SET_RACES",
    ADD_RACE = "ADD_RACE",
    EDIT_RACE = "EDIT_RACE",
    REGISTER_TO_RACE = "REGISTER_TO_RACE"

}
export interface RaceState {
    races: Race[];
}
  
export const initialRaceState: RaceState = {
    races: []
};

export const raceReducer = (state: RaceState, action: Action<RaceActionType>) => {
    console.log(action);
    switch (action.type) {
        case RaceActionType.SET_RACES:
            console.log(action.payload);
            return {
                ...state,
                races: action.payload,
            };
        case RaceActionType.ADD_RACE:
            return {
                ...state,
                races : [action.payload, ...state.races],
            };
        case RaceActionType.EDIT_RACE:
            return {
                ...state,
                races : [
                    action.payload,
                    ...state.races.filter((n) => n.id !== action.payload.id),
                ]
            };
        case RaceActionType.REGISTER_TO_RACE:
            return {
                ...state,
            };
        default:
            return state;
    }
};

