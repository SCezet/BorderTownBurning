import React from "react";
import { connect } from "react-redux";
import { store } from "..";
import { ADD_UNIT_TO_ROSTER, SUBTRACT_MONEY_FROM_TREASURY, REMOVE_UNIT_FROM_UNITLIST, SET_UNIT, ADD_WARBAND_RATING } from "../actions";
import { IUnit, ISelectionState } from "../constants";

const AddUnitBtn = ({ selectedUnit }: { selectedUnit: IUnit | null }) => {
    const handleClick = () => {
        if (selectedUnit) {
            store.dispatch({ type: ADD_UNIT_TO_ROSTER, payload: selectedUnit });
            store.dispatch({ type: SUBTRACT_MONEY_FROM_TREASURY, payload: selectedUnit.Price });
            store.dispatch({ type: ADD_WARBAND_RATING, payload: selectedUnit });
            const unitsInRoster = store.getState().warbandRoster.filter((unit) => unit.name === selectedUnit.name);
            if (selectedUnit.include[1] === 1 || selectedUnit.include[1] === unitsInRoster.length) {
                store.dispatch({ type: REMOVE_UNIT_FROM_UNITLIST, payload: selectedUnit.name });
                store.dispatch({ type: SET_UNIT, payload: null });
            }
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
function mapStateToProps(state: ISelectionState) { ({ selectedUnit: state.selectedUnit }); return {} };
export const AddUnitButton = connect(mapStateToProps)(AddUnitBtn);