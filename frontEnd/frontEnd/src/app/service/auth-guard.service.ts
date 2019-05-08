import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
//Decider si maintenir les routers ou pas, dependant si user logge ou pas
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) {}

  canActivate() {
    if (!this.auth.isLoggedIn()) {
      this.auth.logout();
      return false;
    }
    return true;
  }
}