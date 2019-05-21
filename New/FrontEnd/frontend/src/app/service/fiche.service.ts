import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ficheWEservice {
  uri = 'http://localhost:4000/api'; 
  constructor(private http: HttpClient) { }

  getFicheWE():Observable<any> {
    return this.http.get(`${this.uri}/fiches`);
  }


  createFicheWE(date_samedi, date_dimanche, Samedi_matin, Samedi_midi, Samedi_soir, Dimanche_matin, Dimanche_midi, Dimanche_soir):Observable<any> {
    const fiche = {
      date_samedi: date_samedi,
      date_dimanche: date_dimanche,
      Samedi_matin: Samedi_matin,
      Samedi_midi: Samedi_midi,
      Samedi_soir: Samedi_soir,
      Dimanche_matin: Dimanche_matin,
      Dimanche_midi: Dimanche_midi,
      Dimanche_soir: Dimanche_soir
    };
    return this.http.post(`${this.uri}/fiches`, fiche)
  }

  updateFicheWE(date_samedi, date_dimanche, Samedi_matin, Samedi_midi, Samedi_soir, Dimanche_matin, Dimanche_midi, Dimanche_soir):Observable<any> {
    const ficheWE_info={
        date_samedi: date_samedi,
        date_dimanche: date_dimanche,
        Samedi_matin: Samedi_matin,
        Samedi_midi: Samedi_midi,
        Samedi_soir: Samedi_soir,
        Dimanche_matin: Dimanche_matin,
        Dimanche_midi: Dimanche_midi,
        Dimanche_soir: Dimanche_soir
    };
    const user_info = {
      fiches: ficheWE_info
    };
    return this.http.put(`${this.uri}/fiches`, ficheWE_info);
  }

  deleteFicheWE(id):Observable<any> {
    return this.http.delete(`${this.uri}/fiches/${id}`);
  }
}
