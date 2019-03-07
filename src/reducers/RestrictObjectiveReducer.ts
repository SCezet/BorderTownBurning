import { RestrictObjectivesAction } from "../actions";
import { RESTRICT_OBJECTIVES } from "../constants";
import { getAllObjectives } from "../utilities/utils";

export function restrictObjectiveReducer(state: string[] = getAllObjectives(), action: RestrictObjectivesAction): string[] {
    switch (action.type) {
        case RESTRICT_OBJECTIVES:
            return action.listOfObjectives;
        default:
            return state;
    }
}
