import { useState } from 'react'
import { LocalStorageService } from 'services/localStorage.service'
import { FavProps } from 'types/Gif.types'

export const useFavorite = () => {
  const [favoriteList, setFavoriteList] = useState<Array<FavProps>>([])

  const addFav = (url: string) => {
    const id = crypto.randomUUID()
    console.log(favoriteList)
    setFavoriteList((prev) => [...prev, { url, id }])
    LocalStorageService.setFav({ [id]: url })
  }

  const removeFav = (index: number) => {
    setFavoriteList((prev) => prev.filter((_, i) => i !== index))
    LocalStorageService.removeFav(favoriteList[index].id)
  }

  return { favoriteList, addFav, removeFav }
}
