import { Component, OnInit } from '@angular/core';
import { NewsCardComponent } from '../../components/news-card/news-card.component';
import { NewsService } from '../../services/news.service';
import { News, NewsEmitType, NewsEmitter } from '../../models/news.model';
import { CommonModule } from '@angular/common';
import { NewsNavbarComponent } from '../../../../shared/components/news-navbar/news-navbar.component';
import { Observable } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
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
    this.getAllNews();
  }

  getAllNews() {
    this.news$ = this.newsService.getAll();
  }

  NewsEmitterHandler(emitter: NewsEmitter) {
    if (emitter.type == NewsEmitType.Delete) this.deleteNews(emitter.news);
    else if (emitter.type == NewsEmitType.Create) this.createNews(emitter.news);
  }

  private createNews(news: News) {
    this.newsService
      .create(news)
      .pipe(untilDestroyed(this))
      .subscribe(
        () => {},
        (err: any) => {
          console.log(err);
        },
        () => {
          this.getAllNews();
        }
      );
  }

  private deleteNews(news: News) {
    this.newsService
      .delete(news)
      .pipe(untilDestroyed(this))
      .subscribe(
        () => {},
        (err: any) => console.log(err),
        () => {
          this.getAllNews();
        }
      );
  }
}
