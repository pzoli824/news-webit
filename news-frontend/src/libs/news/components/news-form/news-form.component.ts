import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-news-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './news-form.component.html',
  styleUrl: './news-form.component.scss',
})
export class NewsFormComponent {
  public newsForm = new FormGroup({
    title: new FormControl<string | null>(null, Validators.required),
    description: new FormControl('', Validators.required),
    date: new FormControl<Date | null>(null),
    img_url: new FormControl(''),
  });

  public createNewsPost() {
    console.log(this.newsForm.controls);
    if (this.newsForm.invalid) {
      console.log("logged")
      this.newsForm.markAsDirty();
    } else {
      var btn = document.getElementById('closeForm');
      btn?.click();
    }
  }
}
