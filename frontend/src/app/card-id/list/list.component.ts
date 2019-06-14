import { Component, OnInit } from '@angular/core';
import {CardIDService} from '../.././service/card-id.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class CardIDList implements OnInit {

  user: User;
  
  constructor(private cardIDservice: CardIDService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.fetchCardID(); // On charge les données de la CardID de l'user
  }
  
  fetchCardID(){
    this.cardIDservice
    .getCardID()
    .subscribe((data: User) => {
      this.user = data; // On met les infos recues dans une variable qui peut etre lue par le HTML
    });
  }

  editCardID() {
    this.router.navigate(['../edit'],{relativeTo: this.route});
  }
  
  

  

}
