import { Component, OnInit } from '@angular/core';
import {EmailService, ImageDetail, Images } from '../.././service/email.service';
import {ErrordialogService} from '../.././errordialog/errordialog.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  
  fileData: File = null;
  description:string;
  data ={
    reason: '',
    status: '',
    message:'Add one file please'
  };

  constructor(private img:EmailService,public errorDialog:ErrordialogService, private router: ActivatedRoute, private route:Router) { }
  
  // progres de l'upload de l'image
  fileProgress(event) {
      if (event.target.files.length > 0) {
        this.fileData= event.target.files[0];
    }
     
  }
  
  ngOnInit() {
  }
  
 onSubmit() {
   // Creation d'une nouvelle image dans le backend. 
   
   if(!this.description){this.data.message="Describe your photo please!";this.errorDialog.openDialog(this.data);}
    if(this.fileData==null){
      this.errorDialog.openDialog(this.data);
    }
    this.img.uploadImage(this.fileData,this.description).subscribe(res => {
        console.log(res);
        alert('SUCCESS !!');
        this.route.navigate(['../image'],{relativeTo:this.router});
      },err=>{console.log(err)})
}
}

