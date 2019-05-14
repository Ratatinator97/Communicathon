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
export class EditComponent implements OnInit {

  constructor(private cardIDservice: CardIDService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();
   }
  cardID: any={};
  updateForm: FormGroup;
  
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
    this.route.params.subscribe(params => {
      
      this.cardIDservice.getCardID().subscribe( res => err => {
        this.cardID = res;
        this.updateForm.get('address').setValue(this.cardID.address);
        this.updateForm.get('pphone').setValue(this.cardID.personnal.phone);
        this.updateForm.get('c1name').setValue(this.cardID.contact1.name);
        this.updateForm.get('c1phone').setValue(this.cardID.contact1.phone);
        this.updateForm.get('c1email').setValue(this.cardID.contact1.email);
        this.updateForm.get('c2name').setValue(this.cardID.contact2.name);
        this.updateForm.get('c2phone').setValue(this.cardID.contact2.phone);
        this.updateForm.get('c2email').setValue(this.cardID.contact2.email);
        this.updateForm.get('medical_Data').setValue(this.cardID.medical_Data);
        this.updateForm.get('talk_Ability').setValue(this.cardID.talk_Ability);
        this.updateForm.get('understand_Abilityl').setValue(this.cardID.understand_Ability);
        this.updateForm.get('known_Languages').setValue(this.cardID.known_Languages);
        if(err){
          console.log(err);
        }
      });
    });
  }
  updateCardID(address, pphone, c1name, c1phone, c1email, c2name, c2phone, c2email, medical_Data, talk_Ability, understand_Ability, known_Languages){
    this.cardIDservice.updateCardID( address, pphone, c1name, c1phone, c1email, c2name, c2phone, c2email, medical_Data, talk_Ability, understand_Ability, known_Languages).subscribe(() => err => {
      if(err){
        console.log(err);
      }        
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 3000
      });
    });
  }
}
