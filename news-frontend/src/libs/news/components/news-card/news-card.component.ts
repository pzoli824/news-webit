import { Component, EventEmitter, Input, Output } from '@angular/core';
import { News, NewsEmitType, NewsEmitter } from '../../models/news.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss',
})
export class NewsCardComponent {
  @Input({ required: true }) news!: News;
  @Output() newsEmitter = new EventEmitter<NewsEmitter>();

  deleteNews() {
    this.newsEmitter.emit({
      type: NewsEmitType.Delete,
      news: this.news,
    } as NewsEmitter);
  }

}
