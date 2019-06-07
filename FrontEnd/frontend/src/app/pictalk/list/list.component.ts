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
  pictoText:string="";
  constructor(private f:SpeechSynthesisUtteranceFactoryService,private svc: SpeechSynthesisService,private transferService: TransferService,private pictoService: PicTalkService, private router: Router, private route: ActivatedRoute) { }
  previousMeaning="";
  previousText="";
  meaning="root";
  ngOnInit() {
    this.verifToken();
    this.fetchPictos(this.meaning);
  }
  verifToken(){
    const token =localStorage.getItem('mean-token');
    if(!token){
      this.router.navigateByUrl('/');
    }
  };
  return(){
    console.log(this.meaning);
    this.meaning=this.previousMeaning;
    console.log(this.meaning);
    this.pictoService.getPicto(this.meaning).subscribe((data)=>{
      this.tabPicto=data;
    })
    this.pictoText = this.previousText;
    
  }
  fetchPictos(meaning){
    this.previousMeaning=this.meaning;
    if(meaning != "root"){
      this.previousText=this.pictoText;
      this.pictoText += (" "+meaning);
      
    }
    this.pictoService.getPicto(meaning).subscribe((data)=>{
      this.tabPicto=data;
      this.meaning=meaning;
    })
  }
  create_folderPicto(){
    let data = {
      folder:'true',
      id: this.meaning
    };

    this.transferService.setData(data);
    this.router.navigate(['../create'],{relativeTo:this.route});
  }
  create_simplePicto(){
    let data = {
      folder:'false',
      id: this.meaning
    };
    this.transferService.setData(data);
    this.router.navigate(['../create'],{relativeTo:this.route});
  }
  speak(){
    for(const text of this.pictoText) {
      const v = this.f.text(text);
      this.svc.speak(this.f.text(text));
    }
  }
}
