import characters from '../../../data/dnd/characters'
import {Box, Flex, Heading, SimpleGrid, Stack, Text} from "@chakra-ui/react";

// This function gets called at build time and defines the props passed to default function
export async function getStaticProps({params}) {
    // Pass post data to the page via props
    return {
        props: {
            character: characters[params.name]
        },
    }
}

// This function gets called at build time and defines the paths
export async function getStaticPaths() {
    // Get the paths we want to pre-render based on posts
    const paths = Object.keys(characters).map((key) => ({
        params: {name: key},
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {paths, fallback: false}
}

function Power({power, type}) {
    const gradient = "linear-gradient(90deg, rgba(255,235,195,1) 0%, rgba(255,255,255,1) 100%)"
    const headingBg = type === "At Will"
        ? "#5a8e61"
        : type === "Daily"
            ? "#3f4241"
            : "#7f1c31";

    return (
        <Stack spacing={0}>
            {(power.name || power.powerType) && (
                <Flex color="white" bg={headingBg}>
                    {power.name && <Text p={1}><b>{power.name}</b></Text>}
                    {power.classification && <Text p={1}>{power.classification}</Text>}
                </Flex>
            )}
            {power.flavorText && <Text p={1} bg={gradient}><i>{power.flavorText}</i></Text>}
            <Flex fontWeight="bold">
                <Text p={1}>{type}</Text>
                {power.keywords && <Text p={1}>{power.keywords}</Text>}
            </Flex>
            <Flex>
                {power.action && <Text p={1}><b>{power.action}</b></Text>}
                {power.attackType && <Text p={1}><b>{power.attackType}</b></Text>}
                {power.range && <Text p={1}>{power.range}</Text>}
            </Flex>
            {power.trigger && <Text p={1}><b>Trigger:</b> {power.trigger}</Text>}
            {power.target && <Text p={1}><b>Target:</b> {power.target}</Text>}
            {power.attack && <Text p={1}><b>Attack:</b> {power.attack}</Text>}
            {power.hit && <Text p={1} bg={gradient}><b>Hit:</b> {power.hit}</Text>}
            {power.wildMagic && <Text p={1}><b>Wild Magic:</b> {power.wildMagic}</Text>}
            {power.secondaryTarget && <Text p={1}><b>Secondary Target:</b> {power.secondaryTarget}</Text>}
            {power.secondaryAttack && <Text p={1}><b>Secondary Attack:</b> {power.secondaryAttack}</Text>}
            {power.secondaryHit && <Text p={1} bg={gradient}><b>Secondary Hit:</b> {power.secondaryHit}</Text>}
            {power.miss && <Text p={1}><b>Miss:</b> {power.miss}</Text>}
            {power.effect && <Text p={1}><b>Effect:</b> {power.effect}</Text>}
            {power.special && <Text p={1} bg={gradient}><b>Special:</b> {power.special}</Text>}
        </Stack>
    );
}

function Powers({powers}) {
    return (<Box>
        <Heading as="h3">Powers</Heading>
        <Stack mb={4}>
            <Heading size="h3">At-Will</Heading>
            <SimpleGrid
                columns={{
                    base: 1,
                    md: 2,
                    xl: 4
                }}
                spacing={2}
            >
                {powers.atWill.map((power) => <Power power={power} type="At Will"/>)}
            </SimpleGrid>
            <Heading size="h3">Daily</Heading>
            <SimpleGrid
                columns={{
                    base: 1,
                    md: 2,
                    xl: 4
                }}
                spacing={2}
            >
                {powers.daily.map((power) => <Power power={power} type="Daily"/>)}
            </SimpleGrid>
            <Heading size="h3">Encounter</Heading>
            <SimpleGrid
                columns={{
                    base: 1,
                    md: 2,
                    xl: 4
                }}
                spacing={2}
            >
                {powers.encounter.map((power) => <Power power={power} type="Encounter"/>)}
            </SimpleGrid>
        </Stack>
    </Box>);
}

function Feat({feat}) {
    return (
        <Stack spacing={0}>
            {feat.name && <Text p={1}><b>{feat.name}</b></Text>}
            {feat.benefit && <Text p={1}><b>Benefit:</b> {feat.benefit}</Text>}
        </Stack>
    );
}

function Feats({feats}) {
    return (<Box>
        <Heading as="h3">Feats</Heading>
        <Stack>
            <SimpleGrid
                columns={{
                    base: 1,
                    md: 2,
                    xl: 4
                }}
                spacing={2}
            >
                {feats.map((feat) => <Feat feat={feat}/>)}
            </SimpleGrid>
        </Stack>
    </Box>);
}

export default function Character({character}) {
    return (
        <Stack spacing={4}>
            <Stack spacing={0}>
                <Heading as="h1">{character.name}</Heading>
                {character.race && <Text p={1}><b>Race:</b> {character.race}</Text>}
                {character.class && <Text p={1}><b>Class:</b> {character.class}</Text>}
                {character.alignment && <Text p={1}><b>Alignment:</b> {character.alignment}</Text>}
                {character.deity && <Text p={1}><b>Deity:</b> {character.deity}</Text>}
                {character.level && <Text p={1}><b>Level:</b> {character.level}</Text>}
            </Stack>
            <Powers powers={character.powers}/>
            <Feats feats={character.feats}/>
        </Stack>
    );
}
