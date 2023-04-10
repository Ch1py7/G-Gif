import styled from 'styled-components'

export const SearchSection = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
`

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6rem;
  margin: 2rem 0;
  @media (max-width: 520px) {
    height: 5rem;
  }
`

export const SearchInput = styled.input`
  width: 90%;
  height: 100%;
  padding: 0 15% 0 2rem;
  border: none;
  border-radius: 1rem;
  background-color: #202020;
  font-size: 3rem;
  color: white;
  @media (max-width: 520px) {
    padding: 0 40% 0 2rem;
    font-size: 2rem;
  }
`
