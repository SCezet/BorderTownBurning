import { SetSelectedUnitAction } from "../actions";
import { appInitState, SET_SELECTED_UNIT } from "../constants";
import { IAppState } from "../utilities/utils";

export function unitReducer(state: IAppState = appInitState, action: SetSelectedUnitAction): IAppState {
    switch (action.type) {
        case SET_SELECTED_UNIT:
            return { ...state, selectedUnit: action.selectedUnit };
        default:
            return state;
    }
}
