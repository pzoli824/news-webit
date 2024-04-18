import { Component, Input } from '@angular/core';
import { News } from '../../models/news.model';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {
  
  
@Input({ required: true }) news!: News;

}
