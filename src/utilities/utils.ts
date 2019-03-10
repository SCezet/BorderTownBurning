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

const ArmyList: IArmy[] = require("../constants/Armies.json").armies;

export function getArmyList(): string[] {
    return ArmyList.map((army) => army.name);
}

export function getRestrictedAlignmentList(selectedArmy: string): string[] {
    const Army = ArmyList.find((army) => army.name === selectedArmy);
    if (Army !== undefined) {
        return Army.alignments;
    } else {
        return [];
    }
}

export function getArmyTreasury(selectedArmy: string): number {
    const Army = ArmyList.find((army) => army.name === selectedArmy);
    if (Army !== undefined) {
        return Army.startingCapital;
    } else {
        return 0;
    }
}

export function getRestrictedObjectiveList(selectedArmy: string): string[] {
    const Army = ArmyList.find((army) => army.name === selectedArmy);
    if (Army !== undefined) {
        return Army.objectives;
    } else {
        return [];
    }
}

export function getArmySizeLimit(selectedArmy: string): number {
    const Army = ArmyList.find((army) => army.name === selectedArmy);
    if (Army !== undefined) {
        return Army.sizeLimit;
    } else {
        return 0;
    }
}

export function getUnits(selectedArmy: string): IUnit[] {
    const Army = ArmyList.find((army) => army.name === selectedArmy);
    if (Army !== undefined) {
        return Army.units;
    } else {
        return [];
    }
}
