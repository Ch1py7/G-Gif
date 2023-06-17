export interface GifProps {
  data: Data[]
  pagination: Pagination
  meta: Meta
}

export interface Pagination {
  total_count: number
  count: number
  offset: number
}

export interface Meta {
  status: number
  msg: string
  response_id: string
}

export interface Data {
  username: string
  id: string
  images: Images
  url: string
}

export interface Images {
  downsized_medium: Downsized_medium
}

export interface Downsized_medium {
  url: string
}

export interface StorageFav {
  [key: string]: string
}

export interface FavProps {
  url: string
  id: string
}
