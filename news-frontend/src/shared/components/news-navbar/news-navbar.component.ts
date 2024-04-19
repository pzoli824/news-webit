import { Component, EventEmitter, Output } from '@angular/core';
import { NewsFormComponent } from '../../../libs/news/components/news-form/news-form.component';
import { NewsEmitter } from '../../../libs/news/models/news.model';

@Component({
  selector: 'app-news-navbar',
  standalone: true,
  imports: [NewsFormComponent],
  templateUrl: './news-navbar.component.html',
  styleUrl: './news-navbar.component.scss'
})
export class NewsNavbarComponent {

  @Output() newsEmitter = new EventEmitter<NewsEmitter>();

  public createNewsPostNavbar(emitter: NewsEmitter) {
      this.newsEmitter.emit(Object.create(emitter))
  }

}
