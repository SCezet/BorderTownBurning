import { StateActions, SET_ARMY, SET_ALIGNMENT, SET_OBJECTIVE, RESTRICT_ALIGNMENTS, RESTRICT_OBJECTIVES, RESTRICT_UNITS, SET_UNIT, ADD_MONEY_TO_TREASURY, SUBSTRACT_MONEY_FROM_TREASURY, ADD_UNIT_TO_ROSTER, REMOVE_UNIT_FROM_ROSTER } from "../actions";
import { initSelectionState } from "../constants";
import { ISelectionState } from "../utilities/utils";

export function stateReducer(state: ISelectionState = initSelectionState, action: StateActions): ISelectionState {
    switch (action.type) {
        case SET_ARMY:
            return { ...state, selectedArmy: action.payload };
        case SET_ALIGNMENT:
            return { ...state, selectedAlignment: action.payload };
        case SET_OBJECTIVE:
            return { ...state, selectedObjective: action.payload };
        case RESTRICT_ALIGNMENTS:
            return { ...state, listOfAlignments: action.payload };
        case RESTRICT_OBJECTIVES:
            return { ...state, listOfObjectives: action.payload };
        case RESTRICT_UNITS:
            return { ...state, listOfUnits: action.payload };
        case SET_UNIT:
            return { ...state, selectedUnit: action.payload };
        case ADD_UNIT_TO_ROSTER:
            return { ...state, warbandRoster: [...state.warbandRoster, action.payload] }
        case REMOVE_UNIT_FROM_ROSTER:
            return { ...state, warbandRoster: state.warbandRoster.filter((unit) => unit.name !== action.payload.name) };
        case ADD_MONEY_TO_TREASURY:
            return { ...state, armyTreasury: state.armyTreasury + action.payload };
        case SUBSTRACT_MONEY_FROM_TREASURY:
            return { ...state, armyTreasury: state.armyTreasury - action.payload };
        default:
            return state;
    }
}