import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

const MainContainer = () => {
  const [portfolio, setPortfolio] = useState([])
  const addToPortfolio = (newStock) => {
    setPortfolio(portfolio => [newStock, ...portfolio])
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer addToPortfolio={addToPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
