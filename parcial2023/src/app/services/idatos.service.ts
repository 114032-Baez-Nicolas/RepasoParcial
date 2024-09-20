import { Injectable } from '@angular/core';
import { Datos } from '../models/datos';

@Injectable({
  providedIn: 'root'
})
export class IDatosService {

  private lDatos: Datos[] = [];
  public lNumero: number = 1;

  constructor() { }

  //1) Anadir un dato
  addDatos(dato: Datos){
    this.lDatos.push(dato);
    this.lNumero++;
  }

  //2) Mostrar un dato
  getDato(){
    return this.lDatos;
  }

  //3) Eliminar un dato
  deleteDato(dato: Datos){
    const index = this.lDatos.indexOf(dato);
    this.lDatos.splice(index, 1);
  }
}
