import React, { FC, ReactElement, useState } from 'react'
import { useLocation } from 'wouter'
import * as S from './Search.styles'
import { Wolf } from 'assets/wolf'
import { Search as Glass } from 'assets/search'

export const Search: FC = (): ReactElement => {
	const [userInput, setUserInput] = useState<string>('')
	const [_, pushLocation] = useLocation()

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		console.log(userInput)
		pushLocation(`/gifs/${userInput}`)
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserInput(event.target.value)
	}

	return (
		<S.SearchSection>
			<a href='/'>
				<Wolf height={60} width={60} />
			</a>
			<S.SearchForm onSubmit={handleSubmit}>
				<S.SearchInput type='text' placeholder='Search' onChange={handleChange} />
				<Glass height={45} width={45} />
			</S.SearchForm>
		</S.SearchSection>
	)
}
