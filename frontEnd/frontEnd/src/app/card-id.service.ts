import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardIDService {
  uri = 'http://localhost:4000'; 
  constructor(private http: HttpClient) { }

  getCardID() {
    return this.http.get(`${this.uri}/CardID`);
  }

  getCardIDbyId(id) {
    return this.http.get(`${this.uri}/CardID/${id}`);
  }

  addCardID(nom, prenom) {
    const cardID_info = {
      nom: nom,
      prenom: prenom
    };
    return this.http.post(`${this.uri}/CardID/`, cardID_info);
  }

  updateCardID(id, nom, prenom) {
    const cardID_info = {
      nom: nom,
      prenom: prenom
    };
    return this.http.put(`${this.uri}/CardID/${id}`, cardID_info);
  }

  deleteCardID(id) {
    return this.http.delete(`${this.uri}/CardID/${id}`);
  }
}
