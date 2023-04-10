import { FC, ReactElement, useEffect, useState } from 'react'
import { GetGifs } from 'services/GetGifs.services'
import * as S from './GifList.styles'
import { GifContainer } from 'components/GifContainer'

export interface GifListProps {
	params: { keyword: string }
}

export const GifList: FC<GifListProps> = ({ params }): ReactElement => {
	const [isLoaded, setIsLoaded] = useState(false)
	const [gifs, setGifs] = useState([{ id: '', username: '', url: '', fav: false }])
	const { keyword } = params

	useEffect(() => {
		setIsLoaded(true)
		GetGifs({ keyword })
			.then((gifs) => {
				setGifs(gifs)
				setIsLoaded(false)
			})
			.catch((error) => {
				console.log(error)
				setIsLoaded(false)
			})
	}, [keyword])

	return (
		<S.GifSection>
			<S.GifList>
				{gifs.map(({ id, username, url }) => {
					return <GifContainer isLoaded={isLoaded} url={url} username={username} key={id} />
				})}
			</S.GifList>
		</S.GifSection>
	)
}
