import { RestrictObjectivesAction } from "../actions";
import { appInitState, RESTRICT_OBJECTIVES } from "../constants";
import { IAppState } from "../utilities/utils";

export function restrictObjectiveReducer(state: IAppState = appInitState, action: RestrictObjectivesAction): IAppState {
    switch (action.type) {
        case RESTRICT_OBJECTIVES:
            return { ...state, listOfObjectives: action.listOfObjectives };
        default:
            return state;
    }
}