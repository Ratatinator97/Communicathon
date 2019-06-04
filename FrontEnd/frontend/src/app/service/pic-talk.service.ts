import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicTalkService {
  uri = 'http://localhost:4000/api'; 
  constructor(private http: HttpClient) { }

  getPicto(meaning): Observable<any> {
    return this.http.get(`${this.uri}/pictalk/${meaning}`)
  }

  createPicto(file: File, picto, father):Observable<any> {
    const formData = new FormData;
    formData.append('picto',picto);
    formData.append('file',file,file.name);
    return this.http.post(`${this.uri}/pictalk/${father}`,formData);
  }
  deletePicto(id):Observable<any> {
    return this.http.delete(`${this.uri}/pictalk/${id}`);
  }
}
