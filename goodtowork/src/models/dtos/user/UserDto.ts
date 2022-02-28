import { Dto } from '../shared/Dto'

export type UserDto = Dto & {
  id: string,
  name: string
}