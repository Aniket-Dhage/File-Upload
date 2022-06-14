import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpclient: HttpClient) { }

  postDocument(UploadDocument: any): Observable<Document>
  {
    return this.httpclient.post<Document>("http://localhost:9090/document/addfiles",UploadDocument);
  }

  getDocuments(): Observable<Document[]>{

    return this.httpclient.get<Document[]>("http://localhost:9090/document/getfiles")
  }
}
