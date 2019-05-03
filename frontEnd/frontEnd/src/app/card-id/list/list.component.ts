import { Component, OnInit } from '@angular/core';
import {CardIDService} from '../../card-id.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { CardID } from '../../cardID.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: CardID[];
  displayedRaws = ['nom', 'prenom'];
  constructor(private cardIDservice: CardIDService, private router: Router) { }

  ngOnInit() {
    this.fetchCardID();
  }
  fetchCardID(){
    this.cardIDservice
    .getCardID()
    .subscribe((data: CardID[]) => {
      this.list = data;
      console.log('Data requested...');
      console.log('this.list');
    });
  }
  editCardID(id) {
    this.router.navigate(['/edit/$(id)']);
  }
  deleteCardID(id) {
    this.cardIDservice.deleteCardID(id).subscribe(()=> {
      this.fetchCardID();
    })
  }
}
