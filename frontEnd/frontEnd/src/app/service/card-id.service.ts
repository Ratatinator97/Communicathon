import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardIDService {
  uri = 'http://localhost:4000'; 
  constructor(private http: HttpClient) { }

  getCardID(): Observable<any>{
    return this.http.get(`${this.uri}/cardID/`)
  }

  getCardIDbyId(id):Observable<any> {
    return this.http.get(`${this.uri}/cardID/${id}`);
  }

  updateCardID(id, nom, prenom):Observable<any> {
    const cardID_info = {
      nom: nom,
      prenom: prenom
    };
    return this.http.put(`${this.uri}/cardID/${id}`, cardID_info);
  }

  deleteCardID(id):Observable<any> {
    return this.http.delete(`${this.uri}/cardID/${id}`);
  }
}
