import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  // Est-ce que on accepte les routes en fonction des données présentes sur le Token
  // Si le token n'est pas valide, on n'accepte pas l'utilisateur
  constructor(private auth: AuthenticationService, private router: Router) {}

  canActivate() {
      let token;
      token=localStorage.getItem('mean-token');
      
    if(this.auth.isLoggedIn()==false){
      if(token){	

        localStorage.removeItem('mean-token');
      }
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}