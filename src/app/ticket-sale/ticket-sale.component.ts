import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Person } from '../models/person';
import { MatGridListModule } from '@angular/material/grid-list';
import { TicketsService } from '../services/tickets.service';
@Component({
  selector: 'app-ticket-sale',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatGridListModule,
    ReactiveFormsModule,
  ],
  templateUrl: './ticket-sale.component.html',
  styleUrl: './ticket-sale.component.css'
})
export class TicketSaleComponent {
  person: any = new Person();
  display1 = 0;
  display2 = 0;
  display3 = 0;

  prices = {
    display1: 15,
    display2: 10,
    display3: 8,
  };

  isDiscounted: boolean = false;

  constructor(private ticketService: TicketsService) { }

  calculateTotal(): number {
    let total =
      this.display1 * this.prices.display1 +
      this.display2 * this.prices.display2 +
      this.display3 * this.prices.display3;

    //En ymmärrä miksi en saa tätä toimimaan...
    if (this.isDiscounted) {
      total *= 0.85;
    }
    return total;
  }

  plusValue(display: 'display1' | 'display2' | 'display3') {
    this[display]++;
  }

  minusValue(display: 'display1' | 'display2' | 'display3') {
    if (this[display] > 0) {
      this[display]--;
    }
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.ticketService.saveOrder(
        this.person,
        this.display1,
        this.display2,
        this.display3,
        this.calculateTotal()
      );
      this.resetForm(form);
    }
  }


  resetForm(form: any) {
    form.resetForm();
    this.display1 = 0;
    this.display2 = 0;
    this.display3 = 0;
    this.isDiscounted = false;
  }
}
