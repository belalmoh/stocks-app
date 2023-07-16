import { View } from "react-native"
import { Text } from "native-base";

const StockTitle = ({...props}) => {
    return (
        <View style={{flex: 1}}>
            <Text bold>{props.params.name}</Text>
            <Text>{props.params.symbol}</Text>
        </View>
    )
}

export default StockTitle;