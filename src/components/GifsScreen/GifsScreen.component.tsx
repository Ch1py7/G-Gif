import { FC, ReactElement } from 'react'
import * as S from './GifsScreen.styles'
import { Search } from 'components/Search'
import { TrendList } from 'components/TrendList'
import { GifList } from 'components/GifList'

export const GifsScreen: FC = (): ReactElement => {
	return (
		<S.GifsScreen>
			<Search />
			<TrendList />
			<GifList />
		</S.GifsScreen>
	)
}
