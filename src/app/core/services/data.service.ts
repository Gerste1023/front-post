import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map } from 'rxjs/operators';
import { UserPostModel } from '../models/user-post.model';
import { AutorService } from './autor.service';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    private http: HttpClient,
    private postSvc: PostService,
    private userSvc: AutorService
  ) {}

  getData() {
    return this.userSvc
      .getAll()
      .pipe(
        exhaustMap((users) =>
          this.postSvc
            .getAll()
            .pipe(
              map((post) =>
                post.map(
                  (p) =>
                    new UserPostModel(
                      users.find((u) => u.id === p.userId).name,
                      users.find((u) => u.id === p.userId).email,
                      p.title,
                      p.body
                    )
                )
              )
            )
        )
      );
  }
}
