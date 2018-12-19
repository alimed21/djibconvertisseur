import { Component, OnInit } from '@angular/core';
import { ConvertisseurService } from '../convertisseur.service';
@Component({
  selector: 'app-poids',
  templateUrl: './poids.component.html',
  styleUrls: ['./poids.component.css']
})
export class PoidsComponent implements OnInit {
  poids= '';


  convertir = (event: any) => {
  
    if (event.target.value !='') {
      this.poids = this.convertisseur.convertirKiloEnLivre(event.target.value).toFixed(2);
    } else {
      this.poids = '';
    }
  
      }
  
    constructor(private convertisseur: ConvertisseurService) {
  
    }
  ngOnInit() {
  }

}
