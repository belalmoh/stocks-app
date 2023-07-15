import { useContext, useEffect } from "react"
import { FlatList, Text, View } from "native-base";

import { AppContext } from "../context/app-context";

import StockItem from "./stock-item";

const Stocks = ({navigation}) => {
    const {state, dispatch} = useContext(AppContext);
    
    return (
        <FlatList 
            data={state.markets.filter(item => item.market == state.selectedMarket)[0].symbols}
            keyExtractor={item => item.symbol.toString()}
            ItemSeparatorComponent={() => <View style={{height: 20}} />}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
                return (
                    <StockItem {...item} navigation={navigation}/>
                )
            }}
        />
    )
}

export default Stocks;