import { GifTypes } from 'types/Gif.types'

export const GetGifs = async ({ keyword = '' }) => {
	const ApiKey = 'nALI1JgWOcd4OlUxJJ6tYSAx2Mv9XUeV'
	const ApiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${ApiKey}&q=${keyword}&limit=30&offset=0&rating=g&lang=en`

	const res = await fetch(ApiUrl)
	const response = await res.json()
	const { data } = response
	const gifs = data.map((image: GifTypes.Data) => {
		const { id, username } = image
		const { url } = image.images.downsized_medium
		return { id, username, url, fav: false }
	})
	return gifs
}
