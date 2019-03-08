import { ObjectiveAction } from "../actions";
import { appInitState, SET_OBJECTIVE } from "../constants";
import { IAppState } from "../utilities/utils";

export function objectiveReducer(state: IAppState = appInitState, action: ObjectiveAction): IAppState {
    switch (action.type) {
        case SET_OBJECTIVE:
            return { ...state, selectedObjective: action.selectedObjective };
        default:
            return state;
    }
}
