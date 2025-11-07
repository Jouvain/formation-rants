import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.devleopment';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  path: string = '';

  constructor(protected http: HttpClient) {}

  logIn(user: User): Observable<Token> {
    return this.http.post<Token>(`${environment.BACKEND_URL}/authenticate`, user);
  }
}
