import * as constants from "../constants";

interface SetObjective {
    selectedObjective: string;
    type: constants.SET_OBJECTIVE;
}

export type ObjectiveAction = SetObjective;

export const setObjective = (selectedObjective: string): SetObjective => ({
    selectedObjective,
    type: constants.SET_OBJECTIVE,
});

interface RestrictObjectives {
    listOfObjectives: string[];
    type: constants.RESTRICT_OBJECTIVES;
}

export type RestrictObjectivesAction = RestrictObjectives;

export const restrictObjectives = (listOfObjectives: string[]): RestrictObjectives => ({
    listOfObjectives,
    type: constants.RESTRICT_OBJECTIVES,
});
