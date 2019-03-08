import { RestrictAlignmentsAction } from "../actions";
import { appInitState, RESTRICT_ALIGNMENTS } from "../constants";
import { IAppState } from "../utilities/utils";

export function restrictAlignmentReducer(state: IAppState = appInitState, action: RestrictAlignmentsAction): IAppState {
    switch (action.type) {
        case RESTRICT_ALIGNMENTS:
            return { ...state, listOfAlignments: action.listOfAlignments };
        default:
            return state;
    }
}