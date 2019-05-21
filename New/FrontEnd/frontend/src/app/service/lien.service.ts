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

  createLiens(label, path):Observable<any> {
    const lien = {
      label: label,
      path: path
    };
    return this.http.post(`${this.uri}/liens`,lien);
  };
  deleteLiens(id):Observable<any> {
      return this.http.delete(`${this.uri}/liens/${id}`);
  };
}

