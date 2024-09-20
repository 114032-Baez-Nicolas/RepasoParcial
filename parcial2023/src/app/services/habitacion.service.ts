import { Injectable } from '@angular/core';
import { Habitacion } from '../models/habitacion';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  private lHabitacionInfo: Habitacion[] = [];

  constructor() { }

  //1) añadir una habitación
  addHabitacion(habitacion: Habitacion) {
    this.lHabitacionInfo.push(habitacion);
  }

  //2) Mostrar una habitación
  getHabitacion() {
    return this.lHabitacionInfo;
  }

  //3) Eliminar una habitación
  deleteHabitacion(habitacion: Habitacion) 
  {
    this.lHabitacionInfo.splice(this.lHabitacionInfo.indexOf(habitacion), 1);
  }
}
