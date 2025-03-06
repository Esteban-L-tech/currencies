import React, { useEffect, useState } from "react";
import axios from 'axios';

function App(){
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [currencies, setCurrencies] = useState([]);
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(100);
  const [convertedAmount, setConvertedAmount] = useState(null);

useEffect(() => {
  const fetchExchangeRate = async () => {
    const reponse = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
    setExchangeRate(reponse.data.rates);
    setCurrencies(Object.keys(reponse.data.rates));
  };
  fetchExchangeRate();
},[]);

useEffect(() => {
  if(exchangeRate){
    const rateForm = exchangeRate[fromCurrency];
    const rateTo = exchangeRate[toCurrency];

    setConvertedAmount((amount*rateTo)/rateForm);
  }
},[amount, fromCurrency, toCurrency, exchangeRate]);

  return (
    <div>
      <h1>Convertisseur de devise</h1>

      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <input
       type="number"
       value={amount}
       onChange = {(e) => setAmount(e.target.value)}
       placeholder="Veuillez écrire le montant à convertir"
      />

      {convertedAmount !== null ? (
        <div>
        <p>
          {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
        </p>
      </div>
      ):(
        <p>
          Données en cours de chargement...
        </p>
      )}


    </div>
  );
}

export default App;