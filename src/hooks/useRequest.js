/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'

const useRequests = service => {
	const [response, setResponse] = useState()
	const [param, setParam] = useState()
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const callService = async value => {
			const res = await service(value)
			setResponse(res.data)
			setParam(false)
		}

		if (param) {
			setIsLoading(true)
			callService(param)
		}
	}, [param])

	useEffect(() => {
		if (response) setIsLoading(false)
	}, [response])

	return [response, isLoading, setParam]
}

export default useRequests
