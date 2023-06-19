import { useCallback, useEffect, useState } from 'react'

const ApiKey = import.meta.env.VITE_GIPHY_API_KEY
const TrendKey = import.meta.env.VITE_GIPHY_TRENDING_API_KEY

const createUrl = (keyword: string) =>
  `https://api.giphy.com/v1/gifs/search?api_key=${ApiKey}&q=${keyword}&limit=30&offset=0&rating=g&lang=en`

const createTrendUrl = () =>
  `https://api.giphy.com/v1/gifs/trending?api_key=${TrendKey}&limit=21&offset=0&rating=g`

export const useFetch = <T>(get: string) => {
  const [data, setData] = useState<T | undefined>()
  const [trends, setTrends] = useState<T | undefined>()

  const getTrend = useCallback(async () => {
    try {
      const response = await fetch(createTrendUrl())
      const res: T = await response.json()
      setTrends(res)
    } catch (error) {
      console.error(error)
    }
  }, [get])

  const getGifs = useCallback(async () => {
    try {
      const response = await fetch(createUrl(get))
      const res: T = await response.json()
      setData(res)
    } catch (error) {
      console.error(error)
    }
  }, [get])

  useEffect(() => {
    getGifs()
    getTrend()
  }, [getGifs, getTrend])

  return { data, trends }
}
