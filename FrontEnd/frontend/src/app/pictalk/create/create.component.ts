import { Component, OnInit } from '@angular/core';
import {ErrordialogService} from '../.././errordialog/errordialog.service';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  PicTalkService} from '../../service/pic-talk.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TransferService } from '../transfer.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class PicTalkCreate implements OnInit {

  constructor(private transferService: TransferService, public errorDialog:ErrordialogService,private pictalkService: PicTalkService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private ng2ImgMax: Ng2ImgMaxService ) { }

  dataPicto=this.transferService.getData();
  
  selectedFile: File = null;
  modifiedFile: File = null;
  data ={
    reason: '',
    status: '',
    message:'Add one file please'
  };
  meaning:String;
  ngOnInit() {
  }
  fileProgress(event) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.ng2ImgMax.resizeImage(this.selectedFile, 300, 300).subscribe(
        result => {
          this.modifiedFile = result;
        },
        error => {
          console.log('Error', error);
        }
      );
  }
  }
  onSubmit(){
    // On cree un nouveau lien avec les attributs correspondants aux valeurs lues dans le questionnaire
    if(!this.meaning){this.data.message="Ajoutez un lien a votre photo";this.errorDialog.openDialog(this.data);}
    if(this.modifiedFile==null){
      this.errorDialog.openDialog(this.data);
    }
    console.log(this.modifiedFile,this.meaning, this.dataPicto.id);
    this.pictalkService.createPicto(this.modifiedFile,this.meaning, this.dataPicto.id ).subscribe( (res) => {
      console.log(res);
      this.router.navigate(['../list'],{relativeTo: this.route});
    }, err => {console.log(err);} );
  }

}
