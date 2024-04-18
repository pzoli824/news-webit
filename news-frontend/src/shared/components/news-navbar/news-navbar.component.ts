import { Component } from '@angular/core';
import { NewsFormComponent } from '../../../libs/news/components/news-form/news-form.component';

@Component({
  selector: 'app-news-navbar',
  standalone: true,
  imports: [NewsFormComponent],
  templateUrl: './news-navbar.component.html',
  styleUrl: './news-navbar.component.scss'
})
export class NewsNavbarComponent {

}
