import { StorageFav } from 'types/Gif.types'

export module LocalStorageService {
  export const getFav = () => {
    const fav = localStorage.getItem('fav')
    if (fav) {
      return JSON.parse(fav)
    }
    return {}
  }

  export const setFav = (favGifs: StorageFav) => {
    const prevFavs = getFav()
    const newFavs = { ...prevFavs, ...favGifs }
    localStorage.setItem('fav', JSON.stringify(newFavs))
  }

  export const removeFav = (id: string) => {
    const fav = getFav()
    delete fav[id]
    localStorage.setItem('fav', JSON.stringify(fav))
  }

  export const addFav = (url: string) => {
    const id = crypto.randomUUID()
    LocalStorageService.setFav({ [id]: url })
  }
}
