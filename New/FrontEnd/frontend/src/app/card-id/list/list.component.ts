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
    this.router.navigate(['../edit'],{relativeTo: this.route});
  }
  
  

  

}
