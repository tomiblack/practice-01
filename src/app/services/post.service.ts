import { Injectable } from '@angular/core';
import { Observable, EMPTY, of } from 'rxjs';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(environment.baseUrl + '/posts');
  }

  constructor(private httpClient: HttpClient) {}
}
