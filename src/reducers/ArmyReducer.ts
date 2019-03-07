import { ArmyAction } from "../actions";
import { SET_ARMY } from "../constants";

export function armyReducer(state: string = "", action: ArmyAction): string {
    switch (action.type) {
        case SET_ARMY:
            return action.selectedArmy;
        default:
            return state;
    }
}
