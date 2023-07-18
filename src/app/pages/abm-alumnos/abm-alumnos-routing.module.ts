import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbmAlumnosComponent } from './abm-alumnos/abm-alumnos.component';
import { AltaModificacionAlumnosComponent } from './abm-alumnos/alta-modificacion-alumnos/alta-modificacion-alumnos.component';

const routes: Routes = [
  {
    path: '',
    component: AbmAlumnosComponent
  },
  {
    path: 'alta-modificacion-alumnos',
    component: AltaModificacionAlumnosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbmAlumnosRoutingModule { }
