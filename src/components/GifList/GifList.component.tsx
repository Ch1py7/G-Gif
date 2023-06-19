import { useFetch } from 'hooks/useFetch'
import { FC, ReactElement, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LocalStorageService } from 'services/localStorage.service'
import { GifProps } from 'types/Gif.types'
import * as S from './GifList.styles'

export const GifList: FC = (): ReactElement => {
  const { keyword } = useParams()
  const { data: gifsProps } = useFetch<GifProps>(keyword ?? 'gato')
  const { data } = gifsProps ?? { data: [] }
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
    <S.GifSection>
      {data.map((gif) => (
        <S.GifArticle key={gif.id}>
          <S.GifTitle>{gif.username}</S.GifTitle>
          <S.CopyButton onClick={() => onClick(gif.url)}>
            {isCopy ? (
              <S.GifCopy icon='ic:round-check' style={{ color: 'green' }} />
            ) : (
              <S.GifCopy icon='system-uicons:chain' />
            )}
          </S.CopyButton>
          <S.GifImg
            onDoubleClick={() => {
              isFavAnimation(gif.id),
              favValidation(gif.images.downsized_medium.url)
            }}
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
