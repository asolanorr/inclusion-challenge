import { useState, useEffect } from 'react'

export const useFetchData = (endpoint = '', error_msg = 'An error has ocurred') => {
  const [fetchDataHook, setFetchDataHook] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isReadyToInterval, setIsReadyToInterval] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(endpoint)
        if (!response.ok) {
          throw new Error(response)
        }
        const data = await response.json()
        setFetchDataHook(data)
      } catch (error) {
        setError(error_msg)
      }
      setLoading(false)
    }

    if (!isReadyToInterval) {
      fetchData()
      setIsReadyToInterval(true)
    }

    const interval = setInterval(() => {
      fetchData()
    }, 1000 * 15)

    return () => clearInterval(interval)
    // eslint-disable-next-line
  }, [endpoint])
  
  return { data: fetchDataHook, loading, error }
}