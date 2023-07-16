import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/app-context"
import { getFilteredStocksPerMarket } from "../services/stocks-service";

const useFilteredStocks = () => {
    const [stocks, setStocks] = useState([]);
    const {state, dispatch} = useContext(AppContext);

    useEffect(() => {
        let filteredStocks = getFilteredStocksPerMarket(state.markets, state.selectedMarket, state.searchKeyword);
        setStocks(filteredStocks);
    }, [state.searchKeyword, state.selectedMarket]);

    return {stocks};
}

export default useFilteredStocks;