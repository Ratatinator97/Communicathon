import { Component, OnInit } from '@angular/core';
import {CardIDService} from '../.././service/card-id.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { CardID } from '../.././model/cardID.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {
  donnees: CardID;
  constructor(private cardIDservice: CardIDService, private router: Router) { }
  
  ngOnInit() {
    console.log("Init");
    this.verifToken();
    this.fetchCardID();
    console.log("Get ended");
  }
  
  fetchCardID(){
    this.cardIDservice
    .getCardID()
    .subscribe((data: CardID) => {
      this.donnees = data;
      console.log('Data requested...');
    });
  }

  gettingCardID(){
    this.cardIDservice.getCardID().subscribe();
  }

  editCardID() {
    this.router.navigate(['/cardID/edit']);
  }

  verifToken(){
    const token =localStorage.getItem('mean-token');
    console.log(token);
    if(!token){
      this.router.navigateByUrl('/');
    }
  }

}
