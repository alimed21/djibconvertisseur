import { Component, OnInit } from '@angular/core';
import { ConvertisseurService } from '../convertisseur.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {
  temperatures= '';


  convertir = (event: any) => {
  
    if (event.target.value !='') {
      this.temperatures = this.convertisseur.convertirCelsiusEnFahrenheit(event.target.value).toFixed(2);
    } else {
      this.temperatures = '';
    }
  
      }
  
    constructor(private convertisseur: ConvertisseurService) {
  
    }

  ngOnInit() {
  }

}
