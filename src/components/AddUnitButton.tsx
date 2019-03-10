import React from "react";
import { connect } from "react-redux";
import { IUnit, ISelectionState } from "../utilities/utils";
import { store } from "..";
import { ADD_UNIT_TO_ROSTER, SUBSTRACT_MONEY_FROM_TREASURY } from "../actions";

const AddUnitBtn = ({ selectedUnit }: { selectedUnit: IUnit }) => {
    const handleClick = () => {
        store.dispatch({ type: ADD_UNIT_TO_ROSTER, payload: selectedUnit });
        store.dispatch({ type: SUBSTRACT_MONEY_FROM_TREASURY, payload: selectedUnit.Price });
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