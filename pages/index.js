import {Button, Flex, Heading, useColorMode} from '@chakra-ui/react';

export default function Home() {
    const {toggleColorMode} = useColorMode();

    return (
        <Flex justifyContent="center">
            <Flex direction="column">
                <Heading mb={6}>The Future Home of Infinite Sunshine</Heading>
                <Button onClick={toggleColorMode}>Change Theme</Button>
            </Flex>
        </Flex>
    );
}
