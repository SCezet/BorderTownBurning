import { RestrictUnitsAction } from "../actions";
import { appInitState, RESTRICT_UNITS } from "../constants";
import { IAppState } from "../utilities/utils";

export function restrictUnitListReducer(state: IAppState = appInitState, action: RestrictUnitsAction): IAppState {
    switch (action.type) {
        case RESTRICT_UNITS:
            return { ...state, listOfUnits: action.listOfUnits };
        default:
            return state;
    }
}