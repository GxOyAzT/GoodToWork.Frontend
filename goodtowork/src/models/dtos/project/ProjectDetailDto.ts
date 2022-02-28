import { Dto } from '../shared/Dto'
import { ProblemBaseDto } from '../problem/ProblemBaseDto'
import { UserDto } from '../user/UserDto'

export type ProjectDetailDto = Dto & {
  id: string,
  name: string,
  description: string | null,
  hasCreateRole: boolean,
  problems: ProblemBaseDto[],
  performers: UserDto[]
}