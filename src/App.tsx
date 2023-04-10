import { FC, ReactElement } from 'react'
import { MainScreen } from 'components/MainScreen'
import { Route } from 'wouter'
import { GifsScreen } from 'components/GifsScreen'

export const App: FC = (): ReactElement => {
	return (
		<>
			<Route component={MainScreen} path='/' />
			<Route component={GifsScreen} path='/gifs/:keyword' />
		</>
	)
}
