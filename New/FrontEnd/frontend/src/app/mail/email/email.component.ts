import { Component, OnInit } from '@angular/core';
import {EmailService, ImageDetail, Images } from '../.././service/email.service';
import {ErrordialogService} from '../.././errordialog/errordialog.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  images:Images[];
  message:String;
  data ={reason: '',
         status: '',
         message:'Chose one picture please'};
  cardIdEdit:String;
  constructor(private img:EmailService,public errorDialog:ErrordialogService, private router: ActivatedRoute,private route:Router) { }
  
  ngOnInit() {
    this.cardIdEdit='../../cardid/edit';
  	this.img.getImage().subscribe(photos=>
  		{ 
        this.images=new Array<Images>();
        for(let i=0;i<photos.length;i++){
          this.images[i]=new Images(photos[i].path,photos[i].description,photos[i].contenttype);
        }
         
         console.log(this.images);
         
  		},err=>{console.log(err)})
  }
  
  ChoisiImage(event,picto){
    for(let i=0;i<this.images.length;++i){
       this.images[i].state=false;
    }
    picto.state=true;
    var value =picto.description.split('_');
    this.message=value.join(" ");

  }
  email(){
    if(this.message==undefined){this.errorDialog.openDialog(this.data);}
    else{this.img.sendImage(this.message).subscribe((msg)=>{
     alert('Message is sent');
    
    },err=>{console.log(err);
     
      })}
  }
  upload(){
    this.route.navigate(["../upload"],{relativeTo:this.router});
  }

}
