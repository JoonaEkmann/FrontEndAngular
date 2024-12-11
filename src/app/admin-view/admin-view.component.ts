import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; 

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css'],
})

export class AdminViewComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
