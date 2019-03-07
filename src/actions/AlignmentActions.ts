import * as constants from "../constants";

interface SetAlignment {
    selectedAlignment: string;
    type: constants.SET_ALIGNMENT;
}

export type SetAlignmentAction = SetAlignment;

export const setAlignment = (selectedAlignment: string): SetAlignment => ({
    selectedAlignment,
    type: constants.SET_ALIGNMENT,
});

interface RestrictAlignments {
    listOfAlignments: string[];
    type: constants.RESTRICT_ALIGNMENTS;
}

export type RestrictAlignmentsAction = RestrictAlignments;

export const restrictAlignments = (listOfAlignments: string[]): RestrictAlignments => ({
    listOfAlignments,
    type: constants.RESTRICT_ALIGNMENTS,
});
