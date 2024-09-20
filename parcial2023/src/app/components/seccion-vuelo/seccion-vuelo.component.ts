import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RedirectCommand, Router } from '@angular/router';
import { VueloService } from '../../services/vuelo.service';
import { Vuelo } from '../../models/vuelo';

@Component({
  selector: 'app-seccion-vuelo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seccion-vuelo.component.html',
  styleUrl: './seccion-vuelo.component.css'
})
export class SeccionVueloComponent {
  
  img: string = '';
  origen: string = '';
  destino: string = '';
  hora: string = '';
  monto: string = '';

  limpiar()
  {
    this.img = '';;
    this.origen = '';
    this.destino = '';
    this.hora = '';
    this.monto = '';
  }
  constructor(private router: Router, public vueloService: VueloService) { }

  guardarVuelo(img: string, origen: string, destino: string, hora: string, monto: string) {
    const nuevoVuelo: Vuelo = {
      img: img,
      origen: origen,
      destino: destino,
      hora: hora,
      monto: monto

    };
    this.vueloService.addVuelo(nuevoVuelo);
    console.log("Vuelo guardado:", nuevoVuelo);
    this.limpiar();
    alert("Vuelo seleccionado con éxito");
    this.router.navigate(['/hotel']);
  }


}
