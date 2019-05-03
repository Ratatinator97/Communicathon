import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardIDService {
  uri = 'http://localhost:4000'; 
  constructor(private http: HttpClient) { }

  getCardID() {
    return this.http.get(`${this.uri}/cardID`);
  }

  getCardIDbyId(id) {
    return this.http.get(`${this.uri}/cardID/${id}`);
  }

  addCardID(nom, prenom) {
    const cardID_info = {
      nom: nom,
      prenom: prenom
    };
    return this.http.post(`${this.uri}/cardID/`, cardID_info);
  }

  updateIssue(id, nom, prenom) {
    const cardID_info = {
      nom: nom,
      prenom: prenom
    };
    return this.http.put(`${this.uri}/cardID/${id}`, cardID_info);
  }

  deleteIssue(id) {
    return this.http.delete(`${this.uri}/cardID/${id}`);
  }
}
