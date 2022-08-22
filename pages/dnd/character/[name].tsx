import React from 'react';
import characters from '../../../data/dnd/characters';
import {Box, Flex, Heading, SimpleGrid, Stack, Text} from '@chakra-ui/react';

// This function gets called at build time and defines the props passed to default function
export async function getStaticProps({params}) {
    // Pass post data to the page via props
    return {
        props: {
            character: characters[params.name],
        },
    };
}

// This function gets called at build time and defines the paths
export async function getStaticPaths() {
    // Get the paths we want to pre-render based on posts
    const paths = Object.keys(characters).map((key) => ({
        params: {name: key},
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {paths, fallback: false};
}

function getAbilityModifierFromScore(abilityScore) {
    const modValue = (abilityScore - 10) / 2;
    return modValue > 0 ? Math.ceil(modValue) : Math.floor(modValue);
}

function getAbilityModifierPlusHalfLevelFromScore(abilityScore, level) {
    return getAbilityModifierFromScore(abilityScore) + Math.floor(level / 2);
}

function BasicInfo({character}) {
    return (
        <Stack spacing={0}>
            <Heading as="h1" size="xl">
                {character.name}
            </Heading>
            <SimpleGrid
                columns={{
                    base: 1,
                    md: 2,
                    xl: 4,
                }}
                spacing={2}
            >
                {character.race && (
                    <Text p={1}>
                        <b>Race:</b> {character.race}
                    </Text>
                )}
                {character.gender && (
                    <Text p={1}>
                        <b>Gender:</b> {character.gender}
                    </Text>
                )}
                {character.height && (
                    <Text p={1}>
                        <b>Height:</b> {character.height}
                    </Text>
                )}
                {character.weight && (
                    <Text p={1}>
                        <b>Weight:</b> {character.weight}
                    </Text>
                )}
                {character.size && (
                    <Text p={1}>
                        <b>Size:</b> {character.size}
                    </Text>
                )}
                {character.age && (
                    <Text p={1}>
                        <b>Age:</b> {character.age}
                    </Text>
                )}
                {character.class && (
                    <Text p={1}>
                        <b>Class:</b> {character.class}
                    </Text>
                )}
                {character.alignment && (
                    <Text p={1}>
                        <b>Alignment:</b> {character.alignment}
                    </Text>
                )}
                {character.deity && (
                    <Text p={1}>
                        <b>Deity:</b> {character.deity}
                    </Text>
                )}
                {character.level && (
                    <Text p={1}>
                        <b>Level:</b> {character.level}
                    </Text>
                )}
                {character.affiliations && (
                    <Text p={1}>
                        <b>Affiliations:</b> {character.affiliations}
                    </Text>
                )}
            </SimpleGrid>
        </Stack>
    );
}

function AbilityScores({abilities}) {
    const abilitiesMap = Object.entries(abilities);
    return (
        <>
            {abilitiesMap.length && (
                <>
                    <Heading as="h2" size="lg">
                        Ability Scores
                    </Heading>
                    <SimpleGrid columns={4} spacing={0}>
                        <Box color="white" p={1}>Ability</Box>
                        <Box fontWeight="bold" p={1}>Score</Box>
                        <Box fontWeight="bold" p={1}>Mod</Box>
                        <Box fontWeight="bold" p={1}>Mod + 1/2 LVL</Box>
                        {abilitiesMap.map(
                            (
                                [name,
                                    {
                                        value,
                                        mod,
                                        modPlusHalf
                                    }]: [name: string, value: { value: number, mod: number, modPlusHalf: number }],
                                i
                            ) => {
                                const modPrefix = mod > 0 ? '+' : '';
                                const modPlusHalfPrefix = modPlusHalf > 0 ? '+' : '';
                                const modDisplay = modPrefix + mod;
                                const modPlusHalfDisplay = modPlusHalfPrefix + modPlusHalf;

                                return (
                                    <React.Fragment key={i}>
                                        <Box fontWeight="bold" p={1}>
                                            {name}
                                        </Box>
                                        <Box p={1}>{value}</Box>
                                        <Box p={1}>
                                            {modDisplay}
                                        </Box>
                                        <Box p={1}>
                                            {
                                                modPlusHalfDisplay
                                            }
                                        </Box>
                                    </React.Fragment>
                                );
                            }
                        )}
                    </SimpleGrid>
                </>
            )}
        </>
    );
}

function Defenses(props) {
    const {
        character: {
            armor = {bonus: 0, light: true},
            level,
            shield = {bonus: 0},
            defenseSpecialMods: {
                ac: acMods,
                fort: fortMods,
                ref: refMods,
                will: willMods
            } = {
                ac: [],
                fort: [],
                ref: [],
                will: []
            }
        },
        abilities: {
            DEX: {mod: dexMod} = {mod: 0},
            INT: {mod: intMod} = {mod: 0},
            STR: {mod: strMod} = {mod: 0},
            CON: {mod: conMod} = {mod: 0},
            WIS: {mod: wisMod} = {mod: 0},
            CHA: {mod: chaMod} = {mod: 0},
        }
    } = props;
    const tenPlusHalf = 10 + Math.floor(level / 2);
    const {bonus: armorBonus = 0, light: isLightArmor = true} = armor;
    const {bonus: shieldBonus = 0} = shield;

    const acAbilityMods = isLightArmor ? intMod > dexMod ? intMod : dexMod : 0;
    const fortAbilityMods = strMod > conMod ? strMod : conMod;
    const refAbilityMods = intMod > dexMod ? intMod : dexMod;
    const willAbilityMods = wisMod > chaMod ? wisMod : chaMod;

    const acSpecialMods = acMods.length ? acMods.reduce((sum, {bonus}) => typeof bonus === 'number' ? bonus + sum : sum, 0) : 0;
    const fortSpecialMods = fortMods.length ? fortMods.reduce((sum, {bonus}) => typeof bonus === 'number' ? bonus + sum : sum, 0) : 0;
    const refSpecialMods = refMods.length ? refMods.reduce((sum, {bonus}) => typeof bonus === 'number' ? bonus + sum : sum, 0) : 0;
    const willSpecialMods = willMods.length ? willMods.reduce((sum, {bonus}) => typeof bonus === 'number' ? bonus + sum : sum, 0) : 0;

    const ac = tenPlusHalf + armorBonus + shieldBonus + acAbilityMods + acSpecialMods;
    const fort = tenPlusHalf + fortAbilityMods + fortSpecialMods;
    const ref = tenPlusHalf + shieldBonus + refAbilityMods + refSpecialMods;
    const will = tenPlusHalf + willAbilityMods + willSpecialMods;

    return (
        <Box>
            <Heading as="h2" size="lg">
                Defenses
            </Heading>
            <SimpleGrid columns={2} spacing={0}>
                <Box fontWeight="bold">Armor Class (AC)</Box>
                <Box>{ac}</Box>
                <Box fontWeight="bold">Fortitude</Box>
                <Box>{fort}</Box>
                <Box fontWeight="bold">Reflex</Box>
                <Box>{ref}</Box>
                <Box fontWeight="bold">Will</Box>
                <Box>{will}</Box>
            </SimpleGrid>
        </Box>
    );
}

function Skills(props) {
    const {
        abilities: {
            DEX: {modPlusHalf: dexMod} = {modPlusHalf: 0},
            INT: {modPlusHalf: intMod} = {modPlusHalf: 0},
            STR: {modPlusHalf: strMod} = {modPlusHalf: 0},
            CON: {modPlusHalf: conMod} = {modPlusHalf: 0},
            WIS: {modPlusHalf: wisMod} = {modPlusHalf: 0},
            CHA: {modPlusHalf: chaMod} = {modPlusHalf: 0},
        },
        armorPenalty,
        skillMods,
    } = props;

    function getSkillMod(name) {
        return skillMods?.[name]?.length ? skillMods[name].reduce((sum, {bonus}) => typeof bonus === 'number' ? bonus + sum : sum, 0) : 0
    }

    return (
        <>
            <Box>
                <Heading as="h2" size="lg">
                    Skills
                </Heading>
                <SimpleGrid columns={2} spacing={0}>
                    <Box color="white">Name</Box>
                    <Box fontWeight="bold">Bonus</Box>
                    <Box fontWeight="bold">Acrobatics</Box>
                    <Box>{dexMod + armorPenalty + getSkillMod('Acrobatics')}</Box>
                    <Box fontWeight="bold">Arcana</Box>
                    <Box>{intMod + getSkillMod('Arcana')}</Box>
                    <Box fontWeight="bold">Athletics</Box>
                    <Box>{strMod + armorPenalty + getSkillMod('Athletics')}</Box>
                    <Box fontWeight="bold">Bluff</Box>
                    <Box>{chaMod + getSkillMod('Bluff')}</Box>
                    <Box fontWeight="bold">Diplomacy</Box>
                    <Box>{chaMod + getSkillMod('Diplomacy')}</Box>
                    <Box fontWeight="bold">Dungeoneering</Box>
                    <Box>{wisMod + getSkillMod('Dungeoneering')}</Box>
                    <Box fontWeight="bold">Endurance</Box>
                    <Box>{conMod + armorPenalty + getSkillMod('Endurance')}</Box>
                    <Box fontWeight="bold">Heal</Box>
                    <Box>{wisMod + getSkillMod('Heal')}</Box>
                    <Box fontWeight="bold">History</Box>
                    <Box>{intMod + getSkillMod('History')}</Box>
                    <Box fontWeight="bold">Insight</Box>
                    <Box>{wisMod + getSkillMod('Insight')}</Box>
                    <Box fontWeight="bold">Intimidate</Box>
                    <Box>{chaMod + getSkillMod('Intimidate')}</Box>
                    <Box fontWeight="bold">Nature</Box>
                    <Box>{wisMod + getSkillMod('Nature')}</Box>
                    <Box fontWeight="bold">Perception</Box>
                    <Box>{wisMod + getSkillMod('Perception')}</Box>
                    <Box fontWeight="bold">Religion</Box>
                    <Box>{intMod + getSkillMod('Religion')}</Box>
                    <Box fontWeight="bold">Stealth</Box>
                    <Box>{dexMod + armorPenalty + getSkillMod('Stealth')}</Box>
                    <Box fontWeight="bold">Streetwise</Box>
                    <Box>{chaMod + getSkillMod('Streetwise')}</Box>
                    <Box fontWeight="bold">Thievery</Box>
                    <Box>{dexMod + armorPenalty + getSkillMod('Thievery')}</Box>
                </SimpleGrid>
            </Box>
            <Box>
                <Heading as="h2" size="lg">
                    Senses
                </Heading>
                <SimpleGrid columns={2} spacing={0}>
                    <Box color="white">Name</Box>
                    <Box fontWeight="bold">Bonus</Box>
                    <Box fontWeight="bold">Passive Insight</Box>
                    <Box>{10 + wisMod + getSkillMod('Insight')}</Box>
                    <Box fontWeight="bold">Passive Perception</Box>
                    <Box>{10 + wisMod + getSkillMod('Perception')}</Box>
                </SimpleGrid>
            </Box>
        </>
    );
}

function Power({power, type}) {
    const gradient =
        'linear-gradient(90deg, rgba(255,235,195,1) 0%, rgba(255,255,255,1) 100%)';
    const headingBg =
        type === 'At Will'
            ? '#5a8e61'
            : type === 'Daily'
                ? '#3f4241'
                : '#7f1c31';

    return (
        <Box>
            {(power.name || power.powerType) && (
                <Flex
                    color="white"
                    bg={headingBg}
                    justifyContent="space-between"
                >
                    {power.name && (
                        <Text p={1}>
                            <b>{power.name}</b>
                        </Text>
                    )}
                    {power.classification && (
                        <Text p={1}>{power.classification}</Text>
                    )}
                </Flex>
            )}
            {power.flavorText && (
                <Text p={1} bg={gradient}>
                    <i>{power.flavorText}</i>
                </Text>
            )}
            <Flex fontWeight="bold">
                <Text p={1}>{type}</Text>
                {power.keywords && <Text p={1}>{power.keywords}</Text>}
            </Flex>
            <Flex>
                {power.action && (
                    <Text p={1}>
                        <b>{power.action}</b>
                    </Text>
                )}
                {power.attackType && (
                    <Text p={1}>
                        <b>{power.attackType}</b>
                    </Text>
                )}
                {power.range && <Text p={1}>{power.range}</Text>}
            </Flex>
            {power.requirement && (
                <Text p={1}>
                    <b>Requirement:</b> {power.requirement}
                </Text>
            )}
            {power.trigger && (
                <Text p={1}>
                    <b>Trigger:</b> {power.trigger}
                </Text>
            )}
            {power.target && (
                <Text p={1}>
                    <b>Target:</b> {power.target}
                </Text>
            )}
            {power.attack && (
                <Text p={1}>
                    <b>Attack:</b> {power.attack}
                </Text>
            )}
            {power.hit && (
                <Text p={1} bg={gradient}>
                    <b>Hit:</b> {power.hit}
                </Text>
            )}
            {power.wildMagic && (
                <Text p={1}>
                    <b>Wild Magic:</b> {power.wildMagic}
                </Text>
            )}
            {power.secondaryTarget && (
                <Text p={1}>
                    <b>Secondary Target:</b> {power.secondaryTarget}
                </Text>
            )}
            {power.secondaryAttack && (
                <Text p={1}>
                    <b>Secondary Attack:</b> {power.secondaryAttack}
                </Text>
            )}
            {power.secondaryHit && (
                <Text p={1} bg={gradient}>
                    <b>Secondary Hit:</b> {power.secondaryHit}
                </Text>
            )}
            {power.miss && (
                <Text p={1}>
                    <b>Miss:</b> {power.miss}
                </Text>
            )}
            {power.effect && (
                <Text p={1}>
                    <b>Effect:</b> {power.effect}
                </Text>
            )}
            {power.special && (
                <Text p={1} bg={gradient}>
                    <b>Special:</b> {power.special}
                </Text>
            )}
        </Box>
    );
}

function Powers({powers}) {
    return (
        <Box>
            <Heading as="h2" size="lg">
                Powers
            </Heading>
            <Stack mb={4}>
                <Heading as="h3" size="md">
                    At-Will
                </Heading>
                <SimpleGrid
                    columns={{
                        base: 1,
                        md: 2,
                        xl: 4,
                    }}
                    spacing={2}
                >
                    {powers.atWill.map((power, i) => (
                        <Power key={i} power={power} type="At Will"/>
                    ))}
                </SimpleGrid>
                <Heading as="h3" size="md">
                    Daily
                </Heading>
                <SimpleGrid
                    columns={{
                        base: 1,
                        md: 2,
                        xl: 4,
                    }}
                    spacing={2}
                >
                    {powers.daily.map((power, i) => (
                        <Power key={i} power={power} type="Daily"/>
                    ))}
                </SimpleGrid>
                <Heading as="h3" size="md">
                    Encounter
                </Heading>
                <SimpleGrid
                    columns={{
                        base: 1,
                        md: 2,
                        xl: 4,
                    }}
                    spacing={2}
                >
                    {powers.encounter.map((power, i) => (
                        <Power key={i} power={power} type="Encounter"/>
                    ))}
                </SimpleGrid>
            </Stack>
        </Box>
    );
}

function Feat({feat}) {
    return (
        <Stack spacing={0}>
            {feat.name && (
                <Text p={1}>
                    <b>{feat.name}</b>
                </Text>
            )}
            {feat.benefit && (
                <Text p={1}>
                    <b>Benefit:</b> {feat.benefit}
                </Text>
            )}
        </Stack>
    );
}

function Feats({feats}) {
    return (
        <Box>
            <Heading as="h3" size="md">
                Feats
            </Heading>
            <Stack>
                <SimpleGrid
                    columns={{
                        base: 1,
                        md: 2,
                        xl: 4,
                    }}
                    spacing={2}
                >
                    {feats.map((feat, i) => (
                        <Feat key={i} feat={feat}/>
                    ))}
                </SimpleGrid>
            </Stack>
        </Box>
    );
}

function Speed({armorPenalty, speed: {base: baseSpeed} = {base: undefined}}) {
    const value = armorPenalty ? baseSpeed + armorPenalty : baseSpeed;
    return (
        <>
            {value && (
                <Text p={1}>
                    <b>Speed:</b> {value}
                </Text>
            )}
        </>
    );
}

function HitPoints({hitPoints}) {
    return (
        <>
            {hitPoints?.current && (
                <Text p={1}>
                    <b>HP:</b> {hitPoints.current}
                </Text>
            )}
            {hitPoints?.max && (
                <Text p={1}>
                    <b>Max HP:</b> {hitPoints.max}
                </Text>
            )}
        </>
    );
}

function HealingSurges({healingSurges, hitPoints}) {
    return (
        <>
            {hitPoints?.max && (
                <Text p={1}>
                    <b>Healing surge value:</b> {Math.floor(hitPoints.max / 4)}
                </Text>
            )}
            {healingSurges?.perDay && (
                <Text p={1}>
                    <b>Healing surges per day:</b> {healingSurges.perDay}
                </Text>
            )}
        </>
    );
}

function ActionPoints({actionPoints}) {
    return (
        <>
            {actionPoints && (
                <Text p={1}>
                    <b>Action Points:</b> {actionPoints}
                </Text>
            )}
        </>
    );
}

function Languages({languages}) {
    return (
        <>
            {languages && (
                <>
                    <Heading as="h2" size="lg">
                        Languages
                    </Heading>
                    {languages.map((language, i) => (
                        <Text key={i} p={1}>
                            {language}
                        </Text>
                    ))}
                </>
            )}
        </>
    );
}

function Items({items}) {
    return (
        <>
            {items && (
                <>
                    <Heading as="h2" size="lg">
                        Items
                    </Heading>
                    {items.map((item, i) => (
                        <Text key={i} p={1}>
                            {item}
                        </Text>
                    ))}
                </>
            )}
        </>
    );
}

function Weapons({weapons}) {
    return (
        <>
            {weapons && (
                <>
                    <Heading as="h2" size="lg">
                        Weapons
                    </Heading>
                    <SimpleGrid columns={3} spacing={0}>
                        <Box color="white" p={1}>Name</Box>
                        <Box fontWeight="bold" p={1}>Range</Box>
                        <Box fontWeight="bold" p={1}>Damage</Box>
                        {weapons.map(({name, range, damage}, i) => (
                            <React.Fragment key={i}>
                                <Box fontWeight="bold" p={1}>{name}</Box>
                                <Box p={1}>{range}</Box>
                                <Box p={1}>{damage}</Box>
                            </React.Fragment>
                        ))}
                    </SimpleGrid>
                </>
            )}
        </>
    );
}

function Armor({armor}) {
    return (
        <>
            {armor && (
                <>
                    <Heading as="h2" size="lg">
                        Armor
                    </Heading>
                    <SimpleGrid columns={4} spacing={0}>
                        <Box color="white" p={1}>Name</Box>
                        <Box fontWeight="bold" p={1}>AC</Box>
                        <Box fontWeight="bold" p={1}>Speed Penalty</Box>
                        <Box fontWeight="bold" p={1}>Light Armor?</Box>
                        <Box fontWeight="bold" p={1}>{armor.name}</Box>
                        <Box p={1}>{armor.bonus}</Box>
                        <Box p={1}>{armor.speedPenalty}</Box>
                        <Box p={1}>{armor.light ? 'Yes' : 'No'}</Box>
                    </SimpleGrid>
                </>
            )}
        </>
    );
}

function Shield({shield}) {
    return (
        <>
            {shield && (
                <>
                    <Heading as="h2" size="lg">
                        Shield
                    </Heading>
                    <SimpleGrid columns={2} spacing={0}>
                        <Box color="white" p={1}>Name</Box>
                        <Box fontWeight="bold" p={1}>Bonus</Box>
                        <Box fontWeight="bold" p={1}>{shield.name}</Box>
                        <Box p={1}>{shield.bonus}</Box>
                    </SimpleGrid>
                </>
            )}
        </>
    );
}

function Currency({currency}) {
    return (
        <>
            {currency && (
                <>
                    <Heading as="h2" size="lg">
                        Currency
                    </Heading>
                    <SimpleGrid columns={2} spacing={0}>
                        <Box color="white" p={1}>Name</Box>
                        <Box fontWeight="bold" p={1}>Amount</Box>
                        {currency.map(({name, amount}, i) => (
                            <React.Fragment key={i}>
                                <Box fontWeight="bold" p={1}>{name}</Box>
                                <Box p={1}>{amount}</Box>
                            </React.Fragment>
                        ))}
                    </SimpleGrid>
                </>
            )}
        </>
    );
}

export default function Character({character}) {
    let abilities = {};
    character?.abilityScores && Object.entries(character.abilityScores).forEach(
        (
            [name, value]: [name: string, value: number],
            i
        ) => abilities[name] = {
            value,
            mod: getAbilityModifierFromScore(value),
            modPlusHalf: getAbilityModifierPlusHalfLevelFromScore(value, character.level),
        }
    );
    const armorPenalty = character.armor?.speedPenalty ?? 0;

    return (
        <Stack spacing={4} mx="auto" my="2rem" maxW={{xl: '80%'}}>
            <BasicInfo character={character}/>
            <SimpleGrid
                columns={{
                    base: 1,
                    md: 2,
                    xl: 4,
                }}
                spacing={2}
            >
                <HitPoints hitPoints={character.hitPoints}/>
                <HealingSurges healingSurges={character.healingSurges} hitPoints={character.hitPoints}/>
                <ActionPoints actionPoints={character.actionPoints}/>
                <Speed armorPenalty={armorPenalty} speed={character.speed}/>
            </SimpleGrid>
            <AbilityScores abilities={abilities}/>
            <Defenses character={character} abilities={abilities}/>
            <Skills abilities={abilities} armorPenalty={armorPenalty} skillMods={character.skillMods}/>
            <Powers powers={character.powers}/>
            <Feats feats={character.feats}/>
            <Languages languages={character.languages}/>
            <Weapons weapons={character.weapons}/>
            <Armor armor={character.armor}/>
            <Shield shield={character.shield}/>
            <Items items={character.items}/>
            <Currency currency={character.currency}/>
        </Stack>
    );
}
