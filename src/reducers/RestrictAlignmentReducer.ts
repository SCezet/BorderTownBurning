import { RestrictAlignmentsAction } from "../actions";
import { RESTRICT_ALIGNMENTS } from "../constants";
import { getAllAlignments } from "../utilities/utils";

export function restrictAlignmentReducer(state: string[] = getAllAlignments(), action: RestrictAlignmentsAction): string[] {
    switch (action.type) {
        case RESTRICT_ALIGNMENTS:
            return action.listOfAlignments;
        default:
            return state;
    }
}
