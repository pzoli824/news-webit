import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { News, NewsEmitType, NewsEmitter } from '../../models/news.model';
import * as uuid from 'uuid';

@Component({
  selector: 'app-news-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './news-form.component.html',
  styleUrl: './news-form.component.scss',
})
export class NewsFormComponent {

  @Output() newsEmitter = new EventEmitter<NewsEmitter>();

  public newsForm = new FormGroup({
    title: new FormControl<string>("", Validators.required),
    description: new FormControl<string>('', Validators.required),
    date: new FormControl<Date | null>(null),
    imgUrl: new FormControl<string>(""),
  });

  public createNewsPost() {
    if (this.newsForm.invalid) {
      this.newsForm.markAsDirty();
    } else {
      var btn = document.getElementById('closeForm');
      btn?.click();
    const title = this.newsForm.get('title')?.value
      const description = this.newsForm.get('description')?.value
      const date: Date = new Date()
      const imgUrl = `${uuid.v4()}.jpg`;
      const news = <News>{id: "-1", title: title || "", description: description || "", date: date, imgUrl: imgUrl}
      this.newsEmitter.emit({type: NewsEmitType.Create, news: news })
      console.log(news)
    }
  }
}
