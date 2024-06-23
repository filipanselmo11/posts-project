import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInterface } from '../types/post.interface';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseURL = 'http://localhost:8080'

  constructor(private httpClient: HttpClient) { }

  createPost(postData: any): Observable<any> {
    return this.httpClient.post<any>(`${this.baseURL}/posts`,postData);
  }

  getPosts(): Observable<PostInterface[]> {
    return this.httpClient.get<PostInterface[]>(
      `${this.baseURL}/posts`
    );
  }
  deletePost(id: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.baseURL}/posts/${id}`
    );
  }
}
