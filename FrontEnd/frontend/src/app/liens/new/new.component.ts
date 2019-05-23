import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LienService } from '../../service/lien.service'
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class LinkCreate implements OnInit {
  
  createForm: FormGroup;
  constructor(private lienService: LienService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.createForm = this.fb.group({
      label: ['', Validators.required],
      path: ['', Validators.required]

    });
  }
  return(){
    this.router.navigate(['../list'],{relativeTo: this.route});
  }
  addLien(label, path){
    // On cree un nouveau lien avec les attributs correspondants aux valeurs lues dans le questionnaire
    this.lienService.createLiens(label, path).subscribe( () => {
      this.router.navigate(['../list'],{relativeTo: this.route});
    });
  }
  ngOnInit() {
  }

}
