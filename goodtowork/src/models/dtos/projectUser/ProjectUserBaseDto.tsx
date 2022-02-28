import { UserProjectRoleEnum } from '../../enums/UserProjectRoleEnum'
import { Dto } from '../shared/Dto'

export type ProjectUserBaseDto = Dto & {
  projectId: string,
  userId: string,
  name: string
  role: UserProjectRoleEnum
}