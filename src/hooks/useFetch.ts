import { useEffect, useState, useCallback } from 'react'

const ApiKey = import.meta.env.VITE_GIPHY_API_KEY

const createUrl = (keyword: string) =>
  `https://api.giphy.com/v1/gifs/search?api_key=${ApiKey}&q=${keyword}&limit=30&offset=0&rating=g&lang=en`

export const useFetch = <T>(get: string) => {
  const [data, setData] = useState<T | undefined>()

  const getGifs = useCallback(async() => {
    try {
      const response = await fetch(createUrl(get))
      const res: T = await response.json()
      setData(res)
    }
    catch (error) {
      console.error(error)
    }
  }, [get])

  useEffect(() => {
    getGifs()
  }, [getGifs])

  return { data }
}