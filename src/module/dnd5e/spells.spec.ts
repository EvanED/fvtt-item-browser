import { expect } from 'chai';
import 'mocha';

import {
    Spell,
    spell_school_full,
    spell_level_string,
    vsm_string,
    LEGAL_VSM_STRINGS,
} from "./spells";

import { spells_srd_v1_2_2_aux } from "./spells.srd.v1.2.2";

const spell_lists = [
    spells_srd_v1_2_2_aux.short_list,
];

interface SpellTestFunc {
    (spell: Spell): any;
};

function for_each_test_spell(test) {
    for (const spell_list of spell_lists) {
        for (const spell of spell_list) {
            test(spell);
        }
    }
}

describe('Spell calculations', function() {
    it('spell schools are all recognized', function() {
        for_each_test_spell(spell => {
            const school_abbrev = spell.data.school;
            const school_full = spell_school_full(school_abbrev);
            expect(school_full).not.to.be.undefined;
        });
    });

    it('spell levels are all recognized', function() {
        for_each_test_spell(spell => {
            const level = spell.data.level;
            const level_string = spell_level_string(level);
            expect(level_string).to.be.a("string");
            if (level_string !== "cantrip") {
                const level_reparsed = parseInt(level_string);
                expect(level_reparsed).to.equal(level);
            }
        });
    });

    it('spell components are all sanely produced', function() {
        for_each_test_spell(spell => {
            const vsm = vsm_string(spell);
            expect(LEGAL_VSM_STRINGS).to.contain(vsm);
        });
    });
});
