import { Icon } from '@iconify/react'
import { Carousel } from 'components/Carousel'
import { useFetch } from 'hooks/useFetch'
import { FC, ReactElement, useState } from 'react'
import { LocalStorageService } from 'services/localStorage.service'
import { GifProps } from 'types/Gif.types'
import * as S from './TrendList.styles'

export const TrendList: FC = (): ReactElement => {
  const { trends } = useFetch<GifProps>('')
  const { data } = trends ?? { data: [] }
  const [isLike, setIsLike] = useState<string>('')
  const [isCopy, setIsCopy] = useState<boolean>(false)
  const { addFav } = LocalStorageService

  const isFavAnimation = (gifId: string) => {
    setIsLike(gifId)
    setTimeout(() => {
      setIsLike('')
    }, 1000)
  }

  const like = {
    animation: 'isLike 1s ease-in-out',
  }

  const favValidation = (url: string) => {
    const favsFromStorage: Record<string, string> = LocalStorageService.getFav()
    const isFav = Object.values(favsFromStorage ?? {})
    if (isFav.some((fav) => fav === url)) {
      return {}
    } else {
      addFav(url)
    }
  }

  const onClick = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setIsCopy(true)
      setTimeout(() => {
        setIsCopy(false)
      }, 1000)
    })
  }

  return (
    <S.TrendSection>
      <S.TrendInformation>
        <Icon icon='bi:stars' style={{ fontSize: '3rem', color: 'yellow' }} />
        <S.TrendTitleSection>Trending</S.TrendTitleSection>
        <Icon icon='bi:stars' style={{ fontSize: '3rem', color: 'yellow' }} />
      </S.TrendInformation>
      <Carousel>
        {data.map((trend) => {
          return (
            <S.TrendArticle key={trend.id}>
              <S.TrendTitle>{trend.username}</S.TrendTitle>
              <S.CopyButton onClick={() => onClick(trend.url)}>
                {isCopy ? (
                  <S.TrendCopy
                    icon='ic:round-check'
                    style={{ color: 'green' }}
                  />
                ) : (
                  <S.TrendCopy icon='system-uicons:chain' />
                )}
              </S.CopyButton>
              <S.TrendImg
                onDoubleClick={() => {
                  isFavAnimation(trend.id),
                  favValidation(trend.images.downsized_medium.url)
                }}
                src={trend.images.downsized_medium.url}
                alt={trend.username}
              />
              {isLike === trend.id && (
                <S.GifSvg style={like} icon='clarity:heart-solid' />
              )}
            </S.TrendArticle>
          )
        })}
      </Carousel>
    </S.TrendSection>
  )
}
