import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { CardIDService } from '../../service/card-id.service'

import { User } from '../../model/user.model'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class CardIDEdit implements OnInit {

  constructor(private cardIDservice: CardIDService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();
   }
  info: any = {};
  updateForm: FormGroup;
  return() {
    this.router.navigate(['../list'],{relativeTo: this.route});
  }
  createForm() {
    this.updateForm = this.fb.group({
      address: '', 
      pphone:'', 
      c1name:'', 
      c1phone:'', 
      c1email:'', 
      c2name:'', 
      c2phone:'', 
      c2email:'', 
      medical_Data:'', 
      talk_Ability:'', 
      understand_Ability:'', 
      known_Languages:''
    });
  }
  
  
  
  ngOnInit() {
    
      
      this.cardIDservice.getCardID().subscribe( res =>  {
        this.info = res.cardID;
        this.updateForm.get('address').setValue(this.info.address);
        this.updateForm.get('pphone').setValue(this.info.phone);
        this.updateForm.get('c1name').setValue(this.info.contact1.name);
        this.updateForm.get('c1phone').setValue(this.info.contact1.phone);
        this.updateForm.get('c1email').setValue(this.info.contact1.email);
        this.updateForm.get('c2name').setValue(this.info.contact2.name);
        this.updateForm.get('c2phone').setValue(this.info.contact2.phone);
        this.updateForm.get('c2email').setValue(this.info.contact2.email);
        this.updateForm.get('medical_Data').setValue(this.info.medical_Data);
        this.updateForm.get('talk_Ability').setValue(this.info.talk_Ability);
        this.updateForm.get('understand_Ability').setValue(this.info.understand_Ability);
        this.updateForm.get('known_Languages').setValue(this.info.known_Languages);
      });
  }
  updateCardID(address, pphone, c1name, c1phone, c1email, c2name, c2phone, c2email, medical_Data, talk_Ability, understand_Ability, known_Languages){
    this.cardIDservice.updateCardID( address, pphone, c1name, c1phone, c1email, c2name, c2phone, c2email, medical_Data, talk_Ability, understand_Ability, known_Languages).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 3000
      });
      this.router.navigate(['../list'],{relativeTo: this.route});
    });
    
  }
}
