import styles from "./Amount.module.css";

function Amount({ amount, setAmount }) {

    const handleChange = (e) => {
        const value = e.target.value;
        if (value === "" || parseFloat(value) >= 0) {
            setAmount(value);
        }
    };

    return (
        <div className={styles.form}>
            <label htmlFor="amount">Enter the desired value:</label>
            <input
                type="number"
                value={amount}
                onChange={handleChange}
                min="0"
                step="0.01"
            />
        </div>
    );
}

export default Amount;
