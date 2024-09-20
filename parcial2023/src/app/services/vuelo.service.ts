import { Injectable } from '@angular/core';
import { Vuelo } from '../models/vuelo';


@Injectable({
  providedIn: 'root'
})
export class VueloService {

  private lVueloInfo: Vuelo[] = [];
  public lMontoTotal: string = '';

  constructor() { }

  //1) añadir un vuelo
  addVuelo(vuelo: Vuelo) 
  {
    this.lVueloInfo.push(vuelo);
    this.lMontoTotal = vuelo.monto;
  }

  //2) Mostrar un vuelo
  getVuelo() 
  {
    return this.lVueloInfo; 
  }

  //3) Eliminar un vuelo
  deleteVuelo(vuelo: Vuelo) 
  {
    const index = this.lVueloInfo.indexOf(vuelo);
    this.lVueloInfo.splice(index, 1);
  }
}
