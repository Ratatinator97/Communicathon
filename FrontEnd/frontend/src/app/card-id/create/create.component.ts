import { Component, OnInit } from '@angular/core';
import {CardIDService} from '../.././service/card-id.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private cardIDservice: CardIDService) { }

  ngOnInit() {}
}
