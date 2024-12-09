import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  getQuestions(){ 
    return ["firstName", "lastName", "personID", "email", "userName", "password", "password2"]
  }
}
