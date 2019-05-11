import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '.././service/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators,FormBuilder,ReactiveFormsModule } from '@angular/forms';
import {ErrordialogService} from '.././errordialog/errordialog.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
   registreForm :FormGroup;
    data ={
              reason: '',
              status: '',
              message:'Not Valid register form'};
   credentials: TokenPayload = {
    email: '',
    nom: '',
    prenom:'',
    password: '',

  };

  constructor(private auth: AuthenticationService, private router: Router,public errorDialog:ErrordialogService) {}
  //Si registre bien, passe au profil
  register() {
    if(!this.checkValide(this.registreForm)){
    	 this.errorDialog.openDialog(this.data);
    }else{
      this.checkValide(this.registreForm);
      this.auth.register(this.credentials).subscribe(() => {
        this.router.navigateByUrl('cardID/list');
          alert('Bien registre');
       }, (err) => {
          this.errorDialog.openDialog(err);
          console.error(err.error.message);
    });}
  }
  ngOnInit() {
     this.createForm();
  }
  private createForm(){
  	this.registreForm =new FormGroup({
  		nom: new FormControl('',[Validators.required]),
  		prenom: new FormControl('',[Validators.required]),
  		email:new FormControl('', [Validators.required,Validators.email] ),
  		password:new FormControl('',[Validators.required, Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.].{0,}')]),
  		confirmpassword:new FormControl('',[Validators.required])
  	},this.checkPassword);
  }
   get f() { return this.registreForm.controls; }
  checkPassword(group:FormGroup){
  	let pw=group.controls.password.value;
  	let cpw =group.controls.confirmpassword.value;
  	if (cpw!==pw){
      group.controls.confirmpassword.setErrors({'notSame':true});
      return {'notSame':true};
    }else{
      return null;
    }
  }
  checkValide(group:FormGroup):boolean{
  	if(!this.registreForm.invalid){
       this.credentials.email=group.controls.email.value;
       this.credentials.password=group.controls.password.value;
       this.credentials.nom=group.controls.nom.value;
       this.credentials.prenom=group.controls.prenom.value;
       return true;
  	}else{
      console.log(group.controls.nom);
    }
  	return false;
  }

}
