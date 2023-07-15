import { Box, Heading, VStack, Icon, Flex, View } from "native-base";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Search from "../../components/search";
import MarketsList from "../../components/markets-list";
import Stocks from "../../components/stocks";

import StackAppRoutes from '../../routes/stacks';
import { useEffect } from "react";
/**
 * TODO:
 * getMarkets
 * getStocks per market
 * Highlight selected market
 */



const Markets = ({navigation}) => {
    
    return (
        <View>
            <VStack bg={'rgb(53, 82, 236)'} paddingX={'6'} paddingY={'10'}>
                <Box>
                    <Flex flexDirection={"row"} justifyContent={"space-between"}>
                        <Icon as={<Ionicons name="ios-menu-outline" />} size={5} color={'white'} />
                        <Icon as={<Ionicons name="ios-notifications-outline" />} size={5} color={'white'} />
                    </Flex>
                </Box>
                <Box>
                    <Heading color={'white'}>
                        Markets
                    </Heading>
                    
                    <Search />
                    <MarketsList />
                </Box>
            </VStack>

            <VStack height={'65%'} paddingX={'6'} paddingTop={'6'}>
                <Stocks navigation={navigation} />
            </VStack>
        </View>
    );
};

export default Markets;