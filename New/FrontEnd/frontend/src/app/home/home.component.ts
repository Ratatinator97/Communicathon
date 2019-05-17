import { Component, OnInit, Testability } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeIconesComponent } from './home-icones/home-icones.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  constructor(private route:Router) { }
  logged=true;
  ngOnInit() {
    // this.verif_token();
  }
  // verif_token(){
  //   const token =localStorage.getItem('mean-token');
  //   console.log(token);
  //   if(!token){
  //     this.route.navigateByUrl('/');
  //   }
  // }
}
