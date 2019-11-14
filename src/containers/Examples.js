/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import ButtonComponent from '../components/buttonComponent'
import Loader from '../components/loader'
import useLoader from '../hooks/useLoader'
import { useDispatch, useSelector } from 'react-redux'
import Actions from '../actions'

const Examples = ({ history }) => {
	//CUSTOM HOOK
	const [loading, setTimer] = useLoader()

	//REDUX HOOKS
	const isLoading = useSelector(state => state.IsLoading)
	const dispatch = useDispatch()

	//EFFECT
	useEffect(() => {
		return () => {
			dispatch(
				Actions.Person.Person({
					name: 'Principe',
					lastName: 'Vegetta',
					age: 35
				})
			)
		}
	}, [])

	return (
		<div>
			<div className="container">
				<span>Effect with Cleanup (componentWillUnmount):</span>
				<div className="buttons-group">
					<ButtonComponent
						label="BYE"
						handleClick={() => history.push('/bye')}
						type="bubble"
					/>
				</div>
			</div>

			<div className="container">
				<span>Custom hook:</span>
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
			</div>
			<div className="container">{loading && <Loader />}</div>
			<div className="container">
				<span>Custom hook:</span>
				<div className="buttons-group">
					<ButtonComponent
						label="Start loader"
						handleClick={() => dispatch(Actions.IsLoading.StartLoading())}
						type="jelly"
					/>
					<ButtonComponent
						label="Stop loader"
						handleClick={() => dispatch(Actions.IsLoading.StopLoading())}
						type="jelly"
					/>
				</div>
			</div>
			<div className="container">{isLoading && <Loader />}</div>
			<div className="container">
				<span>Saga example (triggers an action that is intercepted):</span>
				<div className="buttons-group">
					<ButtonComponent
						label="Clean people"
						handleClick={() => dispatch(Actions.Person.Clear())}
						type="jelly"
					/>
				</div>
			</div>
		</div>
	)
}

export default Examples
