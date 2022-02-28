import { Dto } from '../shared/Dto'
import { ProblemStatusEnum } from '../../enums/ProblemStatusEnum'

export type StatusBaseModelDto = Dto & {
  id: string,
  status: ProblemStatusEnum,
  updated: string,
  updator: string
}