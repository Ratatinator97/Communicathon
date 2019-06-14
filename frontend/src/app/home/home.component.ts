import { Component, OnInit, Testability } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HomeIconesComponent } from './home-icones/home-icones.component';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '.././service/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  name:String;
  prename:String;
  constructor(private router: ActivatedRoute,private auth:AuthenticationService) { }

  ngOnInit() {

  }
  
  
}
