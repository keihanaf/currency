import axios from "axios";
import {useEffect, useState} from "react";
import {getCurrency} from "../../services/currencyApi.js";
import Amount from "../modules/Amount.jsx";
import Converter from "../modules/Converter.jsx";
import Result from "../modules/Result.jsx";
import styles from "./CurrencyConverter.module.css";


function CurrencyConverter() {
    const [rates,setRates] = useState({});
    const [fromCurrency,setFromCurrency] = useState("USD");
    const [toCurrency,setToCurrency] = useState("IRR")
    const [amount,setAmount] = useState(1)
    const [convertedAmount,setConvertedAmount] = useState(null)


    useEffect(() => {
        const fetchResult = async () => {
            try {
                const response = await axios.get(getCurrency(fromCurrency))
                setRates(response.data.rates);
            } catch (error){
                console.log("Error fetching the exchange currency data",error);
            }
        }
        fetchResult()
    }, [fromCurrency]);

    useEffect(() => {
        if (rates[toCurrency]) {
            const rate = rates[toCurrency];
            setConvertedAmount((amount * rate).toFixed(2));
        }
    }, [amount, toCurrency, rates]);

    const handleSwap = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    return (
        <div className={styles.container}>
            <Amount amount={amount} setAmount={setAmount}/>
            <Converter
                fromCurrency={fromCurrency}
                toCurrency={toCurrency}
                setToCurrency={setToCurrency}
                setFromCurrency={setFromCurrency}
                handleSwap={handleSwap}
            />
            <Result
                convertedAmount={convertedAmount}
                amount={amount}
                fromCurrency={fromCurrency}
                toCurrency={toCurrency}
            />
        </div>
    )
}

export default CurrencyConverter