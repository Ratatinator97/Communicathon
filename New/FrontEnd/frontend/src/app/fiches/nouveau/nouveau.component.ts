import { Component, OnInit } from '@angular/core';
import { ficheWEservice } from '../.././service/fiche.service';

@Component({
  selector: 'app-nouveau',
  templateUrl: './nouveau.component.html',
  styleUrls: ['./nouveau.component.css']
})
export class NouveauComponent implements OnInit {

  constructor(private ficheWEservice: ficheWEservice) { }

  ngOnInit() {
  }

}
