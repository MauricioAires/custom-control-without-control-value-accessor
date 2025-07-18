import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RatingStarsComponent } from '../../shared/inputs/rating-stars/rating-stars.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, RatingStarsComponent, JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected form = new FormGroup({
    name: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
    rating: new FormControl(
      {
        value: -1,
        disabled: false,
      },
      {
        validators: Validators.min(0),
        nonNullable: true,
      }
    ),
  });

  protected submit() {
    console.log('Form submitted', this.form.value);
  }
}

// Star Rating, toggle or slider component can be used for this.
