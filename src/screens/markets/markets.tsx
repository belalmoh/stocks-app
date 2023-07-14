import { Box, Container, Heading, VStack } from "native-base";
import { Text } from "native-base";

const Markets = () => {
    return (
        <VStack space={4}>
            <Box bg={["blue.500", "blue.700"]} paddingX={'6'} paddingY={'10'}>
            <Heading color={'white'}>
                Markets
            </Heading>

            </Box>
        </VStack>
    );
};

export default Markets;