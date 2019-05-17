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

  user: User;
  
  constructor(private cardIDservice: CardIDService, private router: Router) { }
  ngOnInit() {
    this.verifToken();
    console.log("Token OK");
    this.fetchCardID();
    console.log("fetched all the stuffs");
  }
  
  fetchCardID(){
    this.cardIDservice
    .getCardID()
    .subscribe((data: User) => {
      console.log("Gathering the data");
      this.user = data;
    });
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
