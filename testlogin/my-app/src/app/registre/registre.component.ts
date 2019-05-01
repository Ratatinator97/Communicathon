import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

   credentials: TokenPayload = {
    email: '',
    nom: '',
    prenom:'',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}
  //Si registre bien, passe au profil
  register() {
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
      alert('Bien registre');
    }, (err) => {
      console.error(err);
    });
  }
  ngOnInit() {
  }

}
