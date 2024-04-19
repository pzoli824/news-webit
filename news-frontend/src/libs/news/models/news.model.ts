
export type News = {
  id: string,
  title: string,
  description: string,
  date: Date,
  imgUrl: string
}

export enum NewsEmitType {
  Delete = "delete",
  Create = "create"
}

export type NewsEmitter = { type: NewsEmitType, news: News }