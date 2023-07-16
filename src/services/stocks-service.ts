/**
 * 
 * @param markets -> all markets (data)
 * @param selectedMarket -> selectedMarket (selected from the list in UI)
 * @param searchKeyword -> entered search keyword in UI
 * @returns filtered stocks per selected market per search keyword
 */
const getFilteredStocksPerMarket = (markets, selectedMarket, searchKeyword) => {
    let stocks = markets.filter(item => item.market == selectedMarket)[0].symbols;
    if (searchKeyword.length)
        return stocks.filter(({symbol, name}) => symbol.toLowerCase().includes(searchKeyword.toLowerCase()) || name.toLowerCase().includes(searchKeyword.toLowerCase()) )
    return stocks;
}

export { getFilteredStocksPerMarket };