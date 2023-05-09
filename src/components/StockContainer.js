import React, { useState, useEffect } from "react";
import Stock from "./Stock";

const StockContainer = ({ stocks, addToPortfolio, removeFromPortfolio, portfolio }) => {

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => <Stock 
      stock={stock} 
      addToPortfolio={addToPortfolio} 
      removeFromPortfolio={removeFromPortfolio}
      portfolio={portfolio}
      key={stock.id} />)}
    </div>
  );
}

export default StockContainer;
