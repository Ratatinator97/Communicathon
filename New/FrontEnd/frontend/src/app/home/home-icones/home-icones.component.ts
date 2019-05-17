import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconeHomeService } from '../../service/icone-home.service';

@Component({
  selector: 'app-home-icones',
  templateUrl: './home-icones.component.html',
  styleUrls: ['./home-icones.component.css']
})
export class HomeIconesComponent implements OnInit {

  tabIcones: any[];

  constructor(private icones : IconeHomeService) { }

  ngOnInit() {
    this.tabIcones = this.icones.mesIcones;
  }

}
