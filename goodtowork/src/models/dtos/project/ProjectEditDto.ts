import { Dto } from '../shared/Dto'
import { UserDto } from '../user/UserDto'
import { ProjectUserBaseDto } from '../projectUser/ProjectUserBaseDto'

export type ProjectEditDto = Dto & {
  id: string,
  name: string,
  isActive: Boolean | null,
  description: string | null,
  created: string,
  addedUsers: ProjectUserBaseDto[],
  avaliableUsers: UserDto[]
}