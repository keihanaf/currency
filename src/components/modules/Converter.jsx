import styles from "./Converter.module.css";

function Converter({fromCurrency, toCurrency,setFromCurrency, setToCurrency,handleSwap}) {

    const currencies = ["USD", "EUR", "TRY", "AED", "IRR"];
    const flags = {
        USD: "🇺🇸",
        EUR: "🇪🇺",
        TRY: "🇹🇷",
        AED: "🇦🇪",
        IRR: "🇮🇷",
    };

    return (
        <>
            <div className={styles.selection}>
                <div className={styles.select}>
                    <span>To</span>
                    <select
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.target.value)}
                    >
                        {currencies.map((currency) => (
                            <option key={currency} value={currency}>
                                {flags[currency]} {currency}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles.select}>
                    <span>From</span>
                    <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                    >
                        {currencies.map((currency) => (
                            <option key={currency} value={currency}>
                                {flags[currency]} {currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <button onClick={handleSwap}>Swap</button>
        </>
)
}
export default Converter;