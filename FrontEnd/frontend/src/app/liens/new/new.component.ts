import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LienService } from '../../service/lien.service'
import { routerNgProbeToken } from '@angular/router/src/router_module';
import {ErrordialogService} from '../.././errordialog/errordialog.service';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class LinkCreate implements OnInit {
  selectedFile: File = null;
  modifiedFile: File = null;
  link: string;
  data ={
    reason: '',
    status: '',
    message:'Add one file please'
  };
  constructor(public errorDialog:ErrordialogService,private lienService: LienService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private ng2ImgMax: Ng2ImgMaxService ) {

  }
  fileProgress(event) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.ng2ImgMax.resizeImage(this.selectedFile, 400, 300).subscribe(
        result => {
          this.modifiedFile = result;
        },
        error => {
          console.log('Error', error);
        }
      );
  }
  }

  return(){
    this.router.navigate(['../list'],{relativeTo: this.route});
  }

  onSubmit(){
    console.log("submit recu");
    // On cree un nouveau lien avec les attributs correspondants aux valeurs lues dans le questionnaire
    if(!this.link){this.data.message="Ajoutez un lien a votre photo";this.errorDialog.openDialog(this.data);}
    if(this.modifiedFile==null){
      this.errorDialog.openDialog(this.data);
    }
    console.log("pas d'erreur apparente");
    this.lienService.createLiens(this.modifiedFile, this.link).subscribe( (res) => {
      console.log("Envoye");
      console.log(res);
      this.router.navigate(['../list'],{relativeTo: this.route});
    }, err => {console.log(err);} );
  }
  ngOnInit() {
  }

}
