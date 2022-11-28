import { useEffect, useState } from "react"

export const useDataFetch = (url: string) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then (res => setData(res))
      .catch(err => console.error(err))
      .finally(() => setLoading(!loading))
  }, [])

  return {data, loading}
}