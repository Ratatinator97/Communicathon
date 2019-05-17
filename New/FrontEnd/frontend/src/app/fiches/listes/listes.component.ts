import { Component, OnInit } from '@angular/core';
import { ficheWEservice } from '../.././service/fiche.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { FicheWE } from '../../model/fiche.model';

@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
  styleUrls: ['./listes.component.css']
})
export class ListesComponent implements OnInit {
  donnees: FicheWE[];
  constructor(private ficheWEservice: ficheWEservice, private router: Router) { }
  logged=true;

  ngOnInit() {
    this.verifToken();
    this.fetchFicheWE();
  }

  fetchFicheWE(){
    this.ficheWEservice
    .getFicheWE()
    .subscribe((data: FicheWE[]) => {
      this.donnees = data;
      console.log(this.donnees);
    });
  };

  verifToken(){
    const token =localStorage.getItem('mean-token');
    if(!token){
      this.router.navigateByUrl('/');
    }
  };

  gettingFicheWE(){
    this.ficheWEservice.getFicheWE().subscribe();
  };

  editFicheWE() {
    this.router.navigate(['/fiches/edit']);
  };
  
  deleteFicheWE(id) {
    this.ficheWEservice.deleteFicheWE(id).subscribe();
    this.fetchFicheWE();
  };

}
