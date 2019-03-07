import { ObjectiveAction } from "../actions";
import { SET_OBJECTIVE } from "../constants";

export function objectiveReducer(state: string = "", action: ObjectiveAction): string {
    switch (action.type) {
        case SET_OBJECTIVE:
            return action.selectedObjective;
        default:
            return state;
    }
}
