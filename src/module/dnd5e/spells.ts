export interface SpellData {
    level: number;
    school: string;
    components: {
        vocal: boolean;
        somatic: boolean;
        material: boolean;
    };
    materials: {
        consumed: boolean;
    };
}

export interface Spell {
    data: SpellData;
}


export function spell_school_full (abbrev: string): string
{
    const name_map = {
        "evo": "evocation",
        "con": "conjuration",
        "abj": "abjuration",
        "trs": "transmutation",
        "enc": "enchantment",
        "ill": "illusion",
        "div": "divination",
        "nec": "necromancy",
    };

    const result = name_map[abbrev];

    if (result === undefined) {
        throw "What? Bad spell school abbreviation: " + abbrev;
    }
    else {
        return result;
    }
}

export function spell_level_string(level: number): string
{
    return level === 0 ? "cantrip" : "" + level;
}

export function vsm_string(spell: Spell): string
{
    const components = spell.data.components;
    const materials = spell.data.materials;
    return (
        (components.vocal ? "V" : "") +
        (components.somatic ? "S" : "") +
        (components.material ? "M" : "") +
        (materials.consumed ? "*" : "")
    );
}

export const LEGAL_VSM_STRINGS = [
    "VSM*",
    "VSM",
    "VS",
    "VM*",
    "VM",
    "SM*",
    "SM",
    "V",
    "S",
    "M*",
    "M",
];
