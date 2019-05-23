import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '.././service/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,FormBuilder,ReactiveFormsModule } from '@angular/forms';
import {ErrordialogService} from '.././errordialog/errordialog.service';
@Component({
  selector: 'app-forgetpw',
  templateUrl: './forgetpw.component.html',
  styleUrls: ['./forgetpw.component.css']
})
export class ForgetpwComponent implements OnInit {
   resetForm :FormGroup;
   data = {
              reason: '',
              status: '',
              message:'Not Valid resetform'
            };
   credentials: TokenPayload = {
    email: '',
    password: ''
  };
  constructor(private auth: AuthenticationService, private router: Router,public errorDialog:ErrordialogService) { }

  reset() {
    if(!this.checkValide(this.resetForm)){
      this.errorDialog.openDialog(this.data);
    }else{
     this.auth.resetpw(this.credentials).subscribe((mes) => {
      // regarder authentification service pour comprendre la fonction d'au dessus 
      
      alert('Your password is reset. One message is sent to your email for confirming new password')
      this.router.navigate(['/login']);          

    }, (err) => {
      this.data.message=err.error.message;
      this.errorDialog.openDialog(err.error.message);
    }); 
  }
}
  ngOnInit() {
  	this.createForm();
  }

  private createForm(){
    this.resetForm =new FormGroup({

      // Definition des caracteristiques du questionnaire
      // Meme politique que pour Register
      email:new FormControl('', [Validators.required] ),
      password:new FormControl('',[Validators.required, Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.].{0,}')]),
      confirmpassword:new FormControl('',[Validators.required])
  	},this.checkPassword);
  }
  checkPassword(group:FormGroup){

    // Est ce que les password correspondent ?
  	let pw=group.controls.password.value;
  	let cpw =group.controls.confirmpassword.value;
  	if (cpw!==pw){
      group.controls.confirmpassword.setErrors({'notSame':true});
      return {'notSame':true};
    }else{
      return null;
    }
  }

  get f() { return this.resetForm.controls; }

  checkValide(group:FormGroup):boolean{
    if(!this.resetForm.invalid){
       this.credentials.email=group.controls.email.value;
       this.credentials.password=group.controls.password.value;
       return true;
    }
    return false;
  }
}
