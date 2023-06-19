import React, { FC, ReactElement, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as S from './Search.styles'
import { Icon } from '@iconify/react'

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
      <Link to='/' title='Go to home' style={{ justifySelf: 'start' }}>
        <Icon icon='emojione:letter-g' height={60} width={60} />
      </Link>
      <S.SearchForm onSubmit={handleSubmit}>
        <S.SearchInput
          type='text'
          placeholder='Search'
          onChange={handleChange}
        />
        <Link to={`/gifs/${userInput}`} title='Go to gifs'>
          <S.Icon icon='ph:magnifying-glass-bold' />
        </Link>
      </S.SearchForm>
      <S.Anchor href='/favorites' title='Go to favorites'>
        <Icon style={{ color: 'red' }} icon='ph:heart-fill' />
        <S.SearchSpan>Favorites!</S.SearchSpan>
      </S.Anchor>
    </S.SearchSection>
  )
}
