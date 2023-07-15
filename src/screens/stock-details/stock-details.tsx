import { View, Text } from "native-base";

const StockDetails = ({navigation, ...props}) => {
    console.log(props.route.params);
    return (
        <View>
            <Text>This is a stock details</Text>
        </View>
    )
};

export default StockDetails;