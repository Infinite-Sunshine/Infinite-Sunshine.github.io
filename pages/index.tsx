import {Center, Img} from '@chakra-ui/react';

export default function Home() {
    return (
        <Center position="fixed" top={0} right={0} bottom={0} left={0}>
            <Img
                objectFit="contain"
                src="/sunshine.webp"
                alt="Sun Mandala"
                h="100%"
                w="100%"
            />
        </Center>
    );
}
