import React from "react";
import { connect } from "react-redux";
import { AlignmentDropdown } from "./components/AlignmentDropdown";
import { ArmyDropdown } from "./components/ArmyDropdown";
import { ObjectiveDropdown } from "./components/ObjectiveDropdown";
import { UnitDropdown } from "./components/UnitDropdown";
import { AddUnitButton } from "./components/AddUnitButton";
import { UnitContainer } from "./components/RosterUnitContainer";
import { ISelectionState } from "./constants";

function App(props: ISelectionState) {
    return (
        <div>
            <div>{props.selectedArmy}</div>
            <div>{props.selectedAlignment}</div>
            <div>{props.selectedObjective}</div>
            <div>{props.armyTreasury}</div>
            <div>{props.armyStash}</div>
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
    armyAchievements: state.armyAchievements
});

export const AppContainer = connect(mapStateToProps)(App);
