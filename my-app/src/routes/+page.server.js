import { SECRET_API_KEY } from '$env/static/private'

export const load = async ({ url, fetch }) => {
	const BASE_URL = 'https://api.currencyapi.com/v3/latest';

	const targetCurrency = url.searchParams.get('targetCurrency') ?? 'USD'
	const baseCurrency = url.searchParams.get('baseCurrency') ?? 'SGD'

	const URL = `${BASE_URL}?apikey=${SECRET_API_KEY}&currencies=${targetCurrency}&base_currency=${baseCurrency}`;
	try {
		const res = await fetch(URL);
		if (res.ok) {
			const exchangeData = await res.json();
			return { exchangeData, error: '', baseCurrency, targetCurrency };
		} else if (res.status === 404) {
			return {
				error: `could not be found :/`
			};
		} else {
			console.log(err);
			return { error: 'Internal server error' };
		}
	} catch (err) {
		console.log(err);
		return { error: '500 Internal server error bruh' };
	}
};
