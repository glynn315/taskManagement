import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id:string): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }

  createUser(data: Omit<User , 'user_id'>): Observable<User>{
    return this.http.post<User>(this.apiUrl, data);
  }



}
