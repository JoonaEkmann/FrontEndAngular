import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'], // HUOM! Monikollinen "styleUrls"
})
export class ReactiveFormComponent {
  profileForm: FormGroup;
  questions: any;

  constructor(private fb: FormBuilder, private questionsService: QuestionsService) { // Oikein injectattu service
    this.questions = this.questionsService.getQuestions();
    this.profileForm = this.fb.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-öA-Ö]*$')]],
        lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-öA-Ö]*$')]],
        personID: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])([5-9]\\d\\+|\\d\\d[-U-Y]|[0-2]\\d[A-F])\\d{3}[\\dA-Z]$'
            )
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        userName: ['', [Validators.required, Validators.minLength(6)]],
        password1: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')
          ]
        ],
        password2: ['', [Validators.required]],
        checkbox: [false, Validators.requiredTrue],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(form: AbstractControl): ValidationErrors | null {
    const password1 = form.get('password1')?.value;
    const password2 = form.get('password2')?.value;

    if (password1 && password2 && password1 !== password2) {
      form.get('password2')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      form.get('password2')?.setErrors(null);
      return null;
    }
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Form Data:', this.profileForm.value);
      this.profileForm.reset();
    }
  }
}
