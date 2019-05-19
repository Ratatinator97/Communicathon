import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
//Decider si maintenir les routers ou pas, dependant si user logge ou pas
@Injectable()
export class AuthGuardService implements CanActivate {

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