import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockTable from './StockTable';

const Dashboard = () => {
  const [stocks, setStocks] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const fetchStocks = async () => {
      // Replace with your backend API URL
      const response = await axios.get('http://localhost:8080/api/stocks');
      setStocks(response.data);
      calculateTotalValue(response.data);
    };

    fetchStocks();
  }, []);

  const calculateTotalValue = (stocks) => {
    const value = stocks.reduce((acc, stock) => acc + stock.quantity * stock.currentPrice, 0);
    setTotalValue(value);
  };

  return (
    <div className="dashboard">
      <h2>Portfolio Metrics</h2>
      <p>Total Portfolio Value: ${totalValue.toFixed(2)}</p>
      <StockTable stocks={stocks} />
    </div>
  );
};

export default Dashboard;
