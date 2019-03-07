import { combineReducers } from "redux";
import { alignmentReducer } from "./AlignmentReducer";
import { armyReducer } from "./ArmyReducer";
import { objectiveReducer } from "./ObjectiveReducer";
import { restrictAlignmentReducer } from "./RestrictAlignmentReducer";
import { restrictObjectiveReducer } from "./RestrictObjectiveReducer";
import { restrictUnitListReducer } from "./RestrictUnitListReducer";
import { unitReducer } from "./UnitReducer";

export const rootReducer = combineReducers({
    listOfAlignments: restrictAlignmentReducer,
    listOfObjectives: restrictObjectiveReducer,
    listOfUnits: restrictUnitListReducer,
    selectedAlignment: alignmentReducer,
    selectedArmy: armyReducer,
    selectedObjective: objectiveReducer,
    selectedUnit: unitReducer,
});
