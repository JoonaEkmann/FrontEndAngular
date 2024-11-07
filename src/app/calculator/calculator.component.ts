import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    MatGridListModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'

})
export class CalculatorComponent {
  display: string = '';
  buttons: string[] =
    ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];

  addValue(value: string) {
    console.log('addValue value: ' + value);
    if (value === '=') {
      try {
        this.display = eval?.(this.display);
      } catch (error) {
        this.display = 'Error';
      }
    } else if (value === 'C') {
      this.display = '';
    } else {
      this.display += value;

    }
  }
}
