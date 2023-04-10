import { FC, ReactElement, useEffect, useState } from 'react'
import { GetTrend } from 'services/GetTrend.services'
import * as S from './TrendList.styles'
import { Carousel } from 'components/Carousel'
import { GraphUp } from 'assets/graph-up'

export const TrendList: FC = (): ReactElement => {
	const [trend, setTrend] = useState([{ id: '', username: '', url: '', fav: false }])

	useEffect(() => {
		GetTrend()
			.then((trend) => {
				setTrend(trend)
			})
			.catch((error) => {
				console.log(error)
			})
	}, [])

	return (
		<S.TrendSection>
			<S.TrendInformation>
				<GraphUp width={40} height={40} />
				<S.TrendTitle>Trending</S.TrendTitle>
			</S.TrendInformation>
			<Carousel>
				{trend.map(({ id, username, url }) => {
					return (
						<div key={id} style={{ position: 'relative', height: 'content-fit' }}>
							<S.TrendImg src={url} alt={username} />
							<S.TrendData key={username}>
								<a href={url} target='_BLANK' rel='noreferrer'>
									<S.TrendInfo>
										<S.TrendName>{username}</S.TrendName>
									</S.TrendInfo>
								</a>
							</S.TrendData>
						</div>
					)
				})}
			</Carousel>
		</S.TrendSection>
	)
}
