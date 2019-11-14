const initialState = {
	Person: {
		name: '',
		lastName: '',
		age: ''
	}
}

const person = (state = initialState, action) => {
	switch (action.type) {
		case 'PERSON':
			return {
				...state,
				Person: action.payload
			}

		default:
			return state
	}
}

export default person
