import React from "react";
import { createContext, useReducer, useEffect } from "react";
import {data} from './data.json';


const initialState = {
    searchKeyword: '',
    selectedMarket: data[0].market,
    markets: [
        ...data
    ],
    portfolio: []
};

const AppContext = createContext<{state: any, dispatch: React.Dispatch<any>}>({state: initialState, dispatch: () => null});

const Actions = {
    SELECT_MARKET: 'SELECT_MARKET',
    SET_SEARCH_KEYWORD: 'SET_SEARCH_KEYWORD' 
};

const AppReducer = (state: any, action: any) => {
    const {type, payload} = action;
    switch (type) {
        case Actions.SELECT_MARKET:
            return {...state, selectedMarket: payload.selectedMarket}

        case Actions.SET_SEARCH_KEYWORD:
            return {...state, searchKeyword: payload.searchKeyword}
        default:
            return {...state}
    }
}


const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContextProvider, AppContext, Actions};