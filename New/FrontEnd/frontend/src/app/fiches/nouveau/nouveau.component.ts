import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ficheWEservice } from '../.././service/fiche.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-nouveau',
  templateUrl: './nouveau.component.html',
  styleUrls: ['./nouveau.component.css']
})
export class FicheWECreate implements OnInit {
  createForm: FormGroup;
  constructor(private ficheWEservice: ficheWEservice, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.createForm = this.fb.group({
      date_samedi: ['', Validators.required],
      date_dimanche: ['', Validators.required],
      Samedi_matin: ['', Validators.required],
      Samedi_midi: ['', Validators.required],
      Samedi_soir: ['', Validators.required],
      Dimanche_matin: ['', Validators.required],
      Dimanche_midi: ['', Validators.required],
      Dimanche_soir: ['', Validators.required]

    });
   }

   addFicheWE(date_samedi, date_dimanche, Samedi_matin, Samedi_midi, Samedi_soir, Dimanche_matin, Dimanche_midi, Dimanche_soir){
    this.ficheWEservice.createFicheWE(date_samedi, date_dimanche, Samedi_matin, Samedi_midi, Samedi_soir, Dimanche_matin, Dimanche_midi, Dimanche_soir).subscribe( () => {
      this.router.navigate(['../list'],{relativeTo: this.route});
    });
  }
  return(){
    this.router.navigate(['../list'],{relativeTo: this.route});
  }
  ngOnInit() {
  }

}
