import React from 'react';
import './Ticker.css';

const stocks = [
  { symbol: 'AAPL', price: 192.3, change: 0.45 },
  { symbol: 'MSFT', price: 389.1, change: -0.12 },
  { symbol: 'TSLA', price: 172.5, change: 0.85 },
  { symbol: 'NVDA', price: 867.4, change: -1.4 },
  { symbol: 'GOOGL', price: 139.9, change: 0.18 },
];

const StockTicker = () => (
  <div className="stock-ticker">
    <div className="ticker-track">
      {stocks.map((stock, i) => (
        <span key={i} className={`ticker-item ${stock.change >= 0 ? 'green' : 'red'}`}>
          {stock.symbol}: ${stock.price} {stock.change >= 0 ? '+' : ''}{stock.change}%
        </span>
      ))}
    </div>
  </div>
);

export default StockTicker;
