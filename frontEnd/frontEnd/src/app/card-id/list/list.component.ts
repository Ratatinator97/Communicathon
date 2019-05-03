import { Component, OnInit } from '@angular/core';
import {CardIDService} from '../../card-id.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private cardIDservice: CardIDService) { }

  ngOnInit() {
  }

}
