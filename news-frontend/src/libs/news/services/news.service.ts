import { Injectable } from '@angular/core';
import { CRUD } from '../../../shared/models/crud.model';
import { News } from '../models/news.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService implements CRUD<News> {
  constructor(private readonly httpClient: HttpClient) {}

  update(v: News): Observable<News> {
    return this.httpClient.put<News>('http://127.0.0.1:3000/news', {
      body: v,
    });
  }
  create(v: News): Observable<News> {
    return this.httpClient.post<News>('http://127.0.0.1:3000/news', {
      body: v,
    });
  }

  delete(v: News): Observable<void> {
    return this.httpClient.delete<void>('http://127.0.0.1:3000/news', {
      body: v,
    });
  }

  getAll(): Observable<Array<News>> {
    return this.httpClient.get<Array<News>>('http://127.0.0.1:3000/news');
  }
}
