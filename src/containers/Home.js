/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import InputComponent from '../components/inputComponent'
import TextDisplay from '../components/textDisplay'
import ButtonComponent from '../components/buttonComponent'

const Home = ({ history }) => {
	//HOOKS
	const [value, setValue] = useState()
	const [value2, setValue2] = useState()
	const [log, setLog] = useState([])

	//EFFECTS

	// useEffect(() => {
	// 	const l = [...log]
	// 	l.push('This will be triggered after every render')
	// 	setLog(l)
	// })

	useEffect(() => {
		const l = [...log]
		l.push('This will be triggered only when the SECOND input changes')
		setLog(l)
	}, [value2])

	useEffect(() => {
		const l = [...log]
		l.push('This will be triggered only when the FIRST input changes')
		setLog(l)
	}, [value])

	useEffect(() => {
		const l = [...log]
		l.push('This will be triggered only once, after the first render.')
		setLog(l)
		return () => {
			alert('Clean up function')
		}
	}, [])

	return (
		<div className="grid-container">
			<div>
				<h1>First example</h1>
				<div className="container">
					<span>This are two simple inputs:</span>
					<InputComponent
						value={value}
						onChange={e => setValue(e.target.value)}
						placeholder="Insert value"
					/>
					<InputComponent
						value={value2}
						onChange={e => setValue2(e.target.value)}
						placeholder="Insert value"
					/>
				</div>
				<ButtonComponent
					type="bubble"
					label="Next example"
					handleClick={() => history.push('/person')}
				/>
			</div>
			<div>
				{log.map((item, index) => (
					<TextDisplay text={item} key={index} />
				))}
			</div>
		</div>
	)
}

export default Home
