import {useEffect, useState} from 'react'

const useLoader = () => {
  const [loading, setLoading] = useState(false)
  const [time, setTime] = useState()
  
  useEffect(()=>{
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, time);

  },[time])

  useEffect(()=>{
    if(!loading) setTime(0)
  },[loading])

  return [loading, setTime]
}

export default useLoader