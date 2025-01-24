import React from 'react';

const StockTable = ({ stocks }) => {
  return (
    <table className="stock-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Quantity</th>
          <th>Buy Price</th>
          <th>Current Price</th>
        </tr>
      </thead>
      <tbody>
        {stocks.map((stock) => (
          <tr key={stock.id}>
            <td>{stock.name}</td>
            <td>{stock.ticker}</td>
            <td>{stock.quantity}</td>
            <td>${stock.buyPrice.toFixed(2)}</td>
            <td>${stock.currentPrice.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockTable;
