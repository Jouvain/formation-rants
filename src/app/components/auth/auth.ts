import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { JwtService } from '../../services/jwt';

@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class AuthComponent {
  username: string = '';
  password: string = '';
  isWrong: boolean = false;
  erreur: string|null = null;
  user: User = {}

  constructor(private router: Router, private jwtService: JwtService) {}

  login(form: NgForm) {
    this.user.grantType = "PASSWORD";
    this.jwtService.logIn(this.user).subscribe({
      next: response => {
        localStorage.setItem('isConnected', 'true')
        localStorage.setItem('accessToken', response.accessToken ?? '')
        localStorage.setItem('refreshToken', response.refreshToken ?? '')
        localStorage.setItem('user', JSON.stringify(this.user))
      },
      error: err => {
        this.erreur = "Identifiants incorrects"
      }
    })
  }
}
