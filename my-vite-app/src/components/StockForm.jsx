import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StockForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    ticker: '',
    quantity: '',
    buyPrice: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with your backend API URL
    await axios.post('http://localhost:8080/api/stocks', formData);
    navigate('/');
  };

  return (
    <form className="stock-form" onSubmit={handleSubmit}>
      <h2>Add/Edit Stock</h2>
      <label>
        Stock Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Ticker:
        <input type="text" name="ticker" value={formData.ticker} onChange={handleChange} required />
      </label>
      <label>
        Quantity:
        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
      </label>
      <label>
        Buy Price:
        <input type="number" name="buyPrice" value={formData.buyPrice} onChange={handleChange} required />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default StockForm;
