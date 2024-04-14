import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comm } from '../interfaces/comm.interface';

@Injectable({
  providedIn: 'root',
})
export class CommService {
  constructor(private http: HttpClient) {}

  getComments(): Observable<Comm[]> {
    return this.http.get<Comm[]>(
      'https://jsonplaceholder.typicode.com/posts/1/comments'
    );
  }
}
