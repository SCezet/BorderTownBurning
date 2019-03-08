import { ArmyAction } from "../actions";
import { appInitState, SET_ARMY } from "../constants";
import { IAppState } from "../utilities/utils";

export function armyReducer(state: IAppState = appInitState, action: ArmyAction): IAppState {
    switch (action.type) {
        case SET_ARMY:
            return { ...state, selectedArmy: action.selectedArmy };
        default:
            return state;
    }
}
