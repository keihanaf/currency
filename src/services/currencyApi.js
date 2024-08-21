

const BASE_URL = "https://api.exchangerate-api.com"

const getCurrency = (fromCurrency) => {
    return `${BASE_URL}/v4/latest/${fromCurrency}`
}

export {getCurrency}