import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ficheWEservice {
  uri = 'http://localhost:4200/api'; 
  constructor(private http: HttpClient) { }

  getFicheWE():Observable<any> {
    return this.http.get(`${this.uri}/fiches`);
  }

  createFicheWE(label,path):Observable<any> {
    const fiche = {
      label: label,
      path:path
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
    return this.http.put(`${this.uri}/fiches`, ficheWE_info);
  }

  deleteFicheWE(id):Observable<any> {
    return this.http.delete(`${this.uri}/fiches/${id}`);
  }
}
