import React from "react";
import { connect } from "react-redux";
import "rc-select/assets/index.css";
import { store } from "..";
import { REMOVE_UNIT_FROM_ROSTER, ADD_MONEY_TO_TREASURY } from "../actions";
import { IUnit, ISelectionState } from "../constants";

const RosterUnitContainer = ({ warbandRoster }: { warbandRoster: IUnit[] }) => {
    const unitDivs = warbandRoster.map((unit) => {
        if (unit.name !== "") {
            const handleClick = () => {
                store.dispatch({ type: REMOVE_UNIT_FROM_ROSTER, payload: unit });
                store.dispatch({ type: ADD_MONEY_TO_TREASURY, payload: unit.Price });
                return undefined;
            };
            return (
                <div style={{ border: "solid" }}>
                    <button onClick={() => handleClick()} style={{ width: 250 }}>
                        Remove selected Unit from warband roster
                    </button>
                    <div>{unit.Price}</div>
                    <div>{unit.name}</div>
                    <div>{unit.experience}</div>
                    <div>{unit.isHero}</div>
                    <div>{unit.equipment}</div>
                    <div>{unit.allowedEquipment}</div>
                    <div>{unit.SkillLists}</div>
                    <div>{unit.Skills}</div>
                    <div>{unit.include}</div>
                    <div>Attacks {unit.Characteristics.Attacks}</div>
                    <div>WeaponSkill {unit.Characteristics.WeaponSkill}</div>
                    <div>Strength {unit.Characteristics.Strength}</div>
                    <div>Toughness {unit.Characteristics.Toughness}</div>
                    <div>BallisticSkill {unit.Characteristics.BallisticSkill}</div>
                    <div>Initiative {unit.Characteristics.Initiative}</div>
                    <div>Movement {unit.Characteristics.Movement}</div>
                    <div>Wounds {unit.Characteristics.Wounds}</div>
                    <div>Leadership {unit.Characteristics.Leadership}</div>
                </div>
            )
        }
    })
    return (
        <div>{unitDivs}</div>
    );
};
function mapStateToProps(state: ISelectionState) { ({ warbandRoster: state.warbandRoster }) };
export const UnitContainer = connect(mapStateToProps)(RosterUnitContainer);
