import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HabitacionService } from '../../services/habitacion.service';
import { Habitacion } from '../../models/habitacion';

@Component({
  selector: 'app-seccion-habitaciones',
  standalone: true,
  imports: [],
  templateUrl: './seccion-habitaciones.component.html',
  styleUrl: './seccion-habitaciones.component.css'
})
export class SeccionHabitacionesComponent {

  img?: string;
  tipo?: string;
  icon1?: string;
  icon2?: string;
  icon3?: string;

  limpiar() {
    this.img = undefined;
    this.tipo = undefined;
    this.icon1 = undefined;
    this.icon2 = undefined;
    this.icon3 = undefined;
  }

  constructor(private router: Router, public habitacionService: HabitacionService) { }

  guardarHabitacion(img: string, tipo: string, icon1: string, icon2: string, icon3: string) {
    const nuevaHabitacion: Habitacion =
    {
      img: img,
      tipo: tipo,
      icon1: icon1,
      icon2: icon2,
      icon3: icon3
    };
    this.habitacionService.addHabitacion(nuevaHabitacion);
    console.log(nuevaHabitacion);
    this.limpiar();
    this.router.navigate(['/reserva']);
  }
}
