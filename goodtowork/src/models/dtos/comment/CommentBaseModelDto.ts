import { Dto } from '../shared/Dto'

export type CommentBaseModelDto = Dto & {
  id: string,
  comment: string,
  creatorName: string,
  created: string
}