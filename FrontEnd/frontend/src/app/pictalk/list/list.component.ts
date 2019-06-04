import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PicTalkService } from '../../service/pic-talk.service';
import { Picto } from '../../model/picto.model';

 @Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class PicTalkList implements OnInit {

  tabPicto:Picto[];
  constructor(private pictoService: PicTalkService, private router: Router, private route: ActivatedRoute) { }
  pictoText="";
  meaning="base";
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
    })
  }
  create_folderPicto(){
    this.router.navigate(['../create/folder'],{relativeTo:this.route});
  }
  create_simplePicto(){
    this.router.navigate(['../create/simple'],{relativeTo:this.route});
  }
  speak(){}
}
