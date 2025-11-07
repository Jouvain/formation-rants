import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.devleopment';
import { Observable } from 'rxjs';
import { Formation } from '../models/formation';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  private url: string;

  constructor(protected http: HttpClient) {
    this.url = environment.BACKEND_URL + "/formations";
  }

  findAll(): Observable<Formation[]> {
    return this.http.get<Formation[]>(this.url);
  }

  save(formation: Formation): Observable<Formation> {
    return this.http.post<Formation>(this.url, formation);
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

}
