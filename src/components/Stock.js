import React from "react";

const Stock = ({ stock, addToPortfolio, removeFromPortfolio, portfolio }) => {
  const {name, price} = stock

  const handleClick = () => {
    if (portfolio.includes(stock)) {
      removeFromPortfolio(stock)
    } else {
      addToPortfolio(stock)
    }
  }

  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
