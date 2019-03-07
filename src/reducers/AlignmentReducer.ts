import { SetAlignmentAction } from "../actions";
import { SET_ALIGNMENT } from "../constants";

export function alignmentReducer(state: string = "", action: SetAlignmentAction): string {
    switch (action.type) {
        case SET_ALIGNMENT:
            return action.selectedAlignment;
        default:
            return state;
    }
}
