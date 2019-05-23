import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ficheWEservice } from '../../service/fiche.service';
import { FicheWE } from '../../model/fiche.model';
import { User } from '../../model/user.model';


@Component({
  selector: 'app-edite',
  templateUrl: './edite.component.html',
  styleUrls: ['./edite.component.css']
})

// importation des modules et services necessaires
export class FicheWEEdit implements OnInit {

  constructor(private FicheWEservice: ficheWEservice, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) { 
    this.createForm();
  }
  info: any={};
  updateForm: FormGroup; // Creation du questionnaire
  
  createForm() {
    this.updateForm = this.fb.group({
      date_samedi: '',
      date_dimanche: '',
      Samedi_matin: '', 
      Samedi_midi:'', 
      Samedi_soir:'', 
      Dimanche_matin:'', 
      Dimanche_midi:'', 
      Dimanche_soir:''
    });
}
  
  
  
  ngOnInit() {
      // Recuperer les donnees dans le backend et les afficher ( cela permet a l'utilisateur de ne pas tout retaper )
      this.FicheWEservice.getFicheWE().subscribe( res => {
        this.info = res;
        this.updateForm.get('date_samedi').setValue(this.info.date_samedi);
        this.updateForm.get('date_dimanche').setValue(this.info.date_dimanche);
        this.updateForm.get('Samedi_matin').setValue(this.info.Samedi_matin);
        this.updateForm.get('Samedi_midi').setValue(this.info.Samedi_midi);
        this.updateForm.get('Samedi_soir').setValue(this.info.Samedi_soir);
        this.updateForm.get('Dimanche_matin').setValue(this.info.Dimanche_matin);
        this.updateForm.get('Dimanche_midi').setValue(this.info.Dimanche_midi);
        this.updateForm.get('Dimanche_soir').setValue(this.info.Dimanche_soir);
      });

  }
  // On recupere les donnes dans les champs du questionnaire et on les envoie au backend
  updateFicheWE(date_samedi, date_dimanche, Samedi_matin, Samedi_midi, Samedi_soir, Dimanche_matin, Dimanche_midi, Dimanche_soir){
    this.FicheWEservice.updateFicheWE(date_samedi, date_dimanche, Samedi_matin, Samedi_midi, Samedi_soir, Dimanche_matin, Dimanche_midi, Dimanche_soir).subscribe(() => {
      this.snackBar.open('Fiche updated successfully', 'OK', {
        duration: 3000
      });
      this.router.navigate(['../list'],{relativeTo: this.route});
    });
  }
  return(){
    this.router.navigate(['../list'],{relativeTo: this.route});
  }

}
