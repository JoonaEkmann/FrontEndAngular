import { Injectable } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  orderData: any = {
    person: new Person(),
    tickets: {
      display1: 0,
      display2: 0,
      display3: 0,
    },
    total: 0
  };

  constructor() { }

  saveOrder(person: Person, display1: number, display2: number, display3: number, total: number) {
    this.orderData.person = person;
    this.orderData.tickets.display1 = display1;
    this.orderData.tickets.display2 = display2;
    this.orderData.tickets.display3 = display3;
    this.orderData.total = total;

    console.log('Tilaus tallennettu:', this.orderData);
  }
}
