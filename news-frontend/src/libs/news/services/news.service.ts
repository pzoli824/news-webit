import { Injectable } from '@angular/core';
import { CRUD } from '../../../shared/models/crud.model';
import { News } from '../models/news.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService implements CRUD<News> {

  constructor(private readonly httpClient: HttpClient) { }
  
  getAll(): Observable<Array<News>> {    
    return this.httpClient.get<Array<News>>("http://127.0.0.1:3000/news")
  }
}
