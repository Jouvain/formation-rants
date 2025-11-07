import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.devleopment';
import { Token } from '../models/token';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  path: string = '';

  constructor(protected http: HttpClient) { }

  logIn(user: User): Observable<Token> {
    return this.http.post<Token>(`${environment.BACKEND_URL}/authenticate`, user);
  }


  isValid(token: string): boolean {
    const now = Date.now()
    const exp = (jwtDecode(token).exp ?? 0) * 1000
    return exp > now;
  }

  getTokens(user: User): Observable<Token> {
    return this.http.post<Token>(`${environment.BACKEND_URL}/authenticate`, user);
  }
}
