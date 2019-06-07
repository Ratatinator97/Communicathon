import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeIconeService } from '../../service/icone-home.service';

@Component({
  selector: 'app-home-icones',
  templateUrl: './home-icones.component.html',
  styleUrls: ['./home-icones.component.css']
})
export class HomeIconesComponent implements OnInit {

  tabIcones: any[];

  constructor(private icones : HomeIconeService) { }

  ngOnInit() {
    
    // Utiliser le service HomeIconeService afin de recuperer les icones presents
    // Ceci permet un affichage dynamique en fonction du nombre d'icones et non en statique, hardcode en HTML.
    this.tabIcones = this.icones.mesIcones

    
  }

}
