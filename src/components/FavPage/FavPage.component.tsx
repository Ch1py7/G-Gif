import { Search } from 'components/Search'
import { FC, ReactElement, useState } from 'react'
import { LocalStorageService } from 'services/localStorage.service'
import { data as favs } from 'utils/FavsParser.utils'
import * as S from './FavPage.styles'

export const FavPage: FC = (): ReactElement => {
  const [dislike, setDislike] = useState<string>('')

  const notFav = (gifId: string) => {
    setDislike(gifId)
    setTimeout(() => {
      setDislike('')
    }, 1000)
  }

  const handleDislike = {
    animation: 'isLike 1s ease-in-out',
  }

  return (
    <>
      <Search />
      <S.FavTitle>Your favs!</S.FavTitle>
      <S.FavSection>
        {favs.map((fav) => (
          <S.GifArticle key={fav.id}>
            <S.FavImage
              src={fav.value}
              onDoubleClick={() => {
                notFav(fav.id), LocalStorageService.removeFav(fav.id)
              }}
            />
            {dislike === fav.id && (
              <S.GifSvg icon='fxemoji:brokenheart' style={handleDislike} />
            )}
          </S.GifArticle>
        ))}
      </S.FavSection>
    </>
  )
}
