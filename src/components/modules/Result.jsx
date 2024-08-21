import styles from './Result.module.css';

function Result ({convertedAmount,amount,fromCurrency,toCurrency}) {
    return (
        <div className={styles.result}>
            {convertedAmount && (
                <h3>
                    {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
                </h3>
            )}
        </div>
    )
}
export default Result