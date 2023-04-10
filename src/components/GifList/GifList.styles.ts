import styled from 'styled-components'

export const GifSection = styled.section`
  display: grid;
  place-items: center;
  width: 100%;
  margin-top: 5rem;
`

export const GifList = styled.div`
  column-count: 4;
  gap: 4rem;
  @media (max-width: 1100px) {
    column-count: 3;
  }
  @media (max-width: 720px) {
    column-count: 2;
  }
`
