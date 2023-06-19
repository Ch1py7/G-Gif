import styled from 'styled-components'
import { Icon } from '@iconify/react'

export const TrendSection = styled.div`
  width: 100%;
  padding: 1rem 0;
`

export const TrendTitleSection = styled.h2`
  font-size: 3rem;
  text-align: center;
  color: #f0f0f0;
`

export const TrendInformation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0;
`

export const TrendCopy = styled(Icon)`
  width: 4rem;
  height: 4rem;
  opacity: 0;
  border-radius: 1rem;
  background-color: #121212aa;
  color: #f0f0f0;
  pointer-events: none;
  transition: all 0.2s ease-in-out;
`

export const TrendImg = styled.img`
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

export const CopyButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const TrendTitle = styled.h2`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 1rem;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 auto;
  text-align: center;
  color: #f0f0f0;
  transition: all 0.2s ease-in-out;
  opacity: 0;
`

export const TrendArticle = styled.article`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
  width: 20rem;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  &:hover ${TrendTitle} {
    opacity: 1;
  }
  &:hover ${TrendCopy} {
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
