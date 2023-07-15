import React from "react";
import { createContext, useReducer, useEffect } from "react";
import {data} from './data.json';


const initialState = {
    selectedMarket: data[0].market,
    markets: [
        ...data
    ],
    portfolio: []
};

const AppContext = createContext<{state: any, dispatch: React.Dispatch<any>}>({state: initialState, dispatch: () => null});

const Actions = {
    LOAD_DATA: 'LOAD_DATA',

    SELECT_MARKET: 'SELECT_MARKET'
};

const AppReducer = (state: any, action: any) => {
    const {type, payload} = action;
    switch (type) {
        case Actions.SELECT_MARKET:
            return {...state, selectedMarket: payload.selectedMarket}
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