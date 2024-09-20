import { Component, OnInit } from '@angular/core';
import { Vuelo } from '../../models/vuelo';
import { Habitacion } from '../../models/habitacion';
import { VueloService } from '../../services/vuelo.service';
import { HabitacionService } from '../../services/habitacion.service';
import { Datos } from '../../models/datos';
import { IDatosService } from '../../services/idatos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-seccion-reserva',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './seccion-reserva.component.html',
  styleUrl: './seccion-reserva.component.css'
})
export class SeccionReservaComponent implements OnInit {

  oVueloView: Vuelo[] = [];
  oHabitacionView: Habitacion[] = [];

  ID?: number;
  FirstName: string = '';
  LastName: string = '';
  Adress: string = '';
  State: string = '';
  City: string = '';
  IdentificationTipe: string = '';
  IdentificationNumber: string = '';
  NameCard: string = '';
  CreditCardNumber: string = '';
  CVV: string = '';
  ExpirationDate: string = '';

  limpiar() {
    this.FirstName = '';
    this.LastName = '';
    this.Adress = '';
    this.State = '';
    this.City = '';
    this.IdentificationTipe = '';
    this.IdentificationNumber = '';
    this.NameCard = '';
    this.CreditCardNumber = '';
    this.CVV = '';
    this.ExpirationDate = '';
  }

  ultimoId()
  {
    return this.datosService.lNumero;
  }

  constructor(public vueloService: VueloService, public habitacionService: HabitacionService,
    public datosService: IDatosService, private router: Router) { }

  ngOnInit(): void {
    this.oVueloView = this.vueloService.getVuelo();
    this.oHabitacionView = this.habitacionService.getHabitacion();
  }

  guardarReserva()
  {
    const nuevaReserva: Datos = 
      {
        ID: this.ultimoId(),
        FirstName: this.FirstName,
        LastName: this.LastName,
        Adress: this.Adress,
        State: this.State,
        City: this.City,
        IdentificationTipe: this.IdentificationTipe,
        IdentificationNumber: this.IdentificationNumber,
        NameCard: this.NameCard,
        CreditCardNumber: this.CreditCardNumber,
        CVV: this.CVV,
        ExpirationDate: this.ExpirationDate
      }

    alert("Se realizó correctamente el cobro por el Monto Total de " + this.vueloService.lMontoTotal + " y se ha guardado la reserva con el ID: " + this.ultimoId());
    this.datosService.addDatos(nuevaReserva);
    this.limpiar();

    this.router.navigate(['/vuelvaPronto']);
  }
  
}
