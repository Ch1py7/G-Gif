import { FC, ReactElement } from 'react'
import * as S from './GifContainer.styles'
import { Loader } from 'components/Loader'

interface GifContainerProps {
	isLoaded: boolean
	url: string
	username: string
}

export const GifContainer: FC<GifContainerProps> = ({ isLoaded, url, username }): ReactElement => {
	return (
		<S.GifContainer>
			{isLoaded ? (
				<Loader />
			) : (
				<>
					<S.GifImg src={url} alt={username} />
					<S.GifData>
						<a href={url} target='_BLANK' rel='noreferrer'>
							<S.GifInfo>
								<S.GifName>{username}</S.GifName>
							</S.GifInfo>
						</a>
					</S.GifData>
				</>
			)}
		</S.GifContainer>
	)
}
