import React from "react";

const Stock = ({ stock, addToPortfolio }) => {
  const {name, price} = stock

  return (
    <div>
      <div className="card" onClick={() => addToPortfolio(stock)}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
