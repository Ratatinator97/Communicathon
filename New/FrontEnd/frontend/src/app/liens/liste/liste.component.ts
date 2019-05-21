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

  InfoLiens: Lien[];
  displayedColumns = ['Label', 'Lien','Actions'];
  ngOnInit() {
    this.verifToken();
    this.fetchLiens();
  }
  newLien() {
    this.router.navigate(['../create'],{relativeTo: this.route});
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
    this.router.navigate(['../edit'],{relativeTo: this.route});
  };
  deleteLien(id) {
    this.liensService.deleteLiens(id).subscribe();
    this.fetchLiens();
  };
}
