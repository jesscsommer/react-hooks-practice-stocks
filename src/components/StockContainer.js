import React, { useState, useEffect } from "react";
import Stock from "./Stock";

const StockContainer = ({ addToPortfolio }) => {
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
  
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock => <Stock stock={stock} addToPortfolio={addToPortfolio} key={stock.id} />)}
    </div>
  );
}

export default StockContainer;
