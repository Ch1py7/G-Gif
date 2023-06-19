import { FavPage } from 'components/FavPage'
import { GifsScreen } from 'components/GifsScreen'
import { MainScreen } from 'components/MainScreen'
import { FC, ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'

export const App: FC = (): ReactElement => {
  return (
    <Routes>
      <Route element={<MainScreen />} path='/' />
      <Route element={<GifsScreen />} path='/gifs/:keyword' />
      <Route element={<FavPage />} path='/favorites' />
    </Routes>
  )
}
