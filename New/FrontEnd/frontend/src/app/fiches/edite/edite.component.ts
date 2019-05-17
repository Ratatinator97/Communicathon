import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ficheWEservice } from '../../service/fiche.service';

@Component({
  selector: 'app-edite',
  templateUrl: './edite.component.html',
  styleUrls: ['./edite.component.css']
})
export class EditeComponent implements OnInit {

  constructor(private FicheWEservice: ficheWEservice, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();
   }
  ficheWE: any={};
  updateForm: FormGroup;
  
  createForm() {
    this.updateForm = this.fb.group({
      Samedi_matin: '', 
      Samedi_midi:'', 
      Samedi_soir:'', 
      Dimanche_matin:'', 
      Dimanche_midi:'', 
      Dimanche_soir:'', 
    });
}
  
  
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      
      this.FicheWEservice.getFicheWE().subscribe( res => {
        this.ficheWE = res;
        this.updateForm.get('Samedi_matin').setValue(this.ficheWE.Samedi_matin);
        this.updateForm.get('Samedi_midi').setValue(this.ficheWE.Samedi_midi);
        this.updateForm.get('Samedi_soir').setValue(this.ficheWE.Samedi_soir);
        this.updateForm.get('Dimanche_matin').setValue(this.ficheWE.Dimanche_matin);
        this.updateForm.get('Dimanche_midi').setValue(this.ficheWE.Dimanche_midi);
        this.updateForm.get('Dimanche_soir').setValue(this.ficheWE.Dimanche_soir);
      });
    });
  }
  updateFicheWE(Samedi_matin, Samedi_midi, Samedi_soir, Dimanche_matin, Dimanche_midi, Dimanche_soir){
    this.FicheWEservice.updateFicheWE(Samedi_matin, Samedi_midi, Samedi_soir, Dimanche_matin, Dimanche_midi, Dimanche_soir).subscribe(() => {
      this.snackBar.open('Issue updated successfully', 'OK', {
        duration: 3000
      });
    });
  }

}
