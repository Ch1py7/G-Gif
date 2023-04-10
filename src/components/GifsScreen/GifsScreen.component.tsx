import { FC, ReactElement } from 'react'
import * as S from './GifsScreen.styles'
import { Search } from 'components/Search'
import { TrendList } from 'components/TrendList'
import { GifList, GifListProps } from 'components/GifList'

export const GifsScreen: FC<GifListProps> = ({ params }): ReactElement => {
	return (
		<S.GifsScreen>
			<Search />
			<TrendList />
			<GifList params={params} />
		</S.GifsScreen>
	)
}
