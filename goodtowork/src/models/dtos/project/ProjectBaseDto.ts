import { Dto } from '../shared/Dto'

export type ProjectBaseDto = Dto & {
  id: string,
  name: string,
  isActive: Boolean | null,
  description: string | null,
  created: Date | null,
  coworkersCount?: number | null
}