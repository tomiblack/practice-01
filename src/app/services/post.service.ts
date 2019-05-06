import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, UpdatePost } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(environment.baseUrl + '/posts');
  }

  get(id: string): Observable<Post> {
    return this.httpClient.get<Post>(environment.baseUrl + `/posts/${id}`);
  }

  update(id: string, post: UpdatePost): Observable<Post> {
    return this.httpClient.put<Post>(
      environment.baseUrl + `/posts/${id}`,
      post
    );
  }

  constructor(private httpClient: HttpClient) {}
}
