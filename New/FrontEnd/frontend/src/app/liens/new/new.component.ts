import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lienService } from '../../service/lien.service'
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  
  createForm: FormGroup;
  constructor(private lienService: lienService, private fb: FormBuilder, private route: Router) {
    this.createForm = this.fb.group({
      label: ['', Validators.required],
      path: ['', Validators.required]

    });
  }
  addLien(label, path){
    this.lienService.createLiens(label, path).subscribe( () => {
      this.route.navigateByUrl('/liens/liste');
    });
  }
  ngOnInit() {
  }

}
