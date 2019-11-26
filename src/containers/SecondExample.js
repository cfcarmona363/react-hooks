import React, { useState } from 'react'
import InputComponent from '../components/inputComponent'
import TextDisplay from '../components/textDisplay'
import ButtonComponent from '../components/buttonComponent'

const SecondExample = ({ history }) => {
	// 	const [name, setName] = useState()
	// 	const [lastName, setLastName] = useState('')
	// 	const [age, setAge] = useState('')

	// 	return (
	// 		<div className="grid-container">
	// 			<div>
	// 				<h1>Second example</h1>
	// 				<div className="container">
	// 					<span>Person form:</span>
	// 					<InputComponent
	// 						id={1}
	// 						value={name}
	// 						onChange={e => setName(e.target.value)}
	// 						placeholder="Name"
	// 					/>
	// 					<InputComponent
	// 						id={2}
	// 						value={lastName}
	// 						onChange={e => setLastName(e.target.value)}
	// 						placeholder="Last name"
	// 					/>
	// 					<InputComponent
	// 						id={3}
	// 						value={age}
	// 						onChange={e => setAge(e.target.value)}
	// 						placeholder="Age"
	// 					/>
	// 				</div>
	// 				<div className="container">
	// 					<span>This is your person:</span>
	// 					<TextDisplay text={`Name: ${name || ''}`} />
	// 					<TextDisplay text={`Last name: ${lastName || ''}`} />
	// 					<TextDisplay text={`Age: ${age || ''}`} />
	// 				</div>
	// 				<ButtonComponent
	// 					type="bubble"
	// 					label="Next example"
	// 					handleClick={() => history.push('/customHooks')}
	// 				/>
	// 			</div>
	// 		</div>
	// 	)
	// }

	/* ****************************************************************************************/

	const [person, setPerson] = useState({})

	const handlePersonChange = (data, prop) => {
		const p = { ...person }
		p[prop] = data
		setPerson(p)
	}

	return (
		<div className="grid-container">
			<div>
				<h1>Second example</h1>
				<div className="container">
					<span>Person form:</span>
					<InputComponent
						id={1}
						value={person.name}
						onChange={e => handlePersonChange(e.target.value, 'name')}
						placeholder="Name"
					/>
					<InputComponent
						id={2}
						value={person.lastName}
						onChange={e => handlePersonChange(e.target.value, 'lastName')}
						placeholder="Last name"
					/>
					<InputComponent
						id={3}
						value={person.age}
						onChange={e => handlePersonChange(e.target.value, 'age')}
						placeholder="Age"
					/>
				</div>
				<div className="container">
					<span>This is your person:</span>
					<TextDisplay text={`Name: ${person.name || ''}`} />
					<TextDisplay text={`Last name: ${person.lastName || ''}`} />
					<TextDisplay text={`Age: ${person.age || ''}`} />
				</div>

				<ButtonComponent
					type="bubble"
					label="Next example"
					handleClick={() => history.push('/customHooks')}
				/>
			</div>
		</div>
	)
}

export default SecondExample
