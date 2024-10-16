import React, { useCallback, useEffect, useState } from "react"
import { Block } from "./Block"
import "./index.scss"

function App() {
  const [fromCurrency, setFromCurrency] = useState("RUB")
  const [toCurrency, setToCurrency] = useState("USD")

  const [fromValue, setFromValue] = useState("")
  const [toValue, setToValue] = useState("")

  const [rates, setRates] = useState({})

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/b25ffe903dd018d2fc1a0c73/latest/USD"
    )
      .then((response) => response.json())
      .then((data) => setRates(data.conversion_rates))
      .catch((error) => console.error(error))
  }, [])

  
  const onChangeFromValue = useCallback((e) => {
    setFromValue(e);
    const price = e / rates[fromCurrency];
    const result = price * rates[toCurrency];
    setToValue(result);
  }, [rates, fromCurrency, toCurrency]);

  const onChangeToValue = useCallback((e) => {
    setToValue(e);
    const price = e / rates[toCurrency];
    const result = price * rates[fromCurrency];
    setFromValue(result);
  }, [rates, fromCurrency, toCurrency]);
  
  useEffect(() => {
    onChangeFromValue(fromValue)
  },[fromCurrency, fromValue, onChangeFromValue])
  useEffect(() => {
    onChangeToValue(toValue)
  },[toCurrency, toValue, onChangeToValue])

  return (
    <div className='App'>
      <Block
        value={fromValue}
        currency={fromCurrency}
        onChangeValue={onChangeFromValue}
        onChangeCurrency={setFromCurrency}
      />
      <Block
        value={toValue}
        onChangeValue={onChangeToValue}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
      />
    </div>
  )
}

export default App
