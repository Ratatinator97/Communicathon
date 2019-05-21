import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '.././service/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,FormBuilder,ReactiveFormsModule } from '@angular/forms';
import {ErrordialogService} from '.././errordialog/errordialog.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginForm :FormGroup;
   username:String;
   userprename:String;
   data = {
              reason: '',
              status: '',
              message:'Not Valid loginform'
            };
   credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router,public errorDialog:ErrordialogService) {}

  login() {
    if(!this.checkValide(this.loginForm)){
      this.errorDialog.openDialog(this.data);
    }else{
     this.auth.login(this.credentials).subscribe(() => {
      this.path();
      let nom =this.username + '-'+this.userprename;
      this.router.navigate(['/home/'+nom.toLowerCase()]);
     
    }, (err) => {
      console.error(err.error.message);
    }); 
  }
}
  ngOnInit() {
    this.createForm();

  }
   private createForm(){
    this.loginForm =new FormGroup({
     
      email:new FormControl('', [Validators.required] ),
      password:new FormControl('',[Validators.required])
 
    });
  }
  path(){
     const token :string =localStorage.getItem('mean-token');
     let payload;
     if(token){
        payload=token.split('.')[1];
        payload=window.atob(payload);
        payload=JSON.parse(payload);
        this.username=payload.nom;
        this.userprename=payload.prenom;
        return;
     }
  }
  get f() { return this.loginForm.controls; }
  checkValide(group:FormGroup):boolean{
    if(!this.loginForm.invalid){
       this.credentials.email=group.controls.email.value;
       this.credentials.password=group.controls.password.value;
       return true;
    }
    return false;
  }
   
}
