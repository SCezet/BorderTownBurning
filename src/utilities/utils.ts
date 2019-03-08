export interface IArmy {
    name: string;
    sizeLimit: number;
    alignments: string[];
    objectives: string[];
    units: IUnit[];
}

export interface IAppState {
    selectedArmy: string;
    selectedAlignment: string;
    selectedObjective: string;
    selectedUnit: IUnit | undefined;
    listOfAlignments: string[];
    listOfObjectives: string[];
    listOfUnits: IUnit[];
    armyTreasury: number,
    armyStash: string[],
    armyUnits: IUnit[],
    armyCampaignPoints: number,
    armyWyrdstoneShards: number,
    armyAchievements: string[]
}

export interface IUnit {
    name: string;
    Characteristics: ICharacteristics;
    Price: number;
    isHero: boolean;
    isHiredSword: boolean;
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

export function getAllAlignments(): string[] {
    return [
        "Lawful",
        "Lawful/Neutral",
        "Neutral",
        "Neutral/Chaotic",
        "Chaotic",
    ];
}

export function getAllObjectives(): string[] {
    return [
        "The Scion of Chaos",
        "The Scourge of the Realm",
        "The Celestial Protectorate",
        "The Lure of Fortune",
        "The Silent Threat",
        "The Damned Shall Burn",
    ];
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

export function getHeroes(selectedArmy: string): IUnit[] {
    const allUnits = getUnits(selectedArmy);
    return allUnits.filter((unit) => unit.isHero && !unit.isHiredSword);
}

export function getHenchmen(selectedArmy: string): IUnit[] {
    const allUnits = getUnits(selectedArmy);
    return allUnits.filter((unit) => !unit.isHero);
}