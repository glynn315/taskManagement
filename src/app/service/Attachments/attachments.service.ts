import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, ObservableLike } from 'rxjs';
import { Attachment } from '../../model/Attachment/attachment.model';

@Injectable({
  providedIn: 'root'
})
export class AttachmentsService {

  private apiUrl = `${environment.apiUrl}/attachments`;

  constructor(private http: HttpClient) { }

  displayAttachment():Observable<Attachment[]>{
    return this.http.get<Attachment[]>(this.apiUrl);
  }

  addTaskAttachment(post:Attachment):Observable<Attachment>{
    return this.http.post<Attachment>(this.apiUrl, post);
  }

  displayAttachmentByTask(id:string):Observable<Attachment>{
    return this.http.get<Attachment>(`${this.apiUrl}/${id}`);
  }
}
