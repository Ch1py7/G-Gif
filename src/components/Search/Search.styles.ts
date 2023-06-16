import styled from 'styled-components'
import { Icon } from '@iconify/react'

export const SearchSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  padding-right: 3rem;
  font-size: 2rem;
  border: 1px solid #999c9d;
  border-radius: 0.5rem;
  outline: none;
`

export const SearchIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  right: 0;
  height: 2rem;
  width: 2rem;
  color: #76797a;
  transform: translate(-50%, -50%);
  transform-origin: center;
`
