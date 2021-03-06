import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PostModel } from '../models/post.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<PostModel[]>(`${environment.apiUrl}posts`);
  }
}
