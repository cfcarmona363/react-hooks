/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import ButtonComponent from '../components/buttonComponent'
import Loader from '../components/loader'
import useLoader from '../hooks/useLoader'
import useRequest from '../hooks/useRequest'
import getCurrencyRates from '../services/currencyService'
import TextDisplay from '../components/textDisplay'

const CustomHooks = () => {
	//CUSTOM HOOK
	const [loading, setTimer] = useLoader()

	const [response, isLoading, setParam] = useRequest(getCurrencyRates)

	return (
		<div className="grid-container">
			<div className="container">
				<h1>Simple custom hook</h1>
				<div className="buttons-group">
					<ButtonComponent
						label="3s"
						handleClick={() => setTimer(3000)}
						type="jelly"
					/>
					<ButtonComponent
						label="5s"
						handleClick={() => setTimer(5000)}
						type="jelly"
					/>
					<ButtonComponent
						label="7s"
						handleClick={() => setTimer(7000)}
						type="jelly"
					/>
				</div>
				<div className="container">{loading && <Loader />}</div>
			</div>
			<div className="container">
				<h1>Custom hook for requests</h1>
				<div className="container">
					<h3>Brazil Real</h3>
					<ButtonComponent
						label="BRL"
						handleClick={() => setParam('BRL')}
						type="jelly"
					/>
				</div>
				<div className="container">
					<h3>United States Dollar</h3>
					<ButtonComponent
						label="USD"
						handleClick={() => setParam('USD')}
						type="jelly"
					/>
				</div>
				<div className="container">
					<h3>Euro</h3>
					<ButtonComponent
						label="EUR"
						handleClick={() => setParam('EUR')}
						type="jelly"
					/>
				</div>
				<div className="container">
					<h3>United Kingdom Pound</h3>
					<ButtonComponent
						label="GBP"
						handleClick={() => setParam('GBP')}
						type="jelly"
					/>
				</div>
			</div>
			<div className="container">
				{isLoading ? (
					<Loader />
				) : (
					response && (
						<TextDisplay
							text={`1 ${response.base} = ${response.rates['ARS']} ARS`}
						/>
					)
				)}
			</div>
		</div>
	)
}

export default CustomHooks
