import { Routes, RouterModule } from '@angular/router';
import { SeccionVueloComponent } from './components/seccion-vuelo/seccion-vuelo.component';
import { SeccionHabitacionesComponent } from './components/seccion-habitaciones/seccion-habitaciones.component';
import { SeccionReservaComponent } from './components/seccion-reserva/seccion-reserva.component';
import { VuelvaProntoComponent } from './components/vuelva-pronto/vuelva-pronto.component';

export const routes: Routes = [
    {
        path: 'home',
        component: SeccionVueloComponent
    },
    {
        path: 'hotel',
        component: SeccionHabitacionesComponent
    },
    {
        path: 'reserva',
        component: SeccionReservaComponent
    },
    {
        path: 'vuelvaPronto',
        component: VuelvaProntoComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
    
];
