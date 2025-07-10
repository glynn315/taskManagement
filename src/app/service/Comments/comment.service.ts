import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Comment } from '../../model/Comment/comment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = `${environment.apiUrl}/comments`;
  constructor(private http: HttpClient) { }

  addComments(post:Comment): Observable<Comment>{
    return this.http.post<Comment>(this.apiUrl,post);
  }

  displayCommentTask(task_id: string): Observable<Comment>{
    return this.http.get<Comment>(`${this.apiUrl}/${task_id}`);
  }

}
