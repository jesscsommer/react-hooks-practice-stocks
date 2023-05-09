import React from "react";
import Stock from "./Stock";

const PortfolioContainer = ({ portfolio, addToPortfolio, removeFromPortfolio, }) => {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolio.map(portfolioItem => <Stock 
          stock={portfolioItem} 
          addToPortfolio={addToPortfolio} 
          removeFromPortfolio={removeFromPortfolio}
          portfolio={portfolio}
          key={portfolioItem.id} /> )
      }
    </div>
  );
}

export default PortfolioContainer;
