import styled from 'styled-components'

export const GifContainer = styled.div`
  position: relative;
  display: grid;
  height: fit-content;
  margin: 0 0 4rem;
`

export const GifImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px;
`

export const GifInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  padding: 2rem;
  overflow: hidden;
`

export const GifName = styled.h2`
  font-size: clamp(1rem, 4vw, 2rem);
  color: #fdfdfd;
`

export const GifData = styled.div`
  position: absolute;
  top: 50;
  left: 50;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  transition: opacity 0.1s linear;
  opacity: 0;
  &:hover {
    opacity: 1;
    background: linear-gradient(transparent, #000000b8)
  }
`
