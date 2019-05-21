import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '.././service/authentication.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private route:Router,private router: ActivatedRoute,private auth:AuthenticationService) { }
  name:String;
  prename:String;
  retour:String;
  ngOnInit() {
    this.name=this.router.snapshot.params.nom.split('-')[0].toUpperCase() ;
    this.prename=this.router.snapshot.params.nom.split('-')[1].toUpperCase();
    let nom =this.name+'-'+this.prename;
     this.retour= '/home/'+nom;
  }
  
  logout(){
    this.auth.logout();
  } 
}
