import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AutorService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<UserModel[]>(`${environment.apiUrl}users`);
  }
}
