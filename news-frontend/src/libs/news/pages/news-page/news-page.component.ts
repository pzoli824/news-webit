import { Component } from '@angular/core';
import { NewsCardComponent } from '../../components/news-card/news-card.component';
import { BluePlusButtonComponent } from '../../../../shared/components/blue-plus-button/blue-plus-button.component';

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [NewsCardComponent, BluePlusButtonComponent],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent {

}
