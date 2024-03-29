/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import InputComponent from '../components/inputComponent'
import TextDisplay from '../components/textDisplay'
import ButtonComponent from '../components/buttonComponent'

const FirstExample = ({ history }) => {
	//HOOKS
	const [value, setValue] = useState()
	const [value2, setValue2] = useState()
	const [counter, setCounter] = useState(0)
	const [log, setLog] = useState([])

	//EFFECTS

	useEffect(() => {
		log.push(`This will be triggered after every render. Counter: ${counter}`)
		setLog(log)
	})

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
					<div className="container">
						<ButtonComponent
							type="jelly"
							label="Counter +1"
							handleClick={() => setCounter(counter + 1)}
						/>

						<TextDisplay text={counter} key={counter} />
					</div>
				</div>
				<div className="container">
					<ButtonComponent
						type="bubble"
						label="Next example"
						handleClick={() => history.push('/SecondExample')}
					/>
				</div>
			</div>
			<div>
				{log.map((item, index) => (
					<TextDisplay text={item} key={index} />
				))}
			</div>
		</div>
	)
}

export default FirstExample
