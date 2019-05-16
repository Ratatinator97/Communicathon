import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CardIDService {
  uri = 'http://localhost:4000/api'; 
  constructor(private http: HttpClient) { }

  getCardID(): Observable<any> {
    return this.http.get(`${this.uri}/cardID`);
  }

  updateCardID(address, pphone, c1name, c1phone, c1email, c2name, c2phone, c2email, med_data, talk_ab, understand_ab, know_lang  ):Observable<any> {
    
    const cardID_info={
      address: address,
      phone : pphone,
      contact1: {
        name: c1name,
        phone: c1phone,
        email: c1email
      },
      contact2: {
        name:c2name,
        phone: c2phone,
        email: c2email
      },
      medical_Data: med_data,
      talk_Ability: talk_ab,
      understand_Ability:understand_ab,
      known_Languages:know_lang
    };
    const user_info = {
      cardID: cardID_info
    };
    return this.http.put(`${this.uri}/cardID`, user_info);
  }
}

