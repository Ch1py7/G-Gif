import styled from 'styled-components'

export const GifSection = styled.section`
  display: grid;
  place-items: center;
  width: 100%;
  padding-top: 2rem;
  border-top: 4px solid #101010;
`

export const GifList = styled.div`
  column-count: 6;
  grid-gap: 4rem;
  @media (max-width: 1100px) {
    column-count: 5;
    grid-gap: 3rem;
  }
  @media (max-width: 720px) {
    column-count: 4;
    grid-gap: 2rem;
  }
  @media (max-width: 460px) {
    column-count: 3;
    grid-gap: 1rem;
  }
`
