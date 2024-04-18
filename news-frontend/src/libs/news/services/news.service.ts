import { Injectable } from '@angular/core';
import { CRUD } from '../../../shared/models/crud.model';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService implements CRUD<News> {
  private tempNews: News[] = [
    {title: "News title 1", description: "temporary description short", date: new Date("2024-04-12"), imgUrl: "assets/images/breaking-news-1.jpg"},
    {title: "News title 2", description: "temporary description longerrrr", date: new Date("2024-04-13"), imgUrl: "assets/images/breaking-news-2.jpg"},
    {title: "News title 3", description: "temporary description long long long", date: new Date("2024-04-14"), imgUrl: "assets/images/breaking-news-3.jpg"},
    {title: "News title 4", description: "temporary description very looooooooooooooong", date: new Date("2024-04-15"), imgUrl: "assets/images/breaking-news-4.jpg"},
    {title: "News title 5", description: "temporary description too loooooooooooooooooooooooooooooooooooong", date: new Date("2024-04-16"), imgUrl: "assets/images/breaking-news-5.jpg"},
    {title: "News title 6", description: "temporary description looooooooooooooooooooooooooooooooooooooooooong loooooooooooooooooooooooong", date: new Date("2024-04-17"), imgUrl: "assets/images/breaking-news-6.jpg"},
    {title: "News title 7", description: "temporary description looooooooooooooooooooooooooooooooooooooooooooooong loooooooooooooooooooooooooooooooooong looooooooooooooo ooooooooooooong", date: new Date("2024-04-17"), imgUrl: "assets/images/breaking-news-7.jpg"},
    {title: "News title 8", description: "temporary description dqwwq dwqdwqd kdkwqkd qwdqwdq dwqdwqd iii qw wq wqd qw wq qw qw wq wqe qwe q qw dqdqw dqw d     qkwqwekqwkeqwkek qwlkeqwlkewqklekqwlelkqw qwelkwqlkeqwlkelqwkeqwlkeqwds ssss wqdqwd dqwdqw dwd wqd wqd qsssssssssss", date: new Date("2024-04-18"), imgUrl: "assets/images/breaking-news-8.jpg"},
  ]

  constructor() { }
  getAll(): Array<News> {
    return [...this.tempNews]
  }
}
