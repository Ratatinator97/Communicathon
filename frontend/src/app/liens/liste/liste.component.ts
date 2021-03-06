import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LienService } from '../../service/lien.service';
import { Lien } from '../../model/lien.model';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class LinkList implements OnInit {

  constructor(private liensService: LienService, private router: Router, private route: ActivatedRoute) { }

  // Fonctionnement identique a "fiches"
  InfoLiens: Lien[];
  displayedColumns = ['Label','Actions'];
  ngOnInit() {
    this.verifToken(); // On verifie tout d'abord le token afin d'accepter d'aller a cette page
    this.fetchLiens(); // On charge ensuite les liens de l'utilisateur
  }
  newLien() {
    this.router.navigate(['../create'],{relativeTo: this.route});
  }
  fetchLiens(){
    this.liensService
      .getLiens()
      .subscribe((data) => {
        console.log(data);
        this.InfoLiens = data;
      });
  };
  
  verifToken(){
    const token =localStorage.getItem('mean-token');
    if(!token){
      this.router.navigateByUrl('/');
    }
  };
  editLiens() {
    this.router.navigate(['../edit'],{relativeTo: this.route});
  };
  deleteLien(id) {
    this.liensService.deleteLiens(id).subscribe();
    this.fetchLiens();
  };
}
