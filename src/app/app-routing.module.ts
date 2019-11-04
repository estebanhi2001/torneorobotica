import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuntajesFinalesComponent } from './puntajesfinales/puntajesfinales.component';
import { EnvivoComponent } from './envivo/envivo.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { DesafiosComponent } from './desafios/desafios.component';
import { AdminComponent } from './admin/admin.component';
import { PrintComponent } from './print/print.component';
import { RondasComponent } from './rondas/rondas.component';
import { EquipoComponent } from './equipo/equipo.component';


const routes: Routes = [
  {
    path: 'ronda/:id',
    component: RondasComponent
  }, {
    path: 'equipo/:id',
    component: EquipoComponent
  }, {
    path: 'desafios',
    component: DesafiosComponent
  }, {
    path: 'puntajesfinales',
    component: PuntajesFinalesComponent
  }, {
    path: 'envivo',
    component: EnvivoComponent
  }, {
    path: '',
    component: BienvenidaComponent
  }, {
    path: 'admin',
    component: AdminComponent
  }, {
    path: 'print',
    component: PrintComponent
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
