import { Component, OnInit } from '@angular/core';
import {CardIDService} from '../.././service/card-id.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {
  donnees: User;
  constructor(private cardIDservice: CardIDService, private router: Router) { }
  logged=true;
  ngOnInit() {
    console.log("Init");
    this.verifToken();
    this.fetchCardID();
    console.log("Get ended");
  }
  
  fetchCardID(){
    this.cardIDservice
    .getCardID()
    .subscribe((data: User) => {
      this.donnees = data;
      console.log('Data requested...');
      console.log(this.donnees);
      console.log("Ci dessus les donnes")
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
    if(!token){
      this.router.navigateByUrl('/');
    }
  }

}
