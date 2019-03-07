import "rc-select/assets/index.css";
import React from "react";
import Select, { Option } from "rc-select";
import { connect } from "react-redux";
import { IAppState, IUnit } from "../utilities/utils";
import { SET_SELECTED_UNIT } from "../constants";
import { store } from "..";

const UDropdown = ({ listOfUnits }: { listOfUnits: IUnit[] }) => {
    const dropDownList = listOfUnits.map((unit: IUnit) =>
        <Option key={unit.name} value={unit.name}>
            {unit.name} ({unit.Price})
        </Option>);
    const handleChange = (selectedElement: string) => {
        store.dispatch({ type: SET_SELECTED_UNIT, selectedUnit: selectedElement });
        console.log(store.getState());
    };

    return (
        <div>
            <Select onChange={(selectedElement) => handleChange(selectedElement as string)} style={{ width: 200 }}>
                {dropDownList}
            </Select>
        </div>
    );
};
function mapStateToProps(state: IAppState) { ({ listOfUnits: state.listOfUnits }) };
export const HeroDropdown = connect(mapStateToProps)(UDropdown);
