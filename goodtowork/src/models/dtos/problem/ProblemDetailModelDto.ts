import { Dto } from '../shared/Dto'
import { StatusBaseModelDto } from '../status/StatusBaseModelDto'
import { CommentBaseModelDto } from '../comment/CommentBaseModelDto'
import { ProblemStatusEnum } from '../../enums/ProblemStatusEnum'

export type ProblemDetailModelDto = Dto & {
  id: string,
  projectId: string,
  title: string,
  description: string,
  created: string,
  creatorName: string,
  performerName: string,
  problemStatus: ProblemStatusEnum,
  statuses: StatusBaseModelDto[],
  comments: CommentBaseModelDto[],
}