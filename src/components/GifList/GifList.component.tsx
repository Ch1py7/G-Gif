import { useFetch } from 'hooks/useFetch'
import { FC, ReactElement, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GifTypes } from 'types/Gif.types'
import * as S from './GifList.styles'

export const GifList: FC = (): ReactElement => {
  const { keyword } = useParams()
  const { data: gifsProps } = useFetch<GifTypes.GifProps>(keyword ?? 'gato')
  const { data } = gifsProps ?? { data: [] }
  const [isLike, setIsLike] = useState<string>('')

  const isFav = (gifId: string) => {
    setIsLike(gifId)
    setTimeout(() => {
      setIsLike('')
    }, 1000)
  }

  const like = {
    animation: 'like 1s ease-in-out',
  }

  return (
    <S.GifSection>
      {data.map((gif) => (
        <S.GifArticle key={gif.id}>
          <S.GifImg
            onDoubleClick={() => isFav(gif.id)}
            src={gif.images.downsized_medium.url}
            alt={gif.username}
          />
          {isLike === gif.id && (
            <S.GifSvg style={like} icon='clarity:heart-solid' />
          )}
        </S.GifArticle>
      ))}
    </S.GifSection>
  )
}
