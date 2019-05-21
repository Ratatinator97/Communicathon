import { Component, OnInit } from '@angular/core';
import { ficheWEservice } from '../.././service/fiche.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { FicheWE } from '../../model/fiche.model';
import { User } from '../../model/user.model';



@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
  styleUrls: ['./listes.component.css']
})
export class FicheWEList implements OnInit {
  
  donnees: FicheWE;
  displayedColumns = ['Date_Samedi', 'Date_Dimanche','Samedi_matin', 'Samedi_midi', 'Samedi_soir', 'Dimanche_matin', 'Dimanche_midi', 'Dimanche_soir', 'Actions'];

  constructor(private ficheWEservice: ficheWEservice, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.verifToken();
    this.fetchFicheWE();
  }

  fetchFicheWE(){
    this.ficheWEservice
    .getFicheWE()
    .subscribe((data: FicheWE) => {
      this.donnees = data;
      console.log(this.donnees);
    });
  }

  verifToken(){
    const token =localStorage.getItem('mean-token');
    if(!token){
      this.router.navigateByUrl('/');
    }
  }

  editFicheWE() {
    this.router.navigate(['../edit'],{relativeTo: this.route});
  
  }
  newFiche(){
    this.router.navigate(['../create'],{relativeTo: this.route});
  }
  deleteFicheWE(id) {
    this.ficheWEservice.deleteFicheWE(id).subscribe(() => {
    this.fetchFicheWE();
    });
  }


}
