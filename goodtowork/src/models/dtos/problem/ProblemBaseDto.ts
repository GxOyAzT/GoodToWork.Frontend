import { Dto } from '../shared/Dto'
import { ProblemStatusEnum } from '../../enums/ProblemStatusEnum'

export type ProblemBaseDto = Dto & {
  id: string,
  title: string,
  problemStatus: ProblemStatusEnum,
  performerName: string
}