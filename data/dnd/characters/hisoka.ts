export default // Hisoka
{
    name: 'Hisoka',
    race: 'Aladrin',
    class: 'Rogue/Sorcerer',
    alignment: 'Chaotic Good',
    level: '2',
    powers: {
        atWill: [
            {
                name: 'Riposte Strike',
                classification: 'Rogue Attack 1',
                flavorText: 'With a calculated strike, you leave your foe vulnerable to an adroit riposte should he dare attack you.',
                hit: '1[W] + Dexterity modifier damage. If the target attacks you before the start of your next turn, you make your riposte against the target as an immediate interrupt: a Strength vs. AC attack that deals 1[W] + Strength modifier damage.',
                keywords: 'Melee',
                action: 'Standard',
                attackType: 'Dexterity, Martial, Weapon',
                range: 'Weapon',
                target: 'One Creature',
                trigger: 'You must be wielding a light blade'
            },
            {
                name: 'Chaos Bolt',
                classification: 'Sorcerer Attack 1',
                flavorText: 'A bolt of many-colored light leaps from your hand and screams toward an enemy’s head.',
                keywords: 'Arcane, Implement',
                action: 'Standard Action',
                attackType: 'Ranged',
                range: '10',
                target: 'One Creature',
                attack: 'Charisma vs. Will',
                hit: '1d10 + Charisma modifier psychic damage. Level 21: 2d10 + Charisma modifier psychic damage.',
                wildMagic: 'If you rolled an even number for the primary attack roll, make a secondary attack.',
                secondaryTarget: 'One creature within 5 squares of the target last hit by this power.',
                secondaryAttack: 'Charisma vs. Will',
                secondaryHit: '1d6 psychic damage. If you rolled an even number for the secondary attack roll, repeat the secondary attack.',
            }
        ],
        daily: [
            {
                name: 'Dazzling Ray',
                classification: 'Sorcerer Attack 1',
                flavorText: 'A brilliant beam lances out to strike your foe and befuddle it.',
                wildMagic: 'If you rolled an even number on the attack roll, the target takes a penalty to attack rolls against you equal to your Dexterity modifier (save ends).',
                miss: 'Half damage.',
                keywords: 'Arcane, Implement, Radiant',
                action: 'Standard Action',
                attackType: 'Ranged',
                range: '10',
                attack: 'Charisma vs. Will',
                target: 'One creature',
                hit: '6d6 + Charisma modifier radiant damage.',
            }
        ],
        encounter: [
            {
                name: 'Bedeviling Burst',
                classification: 'Sorcerer Attack 1',
                flavorText: 'An eruption of psychic energy assaults your enemies’ minds, sending them staggering.',
                hit: '1d10 + Charisma modifier psychic damage, and you push the target a number of squares equal to your Dexterity modifier.',
                wildMagic: 'If you rolled an even number on the attack roll, you slide the target instead of pushing it.',
                keywords: 'Arcane, Implement, Psychic',
                action: 'Standard Action',
                attack: 'Charisma vs. Will',
                attackType: 'Close burst',
                range: '3',
                target: 'One or two creatures in burst',
            },
            {
                name: 'Sneak in the attack',
                classification: 'Rogue Utility 2',
                effect: 'Until the start of your next turn, the next ally who hits the target gains combat advantage against it and deals extra damage against it equal to your Sneak Attack damage.',
                keywords: 'Martial',
                action: 'Minor action',
                attackType: 'Personal',
                target: 'One creature',
            },
            {
                name: 'Fey Step',
                classification: 'Eladrin Racial Power',
                effect: 'Teleport up to 5 squares.',
                keywords: 'Teleportation',
                action: 'Move action',
                attackType: 'Personal',
            },
        ],
    },
    feats: [
        {
            name: 'Rogue Weapon Talent',
            benefit: 'Increases the size of the weapon die by one when wielding a shuriken, for example, 1d8 instead of 1d6 for a Short sword. The character also gains a +1 bonus to weapon attack rolls with a dagger.'
        },
        {
            name: 'Backstabber',
            benefit: 'Change sneak attack benefit from D6 to D8'
        },
    ]
}
