import { Component, OnInit } from '@angular/core';
import { NewsCardComponent } from '../../components/news-card/news-card.component';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news.model';
import { CommonModule } from '@angular/common';
import { NewsNavbarComponent } from '../../../../shared/components/news-navbar/news-navbar.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [NewsCardComponent, NewsNavbarComponent, CommonModule],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss',
})
export class NewsPageComponent implements OnInit {
  public news$!: Observable<News[]>;

  constructor(private readonly newsService: NewsService) {
    this.newsService = newsService;
  }
  ngOnInit(): void {
    this.news$ = this.newsService.getAll();
  }
}
