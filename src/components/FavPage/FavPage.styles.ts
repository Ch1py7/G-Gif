import styled from 'styled-components'
import { Icon } from '@iconify/react'

export const FavSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  padding: 2rem;
  gap: 6rem;
`

export const FavTitle = styled.h2`
  width: 14rem;
  font-size: 3rem;
  font-weight: 700;
  margin: 0 auto;
  text-align: center;
  color: #f0f0f0;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: yellow;
  }
`

export const FavImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px 0 #6e6e6e;
  }
`

export const GifSvg = styled(Icon)`
  position: absolute;
  width: 10rem;
  height: 10rem;
  opacity: 0;
  color: #d7282d;
  pointer-events: none;
`

export const GifArticle = styled.article`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
`
