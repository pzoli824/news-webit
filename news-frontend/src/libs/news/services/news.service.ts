import { Injectable } from '@angular/core';
import { CRUD } from '../../../shared/models/crud.model';
import { News } from '../models/news.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsService implements CRUD<News> {
  constructor(private readonly httpClient: HttpClient) {}

  create(v: News): Observable<News> {
    return this.httpClient.post<News>(`${environment.host}`, {
      body: v,
    });
  }

  delete(v: News): Observable<void> {
    return this.httpClient.delete<void>(`${environment.host}`, {
      body: v,
    });
  }

  getAll(): Observable<Array<News>> {
    return this.httpClient.get<Array<News>>(`${environment.host}`);
  }
}
