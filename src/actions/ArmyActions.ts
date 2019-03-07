import * as constants from "../constants";

interface SetArmy {
    selectedArmy: string;
    type: constants.SET_ARMY;
}

export type ArmyAction = SetArmy;

export const setArmy = (selectedArmy: string): SetArmy => ({
    selectedArmy,
    type: constants.SET_ARMY,
});
