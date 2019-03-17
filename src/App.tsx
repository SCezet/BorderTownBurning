import React from "react";
import { connect } from "react-redux";
import { AlignmentDropdown } from "./components/AlignmentDropdown";
import { ArmyDropdown } from "./components/ArmyDropdown";
import { ObjectiveDropdown } from "./components/ObjectiveDropdown";
import { UnitDropdown } from "./components/UnitDropdown";
import { AddUnitButton } from "./components/AddUnitButton";
import { UnitContainer } from "./components/RosterUnitContainer";
import { ISelectionState } from "./constants";
import { getArmySizeLimit } from "./utilities/utils";

function App(props: ISelectionState) {
    let ArmySizeLimit: number = 0;
    if (props.selectedArmy) {
        ArmySizeLimit = getArmySizeLimit(props.selectedArmy);
    }
    return (
        <div>
            <div>Army: {props.selectedArmy}</div>
            <div>Alignment: {props.selectedAlignment}</div>
            <div>Objective: {props.selectedObjective}</div>
            <div>Treasury: {props.armyTreasury}</div>
            <div>Rating: {props.warbandRating}</div>
            <div>Stashed equipment: {props.armyStash}</div>
            <div>Bodies: {props.warbandRoster.length} / {ArmySizeLimit}</div>
            <ArmyDropdown></ArmyDropdown>
            <AlignmentDropdown listOfAlignments={props.listOfAlignments}></AlignmentDropdown>
            <ObjectiveDropdown listOfObjectives={props.listOfObjectives}></ObjectiveDropdown>
            <UnitDropdown listOfUnits={props.listOfUnits}></UnitDropdown>
            <AddUnitButton selectedUnit={props.selectedUnit}></AddUnitButton>
            <UnitContainer warbandRoster={props.warbandRoster}></UnitContainer>
        </div>
    )
}

const mapStateToProps = (state: ISelectionState) => ({
    listOfAlignments: state.listOfAlignments,
    listOfObjectives: state.listOfObjectives,
    listOfUnits: state.listOfUnits,
    selectedArmy: state.selectedArmy,
    selectedAlignment: state.selectedAlignment,
    selectedObjective: state.selectedObjective,
    warbandRoster: state.warbandRoster,
    armyTreasury: state.armyTreasury,
    armyStash: state.armyStash,
    selectedUnit: state.selectedUnit,
    armyCampaignPoints: state.armyCampaignPoints,
    armyWyrdstoneShards: state.armyWyrdstoneShards,
    armyAchievements: state.armyAchievements,
    warbandRating: state.warbandRating
});

export const AppContainer = connect(mapStateToProps)(App);
