import Select, { Option } from "rc-select";
import React from "react";
import { connect } from "react-redux";
import "rc-select/assets/index.css";
import { store } from "..";
import { RESTRICT_ALIGNMENTS, RESTRICT_OBJECTIVES, SET_ALIGNMENT, SET_ARMY, SET_OBJECTIVE, RESTRICT_UNITS } from "../constants";
import { getArmyList, getRestrictedAlignmentList, getRestrictedObjectiveList, getUnits } from "../utilities/utils";

const ArDropdown = () => {
    const armyList = getArmyList();
    const dropDownList = armyList.map((armyName) => <Option key={armyName} value={armyName}>{armyName}</Option>);

    const handleChange = (selectedElement: string) => {
        store.dispatch({ type: SET_ARMY, selectedArmy: selectedElement });
        store.dispatch({ type: SET_ALIGNMENT, selectedAlignment: "" });
        store.dispatch({ type: SET_OBJECTIVE, selectedObjective: "" });
        store.dispatch({ type: RESTRICT_ALIGNMENTS, listOfAlignments: getRestrictedAlignmentList(selectedElement) });
        store.dispatch({ type: RESTRICT_OBJECTIVES, listOfObjectives: getRestrictedObjectiveList(selectedElement) });
        store.dispatch({ type: RESTRICT_UNITS, listOfUnits: getUnits(selectedElement) });
    };

    return (
        <div>
            <Select onChange={(selectedElement) => handleChange(selectedElement as string)} style={{ width: 200 }}>
                {dropDownList}
            </Select>
        </div>
    );
};

export const ArmyDropdown = connect()(ArDropdown);
