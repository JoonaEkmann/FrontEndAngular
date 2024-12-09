import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Person } from '../models/person';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
person: any = new Person();

checkbox = false;

onSubmit(form: any) {
  if (form.valid) {
    console.log('Form Data:', this.person);
    console.log('Checkbox:', this.checkbox);
    form.resetForm();
  }
}
}

