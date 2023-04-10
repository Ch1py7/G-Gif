import { GifTypes } from 'types/Gif.types'

export const GetTrend = async () => {
	const ApiKey = 'UvaBS1s7wvTYxW08f706idueZ9uvr31b'
	const ApiUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${ApiKey}&limit=21&offset=0&rating=g`

	const res = await fetch(ApiUrl)
	const response = await res.json()
	const { data } = response
	const trend = data.map((trend: GifTypes.Data) => {
		const { id, username } = trend
		const { url } = trend.images.downsized_medium
		return { id, username, url }
	})
	return trend
}
