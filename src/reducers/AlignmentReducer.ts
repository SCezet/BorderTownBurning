import { SetAlignmentAction } from "../actions";
import { appInitState, SET_ALIGNMENT } from "../constants";
import { IAppState } from "../utilities/utils";

export function alignmentReducer(state: IAppState = appInitState, action: SetAlignmentAction): IAppState {
    switch (action.type) {
        case SET_ALIGNMENT:
            return { ...state, selectedAlignment: action.selectedAlignment };
        default:
            return state;
    }
}
