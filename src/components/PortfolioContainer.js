import React from "react";
import Stock from "./Stock";

const PortfolioContainer = ({ portfolio }) => {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolio.map(portfolioItem => <Stock stock={portfolioItem} key={portfolioItem.id} /> )
      }
    </div>
  );
}

export default PortfolioContainer;
