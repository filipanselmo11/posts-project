import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInterface } from '../types/post.interface';
import { IdGeneratorService } from './id.generator.service';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseURL = 'http://localhost:8080'

  constructor(private httpClient: HttpClient) { }

  createPost(id: number, userId: number, title: string, body: string, comment: string): Observable<PostInterface> {
    return this.httpClient.post<PostInterface>(`${this.baseURL}/posts`, {
      id,
      userId,
      title,
      body,
      comment
    });
  }

  getPosts(): Observable<PostInterface[]> {
    return this.httpClient.get<PostInterface[]>(
      `${this.baseURL}/posts`
    );
  }

  getPost(id: number): Observable<number> {
    return this.httpClient.get<number>(
      `${this.baseURL}/posts/${id}`
    );
  }

  updatePost(id: number, userId: number, title: string, body: string, comment: string): Observable<PostInterface> {
    return this.httpClient.put<PostInterface>(
      `${this.baseURL}/posts/${id}`,
      {
        userId,
        title,
        body,
        comment
      }
    );
  }

  deletePost(id: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.baseURL}/posts/${id}`
    );
  }
}
