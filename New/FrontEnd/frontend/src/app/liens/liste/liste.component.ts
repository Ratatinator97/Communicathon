import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lienService } from '../../service/lien.service';
import { Lien } from '../../model/lien.model';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  constructor(private liensService: lienService, private router: Router) { }

  InfoLiens: Lien[];
  displayedColumns = ['Label', 'Lien','Actions'];
  ngOnInit() {
    this.verifToken();
    this.fetchLiens();
  }
  fetchLiens(){
    this.liensService
      .getLiens()
      .subscribe((data: Lien[]) => {
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
    this.router.navigate(['/liens/edit']);
  };
  deleteLien(id) {
    this.liensService.deleteLiens(id).subscribe();
    this.fetchLiens();
  };
}
