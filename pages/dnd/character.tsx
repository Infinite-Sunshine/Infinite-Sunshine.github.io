import characters from '../../data/dnd/characters'
import {Flex, Heading, SimpleGrid, Stack, Text} from "@chakra-ui/react";

export async function getStaticProps(context) {
    return {
        props: {
            character: characters.Omerius //TODO: make this dynamic
        },
    }
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
            {power.miss && <Text p={1}><b>Miss:</b> {power.miss}</Text>}
            {power.hit && <Text p={1} bg={gradient}><b>Hit:</b> {power.hit}</Text>}
            {power.effect && <Text p={1}><b>Effect:</b> {power.effect}</Text>}
            {power.special && <Text p={1} bg={gradient}><b>Special:</b> {power.special}</Text>}
        </Stack>
    );
}

function Powers({powers}) {
    return (<>
        <Heading size="h2">Powers</Heading>
        <Stack>
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
    </>);
}

export default function Character({character}) {
    return (
        <Stack>
            <Powers powers={character.powers}/>
        </Stack>
    );
}
