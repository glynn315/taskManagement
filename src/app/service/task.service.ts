import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl=`${environment.apiUrl}/task`;
  constructor(private http: HttpClient) { }

  taskList(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(post:Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, post);
  }
}
