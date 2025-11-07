import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.devleopment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string;

  constructor(protected http: HttpClient) {
    this.url = environment.BACKEND_URL + "/users";
  }

  save(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }
}
