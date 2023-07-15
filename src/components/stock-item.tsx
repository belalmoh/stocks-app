import { View, Text, VStack, Flex } from "native-base";
import { Pressable } from "react-native";
import { SCREENS } from "../config/constants";

const StockItem = ({navigation, ...item}) => {
    return (
        <Pressable onPress={() => {
            navigation.navigate(SCREENS.DETAILS.STOCK.name, {...item});
        }}>
            <Flex justifyContent={"space-between"} direction="row">
                <VStack>
                    <Text bold>{item.symbol}</Text>
                    <Text>{item.name}</Text>
                </VStack>
                <VStack>
                    <Text bold>${item.past_1_day.close_price}</Text>
                    <Text>{Math.floor((item.past_1_day.last_trade_price/item.past_1_day.close_price) * 100) / 100}%</Text>
                </VStack>
            </Flex>
        </Pressable>
    )
};

export default StockItem;