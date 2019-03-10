import "rc-select/assets/index.css";
import React from "react";
import Select, { Option } from "rc-select";
import { connect } from "react-redux";
import { ISelectionState, IUnit } from "../utilities/utils";
import { SET_UNIT } from "../actions";
import { store } from "..";

const UnitsDropdown = ({ listOfUnits }: { listOfUnits: IUnit[] }) => {
    const dropDownList = listOfUnits.map((unit: IUnit) =>
        <Option key={unit.name} value={unit.name}>
            {unit.name} ({unit.Price})
        </Option>);
    const handleChange = (selectedElement: string) => {
        const selectedUnit = listOfUnits.find(unit => unit.name === selectedElement)
        if (selectedUnit) {
            store.dispatch({ type: SET_UNIT, payload: selectedUnit });
            console.log(store.getState());
        }
    };

    return (
        <div>
            <Select onChange={(selectedElement) => handleChange(selectedElement as string)} style={{ width: 200 }}>
                {dropDownList}
            </Select>
        </div>
    );
};
function mapStateToProps(state: ISelectionState) { ({ listOfUnits: state.listOfUnits }) };
export const UnitDropdown = connect(mapStateToProps)(UnitsDropdown);
