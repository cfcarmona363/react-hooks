import React, { useState } from 'react'
import InputComponent from '../components/inputComponent'
import TextDisplay from '../components/textDisplay'
import { useSelector } from 'react-redux'

const handlePersonChange = (data, person, prop, set) => {
	const p = { ...person }
	p[prop] = data.target.value
	set(p)
}

const Person = () => {
	//REDUX HOOK
	const person = useSelector(state => state.Person.Person)

	//HOOKS
	const [localPerson, setPerson] = useState({})

	return (
		<div className="grid-container">
			<div>
				<h1>Second example</h1>
				<div className="container">
					<span>Person form:</span>
					<InputComponent
						id={1}
						value={localPerson && localPerson.name}
						onChange={e =>
							handlePersonChange(e, localPerson, 'name', setPerson)
						}
						placeholder="Name"
					/>
					<InputComponent
						id={2}
						value={localPerson && localPerson.lastName}
						onChange={e =>
							handlePersonChange(e, localPerson, 'lastName', setPerson)
						}
						placeholder="Last name"
					/>
					<InputComponent
						id={3}
						value={localPerson && localPerson.age}
						onChange={e => handlePersonChange(e, localPerson, 'age', setPerson)}
						placeholder="Age"
					/>
				</div>
				<div className="container">
					<span>This is your person:</span>
					<TextDisplay
						text={`Name: ${person && person.name ? person.name : ''}`}
					/>
					<TextDisplay
						text={`Last name: ${
							person && person.lastName ? person.lastName : ''
						}`}
					/>
					<TextDisplay
						text={`Age: ${person && person.age ? person.age : ''}`}
					/>
				</div>
			</div>
		</div>
	)
}

export default Person
