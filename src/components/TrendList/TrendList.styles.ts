import styled from 'styled-components'

export const TrendSection = styled.div`
  width: 100%;
  padding: 1rem 0;
  border-top: 4px solid #101010;
`

export const TrendInformation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const TrendTitle = styled.h2`
  font-size: 3rem;
  color: white;
  text-align: center;
  @media (max-width: 720px) {
    font-size: 2rem;
  }
`

export const TrendImg = styled.img`
  width: 12rem;
  height: 100%;
  border-radius: 1rem;
`

export const TrendInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  padding: 1rem;
  overflow: hidden;
`

export const TrendName = styled.h2`
  font-size: 1rem;
  color: #fdfdfd;
`

export const TrendData = styled.div`
  position: absolute;
  top: -4px;
  left: 50;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 12rem;
  height: 100%;
  border-radius: 1rem;
  transition: opacity 0.1s linear;
  opacity: 0;
  &:hover {
    background: linear-gradient(transparent, #000000b8);
    opacity: 1;
  }
`
