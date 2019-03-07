import { RestrictUnitsAction } from "../actions";
import { RESTRICT_UNITS } from "../constants";

export function restrictUnitListReducer(state: string[] = [], action: RestrictUnitsAction): string[] {
    switch (action.type) {
        case RESTRICT_UNITS:
            return action.listOfUnits;
        default:
            return state;
    }
}
