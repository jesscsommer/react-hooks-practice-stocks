import React, { useState } from "react";
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

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer addToPortfolio={addToPortfolio} removeFromPortfolio={removeFromPortfolio} portfolio={portfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} addToPortfolio={addToPortfolio} removeFromPortfolio={removeFromPortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
