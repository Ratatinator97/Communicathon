import { Component, OnInit, Testability } from '@angular/core';
import { Router } from '@angular/router';
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
  logged=true;
  name:String;
  prename:String;
  constructor(private route:Router,private router: ActivatedRoute,private auth:AuthenticationService) { }

  ngOnInit() {
    this.name=this.router.snapshot.params.nom.split('-')[0].toUpperCase() ;
    this.prename=this.router.snapshot.params.nom.split('-')[1].toUpperCase();
  }
  logout(){
    this.auth.logout();
  }   
  
}
