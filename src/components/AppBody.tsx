import Select, { Option } from "rc-select";
import React from "react";
import { connect } from "react-redux";
import "rc-select/assets/index.css";
import { store } from "..";
import { SET_OBJECTIVE } from "../constants";
import { IAppState, IUnit } from "../utilities/utils";

const AppBody = ({ armyUnits }: { armyUnits: IUnit[] }) => {
    const unitDivs = armyUnits.map((unit) => {
        return (
            <div>
                <div>{unit.Price}</div>
                <div>{unit.name}</div>
                <div>{unit.experience}</div>
                <div>{unit.isHiredSword}</div>
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
    })
    return (
        <div> unitDivs </div>
    );
    // return (<div>{armyUnits}</div>)
};
function mapStateToProps(state: IAppState) { ({ armyUnits: state.armyUnits }) };
export const UnitContainer = connect(mapStateToProps)(AppBody);
