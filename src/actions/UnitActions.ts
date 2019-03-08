import * as constants from "../constants";
import { IUnit } from "../utilities/utils";

interface RestrictUnits {
    listOfUnits: IUnit[];
    type: constants.RESTRICT_UNITS;
}

export type RestrictUnitsAction = RestrictUnits;

export const restrictUnits = (listOfUnits: IUnit[]): RestrictUnits => ({
    listOfUnits,
    type: constants.RESTRICT_UNITS,
});

interface SetSelectedUnit {
    selectedUnit: IUnit;
    type: constants.SET_SELECTED_UNIT;
}

export type SetSelectedUnitAction = SetSelectedUnit;

export const setSelectedUnit = (selectedUnit: IUnit): SetSelectedUnit => ({
    selectedUnit,
    type: constants.SET_SELECTED_UNIT,
});