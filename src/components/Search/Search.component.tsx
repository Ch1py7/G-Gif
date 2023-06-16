import { Wolf } from 'assets/wolf'
import React, { FC, ReactElement, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as S from './Search.styles'

export const Search: FC = (): ReactElement => {
  const [userInput, setUserInput] = useState<string>('')
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate(`/gifs/${userInput}`)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value)
  }

  return (
    <S.SearchSection>
      <Link to='/' title='Go to home'>
        <Wolf height={60} width={60} />
      </Link>
      <form style={{ position: 'relative' }} onSubmit={handleSubmit}>
        <S.SearchInput
          type='text'
          placeholder='Search'
          onChange={handleChange}
        />
        <Link to={`/gifs/${userInput}`} title='Go to gifs'>
          <S.SearchIcon icon='ph:magnifying-glass-bold' />
        </Link>
      </form>
    </S.SearchSection>
  )
}
