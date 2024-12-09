import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userEmail = new BehaviorSubject<string | null>(null);

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    // Seuraa käyttäjän tilaa
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userEmail.next(user.email);
      } else {
        this.userEmail.next(null);
      }
    });
  }

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.signOut().then(() => this.router.navigate(['/hello']));
  }

  getUser(): Observable<firebase.User | null> {
    return this.afAuth.authState;
  }

  isAuthenticated(): Observable<boolean> {
    return this.afAuth.authState.pipe(map(user => !!user));
  }

  checkLoggedInUser(): Observable<string | null> {
    return this.userEmail.asObservable();
  }
}
