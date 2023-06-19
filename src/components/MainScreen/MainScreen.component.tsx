import { Search } from 'components/Search'
import { TrendList } from 'components/TrendList'
import { FC, ReactElement } from 'react'
import * as S from './MainScreen.styles'

export const MainScreen: FC = (): ReactElement => {
  return (
    <S.MainScreen>
      <S.MainTitle>Search a Gif</S.MainTitle>
      <Search />
      <TrendList />
    </S.MainScreen>
  )
}
