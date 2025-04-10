import React, { useEffect, useState } from 'react';
import './CryptoTicker.css';

const CryptoTicker = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch('https://news-api-flask-tmit.onrender.com/api/crypto-ticker')
      .then(res => res.json())
      .then(data => setPrices(data))
      .catch(console.error);
  }, []);

  return (
    <div className="crypto-ticker">
      <div className="ticker-track">
        {prices.map((coin, i) => {
          const change = coin.change_1h?.toFixed(2);
          const color = change > 0 ? 'lime' : 'red';

          return (
            <div className="ticker-item" key={i}>
              {coin.symbol}: ${coin.price.toLocaleString()}{" "}
              <span style={{ color }}>{change}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CryptoTicker;
