import { SetSelectedUnitAction } from "../actions";
import { SET_SELECTED_UNIT } from "../constants";

export function unitReducer(state: string = "", action: SetSelectedUnitAction): string {
    switch (action.type) {
        case SET_SELECTED_UNIT:
            return action.selectedUnit;
        default:
            return state;
    }
}
