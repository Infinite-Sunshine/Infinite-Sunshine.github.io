export default // Omerius
{
    name: 'Omerius',
    level: 2,
    gender: 'Male',
    height: `6'3"`,
    weight: '200lbs',
    race: 'Kalashtar',
    class: 'Cleric',
    size: 'Medium',
    age: 20,
    alignment: 'Lawful Good',
    deity: 'Bahamut',
    affiliations: 'Star-shaped Birthmark Crew',
    paragonPath: '',
    epicDestiny: '',
    XP: '',
    abilityScores: {
        STR: 16,
        CON: 10,
        DEX: 10,
        INT: 10,
        WIS: 18,
        CHA: 18,
    },
    defenseSpecialMods: {
        ac: [],
        fort: [],
        ref: [],
        will: [{type: 'class', bonus: 2}, {type: 'race', bonus: 4}],
    },
    speed: {base: 6},
    hitPoints: {
        current: 27,
        max: 27,
    },
    healingSurges: {
        value: 6,
        perDay: 7,
    },
    actionPoints: 1,
    skillMods: {
        Arcana: [{
            type: 'trained',
            bonus: 5
        }],
        Diplomacy: [{
            type: 'trained',
            bonus: 5
        }, {
            type: 'class',
            bonus: 2
        }],
        Heal: [{
            type: 'trained',
            bonus: 5
        }],
        Insight: [{
            type: 'class',
            bonus: 2
        }],
        Religion: [{
            type: 'trained',
            bonus: 5
        }],
    },
    powers: {
        atWill: [
            {
                name: 'Lance of Faith',
                classification: 'Cleric Attack 1',
                flavorText:
                    'A brilliant ray of light sears your foe with golden radiance. Sparkles of light linger around the target, guiding your ally’s attack.',
                keywords: '✦ Divine, Implement, Radiant',
                action: 'Standard Action',
                attackType: 'Ranged',
                range: '5',
                target: 'One creature',
                attack: 'Wisdom vs. Reflex',
                hit: '1d8 + Wisdom modifier radiant damage, and one ally you can see gains a +2 power bonus to his or her next attack roll against the target. Increase damage to 2d8 + Wisdom modifier at 21st level.',
            },
            {
                name: 'Astral Seal',
                classification: 'Cleric Attack 1',
                flavorText:
                    'You outline your enemy with the silver glow of the Astral Sea, and its healing light bathes your friend.',
                keywords: '✦ Divine , Healing , Implement',
                action: 'Standard Action',
                attackType: 'Ranged',
                range: '5',
                target: 'One creature',
                attack: 'Wisdom +2 vs. Reflex',
                hit: 'Until the end of your next turn, the target takes a - 2 penalty to all defenses. The next ally who hits it before the end of your next turn regains hit points equal to 2 + your Charisma modifier.',
            },
        ],
        daily: [
            {
                name: 'Bastion of Mental Clarity',
                classification: 'Racial Feature',
                flavorText:
                    'You erect a psychic shield to protect your mind from assault, and you ward your allies as well.',
                keywords: '',
                action: 'Immediate Interrupt',
                attackType: 'Close burst',
                range: '5',
                trigger:
                    'An enemy hits or misses you with an attack against your Will',
                target: 'You and each ally in burst',
                effect: 'Each target gains a +4 power bonus to Will until the end of your next turn.',
            },
            {
                name: 'Guardian of Faith',
                classification: 'Cleric Attack 1',
                flavorText:
                    'You conjure a ghostly guardian, indistinct except for a glowing shield emblazoned with your deity’s symbol. A burst of radiance erupts from it to sear foes that move next to it.',
                keywords: '✦ Conjuration, Divine, Implement, Radiant',
                action: 'Standard Action',
                attackType: 'Ranged',
                range: '5',
                effect: 'You conjure a guardian that occupies 1 square within range. Every round, you can move the guardian 3 squares as a move action. The guardian lasts until the end of the encounter. Any creature that ends its turn next to the conjured guardian is subject to a Wisdom vs. Fortitude attack. On a hit, the attack deals 1d8 + Wisdom modifier radiant damage.',
            },
            {
                name: 'Return from Death’s Door',
                classification: 'Cleric Utility 2',
                flavorText: 'You snatch an ally from the brink of death.',
                keywords: '✦ Divine, Healing',
                action: 'Immediate Interrupt',
                attackType: 'Ranged',
                range: '20',
                trigger:
                    'An ally within 20 squares of you fails a death saving throw',
                target: 'The triggering ally',
                effect: 'The target succeeds on the death saving throw and can spend a healing surge.',
            },
        ],
        encounter: [
            {
                name: 'Channel Divinity: Armor of Bahamut',
                classification: 'Cleric Feature',
                flavorText:
                    'Bahamut protects you or a friend from devastating harm.',
                keywords: '✦ Divine',
                action: 'Immediate Interrupt',
                attackType: 'Ranged',
                range: '5',
                trigger: 'An enemy scores a critical hit on you or an ally.',
                effect: 'Turn a critical hit against you or an ally within range into a normal hit.',
            },
            {
                name: 'Channel Divinity: Divine Fortune',
                classification: 'Cleric Feature',
                flavorText:
                    'In the face of peril, you hold true to your faith and receive a special boon.',
                keywords: '✦ Divine',
                action: 'Free Action',
                attackType: 'Personal',
                range: '5',
                effect: 'You gain a +1 bonus to your next attack roll or saving throw before the end of your next turn.',
            },
            {
                name: 'Channel Divinity: Healer’s Mercy',
                classification: 'Cleric Feature',
                flavorText:
                    'Strength flows out from you to your injured comrades, rekindling their resolve to see the battle to its end.',
                keywords: '✦ Divine',
                action: 'Standard Action',
                attackType: 'Close burst',
                target: 'Each bloodied ally in burst',
                range: '5',
                effect: 'Each target can spend a healing surge. You are weakened until the end of your next turn.',
            },
            {
                name: 'Healing Word',
                classification: 'Cleric Feature',
                flavorText:
                    'You whisper a brief prayer as divine light washes over your target, helping to mend its wounds.',
                keywords: '✦ Divine, Healing',
                action: 'Minor Action',
                attackType: 'Close burst',
                range: '5 (10 at 11th level, 15 at 21st level)',
                special:
                    'You can use this power twice per encounter, but only\n' +
                    'once per round. At 16th level, you can use this power three\n',
                target: 'You or one ally',
                effect: 'The target can spend a healing surge and regain an additional 1d6 hit points. Increase the amount of additional hit points regained to 2d6 at 6th level, 3d6 at 11th level, 4d6 at 16th level, 5d6 at 21st level, and 6d6 at 26th level.',
            },
            {
                name: 'Shield Bearer',
                classification: 'Cleric Attack 1',
                flavorText:
                    'A shimmering warrior steps from between the worlds to defend your allies.',
                keywords: '✦ Conjuration , Divine , Implement , Radiant',
                action: 'Standard Action',
                attackType: 'Ranged',
                range: '10',
                target: 'One creature',
                attack: 'Wisdom vs. Reflex',
                hit: '2d8 + Wisdom modifier radiant damage. You conjure a shield bearer in an unoccupied square adjacent to the target. The shield bearer lasts until the end of your next turn. The shield bearer occupies 1 square, and allies can move through it as if it were an ally. While adjacent to the shield bearer, any ally gains a +2 power bonus to all defenses.',
            },
        ],
    },
    rituals: [
        {
            name: 'Gentle Repose',
            flavorText:
                'Your practiced hands perform the ritual fast enough to preserve the body for a later casting of Raise Dead.',
            level: '1',
            category: 'Restoration',
            time: '1 hour',
            duration: 'Special',
            componentCost: '10 gp',
            marketPrice: '50 gp',
            keySkill: 'Heal (no check)',
            description:
                'This ritual is performed on an adjacent corpse. It quintuples the time the corpse can lie dead and still be affected by Raise Dead or a similar ritual. Gentle Repose also protects the corpse from being raised as an undead creature for 150 days.',
        },
        {
            name: 'Make Whole',
            flavorText:
                'As you finish the ritual, the oaken door stands whole and unblemished as if Orten the Rager hadn’t just burst through it with murder in his eyes. It’s the least you can do after using the inn to ambush the infamous barbarian.',
            level: '1',
            category: 'Exploration',
            time: '10 minutes',
            duration: 'Permanent',
            componentCost: 'Special',
            marketPrice: '50 gp',
            keySkill: 'Arcana (no check)',
            description:
                'A single object that can fit in a 10-foot cube is completely repaired. The component cost is 20 percent of the item’s cost. In cases where you attempt to repair an item not on any price list, the DM determines the cost.',
        },
    ],
    feats: [
        {
            name: 'Armor of Bahamut [Divinity]',
            benefit:
                'You can invoke the power of your deity to use armor of Bahamut.',
        },
        {
            name: 'Defensive Healing Word',
            benefit:
                'When you use your healing word, the target also gains a power bonus to all defenses equal to your Charisma modifier against the next attack made against him or her.',
        },
    ],
    languages: ['Common', 'Telepathy 5'],
    weapons: [{name: 'Mace', range: 'melee', damage: '1d8'}],
    armor: {name: 'Chain Mail', bonus: 6, speedPenalty: -1, light: false},
    shield: {name: 'Heavy Shield', bonus: 2},
    items: [
        'Backpack',
        'Holy Symbol',
        'Rope',
        'Ritual Book',
        'Rations - 10 days',
        'Flint & Steel',
        'Bedroll',
        'Robes',
        'Candle - 10',
        '"Awesome Sweater" +1 AC Body Armor (Custom-tailored. Portrays a Beach Sunset w/Palm Trees.)',
    ],
    currency: [{name: 'Gold', amount: 25}],
};
