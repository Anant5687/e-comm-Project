import { useEffect, useState } from 'react'
import axios from 'axios'

const useApiData = (url) => {
  const [apidata, setApiData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const totalData = () => {
    setLoading(true)
    axios.get(url).then((response) => {
      setApiData(response.data)
      setLoading(false)
    }).catch((err) => {
      setError(true)
      console.log(err)
      setError(false)
    })
  }

  useEffect(() => {
    totalData()
  }, [])
  return { apidata, loading, error }
}

export default useApiData
