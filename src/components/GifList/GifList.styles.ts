import styled from 'styled-components'
import { Icon } from '@iconify/react'

export const GifSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  place-items: center;
  gap: 4rem;
  width: 100%;
  padding-top: 2rem;
  border-top: 4px solid #101010;
`

export const GifImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px;
`

export const GifArticle = styled.article`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const GifSvg = styled(Icon)`
  position: absolute;
  width: 10rem;
  height: 10rem;
  opacity: 0;
  color: #d7282d;
  pointer-events: none;
`
