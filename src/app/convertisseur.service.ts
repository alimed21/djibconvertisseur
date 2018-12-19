import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertisseurService {

  constructor() { }
  convertirKiloEnLivre = (kilo: number) => {
    return kilo * 2.2046;
  }
  
  convertirMetreEnPied = (metre: number) => {
    return metre * 3.2808;
  }
  
  convertirCelsiusEnFahrenheit = (celsius: number) => {
    return celsius * 9/5 + 32;
  }
}

