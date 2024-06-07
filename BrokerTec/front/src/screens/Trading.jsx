import React, { useState } from 'react';

function TradingScreen() {
  const [balance, setBalance] = useState(10000); // Balance inicial del usuario
  const [stocks, setStocks] = useState([]); // Lista de acciones del usuario

  const buyStock = (symbol, price, quantity) => {
    // Lógica para comprar una acción
    // Actualiza el balance y la lista de acciones del usuario
  };

  const sellStock = (symbol, price, quantity) => {
    // Lógica para vender una acción
    // Actualiza el balance y la lista de acciones del usuario
  };

  return (
    <div className="trading-screen">
      <h2>Pantalla de trading</h2>
      <p><strong>Balance:</strong> ${balance}</p>
      <h3>Mis acciones:</h3>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.symbol}>
            {stock.symbol} - ${stock.price} - Cantidad: {stock.quantity}
            <button onClick={() => sellStock(stock.symbol, stock.price, stock.quantity)}>
              Vender
            </button>
          </li>
        ))}
      </ul>
      <h3>Comprar acciones:</h3>
      <form>
        <label htmlFor="symbol">Símbolo:</label>
        <input type="text" id="symbol" />
        <label htmlFor="price">Precio:</label>
        <input type="number" id="price" />
        <label htmlFor="quantity">Cantidad:</label>
        <input type="number" id="quantity" />
        <button onClick={() => buyStock(document.getElementById('symbol').value, document.getElementById('price').value, document.getElementById('quantity').value)}>
          Comprar
        </button>
      </form>
    </div>
  );
}

export default TradingScreen;