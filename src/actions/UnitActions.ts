import * as constants from "../constants";

interface RestrictUnits {
    listOfUnits: string[];
    type: constants.RESTRICT_UNITS;
}

export type RestrictUnitsAction = RestrictUnits;

export const restrictUnits = (listOfUnits: string[]): RestrictUnits => ({
    listOfUnits,
    type: constants.RESTRICT_UNITS,
});

interface SetSelectedUnit {
    selectedUnit: string;
    type: constants.SET_SELECTED_UNIT;
}

export type SetSelectedUnitAction = SetSelectedUnit;

export const setSelectedUnit = (selectedUnit: string): SetSelectedUnit => ({
    selectedUnit,
    type: constants.SET_SELECTED_UNIT,
});