export const SET_ARMY = "SET_ARMY";
export type SET_ARMY = typeof SET_ARMY;

export const SET_ALIGNMENT = "SET_ALIGNMENT";
export type SET_ALIGNMENT = typeof SET_ALIGNMENT;

export const RESTRICT_ALIGNMENTS = "RESTRICT_ALIGNMENTS";
export type RESTRICT_ALIGNMENTS = typeof RESTRICT_ALIGNMENTS;

export const RESTRICT_OBJECTIVES = "RESTRICT_OBJECTIVES";
export type RESTRICT_OBJECTIVES = typeof RESTRICT_OBJECTIVES;

export const RESTRICT_UNITS = "RESTRICT_UNITS";
export type RESTRICT_UNITS = typeof RESTRICT_UNITS;

export const ADD_UNIT = "ADD_UNIT";
export type ADD_UNIT = typeof ADD_UNIT;

export const REMOVE_UNIT = "REMOVE_UNIT";
export type REMOVE_UNIT = typeof REMOVE_UNIT;

export const SET_OBJECTIVE = "SET_OBJECTIVE";
export type SET_OBJECTIVE = typeof SET_OBJECTIVE;

export const SET_SELECTED_UNIT = "SET_SELECTED_UNIT";
export type SET_SELECTED_UNIT = typeof SET_SELECTED_UNIT;

export const initUnit: IUnit = {
    name: "",
    Characteristics: {
        Movement: 0,
        WeaponSkill: 0,
        BallisticSkill: 0,
        Strength: 0,
        Toughness: 0,
        Wounds: 0,
        Initiative: 0,
        Attacks: 0,
        Leadership: 0
    },
    Price: 0,
    isHero: false,
    Skills: [],
    SkillLists: [],
    allowedEquipment: "",
    include: [],
    experience: 0,
    equipment: []
}

export const initSelectionState: ISelectionState = {
    selectedArmy: "",
    selectedAlignment: "",
    selectedObjective: "",
    selectedUnit: initUnit,
    listOfAlignments: [
        "Lawful",
        "Lawful/Neutral",
        "Neutral",
        "Neutral/Chaotic",
        "Chaotic",
    ],
    listOfObjectives: [
        "The Scion of Chaos",
        "The Scourge of the Realm",
        "The Celestial Protectorate",
        "The Lure of Fortune",
        "The Silent Threat",
        "The Damned Shall Burn",
    ],
    listOfUnits: [],
    warbandRoster: [],
    armyTreasury: 0,
    armyStash: [],
    armyCampaignPoints: 0,
    armyWyrdstoneShards: 0,
    armyAchievements: [],
}

export interface IArmy {
    name: string;
    sizeLimit: number;
    alignments: string[];
    objectives: string[];
    units: IUnit[];
    startingCapital: number;
}

export interface ISelectionState {
    selectedArmy: string;
    selectedAlignment: string;
    selectedObjective: string;
    selectedUnit: IUnit;
    listOfAlignments: string[];
    listOfObjectives: string[];
    listOfUnits: IUnit[];
    warbandRoster: IUnit[];
    armyTreasury: number;
    armyStash: string[];
    armyCampaignPoints: number,
    armyWyrdstoneShards: number,
    armyAchievements: string[],
}

export interface IUnit {
    name: string;
    Characteristics: ICharacteristics;
    Price: number;
    isHero: boolean;
    Skills: string[];
    SkillLists: string[];
    allowedEquipment: string;
    include: number[];
    experience: number;
    equipment: string[];
}

export interface ICharacteristics {
    Movement: number;
    WeaponSkill: number;
    BallisticSkill: number;
    Strength: number;
    Toughness: number;
    Wounds: number;
    Initiative: number;
    Attacks: number;
    Leadership: number;
}
