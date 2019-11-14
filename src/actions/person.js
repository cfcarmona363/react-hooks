const Person = (value) => ({
	type: 'PERSON',
	payload: value
})
const Person2 = (value) => ({
	type: 'PERSON2',
	payload: value
})
const Clear = () => ({
	type: 'CLEAR_PEOPLE'
})

export default { Person, Person2, Clear }
