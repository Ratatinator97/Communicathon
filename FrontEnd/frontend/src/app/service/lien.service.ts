import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class LienService {
  uri = 'http://localhost:4000/api'; 
  constructor(private http: HttpClient) { }

  getLiens():Observable<any> {
    return this.http.get(`${this.uri}/liens`);
  };

  createLiens(file: File, link):Observable<any> {
    const formData = new FormData;
    formData.append('link', link);
    formData.append('file', file, file.name);
    return this.http.post(`${this.uri}/liens`,formData);
  };
  
  deleteLiens(id):Observable<any> {
      return this.http.delete(`${this.uri}/liens/${id}`);
  };


}

