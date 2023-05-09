import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

const MainContainer = () => {
  const [portfolio, setPortfolio] = useState([])

  const addToPortfolio = (newStock) => {
    setPortfolio(portfolio => [newStock, ...portfolio])
  }
  const removeFromPortfolio = (soldStock) => {
    setPortfolio(portfolio => portfolio.filter(portfolioItem => portfolioItem !== soldStock))
  }

  const [stocks, setStocks] = useState([])

  useEffect(() => {
      fetch('http://localhost:3001/stocks')
      .then(res => {
        if (res.status !== 200) {
          console.error(res)
        }
        else {
          return res.json()
        }
      })
      .then(data => setStocks(data))
      .catch(error => console.error(error))
  }, [])
  
  const [sortBy, setSortBy] = useState('')
  const [stockType, setStockType] = useState('')

  const changeSort = (newSortField) => {
    setSortBy(newSortField)
  }
  const changeType = (newType) => {
    setStockType(newType)
  }

  const filteredStocks = stocks.filter(stock => stockType === '' || stock.type === stockType)
  const sortedStocks = filteredStocks.sort((s1, s2) => {
    if (sortBy === 'Alphabetically') {
      const name1 = s1.name.toLowerCase()
      const name2 = s2.name.toLowerCase()

      if (name1 > name2) {
        return 1
      }
      if (name1 < name2) {
        return -1
      }
      return 0 

    } else {
      return s2.price - s1.price 
    }
  })

  return (
    <div>
      <SearchBar 
      changeSort={changeSort}
      changeType={changeType}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
          stocks={sortedStocks}
          addToPortfolio={addToPortfolio} 
          removeFromPortfolio={removeFromPortfolio} 
          portfolio={portfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer 
          portfolio={portfolio} 
          addToPortfolio={addToPortfolio} 
          removeFromPortfolio={removeFromPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
