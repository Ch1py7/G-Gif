const object = localStorage.getItem('fav')
const json: string[] = object ? JSON.parse(object) : []
export const data = Object.entries(json).map(([id, value]) => ({ id, value }))
