import { FlatList, Text } from "native-base";
import { Pressable } from "react-native";
import { useContext, useEffect } from "react";

import { AppContext, Actions } from "../context/app-context";

const MarketsList = () => {
    const {state, dispatch} = useContext(AppContext);
    const selectMarket = (market: any) => {
        return () => {
            dispatch({type: Actions.SELECT_MARKET, payload: {selectedMarket: market}})
        }
    }

    // return (
    //     <Text>Hello world</Text>
    // );

    return (
        <FlatList 
            data={state.markets}
            renderItem={({item}) => (
                <Pressable onPress={selectMarket(item.market)}>
                    <Text marginX={3} color={item.market == state.selectedMarket ? 'white': 'rgb(140, 160, 240)'}>{item.market}</Text>
                </Pressable>
            )}
            keyExtractor={item => item.market.toString()}
            horizontal={true}
            contentContainerStyle={{
                marginBottom: 20
            }}
        />
    );
};

export default MarketsList;