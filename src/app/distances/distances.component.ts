import { Component, OnInit } from '@angular/core';
import { ConvertisseurService } from '../convertisseur.service';

@Component({
  selector: 'app-distances',
  templateUrl: './distances.component.html',
  styleUrls: ['./distances.component.css']
})
export class DistancesComponent implements OnInit {
  distances= '';


  convertir = (event: any) => {
  
    if (event.target.value !='') {
      this.distances = this.convertisseur.convertirMetreEnPied(event.target.value).toFixed(2);
    } else {
      this.distances = '';
    }
  
      }
  
    constructor(private convertisseur: ConvertisseurService) {
  
    }
  ngOnInit() {
  }

}
