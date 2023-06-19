import styled from 'styled-components'
import { Icon as Iconify } from '@iconify/react'

export const SearchSection = styled.section`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 2fr 1fr;
  background-color: #121212;
  width: 100%;
  gap: 2rem;
  padding: 2rem;
`

export const SearchForm = styled.form`
  position: relative;
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  padding-right: 4rem;
  font-size: 2rem;
  border: 1px solid #999c9d;
  border-radius: 1rem;
  outline: none;
`

export const Icon = styled(Iconify)`
  position: absolute;
  top: 50%;
  right: 0;
  height: 2rem;
  width: 2rem;
  color: #76797a;
  transform: translate(-50%, -50%);
  transform-origin: center;
`

export const Anchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 2.4rem;
  color: #d1d3d4;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #e4df0c;
  }
`

export const SearchSpan = styled.span`
  font-size: 4rem;
  @media (max-width: 768px) {
    display: none;
  }
`
