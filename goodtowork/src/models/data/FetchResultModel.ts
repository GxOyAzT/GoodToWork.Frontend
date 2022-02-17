export type FetchResultModel<TContent> = {
  StatusCode: number,
  Content?: TContent,
  Message?: string
}