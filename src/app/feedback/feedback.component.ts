import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { Palaute } from '../models/questions';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    MatSliderModule,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'] 
})
export class FeedbackComponent {
  questions: Palaute[] = [
    new Palaute('Kysymys 1', 'ei arvioitu'), 
    new Palaute('Kysymys 2', 'Huono'),
    new Palaute('Kysymys 3', 'Ok')
  ];

  ratings: number[] = [1.5, 1.5, 1.5];

  onInputChange(event: any, p: Palaute) {
    const sliderValue = event.value; 
    p.vastaus = this.getAnswer(event.target.value); 
  }

  getAnswer(value: number): string {
    if (value <= 1) {
      return 'Huono';
    } else if (value > 1 && value <= 2.5) {
      return 'Ok';
    } else if (value > 2.5 && value <= 4) {
      return 'Hyvä';
    } else {
      return 'Erinomainen';
    }
  }
  
  
}









