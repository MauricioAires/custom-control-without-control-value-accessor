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
    rating: new FormControl(-1, {
      validators: Validators.min(0),
      nonNullable: true,
    }),
  });

  protected resetRating() {
    const control = this.form.controls.rating;
    control.reset();
    control.updateValueAndValidity();
  }

  protected submit() {
    console.log('Form submitted', this.form.value);
  }
}
