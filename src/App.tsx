import React from "react";
import { connect } from "react-redux";
import { AlignmentDropdown } from "./components/AlignmentDropdown";
import { ArmyDropdown } from "./components/ArmyDropdown";
import { ObjectiveDropdown } from "./components/ObjectiveDropdown";
import { HeroDropdown } from "./components/HeroDropdown";
import { IAppState } from "./utilities/utils";
import { AddUnitButton } from "./components/AddUnitButton";

function App(props: IAppState) {
    return (
        <div>
            <div>{props.selectedArmy}</div>
            <div>{props.selectedAlignment}</div>
            <div>{props.selectedObjective}</div>
            <ArmyDropdown></ArmyDropdown>
            <AlignmentDropdown listOfAlignments={props.listOfAlignments}></AlignmentDropdown>
            <ObjectiveDropdown listOfObjectives={props.listOfObjectives}></ObjectiveDropdown>
            <HeroDropdown listOfUnits={props.listOfUnits}></HeroDropdown>
            <AddUnitButton selectedUnit={props.selectedUnit}></AddUnitButton>
            {/* <AppBody></AppBody> */}
        </div>
    )
}

const mapStateToProps = (state: IAppState) => ({
    listOfAlignments: state.listOfAlignments,
    listOfObjectives: state.listOfObjectives,
    listOfUnits: state.listOfUnits,
    selectedAlignment: state.selectedAlignment,
    selectedArmy: state.selectedArmy,
    selectedObjective: state.selectedObjective,
    selectedUnit: state.selectedUnit,
    armyTreasury: state.armyTreasury,
    armyStash: state.armyStash,
    armyUnits: state.armyUnits,
    armyCampaignPoints: state.armyCampaignPoints,
    armyWyrdstoneShards: state.armyWyrdstoneShards,
    armyAchievements: state.armyAchievements
});

export const AppContainer = connect(mapStateToProps)(App);
