import { View, Text, VStack, Flex, Button } from "native-base";

const StockDetails = ({navigation, ...props}) => {
    const {close_price, last_trade_price, outstanding_shares, market_value} = props.route.params.past_1_day;
    return (
        <VStack height={'full'}>
            <Flex justifyContent={"space-between"} direction="row" margin={6}>
                <VStack space={6}>
                    <Text>Close price</Text>
                    <Text>Last trade price</Text>
                    <Text>Outstanding</Text>
                    <Text>Market value</Text>
                </VStack>
                <VStack space={6}>
                    <Text bold>{close_price}</Text>
                    <Text bold>{last_trade_price}</Text>
                    <Text bold>{outstanding_shares}</Text>
                    <Text bold>${market_value}</Text>
                </VStack>
            </Flex>
            <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 35, alignItems: 'center'}}>
                <Button width={'90%'} backgroundColor={'black'}>Add to portfolio</Button>
            </View>
        </VStack>
    )
};

export default StockDetails;