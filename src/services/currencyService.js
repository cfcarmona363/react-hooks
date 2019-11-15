import axios from 'axios'

const getCurrencyRates = async param => {
	return await axios.get(`https://api.exchangerate-api.com/v4/latest/${param}`)
}

export default getCurrencyRates
