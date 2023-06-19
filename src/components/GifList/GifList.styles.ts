import styled from 'styled-components'
import { Icon } from '@iconify/react'

export const GifSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(34rem, 1fr));
  width: 100%;
  border-top: 1px solid #121212;
  gap: 6rem;
  padding: 3rem;
`

export const GifImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
  transition: all 0.2s ease-in-out;
  filter: grayscale(0.6);
  &:hover {
    box-shadow: 0 0 10px 0 #6e6e6e;
    filter: grayscale(0);
  }
`

export const GifTitle = styled.h2`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 1rem;
  font-size: 3rem;
  font-weight: 700;
  margin: 0 auto;
  text-align: center;
  color: #f0f0f0;
  transition: all 0.2s ease-in-out;
  opacity: 0;
`

export const GifCopy = styled(Icon)`
  width: 6rem;
  height: 6rem;
  opacity: 0;
  border-radius: 1rem;
  background-color: #121212aa;
  color: #f0f0f0;
  pointer-events: none;
  transition: all 0.2s ease-in-out;
`

export const CopyButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const GifArticle = styled.article`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  &:hover ${GifTitle} {
    opacity: 1;
  }
  &:hover ${GifCopy} {
    opacity: 1;
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
