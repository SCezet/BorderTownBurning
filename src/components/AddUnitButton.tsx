import React from "react";
import { connect } from "react-redux";
import { IAppState, IUnit } from "../utilities/utils";
import { ADD_UNIT } from "../constants";
import { store } from "..";

const AddUnitBtn = ({ selectedUnit }: { selectedUnit: IUnit }) => {
    const handleClick = () => {
        store.dispatch({ type: ADD_UNIT, addedUnit: selectedUnit });
        return undefined;
    };

    return (
        <div>
            <button onClick={handleClick()} style={{ width: 250 }}>
                Add selected Unit to warband roster
            </button>
        </div>
    );
};
function mapStateToProps(state: IAppState) { ({ selectedUnit: state.selectedUnit }) };
export const AddUnitButton = connect(mapStateToProps)(AddUnitBtn);