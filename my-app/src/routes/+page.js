export const load = async ({ params, url, fetch }) => {
    const API_KEY = 'cur_live_rIYexMJUYgNCISfdLuCm4vj5AhQcdd2SzRXcy6sY'
    const BASE_URL = 'https://api.currencyapi.com/v3/latest'
    const targetCurrency = url.searchParams.get('targetCurrency')
    const baseCurrency = url.searchParams.get('baseCurrency')


    const URL = `${BASE_URL}?apikey=${API_KEY}&currencies=${targetCurrency}&base_currency=${baseCurrency}`
    try {
        const res = await fetch (URL)
        if (res.ok) {
            const exchangeData = await res.json()
            return { exchangeData, error: "", baseCurrency, targetCurrency}
        } else if (res.status === 404) {
            return {
                error: `'${city}' could not be found :/`
            } 
        } else {
            console.log(err)
            return { error: "Internal server error" }
        }
    } catch (err) {
        console.log(err)
        return { error: "500 Internal server error" }
    }
}