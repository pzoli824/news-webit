import { Injectable } from '@angular/core';
import { CRUD } from '../../../shared/models/crud.model';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService implements CRUD<News> {
  private tempNews: News[] = [
    {title: "Temp 1", description: "temporary description short", date: new Date(), imgUrl: ""},
    {title: "Temp 2", description: "temporary description longer aaaa", date: new Date(), imgUrl: ""},
    {title: "Temp 3", description: "temporary description long long long", date: new Date(), imgUrl: ""},
    {title: "Temp 4", description: "temporary description very looooooooooooooong", date: new Date(), imgUrl: ""},
    {title: "Temp 5", description: "temporary description too loooooooooooooooooooooooooooooooooooong", date: new Date(), imgUrl: ""},
    {title: "Temp 6", description: "temporary description looooooooooooooooooooooooooooooooooooooooooong loooooooooooooooooooooooong", date: new Date(), imgUrl: ""},
    {title: "Temp 7", description: "temporary description looooooooooooooooooooooooooooooooooooooooooooooong loooooooooooooooooooooooooooooooooong loooooooooooooooooooooooooooong", date: new Date(), imgUrl: ""},
    {title: "Temp 8", description: "temporary description dqwwq dwqdwqd kdkwqkd qwdqwdq dwqdwqd iii qw wq wqd qw wq qw qw wq wqe qwe q qw dqdqw dqw d     qkwqwekqwkeqwkek qwlkeqwlkewqklekqwlelkqw qwelkwqlkeqwlkelqwkeqwlkeqw", date: new Date(), imgUrl: ""},
  ]

  constructor() { }
  getAll(): Array<News> {
    return [...this.tempNews]
  }
}
