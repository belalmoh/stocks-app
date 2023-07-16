import { useContext, useEffect, useState } from "react"
import { FlatList, Text, View, VStack, Button } from "native-base";

import { AppContext, Actions } from "../context/app-context";

import StockItem from "./stock-item";
import useFilteredStocks from "../hooks/useFilteredStocks";

const Stocks = ({navigation}) => {
    
    const {state, dispatch} = useContext(AppContext);
    const {stocks} = useFilteredStocks();

    const handleClearSearch = () => {
        dispatch({type: Actions.SET_SEARCH_KEYWORD, payload: {searchKeyword: ''}});
    }

    if (stocks.length) {
        return (
            <FlatList 
                data={stocks}
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

    return (
        <View>
            <VStack space={4} alignItems={"center"}>
                <Text>No search results found</Text>
                <Button size="lg" backgroundColor={'rgb(53, 82, 236)'} onPress={handleClearSearch}>
                    Clear search
                </Button>
            </VStack>
        </View>
    )
}

export default Stocks;