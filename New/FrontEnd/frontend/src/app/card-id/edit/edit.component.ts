import { Component, OnInit } from '@angular/core';
import {CardIDService} from '../.././service/card-id.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private cardIDservice: CardIDService) { }

  ngOnInit() {
  }

}
