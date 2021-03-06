import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PicTalkService } from '../../service/pic-talk.service';
import { Picto } from '../../model/picto.model';
import { TransferService } from '../transfer.service';
import {SpeechSynthesisUtteranceFactoryService,SpeechSynthesisService} from '@kamiazya/ngx-speech-synthesis';
 @Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [SpeechSynthesisUtteranceFactoryService],
})
export class PicTalkList implements OnInit {
  synth = window.speechSynthesis;
  tabPicto:Picto[];
  id;
  pictoText:string="";
  constructor(private f:SpeechSynthesisUtteranceFactoryService,private svc: SpeechSynthesisService,private transferService: TransferService,private pictoService: PicTalkService, private router: Router, private route: ActivatedRoute) { }
  previousMeaning="";
  previousText="";
  additionnalText="";
  additionnalMeaning="";

  picto={
    meaning:"root",
    speech:""
  };
  ngOnInit() {
    this.verifToken();
    this.fetchPictos(this.picto);
  }
  verifToken(){
    const token =localStorage.getItem('mean-token');
    if(!token){
      this.router.navigateByUrl('/');
    }
  };
  return(){
    console.log(this.picto.meaning);
    this.picto.speech=this.previousMeaning;
    console.log(this.picto.meaning);
    this.pictoService.getPicto(this.picto.meaning).subscribe((data)=>{
      this.tabPicto=data;
    })
    this.pictoText = this.previousText;
    
  }
  fetchPictos(picto){
    
    console.log(picto);
    if(picto.meaning != "root"){
      this.additionnalText="";
      this.additionnalMeaning="";
      this.previousText=this.pictoText;
      this.previousMeaning=this.picto.meaning;
      this.pictoText += (" "+picto.speech);
      
    }
    this.pictoService.getPicto(picto.meaning).subscribe((data)=>{
      this.tabPicto=data;
      this.picto.meaning=picto.meaning;
      this.id=picto._id;
    })
  }
  addMeaningAndSpeak(meaning,text){
    this.additionnalText=text;
    this.additionnalMeaning=meaning;
    this.speak();
  }
  create_folderPicto(id){
    if(id == undefined){
      id="root";
    }
    let data = {
      folder:"1",
      id: id
    };

    this.transferService.setData(data);
    this.router.navigate(['../create'],{relativeTo:this.route});
  }
  create_simplePicto(id){
    if(id == undefined){
      id="root";
    }
    let data = {
      folder:"0",
      id: id
    };
    this.transferService.setData(data);
    this.router.navigate(['../create'],{relativeTo:this.route});
  }
  speak(){
    if((this.pictoText ==="")&&(this.additionnalText !== "")){
      
      this.svc.speak(this.f.text(this.additionnalText));
    }
    if(this.pictoText.indexOf(" ") === -1){
      
      
    }
    else {
      this.svc.speak(this.f.text(this.pictoText+" "+this.additionnalText));
    }
  }
  removePicto(id){
    this.pictoService.deletePicto(id).subscribe();
    this.fetchPictos(this.picto);
  }
}
