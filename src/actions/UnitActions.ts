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
