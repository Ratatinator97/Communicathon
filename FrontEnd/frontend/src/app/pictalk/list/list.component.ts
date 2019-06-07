import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PicTalkService } from '../../service/pic-talk.service';
import { Picto } from '../../model/picto.model';
import { TransferService } from '../transfer.service';

 @Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class PicTalkList implements OnInit {

  tabPicto:Picto[];
  constructor(private transferService: TransferService,private pictoService: PicTalkService, private router: Router, private route: ActivatedRoute) { }
  pictoText="";
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

  fetchPictos(meaning){
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
  speak(){}
}
