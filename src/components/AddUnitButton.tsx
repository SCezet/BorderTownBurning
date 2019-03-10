import React from "react";
import { connect } from "react-redux";
import { store } from "..";
import { ADD_UNIT_TO_ROSTER, SUBSTRACT_MONEY_FROM_TREASURY, REMOVE_UNIT_FROM_UNITLIST, SET_UNIT } from "../actions";
import { initUnit, IUnit, ISelectionState } from "../constants";

const AddUnitBtn = ({ selectedUnit }: { selectedUnit: IUnit }) => {
    const handleClick = () => {
        store.dispatch({ type: ADD_UNIT_TO_ROSTER, payload: selectedUnit });
        store.dispatch({ type: SUBSTRACT_MONEY_FROM_TREASURY, payload: selectedUnit.Price });
        if (selectedUnit.include[1] === 1) {
            store.dispatch({ type: REMOVE_UNIT_FROM_UNITLIST, payload: selectedUnit.name });
            store.dispatch({ type: SET_UNIT, payload: initUnit });
        }
        return undefined;
    };

    return (
        <div>
            <button onClick={() => handleClick()} style={{ width: 250 }}>
                Add selected Unit to warband roster
            </button>
        </div>
    );
};
function mapStateToProps(state: ISelectionState) { ({ selectedUnit: state.selectedUnit }) };
export const AddUnitButton = connect(mapStateToProps)(AddUnitBtn);