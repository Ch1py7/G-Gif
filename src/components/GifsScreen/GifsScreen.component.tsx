import { GifList } from 'components/GifList'
import { Search } from 'components/Search'
import { TrendList } from 'components/TrendList'
import { FC, ReactElement } from 'react'
import * as S from './GifsScreen.styles'

export const GifsScreen: FC = (): ReactElement => {
  return (
    <S.GifsScreen>
      <Search />
      <TrendList />
      <GifList />
    </S.GifsScreen>
  )
}
